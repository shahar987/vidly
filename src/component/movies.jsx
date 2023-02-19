import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginat";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

function Movies(){

    const [state, setState] = useState({
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: [{name: "All Genre"},...getGenres()],
        selectedGenre:null
    })
    const [movieCount, setMovieCount] = useState(state.movies.length)

    const filtered = state.selectedGenre ? state.movies.filter(movie => movie.genre._id === state.selectedGenre) : state.movies
    const moviesPage = paginate(filtered, state.currentPage, state.pageSize);



    const deleteMovie = (movie) =>{
        const movies2 = state.movies.filter(m => m._id !== movie._id)
        setState({
            movies: movies2,
            pageSize: state.pageSize,
            currentPage: state.currentPage,
            genres: state.genres,
            selectedGenre: state.selectedGenre
        })
        setMovieCount(movieCount - 1)
    }

    const handleLike = (movie) =>{
        const movies2 = [...state.movies]
        const index = movies2.indexOf(movie)
        movies2[index] = {...movies2[index]}
        movies2[index].liked = !movies2[index].liked
        setState({
            movies:movies2,
            pageSize: state.pageSize,
            currentPage: state.currentPage,
            genres: state.genres,
            selectedGenre: state.selectedGenre
        })
    }

    const handlePageChange = (page) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: page,
            genres: state.genres,
            selectedGenre: state.selectedGenre
            })
    }

    const handleGenreFilter = (genre) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: 1,
            genres: state.genres,
            selectedGenre: genre._id
            })
    }
    
    return(
        
        <div>
                {movieCount === 0 ? <p> there are no movies</p>:
                <div className="row">
                <div className="col-3">
                <ListGroup
                selectedGenre={state.selectedGenre}
                onItemSelect={handleGenreFilter}
                items={state.genres}/>
                </div>
                <div className="col">
                    <p>Showing {filtered.length} in the datebase.</p>
                    <MoviesTable
                    moviesPage={moviesPage}
                    deleteMovie={deleteMovie}
                    handleLike={handleLike}
                    />
                    <Pagination
                    itemCount={filtered.length}
                    pageSize={state.pageSize}
                    handlePageChange={handlePageChange}
                    currentPage={state.currentPage}/>
                </div>
                </div>
                }
        </div>
    )

}

export default Movies;