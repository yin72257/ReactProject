import ConceptItem from "./ConceptItem";
import './ConceptsList.css'
const ConceptsList = (props) => {
	return (
		<ul id="concepts">
			<ConceptItem item={props.concepts[0]} />
			<ConceptItem item={props.concepts[1]} />
			<ConceptItem item={props.concepts[2]} />
		</ul>
	);
};

export default ConceptsList;
