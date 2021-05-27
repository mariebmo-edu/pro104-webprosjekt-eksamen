const SalesModule = function(){

    const sales = [
        {date: new Date("2021-05-10"), restaurant: "Oslo", transactions: 155, itemsSold:{oslopizza:12, kebabpizza:14, pepperonipizza:11, cocacola:2}, earnings: 20394.93},
        {date: new Date("2021-05-10"), restaurant: "Oslo", transactions: 155, itemsSold:{oslopizza:12, kebabpizza:14, pepperonipizza:11, cocacola:2}, earnings: 20394.93},
        {date: new Date("2021-05-10"), restaurant: "Bergen", transactions: 155, itemsSold:{oslopizza:12, kebabpizza:14, pepperonipizza:11, cocacola:2}, earnings: 20394.93},
        {date: new Date("2021-05-10"), restaurant: "Kristiansand", transactions: 155, itemsSold:{oslopizza:12, kebabpizza:14, pepperonipizza:11, cocacola:2}, earnings: 20394.93},
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