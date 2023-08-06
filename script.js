const colors = ["red", "green", "blue", "black", 
"yellow", "purple", "#ffffff", "842184", "rgba(133,122,200)"];

const btn = document.getElementById("click-me");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    //random sayı ile arrayden seçim yapıyoz
    const randomColor = getRandomNumber();
    //body styledan background coloru random arrayden aldıgımızla belirliyoz
    document.body.style.backgroundColor = colors[randomColor];
    //element.textContent i colors[randomColor] ile replace ediyoz
    color.textContent = colors[randomColor];
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}