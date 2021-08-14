import './style.scss';

const Filter = ({ clickToFilter }) => (
	<div className="filter">
		<h3>Latest articles</h3>
		<ul>
			<li onClick={clickToFilter}>IT</li>
			<li onClick={clickToFilter}>Covid</li>
			<li onClick={clickToFilter}>Game</li>
			<li onClick={clickToFilter}>News</li>
		</ul>
	</div>
);

export default Filter;
