const MenyModule = function(){

    const meny = [
        {category: "Pizza", image:"pizza_00.jpg", name: "OsloPizza", price: 199.99, description:"pizza med tomatsaus, ost, kebabkjøtt og mais", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk, nøtter"]},
        {category: "Pizza", image:"pizza_01.jpg",name: "Hawaii", price: 149.99, description:"pizza med tomatsaus, ost, ananas, løk og kylling", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_02.jpg",name: "Pepperoni", price: 159.99, description:"pizza med tomatsaus, ost og pepperoni", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["melk, nøtter"]},
        {category: "Pizza", image:"pizza_03.jpg",name: "Skinke", price: 149.99, description:"pizza med tomatsaus, ost og skinke", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_04.jpg",name: "Maragrita", price: 129.99, description:"pizza med tomatsaus og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete, melk"]},
        {category: "Pizza", image:"pizza_00.jpg",name: "Meat heaven", price: 299.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"], allergies:["hvete"]},
        {category: "Drink", image:"cola.jpg",name: "0.5L Coca Cola", price: 29.99, description:"Coca Cola", ingredients:[], allergies:[]},
        {category: "Drink", image:"zero.jpg",name: "0.5L Coca Cola Zero", price: 29.99, description:"Coca Cola Zero", ingredients:[], allergies:[]},
        {category: "Drink", image:"sjoko.jpg",name: "0.5L Sjokomelk", price: 29.99, description:"Hjemmelaget sjokolademelk", ingredients:[], allergies:[]},
        {category: "Drink", image:"farris.jpg",name: "0.5L Farris Naturell", price: 29.99, description:"Farris Naturell", ingredients:[], allergies:[]},
        {category: "Extra", image:"hvitløk.jpg",name: "Hvitløksdressing", price: 29.99, description:"Hjemmelaget hvitløksdressing", ingredients:["hvitløk, rømme"],  allergies:[]},
        {category: "Extra", image:"chilli.jpg",name: "Hvitløk- og chillidressing", price: 39.99, description:"Hjemmelaget hvitløk- og chillidressing", ingredients:["hvitløk, chilli, rømme"],  allergies:[]},
        {category: "Extra", image:"oregano",name: "Oregano", price: 9.99, description:"Oregano", ingredients:["kebabkjøtt", "ost", "tomatsaus"],  allergies:[]},
    ]

    const getAllMenyItems =()=> meny;
    const getMenyItemByName =(name)=> meny.filter(meny => meny.name === name);
    const getMenyItemByPrice =(price)=> meny.filter(meny => meny.price === price);
    const printMenyItem =(menuItem)=> {return `
        <div class="columns is-multiline">
            <div class="card card-size ml-6">
                <div class="card-header">
                <p class="grey-background card-header-title">
                ${menuItem.name}
                </p>
                </div>

                <div class="card-image">
                <figure class="circular-portrait image">
                ${menuItem.image}" alt="OsloPizza">
                </figure>
                </div>

                <div class="card-content">
                <p class="title is-4">${menuItem.name}</p>
                <p class="subtitle is-6">${menuItem.description}, ${menuItem.ingredients}</p>
                </div>

                <div class="information-content">
                ${menuItem.allergies}
                </div>

                <div class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
                </div>
            </div>    
        </div>
        `
   
    } 

        return{getAllMenyItems, getMenyItemByName, getMenyItemByPrice, printMenyItem}
}()

export default MenyModule;