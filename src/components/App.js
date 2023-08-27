import { BrowserRouter } from "react-router-dom";
import Header from "./default/header";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
