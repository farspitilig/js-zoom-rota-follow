// rajouter un ligne apr�s le premier span
	var br = document.createElement('br');
	var span = document.getElementsByTagName('span')[0];
	span.appendChild(br);
	
// utiliser function pour simplifier
		var element = document.getElementById('clickMe');
		var myFunction = function() {
			alert('tu as cliqu� !');
		}
		element.addEventListener('click', myFunction, false);
		
