var Result = () => (
  <div className="video-player">
    <div className="video-player-details">
      <h3>Result Title</h3>
      <div>Result Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// Result.propTypes = {
//   result: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Result;

//Functional Stateless:
//responsibility: displays overall prediction based on the App component's state
