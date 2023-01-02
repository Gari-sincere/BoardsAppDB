migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jddce1ru",
    "name": "message",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 2147483647,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // remove
  collection.schema.removeField("jddce1ru")

  return dao.saveCollection(collection)
})
