# equilibrium

A Clojure library designed to make your accounting fun.
The Data Model is quite simple but theres alot around it:

![alt text](https://github.com/snackycracky/equilibrium/raw/master/doc/data-model.png "Logo Title Text 1")


## setup project history

### cassandra

First install and start cassandra:

    #http://christopher-batey.blogspot.de/2013/05/installing-cassandra-on-mac-os-x.html
    brew install cassandra
    #run it with:
    export JAVA_HOME=`/usr/libexec/java_home -v '1.8*'`
    /usr/local/Cellar/cassandra/2.1.0/bin/cassandra

the actual cassandra shell can be reached with:

    cqlsh

### clojure

then install clojure and init a lein project

    #https://gist.github.com/rakhmad/2407109#your-first-project
    lein new equilibrium

add cassaforte to the app in `project.clj`

    [clojurewerkz/cassaforte "2.0.0-beta8"]

you can use the repl like this:

    lein repl

to make database connections and define namespaces (cc, cql) and keyspaces (equilibrium_keyspace) use this code:

    (ns cassaforte.docs
      (:require [clojurewerkz.cassaforte.client :as cc]
                [clojurewerkz.cassaforte.cql    :as cql]
                [clojurewerkz.cassaforte.query    :refer :all]))


    (let [conn (cc/connect ["127.0.0.1"])]
      (cql/create-keyspace conn "equilibrium_keyspace"
        (with {:replication
               {:class "SimpleStrategy"
                :replication_factor 1}})))



the getting_started guide from cassafore is nice and can be tested in the repl

    #http://clojurecassandra.info/articles/getting_started.html

the problem occured that the keyspace was not set globally.
In the file `testing.clj` are working examples which use the keyspace in the queries.


### ide for clujure

to use intellij idea there is a plugin called `la-clojure`

follow the instructinos on the page to set up the ide:
https://github.com/JetBrains/la-clojure



## data modeling

the https://github.com/twissandra/twissandra app is quite nice for reference concerns.
http://www.datastax.com/documentation/cql/3.0/cql/cql_reference/tabProp.html is also a great source of information.
on time series there is a article here: http://planetcassandra.org/getting-started-with-time-series-data-modeling/

    CREATE TABLE account_entry ( 
        entry_time timestamp,
        notes text,
        value float,
        balance float,
        category_name list<text>,
        account_name text,
        target_account text,
        destination_account text,
        PRIMARY KEY (account_name, entry_time)
    )

which is in cassaforte:

    (let [conn (cc/connect ["127.0.0.1"])]
      (cql/use-keyspace conn "equilibrium_keyspace")
      (cql/create-table conn "account_entries"
                    (column-definitions {:entry_time :timestamp
                                         :notes  :text
                                         :value  :float
                                         :balance  :float
                                         :category_name  :list<text>
                                         :account_name  :text
                                         :target_account  :text
                                         :destination_account  :text
                                         :primary-key [:account_name, :entry_time]})))

inserting data would look like:

    INSERT INTO account_entry (entry_time, notes, value, category_name, account_name) VALUES ('2014-01-01 00:12:00', 'coffee', '2.5', ['food','coffee'], 'cash');

which is with cassaforte:

    (let [conn (cc/connect ["127.0.0.1"])]
      (cql/use-keyspace conn "equilibrium_keyspace")
      (cql/insert conn "account_entries" {:entry_time "2014-01-01 00:12:00"
                                          :notes "coffe at pure origins"
                                          :value (float 2.5)
                                          :balance (float 2.5)
                                          :category_name ["food", "coffee"]
                                          :account_name "cash"}))



a query would look like:

    select * from account_entry where account_name = 'Kasse'

which is with cassaforte:

    (let [conn  (cc/connect ["127.0.0.1"])
          table "account_entries"]
      (cql/use-keyspace conn "equilibrium_keyspace")
      (cql/select conn table))


here are some other queries:

    select * from account_entry where account_name = 'Kasse' and entry_time > '2014-1-1 00:00:00' and entry_time < '2014-2-1 00:00:00'
    select * from account_entry where category_name contains 'Groceries'
