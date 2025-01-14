import React from "react";

const UserContext = React.createContext()

export default UserContext;

// Here, we also need to provide the contextProvider.
// The contextProvider provides us with data because in the end, contextProvider is a variable that provides data
// Whatever, component, we provide inside the UserContext Wrapper, it will be available in global variable.
// The components inside the UserContext wrapper could access all the state through UserContext
