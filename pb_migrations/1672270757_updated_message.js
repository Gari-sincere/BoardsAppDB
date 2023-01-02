migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // remove
  collection.schema.removeField("a5rndapk")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwr8lj8s",
    "name": "twilioSid",
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
    "id": "5gs36b9h",
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
    "id": "bw6pelpz",
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
    "id": "y1cfb18x",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udv5e7gh",
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
    "id": "bi9zk97b",
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
    "id": "x8hk97z8",
    "name": "fromEmail",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@ (?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "clsekqlk",
    "name": "toEmail",
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
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a5rndapk",
    "name": "twilioSid",
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

  // remove
  collection.schema.removeField("hwr8lj8s")

  // remove
  collection.schema.removeField("5gs36b9h")

  // remove
  collection.schema.removeField("bw6pelpz")

  // remove
  collection.schema.removeField("y1cfb18x")

  // remove
  collection.schema.removeField("udv5e7gh")

  // remove
  collection.schema.removeField("bi9zk97b")

  // remove
  collection.schema.removeField("x8hk97z8")

  // remove
  collection.schema.removeField("clsekqlk")

  return dao.saveCollection(collection)
})
