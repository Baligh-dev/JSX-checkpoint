import logo from "./logo.svg";
import myImage from "./image2.jpg";
import "./styles.css";
function App() {
  return (
    <div className="all">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Baligh BEN HADJ LASSOUED</h1>
        <div className="snkImages">
          <img src={myImage} className="firstImage" alt="image2" />
          <img src="./image1.jpg" className="secondImage" alt="image1" />
        </div>
      </div>
      <video controls>
        <source
          src="./shingeki no kyojin video.mp4"
          className="theVideo"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default App;
