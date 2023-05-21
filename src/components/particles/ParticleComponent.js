import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./particles.scss";

export default function ParticleComponent() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div className="particlesBackground">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 120,
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: "bubble",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							bubble: {
								distance: 400,
								size: 12,
								duration: 2,
								opacity: 0.6,
								speed: 3,
							},
						},
					},
					particles: {
						zIndex: {
							value: 1,
						},
						color: {
							value: "#66FCF1",
						},
						move: {
							direction: "right",
							enable: true,
			
				
							speed: 2,
							straight: true,
						},
						number: {
							density: {
								enable: true,
								area: 1000,
							},
							value: 100,
						},
						opacity: {
                            "value": 1,
                            "anim": {
                              "enable": true,
                              "speed": 8,
                              "opacity_min": 0.4,
                              "sync": false
                            }
						},
						shape: {
							type: "circle",
						},
                        "size": {
                            "value": 3,
                            "random": true
                          },
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
}

