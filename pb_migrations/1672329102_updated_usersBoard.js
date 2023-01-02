migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gfbu6cu56ghyk3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhrd4dju",
    "name": "phoneUsed",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1111111111,
      "max": 9999999999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gfbu6cu56ghyk3y")

  // remove
  collection.schema.removeField("qhrd4dju")

  return dao.saveCollection(collection)
})
