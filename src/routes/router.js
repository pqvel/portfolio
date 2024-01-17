import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/MainPage";
import CertificatesPage from "../components/pages/CetificatesPage";
import HistoryPage from "../components/pages/HistoryPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/certificates",
		element: <CertificatesPage />,
	},
	{
		path: "/history",
		element: <HistoryPage />,
	},
]);
