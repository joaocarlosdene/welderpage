import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "HOME",
    path: "/home",
    element: <Home />,
  },
  {
    name: "PROFILE",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "EXPERIENCE",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "QUALIFICATION",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "CONTACT",
    href: "/contact",
    element: <Home />,
  },
];

export default routes;
