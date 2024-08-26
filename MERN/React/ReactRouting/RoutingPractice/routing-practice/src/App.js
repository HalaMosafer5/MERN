import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome</h1>
  </div>
);

const NumberDisplay = ({ number }) => (
  <div>
    <h1>The number is: {number}</h1>
  </div>
);

const WordDisplay = ({ word, textColor, bgColor }) => {
  const style = {
    color: textColor,
    backgroundColor: bgColor
  };
  return (
    <div style={style}>
      <h1>The word is: {word}</h1>
    </div>
  );
};

const RouteHandler = () => {
  const { param1, param2, param3 } = useParams();
  
  if (!isNaN(param1)) {
    // If param1 is a number
    return <NumberDisplay number={param1} />;
  } else if (param2 && param3) {
    // If param2 and param3 are they are colors
    return <WordDisplay word={param1} textColor={param2} bgColor={param3} />;
  } else {
    // If param1 is a word
    return <WordDisplay word={param1} />;
  }
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:param1/:param2?/:param3?" element={<RouteHandler />} />
    </Routes>
  </Router>
);

export default App;