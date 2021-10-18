import React from 'react';
import coherentVid from './coherent-vid.mp4';
import { embedVideo } from '../../Utility/display';

function CoherentBreathing() {
	return (
		<>
			{embedVideo(coherentVid)}
		</>
	);
}

export default CoherentBreathing;
