migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("to14kc6mz36pvrk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "to14kc6mz36pvrk",
    "created": "2022-12-26 00:49:06.179Z",
    "updated": "2022-12-26 00:53:55.570Z",
    "name": "usersBoard",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5cynbd8d",
        "name": "userId",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "broobfkh",
        "name": "boardId",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
})
