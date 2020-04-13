import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './palette.js';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers.js';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Pallete list goes here</h1>} />
        <Route
          exact
          path="pallette/:id"
          render={() => <h1>Individual pallete</h1>}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
