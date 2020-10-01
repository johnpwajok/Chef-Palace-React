import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./styles.css";

//from react-redux
import { connect } from "react-redux";
import { getCart } from "../actions/cartActions";

//component properties
import PropTypes from "prop-types";

export class TestBasket extends Component {
  state = {
    userCart: {},
  };
  static propTypes = {
    getCart: PropTypes.func.isRequired,
    cartItem: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <FadeIn>
          {this.props.cartItem.items ? (
            <div>
              {console.log("jsx cartItems: ", this.props.cartItem.items.items)}
              {/* {this.setState({ userCart: this.props.cartItem.items[0].items })} */}

              <ul>
                <h2 className="catHead">Cart</h2>
                {this.props.cartItem.items.items.map(
                  ({ menuItem, quantity }) => (
                    <li className="menuItem">
                      <h4 className="menuItemName ">item ID: {menuItem}</h4>
                      <h4 className="menuItemName">Quantity: {quantity}</h4>
                    </li>
                  )
                )}
              </ul>
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
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getCart })(TestBasket);
