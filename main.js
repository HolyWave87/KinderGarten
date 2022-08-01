
			// script убирает #якоря c url
			window.addEventListener("popstate", function () {
				history.pushState("", "", location.pathname);
			});

			// script carousel (в этой переменной фото)
			const carousel = () => {
				return {
					selected: 0,
					images: [
						"/img/1.webp",
						"/img/2.webp",
						"/img/3.webp",
						"/img/4.webp",
						"/img/5.webp",
						"/img/6.webp",
						"/img/7.webp",
						"/img/8.webp",
						"/img/9.webp",
						"/img/10.webp",
					],
				};
			};

			// script modal window
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
			// script отправки формы без перезагрузки страницы

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
			};
