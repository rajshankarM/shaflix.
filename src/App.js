import logo from './logo.svg';
import './App.css';



export default function App() {

  // const names = ["Arul","Shankar","Sakthi","Siva", "Bob"]
  const users = [
    {name:"Arul",
     pic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},

    {name:"Shankar",  
    pic:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},

    {name:"Sakthi",  
    pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"},

    {name:"Siva",  
    pic:"https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-wallpaper-hd-300x300.gif"},

    {name:"Bob", 
     pic:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"},

]

 const movies = [
 
  {
    name : "Avangers",
    poster : "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating : "8",
    summary : "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D."
  },

  {
    name : "Titanic",
    poster : "https://m.media-amazon.com/images/I/613ghK14UjL._AC_SX466_.jpg",
    rating : "8",
    summary : "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him."
  },

  {
    name : "Pink",
    poster : "https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg",
    rating : "8",
    summary : "After being molested, Minal, along with her friends, tries to file an FIR against a politician's nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
  },

  {
    name : "Mangatha",
    poster : "https://i.pinimg.com/564x/5c/ce/44/5cce446b9de4e3a035eb1b8bd469a3da.jpg",
    rating : "8",
    summary : "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot."
  },

  {
    name : "Ispade Rajavum Idhaya Raniyum",
    poster : "https://m.media-amazon.com/images/M/MV5BYTVkNzRjZmMtZWM0Ny00MzAwLTg4MjAtMzQ0MWJiNmJlZWYyXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
    rating : "8.5",
    summary : "Gautham, an unemployed youth, is in love with Thara, who comes from an affluent family. However, the repercussions of his disturbing childhood hampers their relationship."
  },


  {
    name : "Madras",
    poster : "https://m.media-amazon.com/images/M/MV5BODUyYmVmZjQtOGYyYS00ZTgxLTlhOWYtYTRjMzk4ZDA1ZDgxXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_.jpg",
    rating : "8",
    summary : "A wall creates discord between two factions of a political party. Kaali and his friend Anbu, who is a political aspirant, get embroiled in the brutal political rivalry."
  },
  


 ]
  return (
    <div className="App">
    {/* <Msg name="Arul"/>
    <Msg name="Shankar"/>npm start
    <Msg name="Sakthi"/>
    <Msg name="Siva"/> */}

    {/* {users.map((ur) => (
       <Msg 
       name={ur.name}
       pic={ur.pic}
       /> 
    ))} */}

     {/* <MovieList movies={movies} /> */}
    

    </div>
  );
}



function MovieList(){
  <section className="movie-list">
  {Movie.map((mv)=>(
    <Movie name={mv.name}
    rating={mv.rating}
    summary={mv.summary}
     poster={mv.poster}
      />

  ))}
  </ section>
}

function Msg({name, pic}){
  return (
  <div> 
  <img className="user-pic" src={pic} alt={name}/> 
  <h1 className="user-name"> {name} !!!</h1>
  </div>
  );
}

function Movie({name, rating, summary, poster}){
  return <div className="movie-container">
    <img src={poster}
    alt={name}
    className="movie-poster" />
    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating">⭐{rating}</p>
    </div>
    <p className="movie-summary">{summary}</p>
  </div>
}