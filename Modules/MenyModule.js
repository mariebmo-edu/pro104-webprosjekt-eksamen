const MenyModule = function(){

    const meny = [
        {category: "Pizza", name: "OsloPizza", price: 129.99, description:"pizza med kebabkjøtt og ost", ingredients:["kebabkjøtt", "ost", "tomatsaus"]},
    ]

    const getAllMenyItems =()=> meny;
    const getMenyItemByName =(name)=> meny.filter(meny => meny.name === name);
    const getMenyItemByPrice =(price)=> meny.filter(meny => meny.price === price);
    const printMenyItem =(menyItem)=> {return `
   
        `} 

        return{getAllMenyItems, getMenyItemByName, getMenyItemByPrice, printMenyItem}
}()

export default MenyModule;