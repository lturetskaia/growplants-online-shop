import { Button } from "react-bootstrap";
import { useAppSelector } from "store/hooks";

export default function CartItems (){
    const cartData = useAppSelector(state => state.cart);
    return( <ul id="cart-items">
          <li className="cart-header">
            <div>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </li>
          {cartData.map((cartItem) => <li key={cartItem.id} className="cart-item">
            <div>
              <a href="">
                <img src="products/house-plants/cyclamen.png" alt="" />
              </a>
            </div>
            <div className="cart-item-info">
              <p>Item Name</p>
              <p>Option: option description</p>
            </div>
            <div>10.99</div>
            <div>1</div>
            <div>10.99</div>
            <div>
              <Button className="btn btn-outline-success delete-btn">X</Button>
            </div>
          </li>)}
          
        </ul>
    )
}
   