import PropTypes from 'prop-types';

const Loading = ({ isLoading, children }) => (
	<>
		{isLoading ? (
			<div className="h-screen flex items-center justify-center">
				<span className="loading loading-spinner loading-lg" />
			</div>
		) : (
			children
		)}
	</>
);

Loading.propTypes = {
	children: PropTypes.node,
	isLoading: PropTypes.bool
};

export default Loading;
