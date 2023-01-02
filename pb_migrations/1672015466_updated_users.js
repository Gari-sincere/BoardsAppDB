migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crwovxff",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": 1111111111,
      "max": 19999999999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("crwovxff")

  return dao.saveCollection(collection)
})
