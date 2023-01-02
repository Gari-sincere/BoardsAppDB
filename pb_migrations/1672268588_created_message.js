migrate((db) => {
  const collection = new Collection({
    "id": "0a54nhwne5w9f59",
    "created": "2022-12-28 23:03:08.093Z",
    "updated": "2022-12-28 23:03:08.093Z",
    "name": "message",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0a54nhwne5w9f59");

  return dao.deleteCollection(collection);
})
