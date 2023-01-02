migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erlmcgfn",
    "name": "approved",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4")

  // remove
  collection.schema.removeField("erlmcgfn")

  return dao.saveCollection(collection)
})
