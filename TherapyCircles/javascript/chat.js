//javascript for index_messages for message box

//1- create var for items: text box, button, ul
var messages =document.getElementById('messages');
var textbox =document.getElementById('textbox');
var button =document.getElementById('chat-button');

//2- create event listener- execute js when button is clicked
button.addEventListener('click', function() {
	//code to be executed onclick
	//create new element to show up inside ul
	var newMessage = document.createElement('li');
	newMessage.innerHTML = textbox.value; //grabs text inside of textbox to display;
	//add list item inside ul
	messages.appendChild(newMessage);
	textbox.value = "";
});