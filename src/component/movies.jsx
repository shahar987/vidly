import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginat";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash'

function Movies(){

    const [state, setState] = useState({
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: [{_id: "", name: "All Genre"},...getGenres()],
        selectedGenre:null,
        sortColumn: {path: 'title', order: 'asc'}
    })
    const [movieCount, setMovieCount] = useState(state.movies.length)
    
    
    const getPageData = () =>{
        const filtered = state.selectedGenre ? state.movies.filter(movie => movie.genre._id === state.selectedGenre) : state.movies
        const sorted = _.orderBy(filtered, [state.sortColumn.path], [state.sortColumn.order])
        const moviesPage = paginate(sorted, state.currentPage, state.pageSize);

        return {totalCount: filtered.length, data: moviesPage}
    }


    const deleteMovie = (movie) =>{
        const movies2 = state.movies.filter(m => m._id !== movie._id)
        setState({
            movies: movies2,
            pageSize: state.pageSize,
            currentPage: state.currentPage,
            genres: state.genres,
            selectedGenre: state.selectedGenre,
            sortColumn: {path: state.sortColumn.path, order: state.sortColumn.order}
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
            selectedGenre: state.selectedGenre,
            sortColumn: {path: state.sortColumn.path, order: state.sortColumn.order}
        })
    }

    const handlePageChange = (page) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: page,
            genres: state.genres,
            selectedGenre: state.selectedGenre,
            sortColumn: {path: state.sortColumn.path, order: state.sortColumn.order}
            })
    }

    const handleGenreFilter = (genre) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: 1,
            genres: state.genres,
            selectedGenre: genre._id,
            sortColumn: {path: state.sortColumn.path, order: state.sortColumn.order}
            })
    }

    const handleSort= (sortColumn) =>{
        setState({
            movies:state.movies,
            pageSize: state.pageSize,
            currentPage: 1,
            genres: state.genres,
            selectedGenre: state.selectedGenre,
            sortColumn: sortColumn
            })

    }

    const result = getPageData()
    
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
                    <p>Showing {result.totalCount} in the datebase.</p>
                    <MoviesTable
                    moviesPage={result.data}
                    sortColumn={state.sortColumn}
                    deleteMovie={deleteMovie}
                    handleLike={handleLike}
                    onSort={handleSort}
                    />
                    <Pagination
                    itemCount={result.totalCount}
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