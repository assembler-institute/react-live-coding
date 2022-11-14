import { Ring } from 'react-awesome-spinners'
import './App.css';
import useFetch from './hooks/useFetch';

function App() {

  const { images: img, loading, error } = useFetch();

  return (
    <>
      <h2>🎉🥳🍾🎁🎊Enhorabuena por todo lo que estáis consiguiendo hasta ahora
      </h2>
      <p>Nada es tan difiícil que no pueda conseguir la fortaleza - Julio César</p>
      {error ?? '404 página no encontrada'}
      {loading ? <Ring /> : null}
      {img ? img.map(({ id, images, title }) => (
        <div key={id}>
          <img src={images.original.url} alt={title} />
          <p>{title}</p>
        </div>
      )) : 'No elements'}
    </>
  )
}

export default App;
