import { useEffect, useState } from "react";
import PortfolioList from "../../components/portfolioList/PortfolioList";
import "./portfolio.scss";
import {
	webPortfolio,
	landingPagePortfolio,
} from "../../portfolioData";
import Modal from "../../components/modal/Modal";

export default function Portfolio() {
	const [selected, setSelected] = useState("web");
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [page, setPage] = useState("");
	const list = [
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
			case "web":
				setData(webPortfolio);
				break;
			case "landing":
				setData(landingPagePortfolio);
				break;
			default:
				setData(webPortfolio);
		}
	}, [selected]);

	const handleClick = (item) => {
		setIsOpen(true);
		setPage(item);
	};
	return (
		<div className="portfolio" id="portfolio">
    <div className='header'>
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
					{item.img &&(
						<img src={item.img} alt="" />
						)}
						<button onClick={() => handleClick(item)}>
							{item.title}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
