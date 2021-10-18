import React from 'react';
import boxVid from './box-vid.mp4';
import { embedVideo } from '../../Utility/display';

function BoxBreathing() {
	console.log('box');
	return (
		<>
			{embedVideo(boxVid)}
		</>
	);
}

export default BoxBreathing;
