import React from "react";
import "../../Styles/RightContent.css";
import OpeniningStateQuestions from "../../Data/OpeningQuestion.json";
import HappyStateQuestions from "../../Data/HappyQuestions.json";
import AngryStateQuestions from "../../Data/AngryQuestions.json";
import ConfusedStateQuestions from "../../Data/ConfusedQuestions.json";
import AnxiousStateQuestions from "../../Data/AnxiousQuestions.json";
import SadStateQuestions from "../../Data/SadQuestions.json";
import YouthReflectionStateQuestions from "../../Data/YouthReflectionQuestions.json";
import AgentReflectionStateQuestions from "../../Data/AgentReflectionQuestions.json";
// import HappyQuestions from "../RecommendedQuestions/HappyQuestions";
// import AngryQuestions from "../RecommendedQuestions/AngryQuestions";
// import ConfusedQuestions from "../RecommendedQuestions/ConfusedQuestions";
// import AnxiousQuestions from "../RecommendedQuestions/AnxiousQuestions";
// import SadQuestions from "../RecommendedQuestions/SadQuestions";
// import YouthReflectionQuestions from "../RecommendedQuestions/YouthReflectionQuestions";
// import AgentReflectionQuestions from "../RecommendedQuestions/AgentReflectionQuestions.jsx";

export default function RightContent(props) {
	const renderResult = () => {
		let result;
		props.recommendedQuestions === ""
			? (result = (
					<div>
						<div className='text-center'>Opening Questions</div>
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
					</div>
			  ))
			: props.recommendedQuestions === "happy"
			? (result = (
					<div>
						<div className='text-center'>Happy Questions</div>
						<div>
							{" "}
							{HappyStateQuestions.map((happyQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{happyQuestion.happyQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "angry"
			? (result = (
					<div>
						<div className='text-center'>Angry Questions</div>
						<div>
							{" "}
							{AngryStateQuestions.map((angryQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{angryQuestion.angryQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "confused"
			? (result = (
					<div>
						<div className='text-center'>Confused Questions</div>
						<div>
							{" "}
							{ConfusedStateQuestions.map((confusedQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{confusedQuestion.confusedQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "anxious"
			? (result = (
					<div>
						<div className='text-center'>Anxious Questions</div>
						<div>
							{" "}
							{AnxiousStateQuestions.map((anxiousQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{anxiousQuestion.anxiousQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "sad"
			? (result = (
					<div>
						<div className='text-center'>Sad Questions</div>
						<div>
							{" "}
							{SadStateQuestions.map((sadQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{sadQuestion.sadQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "youthReflection"
			? (result = (
					<div>
						<div className='text-center'>youthReflection Questions</div>
						<div>
							{" "}
							{YouthReflectionStateQuestions.map((youthReflectionQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{youthReflectionQuestion.youthReflectionQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: props.recommendedQuestions === "agentReflection"
			? (result = (
					<div>
						<div className='text-center'>AgentReflection Questions</div>
						<div>
							{" "}
							{AgentReflectionStateQuestions.map((agentReflectionQuestion) => {
								return (
									<div className='mt-4'>
										<div className='d-flex flex-column'>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion1}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion2}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion3}
											</button>
											<button className=' border-1 border-secondary rounded mb-2 p-1 fs-5'>
												{agentReflectionQuestion.agentReflectionQuestion4}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
			  ))
			: (result = "");
		return result;
	};
	return (
		<div className='container rightContent'>
			<div>
				<h1 className='text-center'>Recommended Questions</h1>
				<hr className='border-5 border-secondary opacity-100' />
			</div>
			<h1> {renderResult()}</h1>
		</div>
	);
}
