import React from "react";
import AnxiousStateQuestions from "../../Data/AnxiousQuestions.json";

export default function AnxiousQuestions() {
	return (
		<div>
			{AnxiousStateQuestions.map((anxiousQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{anxiousQuestion.anxiousQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{anxiousQuestion.anxiousQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{anxiousQuestion.anxiousQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{anxiousQuestion.anxiousQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
