import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DefaultPageLayout from './DefaultPageLayout';

const RootRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultPageLayout/>}>
        <Route path="/" element={<HomePage />}/>
      </Route>
    </Routes>
  );
};
export default RootRoutes;