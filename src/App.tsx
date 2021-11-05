import { Routes, Route } from "react-router-dom"

// redux 
import { Provider } from "react-redux"

// store 
import store from './redux/store';

// components 
import Home from "./components/Home/index";
import NavBar from "./components/Navbar/index";
import Layout from "./components/Layout/index";


const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-setup" element={<Home />} />
        <Route path="/players-roles" element={<Home />} />
        <Route path="/god-vision" element={<Home />} />
        <Route path="/scenarios" element={<Home />} />
      </Routes>
      <Layout />
    </Provider>
  );
}

export default App;
