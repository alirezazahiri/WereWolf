import { Routes, Route } from "react-router-dom"

// persist
import { PersistGate } from "redux-persist/integration/react";

// redux 
import { Provider } from "react-redux"

// store 
import store, {persistor} from './redux/store';

// components 
import Home from "./components/Home/index";
import GameSetup from "./components/GameSetup/index";
import NavBar from "./components/Navbar/index";
import Layout from "./components/Layout/index";


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-setup" element={<GameSetup />} />
          <Route path="/players-roles" element={<Home />} />
          <Route path="/god-vision" element={<Home />} />
          <Route path="/scenarios" element={<Home />} />
        </Routes>
        <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App;
