import React from "react";
import AngryStateQuestions from "../../Data/AngryQuestions.json";

export default function AngryQuestions() {
	return (
		<div>
			{AngryStateQuestions.map((angryQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{angryQuestion.angryQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{angryQuestion.angryQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{angryQuestion.angryQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{angryQuestion.angryQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
