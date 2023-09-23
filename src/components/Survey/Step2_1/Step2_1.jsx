import cn from 'classnames';

import { Button, Typography, Modal, Form, CarouselIndicators, Label, Input } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import { useState } from 'react';

const Step2_1 = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sw, setSw] = useState(false);
	const [notSw, setNotSw] = useState(false);
	const [goormYActive, setGoormYActive] = useState(false)
	const [goormNActive, setGoormNActive] = useState(false)

	function toggle() {
		setIsOpen(isOpen == true ? false : true);
	};

	const info = {
		marginLeft: "20px"
	}

	const footer = {
		marginLeft: "20px",
		marginBottom: "20px"
	}

	const swClick = () => {
		if (notSw) {
			setSw(!sw);
			setNotSw(!notSw)
		} else {
			setSw(!sw);
		}

	};

	const notSwClick = () => {
		if (sw) {
			setNotSw(!notSw)
			setSw(!sw);
		} else {
			setNotSw(!notSw)
		}
	}

	const goormY = () => {
		if (goormNActive) {
			setGoormYActive(!goormYActive)
			setGoormNActive(!goormNActive)
		} else {
			setGoormYActive(!goormYActive)
		}
	}

	const goormN = () => {
		if (goormYActive) {
			setGoormNActive(!goormNActive)
			setGoormYActive(!goormYActive)
		} else {
			setGoormNActive(!goormNActive)
		}
	}

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={toggle} >설문조사 참여하기</Button>
				<>
					<Modal isOpen={isOpen} toggle={toggle}>
						<Modal.Header toggle={toggle}>
							<Typography color="dark" weight={900} >구름 서비스 이용 경험을 알려주세요.</Typography>
						</Modal.Header>
						<div style={info}>
							<Typography content="center" color="info" weight={400} block >텍스트를 입력하세요.</Typography>
						</div>
						<Modal.Body>
							<Form.Group>
								<Label required pointer={false} >1. SW 관련 학과를 전공하셨나요?</Label>
								<div>
									<Button onClick={swClick} color="basic" active={sw}>전공</Button>
									<Button onClick={notSwClick} color="basic" active={notSw}>비전공</Button>
								</div>
							</Form.Group>
							<Form.Group>
								<Label required pointer={false} >2. 구름 서비스를 사용해보신 적이 있나요?</Label>
								<div>
									<Button onClick={goormY} color="basic" active={goormYActive} >예</Button>
									<Button onClick={goormN} color="basic" active={goormNActive} >아니요</Button>
								</div>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button size="lg" color="link">이전</Button>
							<Button size="lg">다음</Button>
						</Modal.Footer>
						<div style={footer}>
							<CarouselIndicators length={4} activeIndex={1} ></CarouselIndicators>
						</div>
					</Modal>

				</>
			</div>
		</header>
	);
};

export default Step2_1;
