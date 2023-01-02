migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e7o5fsuj",
    "name": "twilioSid",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // remove
  collection.schema.removeField("e7o5fsuj")

  return dao.saveCollection(collection)
})
