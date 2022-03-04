// -------------------- start code gotop --------------------- //

/* 
	$goTop: alamacena el elemento html con el ID
	go-top 
*/
let $goTop = document.querySelector('#go-top');

/* 
    generamos un evento scroll en el objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 50 
		al momento de ahcer scroll le añadimos a 
		$goTop la clase js_show_gotop definida 
		en la hoja de estilos
    */
	if (window.pageYOffset > 50) {
		$goTop.classList.add('js_show_gotop');
	} else {
		/* 
			de lo contrario removemos de $goTop
			la clase js_show_gotop
		*/
		$goTop.classList.remove('js_show_gotop');
	}
});

/* 
    ahora generamos un evento click en $goTop
*/
$goTop.addEventListener('click', () => {
	/* 
        implementamos scrollTo del objeto window 
		que recibe la propiedades top y left que nos 
        redirige a la parte inicial de la pagina y
        behavior que suavisa la subida
    */
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

// -------------------- end code gotop ----------------------- //

// -------------------- start code current year -------------- //

/* 
	$copyRight: alamacena el elemento html con el ID
	copy-right 
*/
let $copyRight = document.querySelector('#copy-right');

/* 
	dataYears: alamacena el año actual gracias al uso del
    objeto new Date().getFullYear()
*/
let currentYear = new Date().getFullYear();

/* 
	haciendo uso de la propiedad innerHtml almacenamos en la variable
	$copyRight el año actual
*/
$copyRight.innerHTML = `Copyright - Fundacion Bolivar Davivienda ${currentYear}`;

// -------------------- end code current year -------------- //
