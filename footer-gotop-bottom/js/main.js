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

/* ----------------- start change languages ------------------ */

/* 
	$textToChange: alamacena todos los elementos html con
	atributo [data-section]
*/
let $textToChange = document.querySelectorAll("[data-section]");

/* 
	creamos una funcion asincrona y pasamos esta recibira un parametro
	nombrado selectedLanguage y la almacenamos en una constante changeLanguage
*/
const changeLanguage = async (selectedLanguage) => {
	/* 
		hacemos uso de await y con fetch buscamos la carpeta donde tenemos
		nuestros archivos JSON, a esto pasamos el parametro selectedLanguage
		de la funcion, finalmente almacenamos en una variable nombrada 
		requireLanguages
	*/
	let requireLanguages = await fetch(`./languages/${selectedLanguage}.json`);

	/* 
		hacemos uso de await y pasamos la variable requireLanguage para 
		convertir el valor almacenado en esta haciendo uso de .json() 
		finalmente almacenamos esto en una nueva variable compilerLanguage
	*/
	let compilerLanguage = await requireLanguages.json();

	/* 
		hacemos un recorrido forEach en la variable $textToChange
	*/
	$textToChange.forEach(text => {
		/* 
			ingresamos a cada elemento html y por medio de
			dataset buscamos su atributo data-section, 
			finalmente almacenamos en una variable
		*/
		let $section = text.dataset.section;

		/* 
			ingresamos a cada elemento html y por medio de
			dataset buscamos su atributo data-value, 
			finalmente almacenamos en una variable
		*/
		let $value = text.dataset.value;

		/* 
			en estas variables estamos almacenando la seccion
			y el valor de dicha seccion
		*/
		// console.log($section, $value);

		/* 
			haciendo uso de innerHTML pasamos a cada elemento html 
			la variable compilerLanguage a la cual pasamos las
			variables $section y $value esto realiza el cambio de
			lenguage
		*/
		text.innerHTML = compilerLanguage[$section][$value];
	})
}

/* 
	$languagesFlags: alamacena todos los elementos html con clase
	languages_flags
*/
let $languagesFlags = document.querySelectorAll('.languages_flags');

/* 
	hacemos un recorrido forEach en la variable $languagesFlags
*/
$languagesFlags.forEach(flag => {
	/* 
		añadimos a cada elemento html un evento click
	*/
	flag.addEventListener('click', (e) => {
		/* 
			finalmente pasamos la funcion changeLanguage anteriomente
			definida esta nos solicita un parametro por lo que pasamos
			e.target.parentElement.dataset.language
		*/
		changeLanguage(e.target.parentElement.dataset.language);

		/* 
			e.target.parentElement.dataset.language: nos permite buscar
			un atributo en el elemento html selecionado en este caso
			el atributo data-language dejanos saber el valor de este
		*/
		// console.log(e.target.parentElement.dataset.language)
	})
});

/* ----------------- end change languages ------------------ */

