# equilibrium

A Clojure library designed to make your accounting fun.

## dev history

First install and start cassandra:

    #http://christopher-batey.blogspot.de/2013/05/installing-cassandra-on-mac-os-x.html
    brew install cassandra
    #run it with:
    /usr/local/Cellar/cassandra/2.1.0/bin/cassandra

the actual cassandra shell can be reached with:

    cqlsh

then install clojure and init a lein project

    #https://gist.github.com/rakhmad/2407109#your-first-project
    lein new equilibrium

add cassaforte to the app in `project.clj`

    [clojurewerkz/cassaforte "2.0.0-beta8"]

you can use the repl like this:

    lein repl


the getting_started guide from cassafore is nice and can be tested in the repl

    #http://clojurecassandra.info/articles/getting_started.html

the problem occured that the keyspace was not set globally.
In the file `testing.clj` are working examples which use the keyspace in the queries.



