import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/drawer/drawer';
import {
  BrowserRouter as Router,
  Route, Routes, useLocation
} from 'react-router-dom';
import { Home } from './components/sub_components/home/home';
import { About } from './components/sub_components/about/about';
import { Events } from './components/sub_components/events/events';
import { Testimonials } from './components/sub_components/testimonials/testimonials';
import { Trinity } from './components/sub_components/trinity/trinity';
import { Store } from './components/sub_components/store/store';
import { Contact } from './components/sub_components/contact/contact';
import AppStore from './Shared/stores/AppStore';
import { AppApi } from './Shared/Apis/AppApi';
import { AppContext } from './components/Context';
import { AnimatePresence } from 'framer-motion';


const store = new AppStore();
const api = new AppApi(store);

function App() {
  return (

    <AppContext.Provider value={{ store, api }}>
      <Router>
        <Routes>
          <Route path="*" element={<MiniDrawer />} />
        </Routes>
      </Router>
    </AppContext.Provider>

  );
}

export default App;

export const Routing = () => {
  // const { api, store } = useAppContext();

  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/trinity" element={<Trinity />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>

  )




}