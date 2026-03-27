import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Credit = lazy(() => import("../pages/Credit"));
const Result = lazy(() => import("../pages/Result"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/result" element={<Result />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
