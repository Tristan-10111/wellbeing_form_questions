import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OpeningQuestions from "./Components/RecommendedQuestions/OpeningQuestions";
import HappyQuestions from "./Components/RecommendedQuestions/HappyQuestions";
import AngryQuestions from "./Components/RecommendedQuestions/AngryQuestions";
import ConfusedQuestions from "./Components/RecommendedQuestions/ConfusedQuestions";
import AnxiousQuestions from "./Components/RecommendedQuestions/AnxiousQuestions";
import SadQuestions from "./Components/RecommendedQuestions/SadQuestions";
import YouthReflectionQuestions from "./Components/RecommendedQuestions/YouthReflectionQuestions";
import AgentReflectionQuestions from "./Components/RecommendedQuestions/AgentReflectionQuestions.jsx";

function App() {
	const [recommendedQuestions, setRecommendedQuestions] = useState("");

	const [happyQuestions, setHappyQuestions] = useState(false);
	const [angryQuestions, setAngryQuestions] = useState(false);
	const [confusedQuestions, setConfusedQuestions] = useState(false);
	const [anxiousQuestions, setAnxiousQuestions] = useState(false);
	const [sadQuestions, setSadQuestions] = useState(false);
	const [youthReflectionQuestions, setYouthReflectionQuestions] =
		useState(false);
	const [agentReflectionQuestions, setAgentReflectionQuestions] =
		useState(false);
	///////////////////////////////////////////////////////////

	useEffect(() => {
		recommendedQuestions === "happy"
			? setHappyQuestions(true)
			: setHappyQuestions(false);
		recommendedQuestions === "angry"
			? setAngryQuestions(true)
			: setAngryQuestions(false);
		recommendedQuestions === "confused"
			? setConfusedQuestions(true)
			: setConfusedQuestions(false);
		recommendedQuestions === "anxious"
			? setAnxiousQuestions(true)
			: setAnxiousQuestions(false);
		recommendedQuestions === "sad"
			? setSadQuestions(true)
			: setSadQuestions(false);
		recommendedQuestions === "youthReflection"
			? setYouthReflectionQuestions(true)
			: setYouthReflectionQuestions(false);
		recommendedQuestions === "agentReflection"
			? setAgentReflectionQuestions(true)
			: setAgentReflectionQuestions(false);
	}, [recommendedQuestions]);

	const handleOnChange = (e) => {
		setRecommendedQuestions(e.target.value);
	};
	// ////////////////////////////////////////////////////
	const renderResult = () => {
		let result;
		recommendedQuestions === ""
			? (result = (
					<div>
						<div className='text-center'>Opening Questions</div>
						<OpeningQuestions />
					</div>
			  ))
			: recommendedQuestions === "happy"
			? (result = <div className='text-center'>Happy Questions</div>)
			: recommendedQuestions === "angry"
			? (result = <div className='text-center'>Angry Questions</div>)
			: recommendedQuestions === "confused"
			? (result = <div className='text-center'>Confused Questions</div>)
			: recommendedQuestions === "anxious"
			? (result = <div className='text-center'>Anxiouss Questions</div>)
			: recommendedQuestions === "sad"
			? (result = <div className='text-center'>Sad Questions</div>)
			: recommendedQuestions === "youthReflection"
			? (result = <div className='text-center'>YouthReflection Questions</div>)
			: recommendedQuestions === "agentReflection"
			? (result = <div className='text-center'>AgentReflection Questions</div>)
			: (result = "");
		return result;
	};
	////////////////////////////////

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-6'>
					<div className='mt-4'>
						<div
							value={recommendedQuestions}
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
					<div className='mt-4 d-flex flex-column' value={recommendedQuestions}>
						<button
							value='youthReflection'
							className='border-2 border-secondary rounded bg-transparent fs-5 fw-semibold'
							onClick={handleOnChange}>
							YouthReflection Questions
						</button>
						<button
							value='agentReflection'
							className='border-2 border-secondary rounded bg-transparent fs-5 fw-semibold mt-3'
							onClick={handleOnChange}>
							AgentReflection Questions
						</button>
					</div>
				</div>

				<div className='col-6'>
					<div>
						<div>
							<h1 className='text-center'>Recommended Questions</h1>
							<hr className='border-5 border-secondary opacity-100' />
						</div>
						<h1> {renderResult()}</h1>
						{happyQuestions && <HappyQuestions />}
						{angryQuestions && <AngryQuestions />}
						{confusedQuestions && <ConfusedQuestions />}
						{anxiousQuestions && <AnxiousQuestions />}
						{sadQuestions && <SadQuestions />}
						{youthReflectionQuestions && <YouthReflectionQuestions />}
						{agentReflectionQuestions && <AgentReflectionQuestions />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
