migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gfbu6cu56ghyk3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njkodtsy",
    "name": "emailUsed",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@ (?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gfbu6cu56ghyk3y")

  // remove
  collection.schema.removeField("njkodtsy")

  return dao.saveCollection(collection)
})
