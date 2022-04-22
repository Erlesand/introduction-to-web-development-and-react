import { DependencyProvier, useDependency } from "./DependencyProvider";

const ComponentA = () => {
  const { setShouldLog, logService } = useDependency();

  logService("Rendering Component A");

  return (
    <button onClick={() => setShouldLog((prevShouldLog) => !prevShouldLog)}>
      Switch Logging
    </button>
  );
};

const ComponentB = () => {
  const { shouldLog, logService } = useDependency();

  logService("Rendering Component B");

  return <p>Logging: {shouldLog ? "enabled" : "disabled"}</p>;
};

const App = () => {
  return (
    <DependencyProvier>
      <ComponentA />
      <ComponentB />
    </DependencyProvier>
  );
};

export default App;
