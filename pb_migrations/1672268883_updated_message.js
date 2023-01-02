migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sickyfow",
    "name": "boardId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "vf2i7yahd71tst9",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // remove
  collection.schema.removeField("sickyfow")

  return dao.saveCollection(collection)
})
