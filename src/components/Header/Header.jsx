import cn from 'classnames';

import { Button, Typography, Modal } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(isOpen == true ? false : true);
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
						<Modal.Header toggle={toggle}>
							헤더
						</Modal.Header>
						<Modal.Body>
							컨텐츠를 넣어주세요.
						</Modal.Body>
						<Modal.Footer>
							<Button size="lg" color="link">이전</Button>
							<Button size="lg">다음</Button>
						</Modal.Footer>
					</Modal>

				</>
			</div>
		</header>
	);
};

export default Header;
