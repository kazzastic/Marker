auth.onAuthStateChanged(user => {
	console.log(user);
});

//sign-up a user and console log their creds

var btn = document.querySelector('#push');
btn.addEventListener('click', (e)=>{
	e.preventDefault();
	const email = document.querySelector('#email_s').value;
	const pass = document.querySelector('#password_s').value;

	
	auth.signInWithEmailAndPassword(email, pass).then(cred =>{
		console.log(cred.user);
	});
});

//logout here
 var logout_btn = document.querySelector('#logout');
 logout_btn.addEventListener('click', (e) => {
 	auth.signOut().then(()=>{
 		console.log('user signed out');
 	});
 });