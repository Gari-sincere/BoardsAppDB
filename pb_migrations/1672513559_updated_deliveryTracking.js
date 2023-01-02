migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uiey0x4k",
    "name": "recipientId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // remove
  collection.schema.removeField("uiey0x4k")

  return dao.saveCollection(collection)
})
