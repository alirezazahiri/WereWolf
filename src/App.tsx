import { Routes, Route } from "react-router-dom"

// persist
import { PersistGate } from "redux-persist/integration/react";

// redux 
import { Provider } from "react-redux"

// store 
import store, { persistor } from './redux/store';

// components 
import PlayerButtons from "./components/PlayerButtons";
import Scenarios from "./components/Scenarios/index";
import GameSetup from "./components/GameSetup/index";
import GodVision from "./components/GodVision/index";
import NavBar from "./components/Navbar/index";
import Layout from "./components/Layout/index";
import Guide from "./components/Guide/index";
import Home from "./components/Home/index";

// Toast
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-setup" element={<GameSetup />} />
            <Route path="/players-roles" element={<PlayerButtons />} />
            <Route path="/god-vision" element={<GodVision />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
          <Layout />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
