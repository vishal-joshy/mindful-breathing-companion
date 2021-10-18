const embedVideo = (video) => (
	<>
		<video autoPlay={true} muted loop>
			<source src={video} type='video/mp4' />
		</video>
	</>
);

export { embedVideo };
