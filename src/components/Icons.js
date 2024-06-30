import twitter from '../assests/icons/Twitter Icon.png';
import instagram from '../assests/icons/Instagram Icon.png';
import facebook from '../assests/icons/Facebook Icon.png';
import github from '../assests/icons/GitHub Icon.png';

function Icons() {
  return (
    <div className="IconsDiv">
      <div>
        <img src={twitter} alt="Twittericon" />
      </div>
      <div>
        <img src={instagram} alt="Instaicon" />
      </div>
      <div>
        <img src={facebook} alt="fbicon" />
      </div>
      <div>
        <img src={github} alt="GHicon" />
      </div>
    </div>
  );
}
export default Icons;
