//sign-up a user and console log their creds

var btn = document.querySelector('#push_register');
btn.addEventListener('click', (e)=>{
	e.preventDefault();
	const email = document.querySelector('#email').value;
	const pass = document.querySelector('#password').value;
	const first = document.querySelector('#first_name').value;
	const last = document.querySelector('#last_name').value;

	
	auth.createUserWithEmailAndPassword(email, pass).then(cred =>{
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

/*login a user and console log their cred

var login_btn = document.querySelector('#push');
login_btn.addEventListener('click', (e) => {
	e.preventDefault();

	const email = document.querySelector('#email_s').value;
	const pass = document.querySelector('#password_s').value;

	auth.signInWithEmailAndPassword(email, pass).then(cred =>{
		console.log(cred.user);

	});
});*/