window.addEventListener("popstate", function () {
	history.pushState("", "", location.pathname);
});

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

let modal = document.getElementById("my-modal");
let button = document.getElementById("ok-btn");

button.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

async function sendForm(form) {
	let response = await fetch("sendMail.php", {
		method: "POST",
		body: new FormData(form),
	});
	let data = await response.json();
	if (data == "ok") {
		modal.style.display = "block"; //вызываем modal window с ответа от сервера т.е. по отправке формы
		form.reset(); // очищаем поля формы
	}
}
