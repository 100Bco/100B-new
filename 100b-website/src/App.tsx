import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Build from './pages/Build';
import ContainerClub from './pages/ContainerClub';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trade" element={<Trade />} />
          <Route path="build" element={<Build />} />
          <Route path="cc" element={<ContainerClub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
