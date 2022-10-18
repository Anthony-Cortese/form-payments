import logo from "./logo.svg";
import "./App.css";
import OrderForm from "./components/OrderForm";
import FrontPage from "./pages/FrontPage";
import Navbar from "./components/Navbar";
import Checkout from "./payments/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <OrderForm />
      <Checkout />
    </div>
  );
}

export default App;
