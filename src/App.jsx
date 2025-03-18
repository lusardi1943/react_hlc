import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Llamada a la API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 6))); // Mostrar solo 6 publicaciones
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Bienvenido Morgado Berruezo a TechAABB</h1>
        <p>Explora las últimas noticias y tendencias en tecnología.</p>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;