import "./intro.scss";
import ReactTypingEffect from "react-typing-effect";
import ParticleComponent from "../../components/particles/ParticleComponent";

export default function Intro() {
	const typingString = [
		"I'm a Javascript developer ",
		"I'm a Python developer ",
		"I'm a full stack web developer ",
	];

	const handleClick = () => {
		window.location.href = "#contact";
	};

	return (
		<div className="intro" id="intro">
			<ParticleComponent />
			<div className="left">
				<div className="wrapper">
					<h2>Hey, I'm</h2>
					<h1>Donna Smith</h1>
					<div className="typingEffect">
						<ReactTypingEffect
							className="typingEffect"
							text={typingString}
							speed={50}
							eraseSpeed={60}
							eraseDelay={800}
						/>
					</div>
					<button className="btn" onClick={() => handleClick()}>
						Message Me
					</button>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
			<div className="right">
				<div className="imgContainer">
					<img src="assets/me.jpeg" alt="" />
				</div>
			</div>
		</div>
	);
}
