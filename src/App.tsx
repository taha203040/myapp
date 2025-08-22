import "./App.css";
import FuzzyText from "../FuzzyText/FuzzyText";
function App() {
  return (
    <>
      <FuzzyText
        baseIntensity={0.1}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
      >
        404
      </FuzzyText>
      <br />
      <FuzzyText
      fontSize={30}
        baseIntensity={0.1}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
      >
        The website is under maintenance.
      </FuzzyText>
    </>
  );
}

export default App;
