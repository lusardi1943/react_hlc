import Navbar from '../components/Navbar';

export default function News() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Noticias</h1>
        <p>Mantente al día con las últimas noticias tecnológicas.</p>
      </div>
    </div>
  );
}