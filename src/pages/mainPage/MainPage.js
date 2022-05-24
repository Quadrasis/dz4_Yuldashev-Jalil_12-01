import React from "react";
import Users from "../../companents/users/Users";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <Users users={this.props.users}/>
            </>
        )
    }
}

export default MainPage;