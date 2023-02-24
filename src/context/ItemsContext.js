import { createContext } from "react";

import useFetch from "../hooks/useFetch";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
    const [loading, error, data] = useFetch(
        "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items"
    );

    return (
        <ItemsContext.Provider value={{items: data, loading, error}}>
            {children}
        </ItemsContext.Provider>
    )
};
