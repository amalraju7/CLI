
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the React Code Editor</h1>
      <p>
        This is a simple code editor built using React and Monaco Editor. You can use it to write and edit JavaScript code snippets.
      </p>
      <Link to="/codecell" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
        Go to Code Editor
      </Link>
    </div>
  );
}

export default Home;
