const Navbar = () => (
	<div className=" navbar bg-base-200">
		<div className="containerWrap">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Realtime Chat</a>
			</div>
			<div className="flex-none">
				<button
					type="button"
					className="btn btn-ghost"
					onClick={() => {
						alert('hi');
					}}
				>
					Log out
				</button>
			</div>
		</div>
	</div>
);

export default Navbar;
