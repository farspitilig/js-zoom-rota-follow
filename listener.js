// modifié depuis github
// rajouter une ligne après le premier span
	var br = document.createElement('br');
	var span = document.getElementsByTagName('span')[0];
	span.appendChild(br);
	
// utiliser function pour simplifier les choses
		var element = document.getElementById('clickMe');
		var myFunction = function() {
			alert('tu as cliqué !');
		}
		element.addEventListener('click', myFunction, false);
		
