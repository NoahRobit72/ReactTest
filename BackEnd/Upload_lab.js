
//admin key
const serviceAccount = require('/Users/kfirflank/Desktop/local_researcWeb/research_website_adminKey.json');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');



//initialize the app
initializeApp({
  credential: cert(serviceAccount) 
});

//create database object
const db = getFirestore();

//input the data 
const data = {
  Rating: '4.0',
  Type: 'BIO'
};

//asynmc function


//right now this is hard coded in to add RAJEN lab document to Boston university, but this can be changed to a user input
async function addDocument() {
  // Add a new document in collection "boston university" with ID 'RAJEN'
  try {
    const res = await db.collection('boston university ').doc('RAJEN').set(data);
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
}

addDocument();
