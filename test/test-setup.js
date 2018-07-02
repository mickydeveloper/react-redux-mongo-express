/**
 * Defines the React 16 Adapter for Enzyme. 
 * Added the separate tscofig as the ts-jest is not working correctly with project tsconfig.json
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });
