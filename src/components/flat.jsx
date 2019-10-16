import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;
    selectFlat(index);
  }

  render() {
    const { selected, flat } = this.props;
    const { imageUrl } = flat;
    return (
      <div className={`card${selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')` }}>
        <div className="card-category">
          {flat.price}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          {flat.name}
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
