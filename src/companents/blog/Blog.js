import react from "react";
import { useParams } from "react-router-dom";

const Blog = () => {

    const params = useParams();

    
    return (
        <div>
            <h1>{params.news}</h1>
            <p>asddfhadfladsmfkja bdfla;ldfa;vmaj;a;kf aewfmkav;fom</p>
        </div>
    )
}
export default Blog;