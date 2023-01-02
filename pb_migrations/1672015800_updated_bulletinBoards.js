migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epk2k6n0dgi69fe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rczceib0",
    "name": "type",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epk2k6n0dgi69fe")

  // remove
  collection.schema.removeField("rczceib0")

  return dao.saveCollection(collection)
})
