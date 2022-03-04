/* ----------------- start go top ------------------ */

/* 
	$goTop: alamacena el elemento html con el ID
	go-top 
*/
let $goTop = document.querySelector('#go-top');

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

/* ----------------- end go top ------------------ */


/* ----------------- start year current ------------------ */
/* 
	$copyRight: alamacena el elemento html con el ID
	copy-right 
*/
let copyRight = document.querySelector('#copy-right');

/* 
	dataYears: alamacena el año actual gracias al uso del
    objeto new Date().getFullYear()
*/
let dataYears = new Date().getFullYear();

/* 
	haciendo uso de la propiedad innerHtml almacenamos en la variable
	$copyRight el año actual
*/
copyRight.innerHTML = `Copyright Jefferson Salazar ${dataYears}`;

/* ----------------- end year current ------------------ */