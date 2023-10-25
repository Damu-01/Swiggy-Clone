import { Link } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from "../utilities/UserContext";


const Restaurantcard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwo, id }) => {
  // console.log(userData);
  const link = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
// for useContext .......
  // const data = useContext(UserContext);
  //   console.log("restaurantData", data);

  return (
    <>
      <Link to={`/menu/${id}`} className="card m-2 card1" style={{ width: '280px',height: 'auto', textDecoration: 'none' }}>

        <img className="card-img-top" src={link + cloudinaryImageId} alt="Card" style={{ width: '100%', borderRadius: '20px' }} />
        <div className="card-body">
          <h4 className="text-dark">{name}</h4>
          <span><h6 className="rating"><span className="bg-success text-white rounded p-1">☆{avgRating}/5</span></h6>
            <h6 className="float-end rating text-warning">{costForTwo}</h6></span>
          <h6 className="text-secondary">{cuisines.join(',')}</h6>
          {/* <h6 className="mt-2 text-dark">name - {data?.userData?.name}</h6>
           <h6 className="mt-2 text-dark">email - {data?.userData.email}</h6> */}
        </div>
      </Link>
    </>
  )
}
export default Restaurantcard;