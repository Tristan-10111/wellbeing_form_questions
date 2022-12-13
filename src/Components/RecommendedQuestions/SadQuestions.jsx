import React from "react";
import SadStateQuestions from "../../Data/SadQuestions.json";

export default function SadQuestions() {
	return (
		<div>
			{SadStateQuestions.map((sadQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{sadQuestion.sadQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{sadQuestion.sadQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{sadQuestion.sadQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{sadQuestion.sadQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
