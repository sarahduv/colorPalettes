import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './palette.js';
import PaletteList from './paletteList.js';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers.js';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="pallette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
