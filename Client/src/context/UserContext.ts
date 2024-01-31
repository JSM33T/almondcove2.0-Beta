import React from "react";

interface UserContextType {
}

const defaultValue: UserContextType = {
};

const UserContext = React.createContext<UserContextType>(defaultValue);

export default UserContext;
