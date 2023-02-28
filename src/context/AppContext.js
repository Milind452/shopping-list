import { ListsContextProvider } from "./ListsContext";
import { ItemsContextProvider } from "./ItemsContext";

export default function AppContext({ children }) {
    return (
        <ListsContextProvider>
            <ItemsContextProvider>{children}</ItemsContextProvider>
        </ListsContextProvider>
    );
}
