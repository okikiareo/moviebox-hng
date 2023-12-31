import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import home from "../assets/home.svg"
import projector from "../assets/projector.svg"
import tv from "../assets/tv.png";
import logout from "../assets/logout.svg"
import cal from "../assets/calendar.png"
import tvshow from "../assets/tvshow.svg"


function Movie() {
   const { id } = useParams();

   const [movie, setMovie] = useState([]);

   useEffect(() => {
      fetch("https://api.themoviedb.org/3/find/")
         .then(data => data.json())
         .then(movie => setMovie(movie))
   }, []);

   const api_url = "https://api.themoviedb.org/3/";
   const fetchmovie = async (id) => {
      const { data } = await axios.get(`${api_url}/${id}/discover/movie?api_key=d0f00c652a0ec5b927f52935e6ac4e46&sort_by=popularity.desc&language=en-US&page=1`)
   return data;
   }

   const selectMovie = (id) => {
      const movie = fetchmovie(id)
      setSelectedMovie(movie)
    }
   return (
      <div className="flex">
         <div className="menu" id="menus-card">
            <ul>
               <li className="movie-btn flex"> <img src={tv} alt="" />
                  <h3>MovieBox</h3>
               </li>
               <li>
                  <Link className="sub-menu flex" to="/">
                     <div className="join flex">
                        <img src={home} alt="" />
                        <h4>Home</h4>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link className="sub-menu cur-page flex">
                     <div className="join flex">
                        <img src={projector} alt="" />
                        <h4>Movies</h4>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link className="sub-menu flex">
                     <div className="join flex">
                        <img src={tvshow} alt="" />
                        <h4>TV Series</h4>
                     </div>
                  </Link>
               </li>
               <li><Link className="sub-menu flex">
                  <div className="join flex">
                     <img src={cal} alt="" />
                     <h4>Upcoming</h4>
                  </div>
               </Link>
               </li>
               <div className="play-quiz">
                  <p> Play movie quizes and earn free tickets</p>
                  <p className="cur-play">50k people are playing right now</p>
                  <Link href="" className="start-playing">start playing</Link>
               </div>
               <li><Link className="sub-menu pushin flex"><img src={logout} alt="" />
                  <h4>Logout</h4>  </Link> </li>
            </ul>
         </div>
         <div className="trailer">
            <div>
               video
               <YouTube

               />
            </div>
            <div>

               {id}
            </div>
         </div>

      </div>
   );
}
export default Movie;