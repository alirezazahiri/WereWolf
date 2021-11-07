// react-router-dom
import { BrowserRouter } from "react-router-dom";

// DOM Renderer
import ReactDOM from 'react-dom';

// Components 
import App from './App';

// Style
import "./index.css";

// dists
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
