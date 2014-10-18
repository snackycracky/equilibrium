(let [conn (cc/connect ["127.0.0.1"])]
  (cql/use-keyspace conn "cassaforte_keyspace")
  (cql/create-table conn "users"
                (column-definitions {:name :varchar
                                     :age  :int
                                     :primary-key [:name]})))


(let [conn (cc/connect ["127.0.0.1"])]
  (cql/use-keyspace conn "cassaforte_keyspace")
  (cql/create-table conn "user_posts"
                (column-definitions {:username :varchar
                                     :post_id  :varchar
                                     :body     :text
                                     :primary-key [:username :post_id]})))

(let [conn (cc/connect ["127.0.0.1"])]
  (cql/use-keyspace conn "cassaforte_keyspace")
  (cql/insert conn "users" {:name "Alex" :age (int 19)}))


  (let [conn  (cc/connect ["127.0.0.1"])
      table "users"]
  (cql/select conn table))
