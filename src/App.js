import logo from "./logo.svg";
import "./App.css";
import OrderForm from "./components/OrderForm";
import FrontPage from "./pages/FrontPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <OrderForm />
    </div>
  );
}

export default App;
