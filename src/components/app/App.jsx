// import { RouterProvider } from "react-router-dom";

// import { router } from "../../routes/router";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CertificatesPage from "../pages/CertificatesPage";
import HistoryPage from "../pages/HistoryPage";
import "../../background";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
