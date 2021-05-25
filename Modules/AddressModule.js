const AddressModule = function(){

    const address = [
        {restaurant: "Oslo", map:"map_oslo.png", address:"Oslogata 1234", postalCode: "0987", city:"Oslo", phoneNumber: "+47 834 93 342"},
        {restaurant: "Bergen", map:"map_bergen.png", address:"Bergengata 1234", postalCode: "0923", city:"Bergen", phoneNumber: "+47 724 93 342"},
        {restaurant: "Stavanger", map:"map_stavanger.png", address:"Stavangergata 1234", postalCode: "0347", city:"Stavanger", phoneNumber: "+47 934 93 342"},
        {restaurant: "Kristiansand", map:"map_kristiansand.png", address:"Kristiansandgata 1234", postalCode: "1287", city:"Kristiansand", phoneNumber: "+47 335 93 342"},
    ]

    const getAllAddresses =()=> address;
    const getAddressByRestaurant =(restaurant)=> address.filter(address => address.restaurant === restaurant);
    const printAddressItem =(addressItem)=> {return `

                            <div class="card-image">
                                <figure class="image"></figure>
                                    <img src="../images/maps/${addressItem.map}" alt="image of map with the address ${addressItem.address}, ${addressItem.postalCode} ${addressItem.city}">
                                </figure>
                            </div>

                            <div class="card-content">
                                <p>
                                    ${addressItem.address}, <br>    
                                    ${addressItem.postalCode} ${addressItem.city}
                                </p>
                                <p>
                                    ${addressItem.phoneNumber}
                                </p>
                            </div>
   
        `} 

        return{getAllAddresses, getAddressByRestaurant, printAddressItem}
}()

export default AddressModule;