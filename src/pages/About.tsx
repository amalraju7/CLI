
import React from 'react';
import './About.css'; 

const About: React.FC = () => {
  return (
    <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Our Interactive JavaScript Coding Environment</h1>
      <p>
        Welcome to our interactive browser-based coding environment! This project is designed to provide a powerful and user-friendly platform for writing, executing, and experimenting with JavaScript code directly in your web browser.
      </p>
      <p>
        Our coding environment combines the convenience of a code editor with the capabilities of a code execution platform. It's inspired by popular tools like Jupyter Notebook, CodeSandbox, and CodePen, and it comes with a variety of features to enhance your coding experience.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>Write and edit JavaScript code in a user-friendly code editor.</li>
        <li>Execute your code directly in the browser without needing external tools.</li>
        <li>See real-time output, including console logs and returned values.</li>
        <li>Bundling and transpilation of your code for compatibility.</li>
        <li>Save and share your code snippets with unique URLs.</li>
        <li>Access a wide range of JavaScript libraries and modules.</li>
        <li>Ensure secure code execution with built-in sandboxing.</li>
      </ul>
      <h2>How to Use:</h2>
      <p>
        To get started, simply navigate to the home page and start writing your JavaScript code. You can execute the code by clicking the "Run" button, and the output will be displayed in real-time.
      </p>
      <p>
        Whether you're a beginner learning JavaScript or an experienced developer experimenting with new ideas, our coding environment is here to support your coding journey. We hope you enjoy using our platform and find it helpful for your coding needs!
      </p>
    </div>
  );
};

export default About;
