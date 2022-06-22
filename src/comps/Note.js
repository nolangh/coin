import React from "react";
import "98.css";
import styled from "styled-components";
import Draggable from "react-draggable";

const Window = styled.div`
	width: 320px;
	.title-bar {
		font-size: medium;
		justify-content: center;
	}
	.list-li {
		font-size: medium;
		margin-left: 1em;
		list-style-type: disc;
	}
`;

const Note = () => {
	return (
		<Draggable bounds="body">
			<Window>
				<div class="window">
					<div class="title-bar">
						<div class="title-bar-text">Help</div>
					</div>
					<div class="window-body">
						<ul className="ul">
							<li className="list-li">Use " - " for money spent</li>
							<li className="list-li">All Windows are Draggable</li>
						</ul>
					</div>
				</div>
			</Window>
		</Draggable>
	);
};

export default Note;
