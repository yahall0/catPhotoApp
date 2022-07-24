const getCatImgs = async() => {
    const resp = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const data = await resp.json();
    const imgs = document.querySelectorAll("img");
    let k = 0;
    for(let img of imgs)
    {
        img.style.display = "none";
        img.setAttribute("src", data[k++].url);
        setInterval(() => {
            img.style.display = "block";
        }, 2500);
    }
}

getCatImgs();

const refresh = document.querySelector(".button-3");
refresh.addEventListener("click", () => {
    getCatImgs();
});