import React, {useState, useEffect} from 'react'
import './GetAllMoviesComponent.css'
import MovieComponent from '../MovieComponent/MovieComponent'
import axios from 'axios'

const GetAllMoviesComponent = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios
            .get(`https://movie-suggestion-be-ten.vercel.app/api/v1/movie/`)
            .then(response => setMovies(response.data))
            .catch((error) => {
                if(error.response)
                {
                  alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
                }
              })
    }, [])

  return (
    <div className='movies'>
        {movies.map(movieItem=>(
            <MovieComponent movieItem={movieItem}/>
        ))}
    </div>
  )
}

export default GetAllMoviesComponent