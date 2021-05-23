const AnsattModule = function(){

    const ansatte = [
        {name: "Jenny Jenny", anr: 73823, restaurant:"Oslo", percentage:100, position:"Daglig leder", status:"working"},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:""},
    ]

    const getAllEmployees =()=> ansatte;
    const getEmployeeByRestaurant =(restaurant)=> ansatte.filter(ansatte => ansatte.restaurant === restaurant);
    const getEmployeeByAnr =(anr)=> ansatte.filter(ansatte => ansatte.anr === anr);
    const printemployee =(ansatt)=> {return `
   
        `} 

        return{getAllEmployees, getEmployeeByAnr, getEmployeeByRestaurant, printemployee}
}()

export default AnsattModule;