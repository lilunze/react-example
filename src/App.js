/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import "./App.css";
import '@nutui/nutui-react/dist/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Judge from "./pages/judge";
// import Statistical from "./pages/statistical";
import FlowQuery from "./pages/flowquery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
        </Route>
        <Route path="/judge" element={<Judge />} />
        <Route path="/about" element={<About />} />
        <Route path="/flowquery" element={<FlowQuery />} />
      </Routes>
    </Router>
  );
}

export default App;
