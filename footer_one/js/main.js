/* ----------------- start go top ------------------ */

/* 
	arrowUp: alamacena el icono svg
*/
let arrowUp = document.querySelector('#arrow-up');

/* 
    generamos un evento scroll al objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 100 
        añadimos a arrowUp una clase definida en 
        la hoja de estilos
    */
	if (window.pageYOffset > 100) {
		arrowUp.classList.add('js_show_gotop');
	} else {
		/* 
        de lo contrario removemos de arrowUp la clase
    */
		arrowUp.classList.remove('js_show_gotop');
	}
});

/* 
    generamos un evento click en arrowUp
*/
arrowUp.addEventListener('click', () => {
	/* 
        implementamos la propiedad scrollTo del objeto
        window que recibe la propiedad top que nos 
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

/* ----------------- start year actual ------------------ */
/* 
	copyRight: alamacena el parrafo copyright del footer
*/
let copyRight = document.querySelector('#copy-right');

/* 
	dataYears: alamacena el año actual gracias al uso del
    objeto new Date().getFullYear()
*/
let dataYears = new Date().getFullYear();

/* 
    le definimos a la variable copyRight la propiedad innerHtml
    que nos permite añadir contenido a una etiqueta HTML y
    finalmente pasamos la variable que almacena el año actual
*/
copyRight.innerHTML = `Copyright Jefferson Salazar ${dataYears}`;
