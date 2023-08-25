import {
  createBrowserRouter,
  Route,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";

import Header from "./default/header";
import Main from "./Sections/Main";
import Pricing from "./Sections/Pricing";
import Footer from "./default/footer";
import About from "./Sections/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="pricing" element={<Pricing />}>
            <Route index element={<Footer />} />
          </Route>
          <Route path="about" element={<About />}/>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
