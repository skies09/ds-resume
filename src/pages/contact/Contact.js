import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	function sendEmail(values) {
		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				values,
				process.env.REACT_APP_EMAIL_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setFormSubmitted(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	const validationSchema = Yup.object({
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_email: "",
			message: "",
		};

		const handleSubmit = (values, { setSubmitting }) => {
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<Field
						className="email"
						type="email"
						id="user_email"
						name="user_email"
						placeholder="Email"
					/>
					<ErrorMessage
						className="error"
						name="user_email"
						component="div"
					/>
					<Field
						className="message"
						type="text"
						id="message"
						name="message"
						placeholder="Message"
						style={{ "vertical-align": "top" }}
					/>
					<button className="sendEmailBtn" type="submit">
						Send
					</button>
				</Form>
			</Formik>
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
				{!formSubmitted && (
					<>
						<h2>Get in touch</h2>
						<ContactForm />
					</>
				)}
				{formSubmitted && (
					<h2>Thanks, I'll get back to you shortly!</h2>
				)}
			</div>
		</div>
	);
}
