/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import "./App.css";
import React from "react";
import "@nutui/nutui-react/dist/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Loading from "./components/loading";
import Auth from "./components/auth";
import Login from "./pages/login";

// 组件懒加载
const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Judge = React.lazy(() => import("./pages/judge"));
const About = React.lazy(() => import("./pages/about"));
const FlowQuery = React.lazy(() => import("./pages/flowquery"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="home"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="dashboard"
            element={
              <Auth auth="dashboard">
                <React.Suspense fallback={<Loading />}>
                  <Dashboard />
                </React.Suspense>
              </Auth>
            }
          ></Route>
        </Route>
        <Route
          path="/judge"
          element={
            <React.Suspense fallback={<Loading />}>
              <Judge />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/flowquery"
          element={
            <React.Suspense fallback={<Loading />}>
              <FlowQuery />
            </React.Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
