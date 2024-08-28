import { useState } from "react";
import Movies from "../movies/Movies"
import MovieForm from "../movieForm/MovieForm";
import { Button } from "react-bootstrap";

const Home = () => {
    const [showForm, setShowForm]=useState(false);

    const showFormHandler =()=>{
      setShowForm((prevState)=>!prevState);
    }
  return (
    <div className="mb-5">
      <Button onClick={showFormHandler}>Create new movie</Button>
<div className="d-flex">
{showForm && (
          <MovieForm/>
        )}
        <Movies/>
</div>
    </div>
  )
}

export default Home