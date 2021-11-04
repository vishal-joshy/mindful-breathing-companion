import React from "react";
import EmbedVideo from "../../EmbedVideo";
import boxVid from "./box-vid.mp4";

function BoxBreathing() {
	console.log("box");
	return <EmbedVideo video={boxVid} />;
}

export default BoxBreathing;
