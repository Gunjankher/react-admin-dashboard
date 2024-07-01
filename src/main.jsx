import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { lazy } from 'react'
import "./styles/app.scss"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Link } from 'react-router-dom'

const DashBoard = lazy(()=> import('./pages/DashBoard'))
const Transcation = lazy(()=> import('./pages/Transcation'))
const Products = lazy(()=> import('./pages/Products'))
const Customers = lazy(()=> import('./pages/Customers'))
const NewProduct = lazy(()=> import('./pages/management/NewProduct'))
const ProductMangement = lazy(()=> import('./pages/management/ProductMangement'))
const TransactionManagement = lazy(()=> import('./pages/management/TransactionManagement'))
const BarCharts = lazy(()=> import('./pages/Charts/BarCharts'))
const LineCharts = lazy(()=> import('./pages/Charts/LineChart'))
const PieCharts = lazy(()=> import('./pages/Charts/PieCharts'))
const Coupon = lazy(()=> import('./pages/apps/Coupon'))
const StopWatch = lazy(()=> import('./pages/apps/StopWatch'))
const Toss = lazy(()=> import('./pages/apps/Toss'))


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

    <Route 
    path='/'
    element ={
      <Suspense fallback={<Loader />}>
      <Link to="/admin/dashboard">
      <button className='visit-button'>Visit Dashboard</button>
    </Link>
    </Suspense>
    }
    
    />
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


      {/* Charts */}

      <Route path='/admin/chart/bar' element={
        <Suspense fallback={<Loader />}>
          <BarCharts/>
        </Suspense>
      } />
      <Route path='/admin/chart/line' element={
        <Suspense fallback={<Loader />}>
          <LineCharts/>
        </Suspense>
      } />
      <Route path='/admin/chart/pie' element={
        <Suspense fallback={<Loader />}>
          <PieCharts/>
        </Suspense>
      } />

      {/* Apps */}

      <Route path='/admin/apps/stopwatch' element={
        <Suspense fallback={<Loader />}>
          <StopWatch />
        </Suspense>
      } />
      <Route path='/admin/apps/coupon' element={
        <Suspense fallback={<Loader />}>
          <Coupon />
        </Suspense>
      } />
      <Route path='/admin/apps/toss' element={
        <Suspense fallback={<Loader />}>
          <Toss/>
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
