import { React } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Link,
	Outlet,
} from "react-router-dom";

import HomePage from './HomePage';
import Gallery from './Gallery'
import ErrorPage from './ErrorPage';

import bjork from './images/bjork.png'

import './index.css';

function RouterRoot() {
	return (
		<>
			<nav id="navbar">
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
					<li>
						<Link to="/gallery">gallery</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			<div id="flying-head"><img src={bjork} alt="bjork"/></div>
		</>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouterRoot />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage/>
			},
			{
				path: "gallery",
				element: <Gallery />
			}
		
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);