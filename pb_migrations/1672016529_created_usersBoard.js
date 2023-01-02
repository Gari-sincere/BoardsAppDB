migrate((db) => {
  const collection = new Collection({
    "id": "gfbu6cu56ghyk3y",
    "created": "2022-12-26 01:02:09.680Z",
    "updated": "2022-12-26 01:02:09.680Z",
    "name": "usersBoard",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xxed2mfe",
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
        "id": "06aqfybq",
        "name": "boardId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "vf2i7yahd71tst9",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("gfbu6cu56ghyk3y");

  return dao.deleteCollection(collection);
})
