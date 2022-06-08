import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactPage";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./companents/menu/Menu";
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Description from "./companents/description/discription";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import Blog from "./companents/blog/Blog";
import layouts from "./layouts/Layouts";
import Back from "./companents/Back/Back";
import Layouts from "./layouts/Layouts";


function App() {
  return (
      <>
             <Routes>
                 <Route index path='/' element={<Menu/> }/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/description" element={<Description/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/blogs" element={<BlogsPage/>}/>

                <Route path="/" element={<Layouts/>}>
                    <Route path="/blogs/:news" element={<Blog/>}/>
                </Route>
            </Routes>
      </>
  );
}

export default App;