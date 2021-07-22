import './Filter.scss';

const Filter = ({ clickToFilter }) => (
	<div className="filter">
		<h3>Latest articles</h3>
		<ul>
			<li onClick={clickToFilter}>IT</li>
			<li onClick={clickToFilter}>Marketing</li>
			<li onClick={clickToFilter}>News</li>
			<li onClick={clickToFilter}>Insights</li>
		</ul>
	</div>
);

export default Filter;
