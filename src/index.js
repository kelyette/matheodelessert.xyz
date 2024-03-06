import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Landing from './Landing';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Landing />}>
			{/* <Route path="/" element={<Landing />} /> */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);