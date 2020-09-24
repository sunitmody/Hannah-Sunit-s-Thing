import StateListEntry from './StateListEntry.js';

var StateList = (props) => {

  if (props.states === undefined || props.states.length === 0) {
    return (<div className="state-list"></div>);
  }

  return (
    <div className="state-list">
      {props.states.map((state, index) => (
        <StateListEntry key={index} state={state}/>
      ))
      }
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
StateList.propTypes = {
  states: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default StateList;

//Functional Stateless:
//responsibility: returns instances of stateListEntries

//use map to iterate over the fake data array
//map one state obj to each stateListEntry (pass the state to the component instance as a prop)
