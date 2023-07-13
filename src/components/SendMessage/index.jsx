const SendMessage = () => (
	<div className="bg-gray-600 fixed bottom-0 w-full py-10 shadow-lg">
		<form className="containerWrap flex">
			<input className="input w-full rounded-r-none bg-gray-200 text-black shadow-lg" type="text" />
			<button className="w-auto px-6 bg-gray-300 rounded-r-lg text-black">Send</button>
		</form>
	</div>
);

export default SendMessage;
