migrate((db) => {
  const collection = new Collection({
    "id": "x9ssslfeoe0tytt",
    "created": "2022-12-31 21:58:51.712Z",
    "updated": "2022-12-31 21:58:51.712Z",
    "name": "postReply",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1lny9npq",
        "name": "postId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "qeec4pea77481o4",
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
  const collection = dao.findCollectionByNameOrId("x9ssslfeoe0tytt");

  return dao.deleteCollection(collection);
})
