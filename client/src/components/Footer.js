import { Container } from '@material-ui/core';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<Container style={{textAlign: 'center'}}>
				{/*  */}
				<h4>Follow us on</h4>

				{/* Icons */}
				<div className="footer__icons">
					<i className="fab fa-facebook"></i>
					<i className="fas fa-envelope"></i>
					<i className="fab fa-youtube"></i>
				</div>

				{/*  */}
				<p>
					Design by <em>DuyetVu</em>
				</p>
			</Container>
		</div>
	);
};

export default Footer;
