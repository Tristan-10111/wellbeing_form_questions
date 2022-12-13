import React from "react";
import YouthReflectionStateQuestions from "../../Data/YouthReflectionQuestions.json";

export default function YouthReflectionQuestions() {
	return (
		<div>
			{YouthReflectionStateQuestions.map((youthReflectionQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{youthReflectionQuestion.youthReflectionQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{youthReflectionQuestion.youthReflectionQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{youthReflectionQuestion.youthReflectionQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{youthReflectionQuestion.youthReflectionQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
