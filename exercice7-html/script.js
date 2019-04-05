var	objeto = prompt("Introduce nombre del objeto :");
var i, tabla = document.getElementById('tabla');

if (isNaN(objeto)) { 

/* comprobamos si lo introducido en el prompt
es un numero o no si no lo es entonces
entramos en el bucle*/

	for( i in objeto){
	/*aqui vamos a recorrer las propiedades del objeto*/
		if ( objeto in window) {

			tabla.innerHTML+="<tr><td>" +i+ "</td><td> ="+ objeto[i]+"</td></tr>"

		}else{

			alert("Eso no es un objeto de window");
			document.writeln(Pulsa F5 para actualizar);
		}
	}

}else if (objeto == null) {

	document.writeln("Has apretado cancelar F5 para refrescar");

}else{

	document.writeln(objeto + " no es un objeto")
}