import logo from './logo.svg';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Main from './components/Main';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
}

export default App;
