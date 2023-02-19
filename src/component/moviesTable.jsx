import Like
 from "./common/like";
function MoviesTable({moviesPage, handleLike, deleteMovie }){
    
    return(
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
    )
}

export default MoviesTable;