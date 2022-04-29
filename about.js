console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your message has been sent! Thank you for contacting us.')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



let photo = document.querySelector('.rubber-duck')

const photoMessage = () => {
	alert('I see you are looking at my rubber ducky, have you looked at your own beatiful reflection today?')
}

photo.addEventListener('mouseover', photoMessage);