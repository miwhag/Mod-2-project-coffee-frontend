console.log('Hit!!')
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const cart_url= "http://localhost:3000/carts"

const div= document.querySelector('div')
fetch(cart_url)
    .then(res => res.json())
    .then(carts =>{
        console.log(carts)
        carts.map(cart =>{
        cart.blends.map(blend =>{
            let p = document.createElement('p')
            p.innerText = blend.name

            document.body.appendChild(p)
        })
        // carts.map()
        })
    })

//     const coffee_url= "http://localhost:3000/coffees"
//     const div= document.querySelector('div')
//     fetch(coffee_url)
//     .then(console.log)
//     .then(coffees =>{
//         coffees.map(coffee =>{
//             console.log(coffee)
//             let div = document.createElement('div')
//             div.ClassName = 'quantityContainer'
//             let h2 = document.createElement('h2')
//             let h3 = document.createElement('h3')
//             let myImage = new Image(100, 200);
//             let p = document.createElement('p')

//             h3.innerText = coffee.price
//             h2.innerText = coffee.stock
//             myImage.src = coffee.image
//             p.innerText = `${coffee.coffee_roaster.name}${coffee.blend.name}`

            
//             document.body.appendChild(div)
//             div.append(myImage, p, h3, h2)
            
//         })
// })

   