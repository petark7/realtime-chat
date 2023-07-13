import React, { useEffect, useState } from 'react';

const UserMessage = ({ sender }) => {
	let position = 'start';
	let color = '';

	if (sender) {
		position = 'end';
		color = 'bg-blue-900';
	}

	return (
		<div className={`chat chat-${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg" />
				</div>
			</div>
			<div className={`chat-bubble ${color}`}>It was said that you would, destroy the Sith, not join them.</div>
		</div>
	);
};

export default UserMessage;
