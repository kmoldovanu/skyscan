import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MyTrips from "./pages/MyTrips";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-zinc-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
