import React from 'react';
import coherentVid from './coherent-vid.mp4';

function CoherentBreathing() {
	return (
		<>
			<video autoPlay={true} muted loop>
				<source src={coherentVid} type='video/mp4' />
			</video>
		</>
	);
}

export default CoherentBreathing;
