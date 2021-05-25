const MenyModule = function(){

    const meny = [
        {category: "Pizza", image:"pizza_00.jpg", name: "OsloPizza", price: 199.99, description:"pizza med tomatsaus, ost, kebabkjøtt og mais", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk, nøtter"]},
        {category: "Pizza", image:"pizza_01.jpg",name: "Hawaii", price: 149.99, description:"pizza med tomatsaus, ost, ananas, løk og kylling", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_02.jpg",name: "Pepperoni", price: 159.99, description:"pizza med tomatsaus, ost og pepperoni", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["melk, nøtter"]},
        {category: "Pizza", image:"pizza_03.jpg",name: "Skinke", price: 149.99, description:"pizza med tomatsaus, ost og skinke", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_04.jpg",name: "Maragrita", price: 129.99, description:"pizza med tomatsaus og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_00.jpg",name: "Meat heaven", price: 299.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Drink", image:"pizza_00.jpg",name: "0.5L Coca Cola", price: 29.99, description:"pizza med tomatsaus, ost, marinert biff/kylling og løk", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Drink", image:"pizza_00.jpg",name: "0.5L Coca Cola Zero", price: 29.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Drink", image:"pizza_00.jpg",name: "0.5L Sjokomelk", price: 29.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Drink", image:"pizza_00.jpg",name: "0.5L Farris Naturell", price: 29.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Extra", image:"pizza_00.jpg",name: "Hvitløksdressing", price: 29.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Extra", image:"pizza_00.jpg",name: "Hvitløk- og chillidressing", price: 39.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
        {category: "Extra", image:"pizza_00.jpg",name: "Oregano", price: 9.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
    ]

    const getAllMenyItems =()=> meny;
    const getMenyItemByName =(name)=> meny.filter(meny => meny.name === name);
    const getMenyItemByPrice =(price)=> meny.filter(meny => meny.price === price);
    const printMenyItem =(menyItem)=> {return `
   
        `} 

        return{getAllMenyItems, getMenyItemByName, getMenyItemByPrice, printMenyItem}
}()

export default MenyModule;