import { useEffect, useState } from 'react';
import { Ring } from 'react-awesome-spinners'
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=qbJze5GSpd3UhrOIouNn80kXmkE3OEhN&q=thor&limit=25&offset=0&rating=g&lang=en'

  // const getGifs = async () => {
  //   const response = await fetch(url)
  //   const { data, meta, pagination } = await response.json()
  //   // console.log(data, meta, pagination);
  //   // const data = response.data;
  //   console.log(data);

  //   const gifs = data.map(gifs => ({
  //     id: gifs.id,
  //     title: gifs.title,
  //     images: gifs.images.downsized_small
  //   }))
  //   return gifs;
  // }
  // console.log(getGifs());


  useEffect(() => {
    setError(false);
    setLoading(true)
    const fetchData = () => {
      try {
        setTimeout(async () => {
          const response = await fetch(url)
          const { data } = await response.json()
          // console.log(data, meta, pagination);
          // const data = response.data;
          console.log(data);
          setImages(data)
          setLoading(false)
        }, 2000)
      } catch (error) {
        setError(true)
      }
    }
    fetchData();
  }, [url])

  const addValue = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <>
      <h2>🎉🥳🍾🎁🎊Enhorabuena por todo lo que estáis consiguiendo hasta ahora
      </h2>
      <p>Nada es tan difiícil que no pueda conseguir la fortaleza - Julio César</p>
      {/* <p>{counter} </p>
      <button onClick={addValue}>+1</button> */}
      {error ?? '404 página no encontrada'}
      {loading ? <Ring /> : null}
      {images ? images.map(({ id, images, title }) => (
        <div key={id}>
          <img src={images.original.url} alt={title} />
        </div>
      )) : 'No elements'}
    </>
  )
}

export default App;
