import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const data = {
    isLoggedIn : isLoggedIn
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header props={data}/>

      <main className="flex-grow-1">
        <AppRoutes/>
      </main>

      <Footer />
    </div>
  );
}

export default App;