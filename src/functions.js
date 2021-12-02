function addToCart(quantity, productName ="Elma") { //default deger, eger ekleme yapılmaz ise - quantity(adet)
    console.log("Sepete Eklendi : ürün : " + productName + " adet : " + quantity)
}
//addToCart()
addToCart(15)
//addToCart(20)

//Arrow Function Olusturma

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

//Fonksiyonu degiskene atma

let sayHello2 =  function () {
    console.log("Hello World 2")
}

sayHello2()

//----------------------------------------------------//

let product1 = {productName: "Armut", unitPrice:15, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToCart3(product1)


let product2 = {productName: "Armut", unitPrice:15, quantity:5}
let product3 = {productName: "Armut", unitPrice:15, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 =10
let sayi2 =20
sayi1 = sayi2
sayi2 =100
console.log(sayi1)

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Armut", unitPrice:10, quantity:5},
    {productName: "Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//-----------------------------------//

function add(number1, number2) {
    console.log(number1 + number2)
}

add(20,45)

//Birden fazla sayi gonderilecek ise fonksiyon basina ...koy

function add2(...numbers) { ///rest operator
    let total =0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}
add2(20,30)
add2(20,30,40),
add2(20,30,40,50)

//-----------En Buyuk Sayi Bulma----------------//

let numbers = [30,150,50,250,780,950,550,400]
console.log(Math.max(...numbers))

//-----------------------------------------//

let[İcAnadolu,marmara] = ["İç Anadolu", "Marmara", "Karadeniz"]

console.log(İcAnadolu)
console.log(marmara)