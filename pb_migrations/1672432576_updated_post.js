migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4")

  // remove
  collection.schema.removeField("5k3ihumb")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5k3ihumb",
    "name": "approved",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jkpnhgxw")

  return dao.saveCollection(collection)
})
