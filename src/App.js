import './App.css';
import ContainerPhotos from './components/ContainerPhotos/ContainerPhotos';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <ContainerPhotos />
    </>
  );
}

export default App;
