import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function footer() {

	function handleClick(openLink) {
  		return function() {
    	window.open(openLink, '_blank');
  		};
	}



	return(
		<div className='footerbg font-montserrat'>
			<div className='footerQ font-playfair'>
				<p>"I sat at my desk, drank hot green tea, and let my mind wander."<br/><br/>-Haruki Murakami, "Norwegian Wood"</p>
			</div>
			<div className='footerColumns'>
				<div className='shop'>
					<h1>SHOP</h1>
					<p>Classic</p>
					<p>Premium</p>
				</div>
				<div className='company'>
					<h1>COMPANY</h1>
					<p>Our Vision</p>
					<p>Team</p>
					<p>Privacy</p>
				</div>
				<div className='FAQ'>
					<h1>HELP</h1>
					<p>FAQ</p>
					<p>Shipping</p>
					<p>Returns</p>
				</div>
				<div className='socials'>
					<h1>SOCIAL</h1>
					<span className='socialsrow'>
					<FontAwesomeIcon onClick={handleClick('https://www.facebook.com')}icon={faSquareFacebook} size="lg" style={{ color: "#b89600" }}/>
					<FontAwesomeIcon onClick={handleClick('https://www.instagram.com')}icon={faInstagram} size="lg" style={{ color: "#b89600" }}/>
					<FontAwesomeIcon onClick={handleClick('https://www.youtube.com' )}icon={faYoutube} size="lg" style={{ color: "#b89600" }}/>
					</span>
				</div>
			</div>
		</div>
	);
}

