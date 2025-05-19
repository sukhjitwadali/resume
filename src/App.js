import './App.css';
import Summary from './components/summary';
import Education from './components/education';
import Header from './components/Header';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
function App() {
  return (
    <div className="App">
      <Header/>
      <Summary/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      
    </div>
  );
}

export default App;
