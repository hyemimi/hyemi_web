import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const RootRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<MainPageLayout/>}>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/licence" element={<LicenceKeyPage />}/>
      </Route> */}
      <Route path="/" element={<HomePage />}/>
    </Routes>
  );
};
export default RootRoutes;