import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import DaCode from './pages/DaCode/DaCode';
import Case from './pages/Case/Case';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />  
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/daCode" exact component={DaCode} />
          <Route path="/case" exact component={Case} />
          <Route path="/Blog" exact component={Blog} />
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
