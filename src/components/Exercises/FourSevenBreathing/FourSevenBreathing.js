import React from 'react';
import fourSevenVid from './four-seven-vid.mp4';

function FourSevenBreathing() {
	return (
		<>
			<video autoPlay={true} muted loop>
				<source src={fourSevenVid} type='video/mp4' />
			</video>
		</>
	);
}

export default FourSevenBreathing;
