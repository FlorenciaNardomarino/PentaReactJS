import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
import CurriculumPage from './pages/CurriculumPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


import './App.css';

function App() {
  return (
      <Router>
          <Nav/>
          <Header>
          </Header>
          <Switch>
            <Route exact path="/" component={HomePage}  />
            <Route exact path="/productos" component={ProductosPage} />
            <Route exact path="/contacto" component={ContactoPage} />
            <Route exact path="/cv" component={CurriculumPage} />
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
