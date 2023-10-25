import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";
// import Shimmer from "./Shimmer";

const Menu = () => {
    const [menuItem, setMenuItem] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleChange = () => {
        setMenuItem(menuItem ? false : true)
    }
    const menu = useRestaurantMenu(id);

    const handleAddItem = (item) => {
        console.log("item ", item)
        dispatch(addItem(item));
    }


    return menu?.normalItem?.length === 0 ? <ShimmerMenu /> : (
        <div>
            <div style={{ width: '10%' }}>
            </div>
            <div className="card m-5 p-2 mt-5 mx-auto MenuCard container">
                {menu.normalItem.map((normalItems, index) => (
                    <div className="ms-3" key={normalItems?.card?.card?.title}>
                        <h3 onClick={handleChange} className="text-danger mt-2 border-bottom"
                            key={normalItems?.card?.card?.title}>
                            <span> {normalItems?.card?.card?.title}</span>
                        </h3>
                        {menuItem ? <div >
                            {normalItems?.card?.card?.itemCards?.map((item, index) => (
                                <div className="text-dark" key={item?.card?.info?.id}>
                                    {index + 1} - {item?.card?.info?.name}.......
                                    <input type="button" value={'+'} className="btn btn-info btn-sm "
                                        onClick={() => handleAddItem(item?.card?.info)} />
                                    <span className="float-end text-dark">
                                        ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                                    </span>
                                </div>
                            ))}
                        </div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;