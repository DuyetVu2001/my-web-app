import React, { useState, useEffect, useRef } from 'react';
import Img1 from '../../assets/img/dog.jpg';
import Img2 from '../../assets/img/web.png';
import Img3 from '../../assets/img/color.jpg';
// import Img4 from '../../assets/img/Thao-Tun.jpg';
import './Slider.scss';

const Slider = () => {
	const [current, setCurrent] = useState(0);
	const slideData = [Img1, Img2, Img3];
	const slideLength = slideData.length;
	const timeoutRef = useRef(null);

	// there are no photos
	// if (!Array.isArr(slideData) || slideLength <= 0) { return null;}

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();

		timeoutRef.current = setTimeout(() => {
			setCurrent(current === slideLength - 1 ? 0 : current + 1);
		}, 20000);

		return () => {
			resetTimeout();
		};
	}, [current, slideLength]);

	const nextSlide = () => {
		setCurrent(current === slideLength - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? slideLength - 1 : current - 1);
	};

	const customSlide = (custom) => {
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

			{/* dots */}
			<ul className="slider__dot-list">
				{/* rend dot list */}
				{slideData.map((data, index) => (
					<li
						className={
							index === current ? 'slider__dot-item active' : 'slider__dot-item'
						}
						onClick={() => {
							customSlide(index);
						}}
						key={index}
					></li>
				))}
			</ul>

			{/* slide next/previous buttons */}
			<span className="slider__prev-slide active" onClick={prevSlide}>
				<i class="fas fa-arrow-circle-left"></i>
			</span>
			<span className="slider__next-slide" onClick={nextSlide}>
				<i class="fas fa-arrow-circle-right"></i>
			</span>
		</div>
	);
};

export default Slider;
