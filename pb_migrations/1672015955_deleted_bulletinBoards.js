migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("epk2k6n0dgi69fe");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "epk2k6n0dgi69fe",
    "created": "2022-12-26 00:48:06.825Z",
    "updated": "2022-12-26 00:50:00.939Z",
    "name": "bulletinBoards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wlw99j1o",
        "name": "ownerId",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "dwrclmcr",
        "name": "acceptsRequests",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "rczceib0",
        "name": "type",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1
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
