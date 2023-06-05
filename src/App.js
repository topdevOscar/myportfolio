import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import SmallSidebar from './components/small_sidebar'
import Main from "./components/main"


function App() {
  return (
    <div className="App w3-black">
      <Header />
      <SmallSidebar />
      <Main />
    
      
    </div>
  );
}

export default App;
