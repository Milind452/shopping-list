import { createContext } from "react";

import useFetch from "../hooks/useFetch";

export const ListsContext = createContext();

export const ListsContextProvider = ({ children }) => {
    const [loading, error, data] = useFetch(
        "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists"
    );

    return (
        <ListsContext.Provider value={{ lists: data, loading, error }}>
            {children}
        </ListsContext.Provider>
    );
};
