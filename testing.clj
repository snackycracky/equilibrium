(ns cassaforte.docs
  (:require [clojurewerkz.cassaforte.client :as cc]
            [clojurewerkz.cassaforte.cql    :as cql]
            [clojurewerkz.cassaforte.query    :refer :all]))


(let [conn (cc/connect ["127.0.0.1"])]
  (cql/create-keyspace conn "equilibrium_keyspace"
    (with {:replication
           {:class "SimpleStrategy"
            :replication_factor 1}})))


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


(let [conn (cc/connect ["127.0.0.1"])]
  (cql/use-keyspace conn "equilibrium_keyspace")
  (cql/insert conn "account_entries" {:entry_time "2014-01-01 00:12:00"
                                      :notes "coffe at pure origins"
                                      :value (float 2.5)
                                      :balance (float 2.5)
                                      :category_name ["food", "coffee"]
                                      :account_name "cash"}))


(let [conn  (cc/connect ["127.0.0.1"])
      table "account_entries"]
  (cql/use-keyspace conn "equilibrium_keyspace")
  (cql/select conn table))
