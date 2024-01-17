import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router";
import "../../background";

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
