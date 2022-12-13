import React from "react";
import AgentReflectionStateQuestions from "../../Data/AgentReflectionQuestions.json";

export default function AgentReflectionQuestions() {
	return (
		<div>
			{AgentReflectionStateQuestions.map((agentReflectionQuestion) => {
				return (
					<div className='mt-4'>
						<div className='d-flex flex-column'>
							<button className='border-1 border-secondary rounded m-2'>
								{agentReflectionQuestion.agentReflectionQuestion1}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{agentReflectionQuestion.agentReflectionQuestion2}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{agentReflectionQuestion.agentReflectionQuestion3}
							</button>
							<button className='border-1 border-secondary rounded m-2'>
								{agentReflectionQuestion.agentReflectionQuestion4}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
