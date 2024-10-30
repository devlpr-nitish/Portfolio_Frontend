import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import BlogDetail from "./components/BlogDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Blogs from "./pages/Blogs.jsx";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideNavbarOnNotFound = location.pathname === "/404" || location.pathname === "*";

  return (
    <>
      {!hideNavbarOnNotFound && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
