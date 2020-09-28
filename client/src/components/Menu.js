import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./styles.css";

//from react-redux
import { connect } from "react-redux";
import { getMenuItems } from "../actions/menuItemActions";

//component properties
import PropTypes from "prop-types";

export class Menu extends Component {
  static propTypes = {
    getMenuItems: PropTypes.func.isRequired,
    menuItem: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getMenuItems();
    // this.setState({ items: this.props.menuItem });
    // console.log("prop: ", this.props.menuItem);
    // console.log("items State: ", this.state.items);
  }

  render() {
    // {this.props.menuItem.items?this.state.node.node_status.name:""}
    // const loading = this.props.menuItem.loading;
    // let { menuItems } = this.props.menuItem;
    // let loaded = false;
    // let itemsLoaded;

    if (this.props.isAuthenticated) {
      return (
        <FadeIn>
          <div>
            <div class="jumbotron menuJumbo">
              <h1 class="display-4">Chef Palace Menu</h1>
              <hr class="my-4"></hr>
              <p>All our meals are made to order!</p>
              <h4 style={{ color: "red" }}>
                Add to Cart functionality is currently under development
              </h4>
            </div>
            {this.props.menuItem.items ? (
              <div>
                {/* for starters */}
                <ul>
                  <h2 className="catHead">Starters</h2>
                  {this.props.menuItem.items
                    .filter((item) => item.category === "Starter")
                    .map(
                      ({
                        name,
                        ingredients,
                        glutenFree,
                        vegan,
                        price,
                        itemImage,
                      }) => (
                        <li className="menuItem">
                          <h4 className="menuItemName ">{name}</h4>
                          <br></br>
                          <center>
                            <div class="row">
                              <div className="menuItemImage col-lg-4 col-md-4 col-sm-12">
                                <img
                                  src={itemImage}
                                  className="itemImage"
                                ></img>
                              </div>
                              <div className="menuItemInfo col-lg-4 col-md-4 col-sm-12">
                                <p>Ingredients: {ingredients}</p>

                                {glutenFree ? (
                                  <p>Gluten free: yes</p>
                                ) : (
                                  <p>Gluten free: no</p>
                                )}

                                {vegan ? <p>Vegan: yes</p> : <p>Vegan: no</p>}

                                <p>price: €{price}</p>
                              </div>
                              <div className="addToCartDiv col-lg-4 col-md-4 col-sm-12">
                                <button
                                  type="button"
                                  class="btn btn-outline-warning addToCartButton"
                                >
                                  Add to Cart{" "}
                                  <i class="fas fa-shopping-basket"></i>
                                </button>
                              </div>
                            </div>
                          </center>
                        </li>
                      )
                    )}
                </ul>
                {/* For main courses */}
                <ul>
                  <h2 className="catHead">Main Courses</h2>
                  {this.props.menuItem.items
                    .filter((item) => item.category === "Main")
                    .map(
                      ({
                        name,
                        ingredients,
                        glutenFree,
                        vegan,
                        price,
                        itemImage,
                      }) => (
                        <li className="menuItem">
                          <h4 className="menuItemName ">{name}</h4>
                          <br></br>
                          <center>
                            <div class="row">
                              <div className="menuItemImage col-lg-4 col-md-4 col-sm-12">
                                <img
                                  src={itemImage}
                                  className="itemImage"
                                ></img>
                              </div>
                              <div className="menuItemInfo col-lg-4 col-md-4 col-sm-12">
                                <p>Ingredients: {ingredients}</p>
                                {glutenFree ? (
                                  <p>Gluten free: yes</p>
                                ) : (
                                  <p>Gluten free: no</p>
                                )}
                                {vegan ? <p>Vegan: yes</p> : <p>Vegan: no</p>}
                                <p>price: €{price}</p>
                              </div>
                              <div className="addToCartDiv col-lg-4 col-md-4 col-sm-12">
                                <button
                                  type="button"
                                  class="btn btn-outline-warning addToCartButton"
                                >
                                  Add to Cart{" "}
                                  <i class="fas fa-shopping-basket"></i>
                                </button>
                              </div>
                            </div>
                          </center>
                        </li>
                      )
                    )}
                </ul>

                {/* For Drinks */}
                <ul>
                  <h2 className="catHead">Drinks</h2>
                  {this.props.menuItem.items
                    .filter((item) => item.category === "Drink")
                    .map(({ name, price, itemImage }) => (
                      <li className="menuItem">
                        <h4 className="menuItemName ">{name}</h4>
                        <br></br>
                        <center>
                          <div class="row">
                            <div className="menuItemImage col-lg-4 col-md-4 col-sm-12">
                              <img src={itemImage} className="itemImage"></img>
                            </div>
                            <div className="menuItemInfo col-lg-4 col-md-4 col-sm-12">
                              <p>price: €{price}</p>
                            </div>
                            <div className="addToCartDiv col-lg-4 col-md-4 col-sm-12">
                              <button
                                type="button"
                                class="btn btn-outline-warning addToCartButton"
                              >
                                Add to Cart{" "}
                                <i class="fas fa-shopping-basket"></i>
                              </button>
                            </div>
                          </div>
                        </center>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </FadeIn>
      );
    } else {
      return (
        <div>
          <h1 style={{ color: "red" }}>
            You must be logged in to view this page
          </h1>
        </div>
      );
    }
  }
}

//function to map the state of the irems to props
const mapStateToProps = (state) => ({
  menuItem: state.menuItem,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getMenuItems })(Menu);
