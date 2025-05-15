import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

    </Routes>
  );
}