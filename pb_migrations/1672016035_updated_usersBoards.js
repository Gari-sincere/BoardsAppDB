migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to14kc6mz36pvrk")

  collection.name = "usersBoard"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to14kc6mz36pvrk")

  collection.name = "usersBoards"

  return dao.saveCollection(collection)
})
