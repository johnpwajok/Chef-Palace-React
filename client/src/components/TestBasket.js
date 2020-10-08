import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./styles.css";

//from react-redux
import { connect } from "react-redux";
import { getCart } from "../actions/cartActions";
import { getMenuItems } from "../actions/menuItemActions";

//component properties
import PropTypes from "prop-types";

export class TestBasket extends Component {
  state = {
    userCart: {},
    menuItem: "",
    quantity: 0,
  };
  static propTypes = {
    getCart: PropTypes.func.isRequired,
    cartItem: PropTypes.object.isRequired,
    getMenuItems: PropTypes.func.isRequired,
    menuItem: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getMenuItems();
    this.props.getCart();
    // console.log("pulled cart: ", this.props.menuItem.items);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <FadeIn>
          {this.props.cartItem.items ? (
            <div className="cartContainer">
              <ul>
                <h2 className="catHead">Your Cart</h2>
                {this.props.cartItem.items.items.map(
                  ({ menuItemKey, quantity }) => (
                    // <li className="menuItem">
                    //   <h4 className="menuItemName ">item ID: {menuItem}</h4>
                    //   <h4 className="menuItemName">Quantity: {quantity}</h4>
                    // </li>
                    <li key={menuItemKey}>
                      <div>
                        {this.props.menuItem.items ? (
                          this.props.menuItem.items
                            .filter((item) => item._id === menuItemKey)
                            .map(({ _id, name, price, itemImage }) => (
                              <ul>
                                <li key={_id} className="cartItem">
                                  <h4 className="menuItemName ">{name}</h4>
                                  <br></br>
                                  <center>
                                    <div class="row">
                                      <div className="menuItemImage col-lg-4 col-md-4 col-sm-12">
                                        <img
                                          src={itemImage}
                                          className="itemImage"
                                          alt="Menu Item"
                                        ></img>
                                      </div>
                                      <div className="menuItemInfo col-lg-4 col-md-4 col-sm-12">
                                        <p>quantity: {quantity}</p>
                                        <p>price: €{price * quantity}</p>
                                      </div>
                                    </div>
                                  </center>
                                </li>
                              </ul>
                            ))
                        ) : (
                          <div>
                            <h2>Loading...</h2>
                          </div>
                        )}
                      </div>
                    </li>
                  )
                )}
              </ul>
              <br></br>
              <button className="checkoutButton">Checkout</button>
            </div>
          ) : (
            <div>
              <h2>Your cart is empty!</h2>
            </div>
          )}
        </FadeIn>
      );
    } else {
      return (
        <FadeIn>
          <div>not logged in</div>
        </FadeIn>
      );
    }
  }
}

//function to map the state of the irems to props
const mapStateToProps = (state) => ({
  cartItem: state.cartItem,
  menuItem: state.menuItem,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getCart, getMenuItems })(TestBasket);
