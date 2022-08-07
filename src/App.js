import logo from './logo.svg';
import './App.css';

function App() {
  function handleClickGet() {
    const url = "http://amazon.forever8.com:8080/inventory-summery/33e52852-a51d-40ad-9f90-21e81373872e?snapshotDateFrom=2022-07-01&snapshotDateTo=2022-07-31";
    fetch(url, {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
  }

  function handleClickPost() {
    let _data = {
      title: "foo",
      body: "bar",
      userId:1
    }
    const url = "http://amazon.forever8.com:8080/inventory-summery/33e52852-a51d-40ad-9f90-21e81373872e?snapshotDateFrom=2022-07-01&snapshotDateTo=2022-07-31";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={handleClickGet}>click me GET</button>
      <button onClick={handleClickPost}>click me POST</button>
      </header>
    </div>
  );
}

export default App;
