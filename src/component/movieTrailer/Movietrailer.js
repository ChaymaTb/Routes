import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Movietrailer = ({movies}) => {
    const { id } = useParams();
    console.log(id);

return(
    <div >
        <Link to='/'>
            <div className='nav'>
                <nav>Movie4u</nav>
            </div>
        </Link>
        {movies.filter((el) => el.id === parseInt(id)).map((movie,i)=> 
        <div key={i} className='trailer'>
            <img src={movie.posterurl} alt="Film" />
            <p>{movie.description}</p>
        </div>)}
    </div>
    )
}

export default Movietrailer