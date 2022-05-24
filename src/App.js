import React from "react";
import Users from "./companents/users/Users";
import ContactPage from "./pages/contactPage/ContactPage";
import MainPage from "./pages/mainPage/MainPage";
function App (){
    const users = [
        {
            name: "Dastan",
            age: 25,
            position: "Front-end"
        },
        {
            name: "Jalil",
            age: 16,
            position: "schoolboy"
        },
        {
            name: "Ruslan",
            age: 17,
            position: "Student geekTech"
        }
    ]
    return (
        <>
        <ContactPage/>
        <MainPage users={users}/>
        </>
    )
}

export default App;
