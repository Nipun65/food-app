import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import MobileVerification from "./components/MobileVerification";
import OtpVerification from "./components/OtpVerification";
import Home from "./components/Home";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<MobileVerification />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant-detail" element={<RestaurantDetail />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
};

export default App;
