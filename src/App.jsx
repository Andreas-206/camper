import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import {Loyout} from './components/Loyout/Loyout'
import {HomePage} from './page/HomePage'
import {CatalogPage} from './page/CatalogPage'
import {FavoritePage} from './page/FavoritePage'


export const App =() =>{
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Loyout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="catalog" element={<CatalogPage/>}/>
        <Route path="favorite" element={<FavoritePage/>}/>
        <Route path="*" element={<Navigate to="/" replace={true}/>}/>
      </Route>
    </Routes>
    </Suspense>
  );
}

