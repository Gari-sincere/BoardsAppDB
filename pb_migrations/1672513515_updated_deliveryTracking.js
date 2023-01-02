migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0svbgydi",
    "name": "postId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "qeec4pea77481o4",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "msvtjyo5",
    "name": "messageId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "0a54nhwne5w9f59",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902")

  // remove
  collection.schema.removeField("0svbgydi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "msvtjyo5",
    "name": "messageId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "0a54nhwne5w9f59",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
