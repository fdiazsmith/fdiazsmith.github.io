 function dias()
	{	
		var dayOfWeek = new Date().getDay();
		if(dayOfWeek == 1 ){
			dayOfWeek = "lunes";
		}
		else if(dayOfWeek == 2 ){
			dayOfWeek = "martes";
		}else if(dayOfWeek == 3 ){
			dayOfWeek = "miercoles";
		}else if(dayOfWeek == 4 ){
			dayOfWeek = "jueves";
		}else if(dayOfWeek == 5 ){
			dayOfWeek = "viernes";
		}else if(dayOfWeek == 6 ){
			dayOfWeek = "sabado";
		}else if(dayOfWeek == 0 ){
			dayOfWeek = "domingo";
		}
		var fecha = document.getElementById("dia");
		fecha.innerHTML = dayOfWeek;
	}
