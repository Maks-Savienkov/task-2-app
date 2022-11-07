import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./pages/About";

function App() {
    const router = createBrowserRouter([
            {path: '/home', element: <Home/>},
            {path: '/about', element: <About/>},
        ])

    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    );
}

export default App;
