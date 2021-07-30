import ActionsContainer from "./container/ActionsContainer/ActionsContainer";
import ProductListContainer from "./container/ProductListContainer/ProductListContainer";
import HomePage from "./pages/HomePage/HomePage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: false,
    main: ({ history }) => <ProductListContainer history={history} />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ActionsContainer history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ history }) => <ActionsContainer history={history} />,
  },
];
export default routes;
