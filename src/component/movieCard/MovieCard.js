import '../filter/Filter.css'
const MovieCard = (props) => {
  return (
    <div>
      <div className='cont'>
        <div className='imag'>
          <img src={props.posterurl} alt='Moviesimg' />
        </div>
        <div className='descr' >
          <h4>{props.title}</h4>
        </div>
      </div>
      <div className='addFilm'>
      </div>
    </div>
  )
}

export default MovieCard