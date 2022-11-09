import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [movie,setMovies]=useState([]);
    const getMovie = async()=>{

        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        
        setMovies(json.data);

    };

    useEffect(()=>{
        getMovie();
    },[]);

    return (<div>
                <img src={movie.movie.medium_cover_image} alt={movie.movie.title}/>
                <h2>{movie.movie.title}</h2>    
                <p>{movie.movie.description_full}</p>
                <ul>
                  {movie.movie.genres.map((g)=>
                  <li key={g}>{g}</li>
                  )}
                </ul>    

      
    
  
  </div>);
}

export default Detail;