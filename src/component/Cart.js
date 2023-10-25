import React from "react";
import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";


const Cart = () => {
    const cartData = useSelector(store => store.cart.cartItem);
    console.log("cartData", cartData);
    const dispatch = useDispatch();
    const handleClearItem = () => {
        dispatch(clearCart());
    }
    return (
        <>
            <div>
                <input type="button" value={'Remove'} className="btn btn-info btn-sm" onClick={handleClearItem} />
            </div>
            <div className="mx-auto d-flex flex-wrap">
                {cartData.map((item) =>
                    <MenuCard {...item} key={item.id} />
                )}
            </div>
        </>
    )
}

export default Cart;