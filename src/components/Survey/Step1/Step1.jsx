import {
	Button,
	Modal,
	Input,
	Label,
	CarouselIndicators,
} from '@goorm-dev/gds-challenge';
import { useState } from 'react';

import styles from '../Font.module.css';

export default function Step1(props) {
	const { survey, setSurvey, setCurrentScreen } = props;
	const [showStep2, setShowStep2] = useState(false);

	const handleNext = () => {
		setCurrentScreen(3);
		console.log(showStep2);
	};

	

	const handleNameChange = (e) => {
		const value = e.target.value;
		setSurvey((prevSurvey) => ({ ...prevSurvey, username: value }));
		console.log(survey.username);
	};

	const handlePhoneChange = (e) => {
		const value = e.target.value;
		setSurvey((prevSurvey) => ({ ...prevSurvey, phone: value }));
		console.log(survey.phone);
	};

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setSurvey((prevSurvey) => ({ ...prevSurvey, email: value }));
		console.log(survey.email);
	};

	return (
		<>
			<Modal.Header>
				<span className={styles.font1}>
					참여자 정보를 입력해주세요.
				</span>
			</Modal.Header>
			<Modal.Body>
				오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
				<div>
					<div>
						<Label>이름</Label>
						<Input
							type="text"
							block
							invalid={false}
							checked={false}
							value={survey.username}
							onChange={handleNameChange}
							placeholder="이름을 입력해주세요."
						></Input>
					</div>
					<div>
						<Label>전화번호</Label>
						<Input
							type="tel"
							block
							placeholder="ex. 01012345678"
							onChange={handlePhoneChange}
							value={survey.phone}
						></Input>
					</div>
					<div>
						<Label>이메일</Label>
						<Input
							width="100%"
							type="email"
							block
							placeholder="ex.goormee@goorm.io"
							value={survey.email}
							onChange={handleEmailChange}
						></Input>
					</div>
				</div>
				<div>
					<Input
						type="checkbox"
						block
						label="전체 동의"
						size="sm"
						checked
					></Input>
					<hr />
					<Input
						type="checkbox"
						block
						label="(필수) 개인정보처리방침"
						size="sm"
						checked
					></Input>
					<Input
						type="checkbox"
						block
						label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
						size="sm"
						checked
					></Input>
					<Input
						type="checkbox"
						block
						label="(선택) 광고성 정보 수신"
						size="sm"
						checked
					></Input>
					<div>
						<Input
							type="checkbox"
							label="이메일"
							size="sm"
							checked={true}
						></Input>
						<Input
							type="checkbox"
							label="SMS"
							size="sm"
							checked={true}
						></Input>
					</div>
					<p className={styles.font5 && styles.ex}>
						※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실
						수 있도록 리마인드 알림을 보내드려요.
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<CarouselIndicators
					length={4}
					onClickWithIndex={alert}
				></CarouselIndicators>
				<Button onClick={handleNext}>다음</Button>
			</Modal.Footer>
		</>
	);
}
