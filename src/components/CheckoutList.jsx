import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../features/cart/cartSlice';
import { images } from '../utilities/images';
import '../styles/CheckoutList.css';

const CheckoutList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purchaseItems = useSelector((state) => state.cart.purchaseItems);
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);
  const cartSubtotal = useSelector((state) =>
    state.cart.purchaseItems.reduce((acc, item) => (acc += item.price), 0)
  );

  const editCart = () => {
    navigate(-1);
    dispatch(openCart());
  };

  let itemList = purchaseItems.map((item) => {
    return (
      <div className="CheckoutList__item" key={item.id}>
        <div className="CheckoutList__imageContainer">
          <img
            src={images[item.imageUrl]}
            alt="preview"
            className="CheckoutList__image"
          />
        </div>
        <div className="CheckoutList__itemDescription">
          <div className="CheckoutList__itemName">{item.name}</div>
          <div className="CheckoutList__itemDetails">
            + More Details
            <div className="CheckoutList__itemDetailMessage">
              <p>{item.label}</p>
              <p>{item.detail}</p>
            </div>
          </div>
        </div>
        <div className="CheckoutList__itemPrice">{`$${item.price}.00`}</div>
      </div>
    );
  });

  return (
    <div className="CheckoutList">
      <div className="CheckoutList__headerSection">
        <h3 className="CheckoutList__header">
          {`Order Items (${purchaseCount})`}
        </h3>
        <div className="CheckoutList__editLink link" onClick={editCart}>
          Edit Cart
        </div>
      </div>
      <div className="CheckoutList__list">{purchaseCount > 0 && itemList}</div>
      <div className="CheckoutList__totalSection">
        <div className="CheckoutList__totalHeader">Total</div>
        <div className="CheckoutList__totalAmount">{`$${cartSubtotal}.00`}</div>
      </div>
    </div>
  );
};

export default CheckoutList;
