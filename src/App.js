// import Header from "./Components/Header";
// import MyFirstComponent from "./Components/MyFirstComponent";
import DataFactory from "./Components/JSON-Builder/DataFactory";
import MilesAhead from "./Components/States/MilesAhead";
import Clock from "./Components/States/Clock";
import Login from "./Components/States/Login";
import Game from "./Components/Lifting-States/Game";
import Shopping from "./Components/Hooks/Shopping";
import Director from "./Components/React-Routing/Director";
import DataRequestExample from "./Components/AxiosProject/DataRequest";

const App = () => {
  return (
    <div>
      
      <DataRequestExample/>

      {/* <DataFactory/> */}
      {/*          
      <MilesAhead />
      <Clock />
      <Login />
      <br></br>
      <Game />
      <Shopping /> */}

    </div>

  );
}

export default App;
