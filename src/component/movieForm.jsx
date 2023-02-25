import { useNavigate, useLocation } from 'react-router-dom';
import React from "react";


function MovieForm(){

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.id)

    const handleSave = () => {
        navigate('/movies');

    }
    
    return(
        <div>
            <h1>Movie Form {location.state.id}</h1>
            <button onClick={()=>handleSave()} type="button" className="btn btn-primary">Save</button>
        </div>

    )
}

export default MovieForm;