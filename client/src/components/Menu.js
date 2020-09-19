import React, { Component } from "react";

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
    // setTimeout(this.props.getMenuItems(), 1000);
    this.props.getMenuItems();
    // this.setState({ items: this.props.menuItem });
    console.log("prop: ", this.props.menuItem);
    // console.log("items State: ", this.state.items);
  }

  render() {
    // {this.props.menuItem.items?this.state.node.node_status.name:""}
    const loading = this.props.menuItem.loading;
    let { menuItems } = this.props.menuItem;
    let loaded = false;
    let itemsLoaded;

    // switch (loading) {
    //   case true:
    //     menuItems = this.props.menuItem;
    //     itemsLoaded = (
    //       <ol>
    //         <li>Loading...</li>
    //       </ol>
    //     );
    //   case false:
    //     loaded = true;
    //     console.log(
    //       "the prop menu items have loaded: ",
    //       this.props.menuItem.items
    //     );
    //     menuItems = this.props.menuItem.items;
    //     itemsLoaded = (
    //       <ol>
    //         {menuItems.map(({ name }) => (
    //           <li>{name}</li>
    //         ))}
    //       </ol>
    //     );
    //   default:
    //     menuItems = this.props.menuItem;
    // }

    // let { menuItems } = this.props.menuItem;

    console.log("loading: ", loading);
    console.log("item break: ", this.props.menuItem.items);

    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">Chef Palace Menu</h1>
          <br></br> <hr class="my-4"></hr>
          <p>Menu is currently under development!</p>
          {this.props.menuItem.items ? (
            <ol>
              {this.props.menuItem.items.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ol>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    );
  }
}

//function to map the state of the irems to props
const mapStateToProps = (state) => ({
  menuItem: state.menuItem,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getMenuItems })(Menu);
