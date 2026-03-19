import { Route, Routes } from "react-router-dom";
import MainPage from "src/pages/main/MainPage.tsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
