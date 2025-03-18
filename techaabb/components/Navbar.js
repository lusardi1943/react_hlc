import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">TechAABB</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <a href="https://www.techcrunch.com" className="nav-link" target="_blank" rel="noopener noreferrer">Noticias</a>
            </li>
            <li className="nav-item">
              <a href="https://www.theverge.com" className="nav-link" target="_blank" rel="noopener noreferrer">Tecnología</a>
            </li>
            <li className="nav-item">
              <a href="https://www.github.com" className="nav-link" target="_blank" rel="noopener noreferrer">Código</a>
            </li>
            <li className="nav-item">
              <a href="https://www.stackoverflow.com" className="nav-link" target="_blank" rel="noopener noreferrer">Comunidad</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;