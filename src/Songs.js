import { useState } from "react";

const Songs = () => {
  const [songName, setSongName] = useState([]);

  function clickHandler(event) {
    let genre = event.target.innerText;
    setSongName(songsDb[genre]);
    songName.map((name) => name);
  }

  const songsDb = {
    rock: [
      {
        name: "Sympathy for the Devil - The Rolling Stones",
        rating: "7.8/10"
      },
      { name: "Iron Man - Black Sabbath", rating: "8.1/10" },
      { name: "Comfortably Numb - Pink Floyd", rating: "6.5/10" }
    ],
    pop: [
      { name: "Another Night - Real McCoy", rating: "7.3/10" },
      { name: "One More Night - Maroon 5", rating: "8.8/10" },
      { name: "TiK ToK - Ke$ha", rating: "7.9/10" }
    ],
    metal: [
      { name: "Crazy Train – Ozzy Osbourne", rating: "6.9/10" },
      { name: "Iron Man – Black Sabbath", rating: "8.2/10" },
      { name: "Master Of Puppets – Metallica", rating: "8.5/10" }
    ]
  };

  return (
    <>
      {Object.keys(songsDb).map((song) => (
        <button
          key={song}
          onClick={clickHandler}
          style={{ padding: "10px", margin: "5px", borderRadius: "10px" }}
        >
          {song}
        </button>
      ))}
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ul>
          {songName.map((song) => (
            <li
              key={song.name}
              style={{
                backgroundColor: "gray",
                listStyleType: "none",

                padding: "1rem 0.8rem",
                borderRadius: "0.5rem",
                margin: "1rem 1rem",
                display: "inline-block",
                width: "50%",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              {song.name}
              <small
                style={{
                  padding: "20px",
                  display: "block",
                  fontSize: "00.9rem",
                  fontWeight: "bold"
                }}
              >
                Rating: {song.rating}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Songs;
