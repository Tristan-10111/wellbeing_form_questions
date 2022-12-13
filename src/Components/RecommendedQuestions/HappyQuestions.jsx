import React from "react";
import HappyStateQuestions from "../../Data/HappyQuestions.json";

export default function HappyQuestions() {
	return (
		<div>
			{HappyStateQuestions.map((happyQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{happyQuestion.happyQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{happyQuestion.happyQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{happyQuestion.happyQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{happyQuestion.happyQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
