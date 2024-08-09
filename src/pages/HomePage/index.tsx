import './index.scss';
import profileImage from 'assets/images/hyemi.png';

const HomePage = () => {

  return (
    <div className="homepage-container">
      <div className="profile">
        <img src={profileImage} />
        <div>
          <p className="profile-developer">Frontend Developer</p>
          <h1 className="profile-name">이혜미</h1>
          <p>I am interested in _____ </p>
        </div>
      </div>
    </div>

  );
};

export default HomePage;