const container = document.querySelector("#container");
const btn = document.querySelector("#btn-menu");

btn.addEventListener("click", () => {
	container.classList.toggle("active");
});
