
const embedVideo = (video) => (
	<>
		<video style={{ width: "100%", height: "auto" }} autoPlay={true} muted loop>
			<source src={video} type='video/mp4' />
		</video>
	</>
);

export { embedVideo };
