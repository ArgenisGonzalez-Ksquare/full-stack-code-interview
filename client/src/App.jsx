import { useState } from "react";
import "./App.css";
import Start from "./components/StarRating";

function App() {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="App">
      <div>
        <h3>Full Stack Code Interview</h3>
      </div>
      <div className="strarsWrapped">
        {stars.map((star, i) => (
          <Start
            key={i}
            starId={i}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
