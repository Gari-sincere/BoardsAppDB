migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szgj444f",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9")

  // remove
  collection.schema.removeField("szgj444f")

  return dao.saveCollection(collection)
})
