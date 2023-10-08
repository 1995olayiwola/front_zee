import './App.css';
import FlatDetail from "./components/FlatDetail"
import FlatDetail2 from "./components/FlatDetail2"
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail";
import Upload from './components/Upload';
import Upload2 from './components/Upload2';
import Register2 from './components/Register2';
import Login2 from './components/Login2'

import {BrowserRouter as Router,Route} from "react-router-dom";
 

function App() {
  return (
    <Router>
     
      <div className="App">
        <Header2/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact"  component={Contact}></Route>
        <Route path="/about"  component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blog/:id"  component={BlogDetail}></Route>
        <Route path="/register"  component={Register2}></Route>
        <Route path="/login"  component={Login2}></Route>
        <Route path="/bestflat/:id"  component={FlatDetail2}></Route>
        <Route path="/flat/:id"  component={FlatDetail}></Route>
        <Route path="/property2/upload"  component={Upload2}></Route>
        <Route path="/property/upload"  component={Upload}></Route>
       
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
