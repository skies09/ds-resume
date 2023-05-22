import { useState } from "react";
import "./contact.scss";

export default function Contact() {
	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<h1>Want to chat?</h1>
				<h2> Got an interesting project or idea?</h2>
				<h2>Let's work together!</h2>
				<p>Email : d.smith09@icloud.com</p>
			</div>
			<div className="right">
				{!message && <h2>Get in touch</h2>}
				<form onSubmit={handleSubmit}>
					{!message && (
						<>
							<input type="text" placeholder="Email" />
							<textarea placeholder="Message"></textarea>
							<button type="submit">Send</button>
						</>
					)}
					{message && (
						<span>Thanks, I'll get back to you shortly!</span>
					)}
				</form>
			</div>
		</div>
	);
}