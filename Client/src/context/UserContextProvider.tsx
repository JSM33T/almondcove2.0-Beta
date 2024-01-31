import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [User, SetUser] = React.useState(null);
    return(
        <UserContext.Provider value={{User,SetUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;