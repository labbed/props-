
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';

function App() {

  const handleAlert = (nom) => {
    alert(nom);
  };
  return (
    <div className="App">
    <ProfileComponent
    fullname="hamza"
    profession="commercant"
    bio="ancien combanttant"
    handleAlert={handleAlert}
    />
    </div>
  );
}

export default App;
