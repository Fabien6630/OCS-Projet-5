const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const leftArrow = document.getElementById("left-arrow") 

const rightArrow = document.getElementById("right-arrow")

const bannerImg =document.querySelector(".banner-img")

const tagLine =document.getElementById("tagline")

const divDots = document.getElementById("dots")


let currentIndex= 0; /*déclaration de la variable de nom currentIndex et sa valeur 0 qui correspond toujours à l'index 1 en JavaScript*/

for (let i= 0; i<slides.length; i++) { /*variable d'indice i  qui sert de compteur pour le nombre d'exécutions de la boucle. C'est pour cette raison qu'elle démarrera à zéro, car on n'a pas encore parcouru la boucle*/
	console.log("i=" +i)
	let span= document.createElement('span')
	span.classList.add('dot')
	if(i===currentIndex) { /*=== égalité stricte qui verifie à la fois la valeur et le type de la variable renvoie à la valeur false car on compare un nombre à une string*/
		span.classList.add('dot_selected')
	}
	divDots.appendChild(span)
}


const dots =document.querySelectorAll(".dot")

leftArrow.addEventListener ("click", function (event){ /*Ajout d'un écouteur d'évènements au clic sur la flèche de gauche"*/
	console.log(dots)
	dots[currentIndex].classList.remove('dot_selected')

	if (currentIndex===0) {
		currentIndex=slides.length-1
	} else {
		currentIndex--
	}
	
	dots[currentIndex].classList.add('dot_selected')

	
	let carouselItem=slides[currentIndex]


	bannerImg.src="./assets/images/slideshow/"+carouselItem.image

	tagLine.innerHTML=carouselItem.tagLine

})


rightArrow.addEventListener ("click", function (event){ 
	console.log(dots)
dots[currentIndex].classList.remove('dot_selected')

	if (currentIndex===slides.length-1) {
		currentIndex=0
	} else {
		currentIndex++
	}
	
	dots[currentIndex].classList.add('dot_selected')
	
	let carouselItem=slides[currentIndex]

	bannerImg.src="./assets/images/slideshow/"+carouselItem.image

	tagLine.innerHTML=carouselItem.tagLine

})
