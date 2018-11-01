let currentSlide = 1;
let currentPage = document.getElementById("about-nav");
changePage("about-container");
changeNav("about-nav");

//Slideshow functions
function nextSlide(n) 
{
	showSlide(currentSlide += n);
}

function chooseSlide(n) 
{
	showSlide(currentSlide = n);
}

function showSlide(n) 
{
	let activeSlide = document.getElementsByClassName("active-slide")
	let activeDot = document.getElementsByClassName("active-dot");
	let slides = document.getElementsByClassName("slide");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) 
	{
		currentSlide = 1;
	}
	if(n < 1)
	{
		currentSlide = slides.length;
	}

	activeDot[0].classList.remove("active-dot");
	activeSlide[0].className = activeSlide[0].className.replace("active-slide", "hide");
	slides[currentSlide-1].classList.add("active-slide");
	dots[currentSlide-1].classList.add("active-dot");

}


//Change displayed page
function changePage(page)
{
	let arr = [document.getElementById("about-container"), document.getElementById("slideshow-container"), document.getElementById("contact-container")]
	for(let i = 0; i < arr.length; i++)
	{
		arr[i].classList.add("hide");
		arr[i].classList.remove("show");
	}
	let pageToShow = document.getElementById(page);
	pageToShow.classList.remove("hide");
	pageToShow.classList.add("show");
}

//Change navigation selection
function changeNav(page)
{
	let arr = [document.getElementById("about-nav"), document.getElementById("projects-nav"), document.getElementById("contact-nav")]
	for(let i = 0; i < arr.length; i++)
	{
		arr[i].classList.remove("active-page");
	}
	let currentNav = document.getElementById(page);
	currentNav.classList.add("active-page");
}