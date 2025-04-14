import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>This is Remote Repository ,Clone,Push and Pull.</h1>
     <h2>Bootstrap</h2>
     <p1>Bootstrap is ready to use HTML,CSS and JScode.</p1>
     <h2>React Bootstrap</h2>
     <p1>This is based on JSXML,CSS and JS</p1>
     <h2>Different between folder and repository</h2>
     <p1>Folder is not full trackable ,Repository is full trackable their are two type of reposotory 1-local ,2-Remote.</p1>
     <h2>Repository working</h2>
     <p1>1-First you have to make a new repository project.<br></br></p1>
     2-After that you have to copy the link of that project.<br></br>
     3-After that came to your VScode and tyoe in terminal git clone and paste the link infront.<br></br>
     4-Type git add . this may add this to staging.<br></br>
     5-After that give him command git commit -m "Created the react project".<br></br>
     6-Now add last if you make some changement then you have to push the changement at last command is git push -u origin main.
    </div>
  );
}

export default App;
