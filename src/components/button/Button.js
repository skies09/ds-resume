import "./button.scss";

export default function Button({ text, className, active = true, action }) {
	return (
		<>
			{active && (
				<button className={className} onClick={action}>
					{text}
				</button>
			)}
		</>
	);
}
