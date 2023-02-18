import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginat";

function Movies(){
    const [state, setState] = useState({
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    })
    const [movieCount, setMovieCount] = useState(state.movies.length)
    const moviesPage = paginate(state.movies, state.currentPage, state.pageSize);



    const deleteMovie = (movie) =>{
        const movies = state.movies.filter(m => m._id !== movie._id)
        setState({movies: movies})
        setMovieCount(movieCount - 1)
    }

    const handleLike = (movie) =>{
        console.log(state)
        const movies2 = [...state.movies]
        const index = movies2.indexOf(movie)
        movies2[index] = {...movies2[index]}
        movies2[index].liked = !movies2[index].liked
        console.log(movies2)
        setState({movies:movies2})
    }

    const handlePageChange = (page) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: page})
    }
    
    return(
        
        <div>
                {movieCount === 0 ? <p> there are no movies</p>:
                <div>
                <p>Showing {movieCount} in the datebase.</p>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {moviesPage.map(movie =>(
    
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like 
                                liked={movie.liked}
                                onClick={()=>handleLike(movie)}
                                />
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => deleteMovie(movie)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                    
                </tbody>
                </table>
                <Pagination
                itemCount={movieCount}
                pageSize={state.pageSize}
                handlePageChange={handlePageChange}
                currentPage={state.currentPage}/>
                
                </div>}
        </div>
    )

}

export default Movies;