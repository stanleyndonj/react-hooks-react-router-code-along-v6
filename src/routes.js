import { Home, About, Login, ErrorPage, UserProfile } from "./pages";

const routes = ([
    { path: "/", element: <Home />, errorElement: <ErrorPage />},
    { path: "/about", element: <About />, errorElement: <ErrorPage />},
    { path: "/login", element: <Login />, errorElement: <ErrorPage />},
    { path: "/profile/:id", element: <UserProfile />, errorElement: <ErrorPage />}
  ]);

  export default routes;