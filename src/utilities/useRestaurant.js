import { useState,useEffect } from "react";

const useRestaurant = () =>{

  const [masterCard, setMasterCard] = useState("");
  const [cardName, setCardName] = useState("");


  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0177989&lng=72.84781199999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING
  async function RestaurantData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0838758&lng=73.0152584&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // console.log('API',data);
    const json = await data.json();
    // console.log("json",json?.data?.cards);
    // for changing state....
    // setCardName(json?.data?.cards);
    // setMasterCard(json?.data?.cards);

    setCardName(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setMasterCard(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(() => {
    RestaurantData()
  }, [])

  const Obj ={
    collection : cardName,
    masterCollection: masterCard,
    updater_fun : setCardName
  }

  return Obj;
}

export default useRestaurant;