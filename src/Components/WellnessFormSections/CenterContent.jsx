import React, { useEffect } from "react";
import "../../Styles/CenterContent.css";

export default function CenterContent(props) {
	useEffect(() => {
		props.recommendedQuestions === "happy"
			? props.setHappyQuestions(true)
			: props.setHappyQuestions(false);
		props.recommendedQuestions === "angry"
			? props.setAngryQuestions(true)
			: props.setAngryQuestions(false);
		props.recommendedQuestions === "confused"
			? props.setConfusedQuestions(true)
			: props.setConfusedQuestions(false);
		props.recommendedQuestions === "anxious"
			? props.setAnxiousQuestions(true)
			: props.setAnxiousQuestions(false);
		props.recommendedQuestions === "sad"
			? props.setSadQuestions(true)
			: props.setSadQuestions(false);
		props.recommendedQuestions === "youthReflection"
			? props.setYouthReflectionQuestions(true)
			: props.setYouthReflectionQuestions(false);
		props.recommendedQuestions === "agentReflection"
			? props.setAgentReflectionQuestions(true)
			: props.setAgentReflectionQuestions(false);
	}, [props.recommendedQuestions, props]);

	const handleOnChange = (e) => {
		props.setRecommendedQuestions(e.target.value);
	};
	return (
		<div className='container-fluid centerContent'>
			<div className=''>
				<div
					value={props.recommendedQuestions}
					className='d-flex justify-content-evenly mt-5'>
					<option value=''></option>
					<button
						value='happy'
						className='border-0 bg-transparent fs-1'
						onClick={handleOnChange}>
						😄
					</button>
					<button
						value='angry'
						className='border-0 bg-transparent fs-1'
						onClick={handleOnChange}>
						😡
					</button>
					<button
						value='confused'
						className='border-0 bg-transparent fs-1'
						onClick={handleOnChange}>
						🤔
					</button>
					<button
						value='anxious'
						className='border-0 bg-transparent fs-1'
						onClick={handleOnChange}>
						😰
					</button>
					<button
						value='sad'
						className='border-0 bg-transparent fs-1'
						onClick={handleOnChange}>
						🙁
					</button>
				</div>
			</div>
			{/*  */}
			<div className='footer'>
				<div className='mt-5' value={props.recommendedQuestions}>
					<label className='fw-semibold fs-3 mb-3'>Youth Reflection</label>
					<button
						className='sm bg-transparent border border-2 rounded mx-2'
						value='youthReflection'
						onClick={handleOnChange}>
						Get recommended question
					</button>
					<textarea
						className='textArea form-control'
						placeholder='Type Reflection'
						id='#'></textarea>
				</div>

				<div className='mt-5 mb-5' value={props.recommendedQuestions}>
					<label className='fw-semibold fs-3 mb-2'>Agent Reflection</label>
					<button
						value='agentReflection'
						className='sm bg-transparent border border-2 rounded mx-2'
						onClick={handleOnChange}>
						Get recommended question
					</button>
					<textarea
						className='textArea form-control'
						placeholder='Type Reflection'
						id='#'></textarea>
				</div>
			</div>
			{/*  */}
		</div>
	);
}
