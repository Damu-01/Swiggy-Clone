import { useState, useEffect } from "react";

const useRestaurantMenu = (uniqueId) => {
    const [items, setItem] = useState([]);
    console.log(uniqueId)
    const normalItem = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    // const nestedItems = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    async function getMenuData() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${uniqueId}&submitAction=ENTER`)
        const Menu = await data.json();
        console.log("name", Menu?.data?.cards[0]?.card?.card?.info?.name);
        console.log("Menu", Menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        setItem(Menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
    }

    useEffect(() => {
        getMenuData()
    },);

    const Obj = {
        normalItem: items
    }

    return Obj;

}

export default useRestaurantMenu;