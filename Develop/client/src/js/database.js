import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// put to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('notes', 'readwrite');
  const store = tx.objectStore('notes');
  const request = store.add({ note: content });
  const result = await request;
  console.log('Data saved to the database', result);
  console.error('putDb not implemented');
};

// get all from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('notes', 'readonly');
  const store = tx.objectStore('notes');
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  console.error('getDb not implemented');
  return result;
};

initdb();
