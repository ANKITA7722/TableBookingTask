import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;