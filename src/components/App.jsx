import data from '../data/exampleStateData.js';
import Result from './Result.js';
import Header from './Header.js';
import StateList from './StateList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // FILL ME IN
      states: this.props.states,
      // state: this.props.states[0]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Header /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><Result /></div>
          </div>
          <div className="col-md-5">
            <div><StateList states={this.props.states}/></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//stateful class component
//responsibility:
//receives data probably via http request to some api, and manages all our state