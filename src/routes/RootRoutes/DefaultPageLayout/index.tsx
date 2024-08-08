import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './index.scss';

const DefaultPageLayout = () => {

  return (
    <div className="background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );

};

export default DefaultPageLayout;