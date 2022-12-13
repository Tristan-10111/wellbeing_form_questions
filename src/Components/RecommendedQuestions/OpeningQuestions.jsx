import React from "react";
import OpeniningStateQuestions from "../../Data/OpeningQuestion.json";

export default function OpeningQuestions() {
	return (
		<div>
			{" "}
			{OpeniningStateQuestions.map((openingQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
								{openingQuestion.openingQuestion1}
							</button>
							<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
								{openingQuestion.openingQuestion2}
							</button>
							<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
								{openingQuestion.openingQuestion3}
							</button>
							<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
								{openingQuestion.openingQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
