migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkpnhgxw",
    "name": "approvedBy",
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
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkpnhgxw",
    "name": "approvedBy",
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
})
