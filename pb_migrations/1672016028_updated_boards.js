migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  collection.name = "board"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  collection.name = "boards"

  return dao.saveCollection(collection)
})
