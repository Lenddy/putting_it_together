import logo from './logo.svg';
import './App.css';
// importing the class MenuItem form the MenuItem file
import People from './components/People';//the last part is saying go to the folder components then go to the file MenuItem

function App() {
  return (
    <div className="App">
      <People f_Name={"jane"} l_Name={"doe"}  age = {45} hairColor={"black"}></People>
      <People f_Name={"john"} l_Name={"smith"}  age = {88} hairColor={"brown"}></People>
    </div>
  );
}

export default App;
