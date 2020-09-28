import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./styles.css";

//from react-redux
import { connect } from "react-redux";
import { getCart } from "../actions/cartActions";

//component properties
import PropTypes from "prop-types";

export class TestBasket extends Component {
  static propTypes = {
    getCart: PropTypes.func.isRequired,
    cartItem: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getCart();
    console.log("get cart ran");
    console.log("cart: ", this.props.cartItem);
    // this.setState({ items: this.props.menuItem });
    // console.log("prop: ", this.props.menuItem);
    // console.log("items State: ", this.state.items);
  }

  render() {
    if (this.props.isAuthenticated) {
      const { cartItems } = this.props.cartItem;
      console.log("cartItems: ", cartItems);
      return (
        <FadeIn>
          {this.props.cartItem.items ? (
            <div>
              <ul>
                <h2 className="catHead">Cart</h2>
                {this.props.cartItem.items.map(({ user }) => (
                  <li className="menuItem">
                    <h4 className="menuItemName ">User ID: {user}</h4>
                    {/* <div>
                      <ul>
                        <h2 className="catHead">Cart</h2>
                        {this.props.cartItem.items.items.map(({ quantity }) => (
                          <li className="menuItem">
                            <h4 className="menuItemName ">{quantity}</h4>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    {/* <p>quantity: {items.quantity}</p> */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>Items don't exist</h2>
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
