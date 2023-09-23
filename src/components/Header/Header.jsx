import cn from 'classnames';
import Step1 from '../Survey/Step1/Step1';
import Step4 from '../Survey/Step4/Step4';

import { Button, Typography, Modal } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import { useState } from 'react';

const initialSurvey = {
	username: "",
	phone: "",
	email: "",
	survey1: "",
	survey2: "",
	survey2_1: "",
	survey2_2: "",
	survey3: "",
	survey4: ""
  };


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentScreen, setCurrentScreen] = useState(1);
	const [survey, setSurvey] = useState({ ...initialSurvey });

	function toggle(){
		setIsOpen(isOpen==true?(false, setCurrentScreen(1)):true);
	};

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={toggle} >설문조사 참여하기</Button>
				<>
					<Modal isOpen={isOpen} toggle={toggle}>
						{currentScreen == 1 && <Step1 survey={survey} setSurvey={setSurvey} setCurrentScreen={setCurrentScreen}></Step1>}
						{currentScreen == 4 && <Step4 survey={survey} setSurvey={setSurvey} setCurrentScreen={setCurrentScreen}></Step4>}
					</Modal>
				</>
			</div>
		</header>
	);
};

export default Header;
