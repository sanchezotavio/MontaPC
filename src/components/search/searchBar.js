import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this
      .props
      .onSearch(this.state.term);
  }

  onChange(value) {
    this.setState({term: value});
  }

  render() {
    return (
      <form className="search" onSubmit={this
        .onSubmit
        .bind(this)}>
        <div className="search__group">
          <input
            value={this.state.term}
            type="text"
            className="input search__input"
            placeholder="Buscar por..."
            onChange={event => this.onChange(event.target.value)}/>
          <span className="group">
            <button className="button search__button" type="submit">Buscar</button>
          </span>
        </div>
      </form>
    );
  }
}

export default SearchBar;