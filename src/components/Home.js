import "../styles/layout/home.scss";
import photo from "../images/photo.jpeg"

function Home() {
  return (
    <div className="home">
        <div className="home__texts">
      <h2 className="home__texts-subtitle">Hi! I'm</h2>
      <h1 className="home__texts-title">Olga R. Garrucho</h1>
      </div>
      <img src={photo} className="home__img" />
    </div>
  );
}

export default Home;
