import { Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";
import { Portfolio } from "./Pages/Portfolio";
import { DistributorLoader } from "./Pages/DistributorLoader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/distributor" element={<DistributorLoader />} />
      <Route
        path="/spa"
        component={() => {
          window.location.href = "https://deft-kataifi-80f7ca.netlify.app/";
          return null;
        }}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
