migrate((db) => {
  const collection = new Collection({
    "id": "vf2i7yahd71tst9",
    "created": "2022-12-26 00:52:03.906Z",
    "updated": "2022-12-26 00:52:03.906Z",
    "name": "boards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mn9udy0y",
        "name": "type",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "25shqx1j",
        "name": "ownerId",
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
        "id": "qpvmkyko",
        "name": "moderated",
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
  const collection = dao.findCollectionByNameOrId("vf2i7yahd71tst9");

  return dao.deleteCollection(collection);
})
