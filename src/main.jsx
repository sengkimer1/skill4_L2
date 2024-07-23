import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
// import Crop from './components/Crop';
// import CropType from './components/CropType';
// import './index.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <h1>Oop! Error!</h1>,
//     children: [
//       {
//         path: "/Crop",
//         element: <Crop />,
//       },
//       {
//         path: "/CropType",
//         element: <CropType />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
