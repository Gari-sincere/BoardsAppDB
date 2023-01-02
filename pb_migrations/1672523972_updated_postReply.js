migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x9ssslfeoe0tytt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5jh7eajv",
    "name": "userId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x9ssslfeoe0tytt")

  // remove
  collection.schema.removeField("5jh7eajv")

  // remove
  collection.schema.removeField("fxast0wv")

  return dao.saveCollection(collection)
})
