const button = document.getElementById("btn");
const button2 = document.getElementById("btn_yes2");
const hover1 = document.getElementById("another_gif");
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('Your heart demands from you to reconsider and take your feelings into account this time');
    button.style.display = "none";
    button2.style.display = "flex";
    hover1.style.display = "block";

})

const button1 = document.getElementById("btn_yes1");
const hover2 = document.getElementById("hover_gif");

button1.addEventListener("mouseover", () => {
    hover2.style.display = "block";
})

// const secure = document.getElementById("btn_cv");
// const show = document.getElementById("hidden");

// secure.addEventListener("click", function () {
//     hidden.style.display = "block";
// })
