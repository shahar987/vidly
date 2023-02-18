

function Like({liked, onClick}){

    return(
        <i 
            className={liked? "fa fa-heart":"fa fa-heart-o"}
            aria-hidden="true"
            onClick={()=>onClick()}
            style={{cursor: "pointer"}}
            ></i>
    )
}

export default Like;
