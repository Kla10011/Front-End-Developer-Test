import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import DeleteRecipe from './pages/DeleteRecipe';
import Dressing from './pages/Dressing';
import Edit from './pages/Edit';
import Fruit from './pages/Fruit';
import LargerLabel from './pages/LargerLabel';
import LargerLabel1 from './pages/LargerLabel1';
import Protein from './pages/Protein';
import Recipe from './pages/Recipe';
import RecipeName from './pages/RecipeName';
import SaladMaker from './pages/SaladMaker';
import SelectIngredients from './pages/SelectIngredients';
import SelectIngredients1 from './pages/SelectIngredients1';
import Toppings from './pages/Toppings';
import Vegetables from './pages/Vegetables';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/DeleteRecipe', element: <DeleteRecipe /> },
{ path: '/Dressing', element: <Dressing /> },
{ path: '/Edit', element: <Edit /> },
{ path: '/Fruit', element: <Fruit /> },
{ path: '/LargerLabel', element: <LargerLabel /> },
{ path: '/LargerLabel1', element: <LargerLabel1 /> },
{ path: '/Protein', element: <Protein /> },
{ path: '/Recipe', element: <Recipe /> },
{ path: '/RecipeName', element: <RecipeName /> },
{ path: '/SaladMaker', element: <SaladMaker /> },
{ path: '/SelectIngredients', element: <SelectIngredients /> },
{ path: '/SelectIngredients1', element: <SelectIngredients1 /> },
{ path: '/Toppings', element: <Toppings /> },
{ path: '/Vegetables', element: <Vegetables /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}