import HelloWorld from "./Components/HelloWorld";
import Explain from "./Components/Explain";

function App() {
  return (
    // passando props
    <div>
      <HelloWorld />
      <Explain nome='Gabriel Luis da Silva Ciusz'/> 

    </div>
  );
}

export default App;
