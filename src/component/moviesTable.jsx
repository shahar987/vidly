import Like
 from "./common/like";
import Table from "./common/table";

function MoviesTable({moviesPage, handleLike, deleteMovie, sortColumn, onSort }){
    const columns= [
        {path: 'title',lable: 'Title'},
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