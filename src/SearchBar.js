import React from "react";
import "./styles.css";

export default class SearchBar extends React.Component {
  state = { searchText: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitProp(this.state.searchText);
  };
  render() {
    return (
      <div className="searchBar">
        <form className="form" onSubmit={this.onFormSubmit}>

          <label className="label">
            <img src='logo.png' alt='a logo'/>
          </label>

          <input
            className="InputField"
            type="text"
            onChange={(e) =>
              this.setState({ searchText: e.target.value.toLowerCase() })
            }
            value={this.state.searchText}
            placeholder="Search for images..."
          />
        </form>
      </div>
    );
  }
}
