import { EstiloGlobal, Container } from "./styles"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import "./App.css"
import Home from "./pages/Home/index.tsx"
import Novo from "./pages/Novo/index.tsx"
import store from "./store/index.ts"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/novo",
		element: <Novo />,
	},
])

function App() {
	return (
		<Provider store={store}>
			<EstiloGlobal />
			<Container>
				<RouterProvider router={router} />
			</Container>
		</Provider>
	)
}

export default App
