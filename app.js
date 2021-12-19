const container = document.querySelector("#container");
const btn = document.querySelector("#btn-menu");

btn.addEventListener("click", () => {
	container.classList.toggle("active");
});

const checkSize = () => {
	if (window.innerWidth <= 768) {
		container.classList.remove("active");
	} else {
		container.classList.add("active");
	}
};

checkSize();

window.addEventListener("resize", () => {
	checkSize();
});
