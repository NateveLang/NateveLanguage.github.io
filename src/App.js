import react_logo from './logo.svg';
import './App.css';

function Uwu(color) {
  return (
    <div bgcolor={color}>
      uwu! uwu!
    </div>
  )
}

function App() {
  let columns = [18, 82, 80, 20];
  let sizes = [];
  for(var i = 0; i < columns.length; i ++){
    sizes.push(columns[i].toString() + "%");
  }
  return (
    <div className="App">
      <nav className="menubar column">
        <ul className="horizontal">
          <li>
            <a href="http://www.google.cl">
              <p className="menu-logo">
                natDev
              </p> 
            </a> 
          </li>
          <li className = "button">
            <a href="http://www.google.cl">
              Home  
            </a>
          </li>
          <li className = "button">
            <a href="http://www.google.cl">
              About
            </a>
          </li>
          <li className = "button">
            <a href="http://www.google.cl">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="left-container" style={{width: sizes[0]}}>
        <div className="header column">
          <nav className="menubar">
            <ul className="vertical">
              <li>
                Tools
              </li>
              <li className = "button">
                <a href="http://www.google.cl">
                  File  
                </a>
              </li>
              <li className = "button">
                <a href="http://www.google.cl">
                  Edit
                </a>
              </li>
              <li className = "button">
                <a href="http://www.google.cl">
                  Selection
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="right-container" style={{width: sizes[1]}}>
        <div className="left-container" style={{width: sizes[2]}}>
          <div className="header column">
            <div className="spin">
              <img src={react_logo} className="logo" alt="logo"/>
            </div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
        <div className="right-container" style={{width: sizes[3]}}>
          <div className="header column">
            Hi <code> print("hi")</code>
            <Uwu color={"green"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
