import ReactTypingEffect from "react-typing-effect";
import ParticleComponent from "../../components/particles/ParticleComponent";
import Button from "../../components/button/Button";
import Social from "../../components/social";
import "./intro.scss";

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
					speed={60}
					eraseSpeed={50}
					eraseDelay={1500}
				/>
			</div>
			<Button
				text="Message Me"
				className={"btn"}
				active={true}
				action={handleClick}
			/>
			<div className="socialContainer">
				<Social />
			</div>
		</div>
	);
}
