import React from "react";
import LeftContent from "../Components/WellnessFormSections/LeftContent";
import CenterContent from "../Components/WellnessFormSections/CenterContent";
import RightContent from "../Components/WellnessFormSections/RightContent";

export default function WellnessForm() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-3 bg-secondary'>
					<LeftContent />
				</div>
				<div className='col-6 bg-warning'>
					<CenterContent />
				</div>
				<div className='col-3 bg-danger'>
					<RightContent />
				</div>
			</div>
		</div>
	);
}
