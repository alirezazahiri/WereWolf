import { Routes, Route } from "react-router-dom"

// persist
import { PersistGate } from "redux-persist/integration/react";

// redux 
import { Provider } from "react-redux"

// store 
import store, { persistor } from './redux/store';

// components 
import SuggestedScenarios from "./components/SuggestedScenarios";
import SuggestionVision from "./components/SuggestionVision";
import PlayerButtons from "./components/PlayerButtons";
import PlayerVision from "./components/PlayerVision";
import Scenarios from "./components/Scenarios";
import GameSetup from "./components/GameSetup";
import GodVision from "./components/GodVision";
import Settings from "./components/Settings";
import NavBar from "./components/Navbar";
import Layout from "./components/Layout";
import Guide from "./components/Guide";
import Home from "./components/Home";

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
            <Route path="/god-vision/:playerName" element={<PlayerVision />} />
            <Route path="/suggested-scenarios" element={<SuggestedScenarios />} />
            <Route path="/suggested-scenarios/:id" element={<SuggestionVision />} />
            <Route path="/god-vision" element={<GodVision />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
          <Layout />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
