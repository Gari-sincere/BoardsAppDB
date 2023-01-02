migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  // remove
  collection.schema.removeField("25shqx1j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tgcdjexc",
    "name": "ownerId",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "25shqx1j",
    "name": "ownerId",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("tgcdjexc")

  return dao.saveCollection(collection)
})
