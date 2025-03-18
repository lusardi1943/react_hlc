import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Bienvenido a TechAABB</h1>
        <p>Explora las últimas noticias y tendencias en tecnología.</p>
      </div>
    </div>
  );
}