const AnsattModule = function(){

    const ansatte = [
        {name: "Jenny Jenny", anr: 73823, restaurant:"Oslo", percentage:100, position:"Daglig leder", status:"working", bilde:"../images/people/girl_00.jpg"},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:"", bilde:"../images/people/boy_01.jpg", bilde:"../images/people/girl_00.jpg"},
        {name: "Syvert Johansson", anr: 42069, restaurant:"Bergen", percentage:42, position:"???", status:"vacation", bilde:"../images/people/boy_02.jpg"},
        {name: "Martin", anr: 69, restaurant:"Stavanger", percentage:1, position:"Daglig leder", status:"working", bilde:"../images/people/boy_01.jpg"},
        {name: "testeru", anr: 1, restaurant:"test", percentage:100, position:"Slave", status:"Dunno", bilde:"../images/people/boy_00.jpg"},
        {name: "OsloMan", anr: 2, restaurant:"Oslo", percentage:100, position:"Slave", status:"StatusFelt", bilde:"../images/people/boy_04.jpg"}

    ]

    const getAllEmployees =()=> ansatte;
    const getEmployeeByRestaurant =(restaurant)=> ansatte.filter(ansatte => ansatte.restaurant === restaurant);
    const getEmployeeByAnr =(anr)=> ansatte.filter(ansatte => ansatte.anr === anr);
    const printemployee =(ansatt)=> {return `
   
        `} 

        return{getAllEmployees, getEmployeeByAnr, getEmployeeByRestaurant, printemployee}
}()

export default AnsattModule;