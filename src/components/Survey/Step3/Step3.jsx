import cn from 'classnames';

import { Button, Typography, Modal, CarouselIndicators } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import { useState } from 'react';

const Step3 = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(isOpen == true ? false : true);
	};

	const footer = {
		marginLeft: "20px",
		marginBottom: "20px"
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
							<Typography color="dark" weight={900} >오프라인 팀 챌린지에</Typography>
							<br></br>
							<Typography color="dark" weight={900} >가장 기대하는 점은 무엇인가요?</Typography>
						</Modal.Header>
						{/* <Typography color="info" weight={200} >더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography> */}
						<Modal.Body>

							<Button color="basic"  >1. 협업 경험</Button>
							<Button color="basic"  >2. 구름 사내 서비스 체험</Button>
							<Button color="basic" >3. 협업 경험</Button>
							<Button color="basic" >4. 개발자 친구 만들기</Button>
						</Modal.Body>
						<Modal.Footer>
							<Button size="lg" color="link">이전</Button>
							<Button size="lg">다음</Button>
						</Modal.Footer>
						<div style={footer}>
							<CarouselIndicators length={4} activeIndex={2} ></CarouselIndicators>
						</div>
					</Modal>

				</>
			</div>
		</header>
	);
};

export default Step3;
