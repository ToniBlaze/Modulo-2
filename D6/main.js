// ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

const shopTitle = document.getElementById("title")
shopTitle.innerText = "BestSmarphone shop"

// ES.8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBgColor(color) {
    let mainElement = document.querySelector("main");
    mainElement.style.backgroundColor = color;
}
changeBgColor("green")

// ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress(string) {
    let oldAddress = document.getElementById("shopAddress")
    oldAddress.innerHTML = string
    console.log(oldAddress);
}
changeAddress("Cambio indirizzo <br> ITALIA <br><br>")

// ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addCssClass(string2) {
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle(string2)    
        console.log(links);
    }
}
addCssClass("classeProva");


// ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function imgHidden() {
    const img = document.querySelectorAll("img");
    
    for (let i = 0; i < img.length; i++) {
        img[i].classList.toggle("hidden");
        img[i].style.display = "none";
        console.log(img);
    }
}
imgHidden()


// ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor(color) {
    const priceColor = document.querySelectorAll(".price")

    for (let i=0; i < priceColor.length; i++) {
        priceColor[i].style.color = color;    
    }
}
changePriceColor("red")