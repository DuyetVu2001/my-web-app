import React, { useState, useEffect, useRef } from 'react';
import Img1 from '../../../assets/img/dog.jpg';
import Img2 from '../../../assets/img/web.png';
import Img3 from '../../../assets/img/color.jpg';
// import Img4 from '../../../assets/img/Thao-Tun.jpg';
import './Slider.scss';

const Slider = () => {
	const [current, setCurrent] = useState(0);
	const slideData = [Img1, Img2, Img3];
	const slideLength = slideData.length;
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	// Auto slide
	useEffect(() => {
		resetTimeout();

		timeoutRef.current = setTimeout(() => {
			setCurrent(current === slideLength - 1 ? 0 : current + 1);
		}, 3000);

		// When component unmount
		return () => {
			resetTimeout();
		};
	}, [current, slideLength]);

	// When click on dot
	const onDotClick = (custom) => {
		if (custom >= slideLength || custom < 0) {
			setCurrent(0);
		} else {
			setCurrent(custom);
		}
	};

	return (
		<div className="slider">
			{/* rend slide tags */}
			{slideData.map((data, index) => {
				return (
					<div
						className={index === current ? 'slider__tag active' : 'slider__tag'}
						key={index}
					>
						<img src={data} alt="Thao Tun" className="slider__img" />
					</div>
				);
			})}

			{/* List dot */}
			<ul className="slider__dot-list">
				{/* rend dot list */}
				{slideData.map((data, index) => (
					<li
						className={
							index === current ? 'slider__dot-item active' : 'slider__dot-item'
						}
						onClick={() => {
							onDotClick(index);
						}}
						key={index}
					></li>
				))}
			</ul>
		</div>
	);
};

export default Slider;
