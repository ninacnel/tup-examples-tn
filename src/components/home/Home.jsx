import Columns from "../columns/Columns"
import Movies from "../movies/Movies"

const Home = () => {
    //aca voy a tener todo lo de la pagina principal
  return (
    <div className="mb-5">
        <h1>Home</h1>
        <Columns/>
        <Movies/>
    </div>
  )
}

export default Home