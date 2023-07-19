import PropTypes from 'prop-types';

const ScrollToBottom = ({ scrollToBottomRef, setIsVisible }) => {
	const handleClick = () => {
		scrollToBottomRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const toggleVisible = () => {
		if (scrollToBottomRef.current) {
			const bottomInView = scrollToBottomRef.current.getBoundingClientRect().top <= window.innerHeight;

			setIsVisible(!bottomInView);
		}
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button
			type="button"
			className="fixed bottom-[100px]
		right-[20px]
		z-50
		cursor-pointer
		md:bottom-[120px]
		rounded-full
		border
	 	dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
			onClick={handleClick}
		>
			<svg
				className="h-4 w-4 m-1"
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				height="1em" width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line x1="12" y1="5" x2="12" y2="19" />
				<polyline points="19 12 12 19 5 12" />
			</svg>
		</button>
	);
};

ScrollToBottom.propTypes = {
	scrollToBottomRef: PropTypes.shape({
		current: PropTypes.shape({
			getBoundingClientRect: PropTypes.func,
			scrollIntoView: PropTypes.func
		})
	}),
	setIsVisible: PropTypes.func
};

export default ScrollToBottom;
