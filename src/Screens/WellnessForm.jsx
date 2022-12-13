import React, { useState } from "react";
import "../Styles/WellnessForm.css";
import LeftContent from "../Components/WellnessFormSections/LeftContent";
import CenterContent from "../Components/WellnessFormSections/CenterContent";
import RightContent from "../Components/WellnessFormSections/RightContent";

export default function WellnessForm() {
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

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='bg-1 col '>
					<LeftContent />
				</div>
				<div className='col-6 bg-2'>
					<CenterContent
						recommendedQuestions={recommendedQuestions}
						setRecommendedQuestions={setRecommendedQuestions}
						setHappyQuestions={setHappyQuestions}
						setAngryQuestions={setAngryQuestions}
						setConfusedQuestions={setConfusedQuestions}
						setAnxiousQuestions={setAnxiousQuestions}
						setSadQuestions={setSadQuestions}
						setYouthReflectionQuestions={setYouthReflectionQuestions}
						setAgentReflectionQuestions={setAgentReflectionQuestions}
					/>
				</div>
				<div className='col-3 bg-4'>
					<RightContent
						recommendedQuestions={recommendedQuestions}
						happyQuestions={happyQuestions}
						angryQuestions={angryQuestions}
						confusedQuestions={confusedQuestions}
						anxiousQuestions={anxiousQuestions}
						sadQuestions={sadQuestions}
						youthReflectionQuestions={youthReflectionQuestions}
						agentReflectionQuestions={agentReflectionQuestions}
					/>
				</div>
			</div>
		</div>
	);
}
