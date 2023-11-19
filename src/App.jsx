import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import PageConterner from './container/PageConterner';
import Sidebar from './container/Sidebar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PageConterner>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/detail/:keyword" element={<Search />} />
          </Routes>
        </PageConterner>
      </BrowserRouter>
    </>
  )
}

export default App
