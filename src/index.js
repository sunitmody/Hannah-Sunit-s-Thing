// : Render the `App` component to the DOM
import App from './components/App.js';
import data from './data/exampleStateData.js';
// const mockData = require('./data');

ReactDOM.render(<App states={data}/>, document.getElementById('app'));