import React from "react";
import "../../Styles/RightContent.css";
import OpeningQuestions from "../RecommendedQuestions/OpeningQuestions";
import HappyQuestions from "../RecommendedQuestions/HappyQuestions";
import AngryQuestions from "../RecommendedQuestions/AngryQuestions";
import ConfusedQuestions from "../RecommendedQuestions/ConfusedQuestions";
import AnxiousQuestions from "../RecommendedQuestions/AnxiousQuestions";
import SadQuestions from "../RecommendedQuestions/SadQuestions";
import YouthReflectionQuestions from "../RecommendedQuestions/YouthReflectionQuestions";
import AgentReflectionQuestions from "../RecommendedQuestions/AgentReflectionQuestions.jsx";

export default function RightContent(props) {
	const renderResult = () => {
		let result;
		props.recommendedQuestions === ""
			? (result = (
					<div>
						<div className='text-center'>Opening Questions</div>
						<OpeningQuestions />
					</div>
			  ))
			: props.recommendedQuestions === "happy"
			? (result = <div className='text-center'>Happy Questions</div>)
			: props.recommendedQuestions === "angry"
			? (result = <div className='text-center'>Angry Questions</div>)
			: props.recommendedQuestions === "confused"
			? (result = <div className='text-center'>Confused Questions</div>)
			: props.recommendedQuestions === "anxious"
			? (result = <div className='text-center'>Anxious Questions</div>)
			: props.recommendedQuestions === "sad"
			? (result = <div className='text-center'>Sad Questions</div>)
			: props.recommendedQuestions === "youthReflection"
			? (result = <div className='text-center'>YouthReflection Questions</div>)
			: props.recommendedQuestions === "agentReflection"
			? (result = <div className='text-center'>AgentReflection Questions</div>)
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
			{props.happyQuestions && <HappyQuestions />}
			{props.angryQuestions && <AngryQuestions />}
			{props.confusedQuestions && <ConfusedQuestions />}
			{props.anxiousQuestions && <AnxiousQuestions />}
			{props.sadQuestions && <SadQuestions />}
			{props.youthReflectionQuestions && <YouthReflectionQuestions />}
			{props.agentReflectionQuestions && <AgentReflectionQuestions />}
		</div>
	);
}
