import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ExercisePage from "./Pages/ExercisePage";
import FoodPage from "./Pages/FoodPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/food-supplements" element={<FoodPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
