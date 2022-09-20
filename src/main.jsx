import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './components/General.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from './pages/Blog'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import BlogDetail from './pages/BlogDetail'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index={true} element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-detail/:postId' element={<BlogDetail />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
