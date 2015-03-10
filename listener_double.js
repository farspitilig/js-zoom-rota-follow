// creation multiple d'evenement identique pour un meme element
		var double = document.getElementById('reClick');
		double.addEventListener('click', function() {
			alert('et de un');
		}, false);
		var double = document.getElementById('reClick');
		double.addEventListener('click', function() {
			alert('et de deux');
		}, false);