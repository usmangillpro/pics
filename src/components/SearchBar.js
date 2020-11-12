import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

onFormSubmit = (event) => {
  event.preventDefault();

  this.props.searchMe(this.state.term);
};

  //   onInputChange(event) {
  //     console.log(event.target.value);
  // Alternative way==in JSX== onChange={(e) => console.log(e.target.value)}
  //  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
