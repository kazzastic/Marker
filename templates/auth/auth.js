var btn = document.querySelector('#push');
btn.addEventListener('click', (e)=>{
	e.preventDefault();
	const email = document.querySelector('#email').value;
	const pass = document.querySelector('#password').value;
	const first = document.querySelector('#first_name').value;
	const last = document.querySelector('#last_name').value;

	
	auth.createUserWithEmailAndPassword(email, pass).then(cred =>{
		console.log(cred);
	});
});
