import { createContext, useState } from "react";



export const Authcontext = createContext('');
const Provider = ({ children }) => {
    const [user, setUser] = useState(true)
    const authinfo = {
        user
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Provider;