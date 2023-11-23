import DisplaySection from "./Components/DisplaySection";
import Jumbotron from "./Components/Jumbotron";
import Nav from "./Components/Nav";
import SoundSection from "./Components/SoundSection";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection/>
    </div>
  );
}

export default App;
