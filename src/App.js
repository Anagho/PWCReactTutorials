import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentsData from "./pages/StudentsData";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/About";
import ApplicationForm from "./pages/ApplicationForm";
import ContactUs from "./pages/ContactUs";

import RecruitmentForm from "./pages/RecruitmentForm";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import SingleBlogPost from "./pages/SingleBlogPost";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/studentsData"} element={<StudentsData />} />
          <Route path={"/ContactUs"} element={<ContactUs />} />
          <Route path={"/applicationForm"} element={<ApplicationForm />} />
          <Route path={"/recruitmentForm"} element={<RecruitmentForm />} />
          <Route path={"/posts"} element={<Posts />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/todos"} element={<Todos />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/singleBlogPost/:id"} element={<SingleBlogPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
