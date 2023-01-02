migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x9ssslfeoe0tytt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxast0wv",
    "name": "reply",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("x9ssslfeoe0tytt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxast0wv",
    "name": "reply",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
