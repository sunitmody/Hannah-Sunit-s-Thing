var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>header</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>result</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>stateList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//stateful class component
//responsibility:
//receives data probably via http request to some api, and manages all our state