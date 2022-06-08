import react from "react";
import { Outlet } from "react-router-dom";
import Back from "../companents/Back/Back";
import Blog from "../companents/blog/Blog";

const Layouts = (props) => {
    return (
        <div>
            <Back/>
            <Blog/>
            <Outlet/>
        </div>
    )
    
}
export default Layouts;