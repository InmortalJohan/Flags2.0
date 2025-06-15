import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
// import LoadingLayout from "./Layouts/LoadingLayout";
// import CountryLayout from "./Layouts/CountryLayout";
import Home from "./Pages/Home";
// import Country from "./Pages/Country";
// import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="country/:countryName" element={<CountryLayout />}> */}
        {/* <Route index element={<Country />} /> */}
      {/* </Route> */}
      {/* // <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
