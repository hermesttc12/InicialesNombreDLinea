var debug = "";
window.onload = function()
{
	
	var color = "green";
	var dibujar = SVG('divsvg').size("50%", 200);
	var letrT = [[0,0], [200, 0], [200, 0], [200, 20],[110,20],[110,180],[110,200],[90,200],[90,200],[90,20],[90,20],[0,20],[0,0]];
	var letrH = [[0, 0], [0, 200], [20, 200], [20, 110], [160, 110], [160, 200], 
				  [180, 200], [180, 0], [160, 0], [160, 90], [20, 90], [20, 0], [0, 0]]; 
	var continua = dibujar.polyline(letrT).fill("none").stroke({width : 3, color: 'black'}).attr({ fill: color });
	continua.animate(3000).plot(letrH).loop();
	

	for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				
						
						break;
			}
		});
	}

	

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}