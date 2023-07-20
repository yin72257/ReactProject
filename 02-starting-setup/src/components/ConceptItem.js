import './ConceptItem.css'

const ConceptItem = (props) => {
	return (
		<li className="concept">
			<img src={props.item.image} alt={props.item.title} />
			<h2>{props.item.title}</h2>
			<p>{props.item.description}</p>
		</li>
	);
};

export default ConceptItem;
