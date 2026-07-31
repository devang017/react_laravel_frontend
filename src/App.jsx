import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { Container } from "react-bootstrap";

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const data = {
    isLoggedIn: isLoggedIn
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header props={data} />

      <main className="flex-grow-1 bg-light py-4">
        <Container>
          <AppRoutes />
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;