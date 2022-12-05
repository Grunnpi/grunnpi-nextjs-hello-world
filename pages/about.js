import React from 'react';
import ReactDOM from 'react-dom';

function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      About, with Likes <br/>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
//const About = () => <div>About us</div>;
//export default About;
export default HomePage;
