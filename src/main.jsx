import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { lazy } from 'react'
import "./styles/app.scss"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

const DashBoard = lazy(()=> import('./pages/DashBoard'))
const Transcation = lazy(()=> import('./pages/Transcation'))
const Products = lazy(()=> import('./pages/Products'))
const Customers = lazy(()=> import('./pages/Customers'))
const NewProduct = lazy(()=> import('./pages/management/NewProduct'))
const ProductMangement = lazy(()=> import('./pages/management/ProductMangement'))
const TransactionManagement = lazy(()=> import('./pages/management/TransactionManagement'))
const BarCharts = lazy(()=> import('./pages/Charts/BarCharts'))

import Loader from './components/Loader'


// const router = createBrowserRouter(

// createRoutesFromElements(
// <Route> 

// <Route path='/admin/dashboard' element = {<DashBoard />}  />
// <Route path='/admin/transcation' element = {<Transcation />}  />
// <Route path='/admin/products' element = {<Products />}  />
// <Route path='/admin/customers' element = {<Customers />}  />

// </Route>



// )

// )


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/admin/dashboard' element={
        <Suspense fallback={<Loader />}>
          <DashBoard />
        </Suspense>
      } />
      <Route path='/admin/transaction' element={
        <Suspense fallback={<Loader />}>
          <Transcation />
        </Suspense>
      } />
      <Route path='/admin/products' element={
        <Suspense fallback={<Loader />}>
          <Products />
        </Suspense>
      } />
      <Route path='/admin/customer' element={
        <Suspense fallback={<Loader />}>
          <Customers />
        </Suspense>
      } />

                    {/* MANAGEMENT */}


      <Route path='/admin/product/new' element={
        <Suspense fallback={<Loader />}>
          <NewProduct />
        </Suspense>
      } />
      <Route path='/admin/product/:id' element={
        <Suspense fallback={<Loader />}>
          <ProductMangement />
        </Suspense>
      } />
      <Route path='/admin/transaction/:id' element={
        <Suspense fallback={<Loader />}>
          <TransactionManagement />
        </Suspense>
      } />
      <Route path='/admin/chart/bar' element={
        <Suspense fallback={<Loader />}>
          <BarCharts />
        </Suspense>
      } />
    </>
  )
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
