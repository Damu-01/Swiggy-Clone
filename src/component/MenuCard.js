import React from "react";

const MenuCard = ({ imageId, name, price, defaultPrice, itemAttribute, isVeg, description }) => {
    const link = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
    return (
        <>
            <div className="card m-2 p-2" style={{ width: '20%' }}>
                <img className="card-img-top" src={link + imageId} alt="Menu" style={{ width: '100%' }} />
                <div className="card-body">
                    <h4 className="mb-2 text-dark">{name}</h4>
                    <h6 className="mt-2 float-end rating ">₹{price / 100 || defaultPrice / 100}</h6>

                    <h6> {itemAttribute?.vegClassifier} :  {isVeg ? "🟢" : "🔴"}</h6>
                </div>
                <p >{description}</p>
            </div >
        </>
    )
}

export default MenuCard;    