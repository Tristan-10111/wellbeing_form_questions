import React from "react";
import ConfusedStateQuestions from "../../Data/ConfusedQuestions.json";

export default function ConfusedQuestions() {
	return (
		<div>
			{ConfusedStateQuestions.map((confusedQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{confusedQuestion.confusedQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{confusedQuestion.confusedQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{confusedQuestion.confusedQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{confusedQuestion.confusedQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
