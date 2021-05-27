const SalesModule = function(){

    const sales = [
        {date: new Date("2021-05-10"), restaurant: "Oslo", transactions: 155, itemsSold:{Hawaii:12, Pepperoni:14, OsloPizza:11, Skinke:2}, earnings: 20394.93},
        {date: new Date("2021-05-11"), restaurant: "Oslo", transactions: 123, itemsSold:{Hawaii:12, Margarita:14, Pepperoni:11, Margarita:2}, earnings: 40234.93},
        {date: new Date("2021-05-15"), restaurant: "Oslo", transactions: 13, itemsSold:{Hawaii:2, Margarita:3, Pepperoni:1, "0.5L Coca Cola":2}, earnings: 20394.93},
        {date: new Date("2021-06-01"), restaurant: "Bergen", transactions: 19, itemsSold:{OsloPizza:12, "Meat heaven":14, Pepperoni:11, "0.5L Sjokomelk":203}, earnings: 93423.93},
        {date: new Date("2021-06-01"), restaurant: "Kristiansand", transactions: 1505, itemsSold:{OsloPizza:12, Hvitløksdressing:14, Pepperoni:11, cocacola:2}, earnings: 302312.93},
        {date: new Date("2021-06-01"), restaurant: "Oslo", transactions: 155, itemsSold:{Hawaii:12, Skinke:14, Pepperoni:11, Oregano:2}, earnings: 20394.93},
        {date: new Date("2021-06-01"), restaurant: "Stavanger", transactions: 155, itemsSold:{OsloPizza:12, Pepperoni:14, Hawaii:11, Skinke:2}, earnings: 20394.93},
    ]

    const getAllSales =()=> sales;
    const getSalesByDate =(date)=> sales.filter(sales => sales.date.toDateString() === date);
    const getSalesByRestaurant =(restaurant)=> sales.filter(sales => sales.restaurant.toLowerCase() === restaurant.toLowerCase());

    const getSalesByEarnings =(earnings)=> meny.filter(sales => sales.earnings === ParseInt(earnings));


    const addSale = (newDate, newRestaurant, newTransactions, newEarnings) => sales.push({date: new Date(newDate), restaurant:newRestaurant, transactions:newTransactions, earnings:newEarnings})
    const printSalesItem =(salesItem)=> {return `
   
        `} 

        return{getAllSales, getSalesByDate, getSalesByEarnings, printSalesItem, getSalesByRestaurant, addSale}
}()

export default SalesModule;