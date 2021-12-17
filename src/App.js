import logo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by Sara sabbagh and{" "}
          <a
            href="https://github.com/Saraesabbagh/dictionary-react-project"
            target="_blank"
            rel="noreferrer"
          >
            Opensourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
