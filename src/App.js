import { SplitScreen } from "./SplitScreen";
const LeftComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>LEFT</h1>;
};

const RightComponent = () => {
  return <h1 style={{ backgroundColor: "red" }}>RIGHT</h1>;
};
function App() {
  return (
    // <SplitScreen
    //   left={LeftComponent}
    //   right={RightComponent}
    //   leftWeight={1}
    //   rightWeight={3}
    // />

    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );
}

export default App;
