import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
	const form = useRef();
	const [message, setMessage] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_k2htbio",
				"template_y4knaad",
				form.current,
				"hcvU2WX3pQVEBNB8s"
			)
			.then(
				(result) => {
					console.log(result.text);
					setMessage(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<h1>Want to chat?</h1>
				<h2> Got an interesting project or idea?</h2>
				<h2>Let's work together!</h2>
				<p>Email : donna.smith09@hotmail.com</p>
			</div>
			<div className="right">
				{!message && <h2>Get in touch</h2>}
				<form ref={form} onSubmit={sendEmail}>
					{!message && (
						<>
							<input  type="email" name="user_email" placeholder="Email" />
							<textarea name='message' placeholder="Message"></textarea>
							<button type="submit" value="Send">Send</button>
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