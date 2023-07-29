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
			<div className="title-wrapper">
				<p>
					Hey, I'm <span>Donna Smith</span>
				</p>
			</div>
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
	);
}
