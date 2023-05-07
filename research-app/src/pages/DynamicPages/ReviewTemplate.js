import React from "react";

import "../DynamicPages/ReviewTemplate.css";


function ReviewTemplate(props) {
  return (
	<div class="container">
		<div class="badge">
		{props.rating}
		</div>
		<div class="text">
            <div class="name-date">
				<p><strong>{props.position}</strong></p>
				<p>May 21st</p>
			</div> <p>{props.comment}</p>
		</div>
	</div>
  );
}
export default ReviewTemplate;
