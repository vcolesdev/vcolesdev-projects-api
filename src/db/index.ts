import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import fakeIndexedDB from "fake-indexeddb";
import fakeIDBKeyRange from "fake-indexeddb/lib/FDBKeyRange";

/**
 * Creates a new RxDB database instance.
 */
const db = await createRxDatabase({
  name: "projectsdb",
  storage: getRxStorageDexie({
    // Node.js has no IndexedDB API. To still run the Dexie RxStorage in Node.js,
    // for example to run unit tests, you have to polyfill it. You can do that by
    // using the fake-indexeddb module and pass it to the getRxStorageDexie() function.
    indexedDB: fakeIndexedDB,
    IDBKeyRange: fakeIDBKeyRange
  }),
});

export default db;