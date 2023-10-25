import Restaurantcard from "./Restaurantcard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import useRestaurant from "../utilities/useRestaurant";
import useConnection from "../utilities/useConnection";
// import { useState } from "react";

const Body = () => {
  const restaurantObj = useRestaurant();
  const network_status = useConnection();

   // darkmode 
  //  const lightMode = {
  //   backgroundColor : 'white',
  //   color: 'black'
  // }
  // const darkMode = {
  //   backgroundColor: 'black',
  //   color: 'white'
  // }
  // const [mode , setMode] = useState(lightMode);
  
  
  //   const toggleMode = () => {
  //       // alert("hii");
  //       if (mode.backgroundColor === "white") {
  //         setMode(darkMode);
  //         console.log(mode, "mode");
  //       }
  //       else {
  //         setMode(lightMode);
  //         console.log(mode, "mode");
  //       }
  //     }

  if (!network_status) {
    return (
      <div className="offlineImg">
        <img src="https://img.freepik.com/free-vector/abstract-offline-twitch-banner-theme_23-2148600766.jpg"
          alt="offline-img"
          className="Offline" />
        {/* <h2>Sorry You Are Offline</h2> */}
      </div>
    )
  }

 

  return restaurantObj?.masterCollection?.length === 0 ? <Shimmer /> : (
    <div>
      <SearchBar masterCard={restaurantObj?.masterCollection} setCardName={restaurantObj?.updater_fun} />
      {/* darkmode button */}
  {/* <div className="top-0">
 <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleMode}/>
  <label htmlFor="checkbox" className="checkbox-label" >
    <i className="fas fa-moon"></i>
    <i className="fas fa-sun"></i>
    <span className="ball"></span>
  </label>
    </div> */}
{/* darkmode button end */}
      <div className="bodyContainer" >
        {restaurantObj?.collection?.length === 0 ? <h1 className="mt-2 mx-auto"> No Match Found </h1> :
          restaurantObj?.collection?.map((card) => (
            // <Restaurantcard  {...card?.data?.data} key={card?.data?.data?.id}  userData={{
            //   'name' : 'username',
            //   'email' : 'useremail'
            // }}/> 

            <Restaurantcard  {...card?.info} key={card?.info?.id} userData={{
              'name': 'username',
              'email': 'useremail'
            }} />
          )
          )
        }
      </div>
    </div>
  )
}
export default Body;