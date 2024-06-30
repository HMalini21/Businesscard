import photo from '../assests/laura.png';
import email from '../assests/icons/Icon.png';
import linkenIn from '../assests/icons/linkedin.png';

function Photo() {
  return (
    <>
      <div className="Intro--Div">
        <div className="Img1">
          <img src={photo} alt="laura" />
        </div>
        <div>
          <h1 className="text-center">Laura Smith</h1>
          <p className="Color-Tag">Fontend Developer</p>
          <p className="text-center">Website</p>
        </div>
        <div className="BtnDiv">
          <button>
            <img src={email} alt="emailicon" />
            Email
          </button>
          <button className="Bluecol">
            <img src={linkenIn} alt="linkedIn" />
            LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}
export default Photo;
