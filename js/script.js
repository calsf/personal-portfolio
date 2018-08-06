let currentSlide = 1;

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
	activeSlide[0].className = activeSlide[0].className.replace("active-slide", "hide-slide");
	slides[currentSlide-1].classList.add("active-slide");
	dots[currentSlide-1].classList.add("active-dot");

}