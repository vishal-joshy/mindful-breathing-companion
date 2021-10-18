import React from 'react';
import boxVid from './box-vid.mp4';

function BoxBreathing() {
	console.log('box');
	return (
		<>
			<video autoPlay={true} muted loop>
				<source src={boxVid} type='video/mp4' />
			</video>
		</>
	);
}

export default BoxBreathing;
