import {
	Modal,
	TextArea,
	CarouselIndicators,
	Button,
} from '@goorm-dev/gds-challenge';

import styles from '../Font.module.css';

export default function Step4(props) {
	const { survey, setIsOpen, setSurvey, setCurrentScreen } = props;

	const handlePrev = () => {
		setCurrentScreen(1);
	};

	const handleSubmit=()=>{
		localStorage.setItem('surveyData', JSON.stringify(survey));
		setCurrentScreen(0);
		setIsOpen(false);
	};

	const handleSurvey4Change = (e) => {
		const value = e.target.value;
		setSurvey((prevSurvey) => ({ ...prevSurvey, survey4: value }));
	};
	
	return (
		<>
			<Modal.Header>
				<span className={styles.font1}>
					구름톤 챌린지에 <br />
					전하고 싶은 말을 적어주세요.
				</span>
			</Modal.Header>
			<Modal.Body>
				더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
				<TextArea
					resize="vertical"
					rows={4}
					block
					value={survey.survey4}
					onChange={handleSurvey4Change}
					placeholder="ex.
다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.
오프라인 과제가 다양했으면 좋겠어요.
"
				></TextArea>
			</Modal.Body>
			<Modal.Footer>
				<CarouselIndicators
					length={4}
					activeIndex={3}
				></CarouselIndicators>
				<div>
					<Button size="lg" color="link" onClick={handlePrev}>
						이전
					</Button>
					<Button size="lg" onClick={handleSubmit}>제출하기</Button>
				</div>
			</Modal.Footer>
		</>
	);
}
