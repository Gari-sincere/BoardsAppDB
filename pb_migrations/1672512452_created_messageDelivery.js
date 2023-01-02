migrate((db) => {
  const collection = new Collection({
    "id": "qh3vp8349lww902",
    "created": "2022-12-31 18:47:32.044Z",
    "updated": "2022-12-31 18:47:32.044Z",
    "name": "messageDelivery",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("qh3vp8349lww902");

  return dao.deleteCollection(collection);
})
