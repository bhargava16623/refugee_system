import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}


//step - 1 create Context file
//step - 2 create UserContext, UserPro