const products = [
    {
        id: 1,
        name: "Ipone 14",
        price: "1500$",
        img: "images/ipone14.jpg"

    },

    {
        id: 2,
        name: "Airpods Pro2",
        price: "400$",
        img: "images/AirpodsPro2.png"

    },


    {
        id: 3,
        name: "MacBook Pro",
        price: "2000$",
        img: "images/macbook.jpg"


    }

]


let place = document.querySelector(".div")
let stringObg = JSON.stringify(products)
window.localStorage.setItem("products", stringObg)
let newProducts = JSON.parse(localStorage.getItem("products"))
let div2 = document.querySelector(".div2")


let count = 0;


for (let i = 0; i < products.length; i++) {
    let maindiv = document.createElement("div")
    maindiv.classList.add("col-3", "mt-3")
    place.style.display = "flex"

    let card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem;")


    card.innerHTML += `<img class="card-img-top" src="${newProducts[i].img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">name:${newProducts[i].name}</h5>
      <p class="card-text">Price:${newProducts[i].price}</p>
      <p class="card-text">Id:${newProducts[i].id}</p>
      <button class="btn btn-primary">Add</button>
    </div>
  </div>`


    maindiv.appendChild(card)
    place.appendChild(maindiv)

    
}
let buttons = document.querySelectorAll("button")
    
    buttons.forEach(elem => elem.addEventListener("click", function () {
        
        count++
        div2.firstElementChild.innerHTML = count
        // console.log(count);

    }))













