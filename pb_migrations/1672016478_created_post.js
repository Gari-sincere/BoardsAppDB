migrate((db) => {
  const collection = new Collection({
    "id": "qeec4pea77481o4",
    "created": "2022-12-26 01:01:18.264Z",
    "updated": "2022-12-26 01:01:18.264Z",
    "name": "post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kcerpj44",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "xj9h30mm",
        "name": "boardId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "vf2i7yahd71tst9",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "p35hq45i",
        "name": "post",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 2147483647,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5k3ihumb",
        "name": "approved",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("qeec4pea77481o4");

  return dao.deleteCollection(collection);
})
