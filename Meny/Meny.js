import MenyModule from '../Modules/MenyModule.js';

let menuItems = MenyModule.getAllMenyItems();

menuItems.forEach(element => {
    if(element.category == "Pizza"){
        MenyModule.printMenyItem(element);
        console.log(MenyModule.printMenyItem(element));
    }
});
