import { useEffect, useState } from "react";
import PortfolioList from "../../components/portfolioList/PortfolioList";
import "./portfolio.scss";
import {
	featuredPortfolio,
	webPortfolio,
	landingPagePortfolio,
} from "../../portfolioData";
import Modal from "../../components/modal/Modal";

export default function Portfolio() {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [page, setPage] = useState("");
	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web Apps",
		},
		{
			id: "landing",
			title: "Landing Pages",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			case "landing":
				setData(landingPagePortfolio);
				break;
			default:
				setData(featuredPortfolio);
		}
	}, [selected]);

	const handleClick = (item) => {
		setIsOpen(true);
		setPage(item);
	};
	return (
		<div className="portfolio" id="portfolio">
    <div className='header'>
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
      </div>
			<div className="modal">
				{isOpen && <Modal setIsOpen={setIsOpen} item={page} />}
			</div>
			<div className="container">
				{data.map((item) => (
					<div className="item">
						<img src={item.img} alt="" />
						<button onClick={() => handleClick(item)}>
							{item.title}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
