// TODO: Render the `App` component to the DOM
import App from './components/App.js';
// import data from './data';
const mockData = require('./data');

console.log(mockData);

ReactDOM.render(<App states={mockData}/>, document.getElementById('app'));