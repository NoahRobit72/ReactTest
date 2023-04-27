const { initializeApp } = require('@firebase/app');
const { getFirestore, collection, getDocs } = require('@firebase/firestore');

const firebaseConfig = {
  // your Firebase app configuration goes here
   apiKey: "AIzaSyDUatL6KJSFJXjUojNuuY7q-KG893bC9sg",
    authDomain: "research-website-c2dd8.firebaseapp.com",
    projectId: "research-website-c2dd8",
    storageBucket: "research-website-c2dd8.appspot.com",
    messagingSenderId: "301008355090",
    appId: "1:301008355090:web:2dd3e2e626716fbbe4fdcb",
};

// Initialize Firebase app
initializeApp(firebaseConfig);

//init service 
const db = getFirestore();

//collection reference 
const colRef = collection(db, "boston university ");

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let labs = []
        snapshot.docs.forEach((doc) => {
            labs.push({ ... doc.data(), id: doc.id })
        })
        console.log(labs) 
		// Populate table with data
		const tableBody = document.querySelector('#labs-table tbody');
		labs.forEach((lab) => {
			const row = tableBody.insertRow();
			row.insertCell().textContent = lab.labName;
			row.insertCell().textContent = lab.labDirector;
			row.insertCell().textContent = lab.location;
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
