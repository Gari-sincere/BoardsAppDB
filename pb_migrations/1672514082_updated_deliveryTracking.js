migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvyrsl3o",
    "name": "sent",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vnygkdmq",
    "name": "received",
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
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // remove
  collection.schema.removeField("gvyrsl3o")

  // remove
  collection.schema.removeField("vnygkdmq")

  return dao.saveCollection(collection)
})
