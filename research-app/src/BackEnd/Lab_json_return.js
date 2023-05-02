const admin = require('firebase-admin');

// Replace with the path to your Firebase service account key file
const serviceAccount = require('./research_website_adminKey.jsonjs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function exportCollectionToJSON(collectionName) {
  const db = admin.firestore();
  const collectionRef = db.collection(collectionName);

  return collectionRef.get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

// Example usage: export the 'boston university' collection and log the result to the console
// exportCollectionToJSON('boston university ')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
