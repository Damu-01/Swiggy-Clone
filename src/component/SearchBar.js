import { useState } from "react";
// import { useContext } from "react";
// import UserContext from "../utilities/UserContext";

const SearchBar = ({ masterCard, setCardName }) => {
  const [searchText, setSeachBar] = useState("");
  // const { userData, refurbish } = useContext(UserContext);


  const handle = (e) => {
    setSeachBar(e.target.value)
  }

  const searchRestaurant = () => {
    const Restaurants = masterCard.filter((card) => {
      return card?.info?.name.toLowerCase().includes(searchText.toLowerCase()
      )
    })
    setCardName(Restaurants)
  }

  // const ChangeUser = (e) => {
  //   refurbish({
  //     ...userData,
  //     name: e.target.value
  //   })
  // }

  // const ChangeEmail = (e) => {
  //   refurbish({
  //     ...userData,
  //     email: e.target.value
  //   })
  // }


  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input className="p-3 search" style={{ width: '250px', borderRadius: '8px', outline: 'none' }}
          type="text" value={searchText} onChange={handle} placeholder="Restaurants " />
        <button className="btn text-warning ms-2 p-1 search" style={{ width: '100px' }}
          onClick={searchRestaurant}>search</button>

      </div>
      {/* <div className="container" style={{width :'50%'}}>
        <div className="d-flex justify-content-center align-items-center"> 
         Username:   <input type="text" className="search" value={userData?.name} onChange={ChangeUser} />
         Email:      <input type="text" className="search" value={userData?.email} onChange={ChangeEmail} />
        </div>
        </div> */}
    </>

  )
}

export default SearchBar;