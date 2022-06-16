import {createContext, useEffect, useState} from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch(
                `http://localhost:${process.env.REACT_APP_SERVER_PORT}/authentication/profile`,
                {credentials: "include"}
            );
            let user = await response.json();
            setCurrentUser(user);
            console.log("here", user);
        };
        getLoggedInUser();
    }, []);

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    );
}

export default CurrentUserProvider;
