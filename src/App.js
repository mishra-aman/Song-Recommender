import "./styles.css";
import Songs from "./Songs";

export default function App() {
  return (
    <div className="App">
      <span
        style={{ fontSize: "2rem", width: "100%", textAlign: "center" }}
        role="img"
        aria-label="music"
      >
        🎶
      </span>
      <h1>Recommend a song</h1>
      <h4>Checkout my favourite songs! Select genre to get started</h4>
      <h4>Genre</h4>
      <Songs />
    </div>
  );
}
