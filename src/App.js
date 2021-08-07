import React from "react";
import Unsplash from "./api/Unsplash";
import SearchBar from "./SearchBar";
import ImgList from "./ImgList";



export default class App extends React.Component {
  state = { imgs: [] };

  onSearchSubmit = async (searchText) => {
    const res = await Unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchText
      }
    });
    this.setState({ imgs: res.data.results });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <ImgList imgs={this.state.imgs} />
      </div>
    );
  }
}
