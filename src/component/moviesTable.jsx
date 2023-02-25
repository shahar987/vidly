import Like
 from "./common/like";
 import React from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

function MoviesTable({moviesPage, handleLike, deleteMovie, sortColumn, onSort }){
    const columns= [
        {path: 'title',lable: 'Title', content: movie => <Link to={`/movies/${movie._id}`} state={{id:movie._id}}>{movie.title}</Link>},
        {path: 'genre.name',lable: 'Genre'},
        {path: 'numberInStock',lable: 'Stock'},
        {path: 'dailyRentalRate',lable: 'Rate'},
        {
            key:'like', 
            content:movie =>(
            <Like liked={movie.liked}onClick={()=>handleLike(movie)}/>
            )
        },
        {
            key:'delete', 
            content:movie =>(
            <button type="button" className="btn btn-danger" onClick={() => deleteMovie(movie)}>Delete</button>
            )
        },
    ]

    
    return(
        <Table
        columns={columns} 
        sortColumn={sortColumn} 
        onSort={onSort} 
        data={moviesPage}
        />
    )
}

export default MoviesTable;