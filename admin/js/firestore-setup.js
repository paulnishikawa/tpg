	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyAAKfyZ1dcS5Ic-fm2Tpyy39p4AcQJMeig",
	    authDomain: "kampr-01.firebaseapp.com",
	    databaseURL: "https://kampr-01.firebaseio.com",
	    projectId: "kampr-01",
	    storageBucket: "kampr-01.appspot.com",
	    messagingSenderId: "115627980968"
	  };
	  firebase.initializeApp(config);
	
	const firestore = firebase.firestore();
	  const settings = {/* your settings... */ timestampsInSnapshots: true};
	  firestore.settings(settings);