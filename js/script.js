let currentSlide = 1;
let currentPage = document.getElementById("about-nav");
let dots = document.querySelectorAll(".dot");	//Non-live collection of all dot elements
let slides = document.getElementsByClassName("slide");	//Default collection of all slides
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

	if (n > slides.length) 
	{
		currentSlide = 1;
	}
	if (n < 1)
	{
		currentSlide = slides.length;
	}

	activeDot[0].classList.remove("active-dot");
	activeSlide[0].className = activeSlide[0].className.replace("active-slide", "hide");
	slides[currentSlide-1].classList.add("active-slide");
	dots[currentSlide-1].classList.add("active-dot");

}

function filterSlides(category, filterSelect)
{
	let activeSlide = document.getElementsByClassName("active-slide")
	let activeDot = document.getElementsByClassName("active-dot");
	slides = document.getElementsByClassName(category);

	//Updated filter selection
	let filterEle = document.getElementsByClassName("filter");
	for(let i = 0; i < filterEle.length; i++)
	{
		filterEle[i].classList.remove("active-filter");
	}
	filterSelect.classList.add("active-filter");

	//Filter displayable slides and number of dots based on category
	let i = 0;
	for (i = 0; i < dots.length; i++)
	{
		if (slides.length <= i)
		{
			dots[i].classList.remove("dot");
		}
		else
		{
			dots[i].classList.add("dot");
		}
	}

	//Reset current slide and dot to first slide and dot
	currentSlide = 1;
	activeDot[0].classList.remove("active-dot");
	activeSlide[0].className = activeSlide[0].className.replace("active-slide", "hide");
	slides[currentSlide-1].classList.add("active-slide");
	dots[currentSlide-1].classList.add("active-dot");

}


//Change displayed page
function changePage(page)
{
	let dots = document.getElementsByClassName("dot-container");

	let arr = [
		document.getElementById("about-container"), 
		document.getElementById("slideshow-container"), 
		document.getElementById("contact-container"), 
		document.getElementById('project1-container'),
		document.getElementById('project2-container'),
		document.getElementById('project3-container'),
		document.getElementById('project4-container'),
		document.getElementById('project5-container'),
		document.getElementById('project6-container'),
	]
	for(let i = 0; i < arr.length; i++)
	{
		arr[i].classList.add("hide");
		arr[i].classList.remove("show");
	}
	let pageToShow = document.getElementById(page);
	pageToShow.classList.remove("hide");
	pageToShow.classList.add("show");

	//Show dots if on project page, else hide dots
	if (pageToShow === arr[1])
	{
		dots[0].classList.remove("hide");
	}
	else
	{
		dots[0].classList.add("hide");
	}
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
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

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


//Detect swipe on slideshow
let container = document.getElementById("slideshow-container");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", handleTouch, false);

let initialX = null;

function startTouch(e) 
{
	initialX = e.touches[0].clientX;
}

function handleTouch(e) 
{
	if (initialX === null) {
		return;
	}

	let currentX = e.touches[0].clientX;

    let diffX = initialX - currentX;

    if (diffX > 0) 
    {
    	//Swiped left, move to next slide
    	nextSlide(1);
    }
    else if(diffX < 0)
    {
    	//Swiped right, go back to prev slide
    	nextSlide(-1);
    }

    initialX = null;

    e.preventDefault();
}