import React, { Component } from "react";
import Select from "react-select";
import products from "./products.json";

// console.log(products);

const options = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

class App extends Component {
  state = {
    products: [],
    filterProduct: [],
    chooseSize: "",
  };

  componentDidMount() {
    this.setState({
      products: products,
    });
  }

  handleSearch = (e) => {
    this.setState({
      chooseSize: e.value,
    });
    // console.log(e.value);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chooseSize !== this.state.chooseSize) {
      const filterProduct = products.filter((product) => {
        console.log('filter');
        return product.availableSizes.includes(this.state.chooseSize);
      });
      this.setState({
        filterProduct
      })
    }
  }

  render() {
    return (
      <>
        <h2>HELLO</h2>
        <Select onChange={this.handleSearch} options={options} />
      </>
    );
  }
}

export default App;
