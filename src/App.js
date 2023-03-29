import { About } from "./Components/About";
import { Home } from "./Components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { NoMatch } from "./Components/Nomatch";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
