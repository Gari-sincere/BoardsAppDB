migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // remove
  collection.schema.removeField("ihjzxwr1")

  // remove
  collection.schema.removeField("ygr8mhkn")

  // remove
  collection.schema.removeField("f5yodung")

  // remove
  collection.schema.removeField("gnytfww2")

  // remove
  collection.schema.removeField("jddce1ru")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wruklzsn",
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
    "id": "cbc3q2pd",
    "name": "received",
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
    "id": "kzd1yklk",
    "name": "fromPhone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1111111111,
      "max": 9999999999
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pv08iu98",
    "name": "toPhone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1111111111,
      "max": 9999999999
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5zjqnemt",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e6tchzpq",
    "name": "message",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihjzxwr1",
    "name": "sentDateTime",
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
    "id": "ygr8mhkn",
    "name": "receivedDateTime",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f5yodung",
    "name": "fromPhoneNum",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1111111111,
      "max": 9999999999
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gnytfww2",
    "name": "toPhoneNum",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1111111111,
      "max": 9999999999,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jddce1ru",
    "name": "message",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 2147483647,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("wruklzsn")

  // remove
  collection.schema.removeField("cbc3q2pd")

  // remove
  collection.schema.removeField("kzd1yklk")

  // remove
  collection.schema.removeField("pv08iu98")

  // remove
  collection.schema.removeField("5zjqnemt")

  // remove
  collection.schema.removeField("e6tchzpq")

  return dao.saveCollection(collection)
})
