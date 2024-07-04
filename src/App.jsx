import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./page/HomePage";
import { CatalogPage } from "./page/CatalogPage";
import { Suspense } from "react";
import { FavoritesPage } from "./page/FavoritesPage";

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />        
          <Route path="*" element={<Navigate to='/' replace={true} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
