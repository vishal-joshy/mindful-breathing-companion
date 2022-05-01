import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import NavBar from './components/Header/NavBar';
import boxVideo from './assets/box-vid.mp4';
import coherentVideo from './assets/coherent-vid.mp4';
import fourSevenVideo from './assets/four-seven-vid.mp4';
import VideoContainer from './components/VideoContainer';

function VideoDisplay({ video }) {
  return <VideoContainer video={video} />;
}

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/box"
            component={() => <VideoDisplay video={boxVideo} />}
          />
          <Route
            exact
            path="/coherent"
            component={() => <VideoDisplay video={coherentVideo} />}
          />
          <Route
            exact
            path="/four-seven"
            component={() => <VideoDisplay video={fourSevenVideo} />}
          />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
