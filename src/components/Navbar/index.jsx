import PropTypes from 'prop-types';

const Navbar = ({ handleLogout, showLogoutButton }) => (
	<div className=" navbar bg-base-200">
		<div className="containerWrap">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Realtime Chat</a>
			</div>
			<div className="flex-none">
				{showLogoutButton && (
					<button
						type="button"
						className="btn btn-ghost"
						onClick={handleLogout}
					>
						Log out
					</button>
				)}
			</div>
		</div>
	</div>
);

Navbar.propTypes = {
	handleLogout: PropTypes.func,
	showLogoutButton: PropTypes.bool
};

export default Navbar;
