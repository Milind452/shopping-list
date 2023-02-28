import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import AppContext from "./context/AppContext";

import Header from "./components/Header/Header";
const Lists = lazy(() =>
    import(/* webpackChunkName: 'Lists'*/ "./pages/Lists")
);
const ListDetail = lazy(() =>
    import(/* webpackChunkName: 'ListDetail'*/ "./pages/ListDetail")
);
const ListForm = lazy(() =>
    import(/* webpackChunkName: 'ListForm'*/ "./pages/ListForm")
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
    text-align: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <AppContext>
                            <Routes>
                                <Route path="/" element={<Lists />} />
                                <Route
                                    path="/list/:listId/new"
                                    element={<ListForm />}
                                />
                                <Route
                                    path="/list/:listId"
                                    element={<ListDetail />}
                                />
                            </Routes>
                        </AppContext>
                    </Suspense>
                </BrowserRouter>
            </AppWrapper>
        </>
    );
}

export default App;
