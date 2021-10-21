"use strict";

/* burger menu */
const burgerMenu = document.querySelector(".nav-menu"),
	burgerButton = document.querySelector(".burger-button"),
	buttonLines = document.querySelectorAll(".burger-button__line");

if (burgerMenu) {
	burgerButton.addEventListener("click", () => {
		burgerMenu.classList.toggle("nav-menu--open");
		buttonLines.forEach(element => {
			element.classList.toggle("burger-button__line--active");
		});
		document.body.classList.toggle("hidden");
	})
}

/* menu scroll */
const pageHeader = document.querySelector(".header");

if (pageHeader) {
	window.addEventListener("scroll", () => {
		let scrollPosition = window.pageYOffset;
		console.log(scrollPosition);
		if (scrollPosition >= 2) {
			pageHeader.classList.add("header--scroll")
		} else (
			pageHeader.classList.remove("header--scroll")
		)
	})
}