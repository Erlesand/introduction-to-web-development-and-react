const Comp = ({ id, title, disabled = false }) => {
  return (
    <p>
      {id} - {title} {disabled ? "I am disabled" : "I am enabled"}
    </p>
  );
};

const App = () => {
  return (
    <>
      <Comp id={1} title="foo" disabled />
      <Comp id={2} title="bar" />
    </>
  );
};

export default App;
