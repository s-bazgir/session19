import "./style.css"

export function FilmTv(props){
    function renderFarm(){
        return props.data.map(function(filmItem){
            return(<li>
                        <a href={filmItem.link}>
                            <div className="filmHolder">
                                <img src={filmItem.imageUrl} />
                                <div className="play">
                                     <i className="fa-solid fa-play"></i>
                                </div>  
                                <div className="filmText">
                                    <p>{filmItem.text}</p>
                                </div>  
                            </div>
                        </a>
                    </li>
            )
        })
    }
    return(
            <div className="tv">
                <ul className="tvList">
                    {renderFarm()}
                </ul>    
            </div>
          )
}