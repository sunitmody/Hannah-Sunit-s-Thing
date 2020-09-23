var StateListEntry = (props) => (

  // props.state.name;
  // props.state.blue;
  // props.state.red;
  // props.state.undecided;
  // props.state.swing;


  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="state-list-entry-name">{props.state.name}</div>
      <div className="state-list-entry-detail">Blue:{props.state.blue}% Red:{props.state.red}% Undecided:{props.state.undecided}%</div>
      {/* {if (props.state.swing === true) {
        <div className="state-list-swing">{props.state.name}</div>
      }} */}
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
StateListEntry.propTypes = {
  state: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default StateListEntry;

//: Functional Stateless Component
//responsibility:
