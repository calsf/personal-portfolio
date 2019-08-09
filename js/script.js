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
	let arr = [
		document.getElementById("about-container"), 
		document.getElementById("slideshow-container"), 
		document.getElementById("contact-container"), 
		document.getElementById('project1-container'),
		document.getElementById('project2-container'),
		document.getElementById('project3-container'),
		document.getElementById('project4-container'),
		document.getElementById('project5-container'),
	]
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

//Modal image display
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");

//Close modal on click
function closeModal() { 
	modal.style.display = "none";
}

//Show image in modal when image is clicked
function getImage(img, src)
{
	modal.style.display = "block";
	modalImg.src = src;
}



