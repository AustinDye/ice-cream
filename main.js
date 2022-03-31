const iceCream = [{name: 'Cookie Dough',id:'1', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1}, {name: 'Vanilla',id:'2', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1}, {name: 'Strawberry',id:'3', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2}]

const vessels = [{name: 'Waffle Cone', id:'99', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2}, {name: 'Waffle Bowl',id:'98', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4}]

const toppings = [{name: 'Sprinkles', id:'50', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1}, {name: 'Choclate Chips', id:'49', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2}]


let cart = []

let total = 0

function drawTop(){
    let template = ''
    toppings.forEach(toppings => {
        template += 
        `
        <div class="col-4 my-4">
            <div class="container">
                <img src="${toppings.image}" alt="" class="rounded-top img-fluid">
            <div class="d-flex">
                <h4>${toppings.name}</h4>
                <h4>${toppings.price}</h4>
            </div>
            <div class="">
                <button class="btn btn-info" onclick="addCartTop(${toppings.id})">Add to Cart</button>
            </div>

        </div>
        </div>    

        `
    })
    document.getElementById('the-top').innerHTML = template
}

function drawCream(){
    let template = ''
    iceCream.forEach(iceCream => {
        template += 
        `
        <div class="col-4 my-4">
            <div class="container">
                <img src="${iceCream.image}" alt="" class="rounded-top img-fluid">
            <div class="d-flex">
                <h4>${iceCream.name}</h4>
                <h4>${iceCream.price}</h4>
            </div>
            <div class="">
                <button class="btn btn-info" onclick="addCartCream(${iceCream.id})">Add to Cart</button>
            </div>

        </div>
        </div>    

        `
    })
    document.getElementById('the-cream').innerHTML = template
}

function drawCone(){
    let template = ''
    vessels.forEach(vessels => {
        template += 
        `
        <div class="col-4 my-4">
            <div class="container">
                <img src="${vessels.image}" alt="" class="rounded-top img-fluid">
            <div class="d-flex">
                <h4>${vessels.name}</h4>
                <h4>${vessels.price}</h4>
            </div>
            <div class="">
                <button class="btn btn-info" onclick="addCartCone(${vessels.id})">Add to Cart</button>
            </div>

        </div>
        </div>    

        `
    })
    document.getElementById('the-cone').innerHTML = template
}

function drawCart(){
    let total = 0
    let template= ''
    cart.forEach((cart, index) => {
        template += 
        `
        <div class="row">
            <div class="col">
                <div class="d-flex p-4">
                   <span> <h4>${cart.name}</h4><h6 class="ms-3">${cart.price}</h6></span>
                </div>
            </div>
        </div>
        `
        total += cart.price
    })
    console.log('subtotal', total)
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerText = Math.floor(total)

}






function clearCart(){
    //TODO  cart clear button
}

function removeCart(){
   cartItem
}

function addCartCream(id){
    
    let found = iceCream.find( y=> y.id == id)
    cart.push(found)
    total += found.price
    console.log('cart', cart)
    drawCart()
}

function addCartCone(id){
    
    let found = vessels.find( y=> y.id == id)
    cart.push(found)
    total += found.price
    console.log('cart', cart)
    drawCart()
}

function addCartTop(id){
    
    let found = toppings.find( y=> y.id == id)
    cart.push(found)
    total += found.price
    console.log('cart', cart)
    drawCart()
}


drawCream()
drawCone()
drawTop()