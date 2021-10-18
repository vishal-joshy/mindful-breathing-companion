import React from 'react';
import fourSevenVid from './four-seven-vid.mp4';
import { embedVideo } from '../../Utility/display';

function FourSevenBreathing() {
	return (
		<>
			{embedVideo(fourSevenVid)}
		</>
	);
}

export default FourSevenBreathing;
