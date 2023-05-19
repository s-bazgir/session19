import "./style.css"
export function PopularMovieList(props){      
      function renderFilmList(){
            return props.data.map(function(movie , index){
                return (
                    <li key={index}>
                        <a href={movie.link}>
                            <div className="imageHolder">
                                <img src={movie.imageUrl} />
                                <div className="imageHover"></div>
                            </div>
                        </a>
                    </li>
                )
            })
      }
      return (
              <div className="popular">
                    <h3>{props.title}</h3>
                    <ul className="mostPopular">
                      {renderFilmList()}
                    </ul>
                </div>              
      )     
    
}