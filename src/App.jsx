import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from './shared.jsx';
import { Home } from './pages/Home.jsx';
import { Solutions } from './pages/Solutions.jsx';
import { About } from './pages/About.jsx';
import { FeaturePage } from './pages/FeaturePage.jsx';
import { Pricing } from './pages/Pricing.jsx';
import { Contact } from './pages/Contact.jsx';

function App() {
 const path = window.location.pathname.replace(/\/$/, '') || '/';
 let page;
 if (path === '/') page = <Home />;
 else if (path === '/solutions') page = <Solutions />;
 else if (path === '/about') page = <About />;
 else if (path === '/pricing') page = <Pricing />;
 else if (path === '/contact') page = <Contact />;
 else if (['/features', '/operations', '/ai-tools', '/partners'].includes(path)) page = <FeaturePage />;
 else page = <Home />;
 return <div className="site"><Header /><AnimatePresence mode="wait"><motion.main key={path} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }}>{page}</motion.main></AnimatePresence><Footer /></div>;
}
export default App;
