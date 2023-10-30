import "./portfolioCard.scss";

export default function PortfolioCard({ item }) {
	return (
		<>
			<div className="card">
				{item.img && (
					<div className="cardImage">
						<img src={item.img} alt="" />
					</div>
				)}

				{item.link.startsWith("www") && (
					<div className="cardLink">
						<a className="link" href={item.link}>
							{item.link}
						</a>
					</div>
				)}
				{item.link.includes("Coming Soon") && (
					<div className="cardLink">{item.link}</div>
				)}
				<div className="cardTitle">{item.title}</div>
				<div className="cardDescription">{item.description}</div>
				<div className="cardFeatures">
					{item.keyFeatures.map((feature) => (
						<div className="cardFeature">{feature}</div>
					))}
				</div>
			</div>
		</>
	);
}
