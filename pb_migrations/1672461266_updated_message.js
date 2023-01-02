migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59")

  // remove
  collection.schema.removeField("5gs36b9h")

  // remove
  collection.schema.removeField("bw6pelpz")

  // remove
  collection.schema.removeField("chredkti")

  // remove
  collection.schema.removeField("udv5e7gh")

  // remove
  collection.schema.removeField("bi9zk97b")

  // remove
  collection.schema.removeField("x8hk97z8")

  // remove
  collection.schema.removeField("clsekqlk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckubmwid",
    "name": "channel",
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
    "id": "chredkti",
    "name": "direction",
    "type": "text",
    "required": true,
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

  // remove
  collection.schema.removeField("ckubmwid")

  return dao.saveCollection(collection)
})
