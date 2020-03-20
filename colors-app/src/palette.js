import React, { Component } from 'react';
import ColorBox from './colorBox.js';
import './palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here  */}
      </div>
    );
  }
}

export default Palette;
