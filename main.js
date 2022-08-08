
	const carousel = document.querySelector(".carousel");
	const slideContainer = carousel.querySelector(".slide-container");
	const nextBtn = carousel.querySelector(".nextBtn");
	const prevBtn = carousel.querySelector(".prevBtn");
	const slideWidth = carousel.querySelector(".slide").clientWidth;

	nextBtn.addEventListener("click", scrollToNextItem);
	prevBtn.addEventListener("click", scrollToPrevItem);

	function scrollToNextItem() {
		if (slideContainer.scrollLeft < slideContainer.scrollWidth - slideWidth)
			slideContainer.scrollBy({ left: slideWidth, top: 0, behavior: "smooth" });

	}
	function scrollToPrevItem() {
		if (slideContainer.scrollLeft != 0)
			slideContainer.scrollBy({ left: -slideWidth, top: 0, behavior: "smooth" });
	}
