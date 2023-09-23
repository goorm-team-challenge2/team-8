import React from 'react';
import { Button, Modal } from '@goorm-dev/gds-challenge';

const Step22 = () => {
  return (
    <div className="step2">
      <Modal.Header toggle={toggle} className="Title">
        <div className="modalTitle">
          구름 서비스 이용 경험을 알려주세요.
        </div>
        <div className="modalSubTitle">
          더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
        </div>
      </Modal.Header>
      <Modal.Body>
        <li className="list">
          <ol className="question1">
            <span>SW 관련 학과를 전공하셨나요?</span>
            <span className="essential">*</span>
          </ol>
          <div className="btnContainer">
            <button type="submit" className="major">
              전공
            </button>
            <button type="submit" className="notmajor">
              비전공
            </button>
          </div>
          <ol className="question2">
            <span>SW 관련 학과를 전공하셨나요?</span>
            <span className="essential">*</span>
          </ol>
          <div className="btnContainer">
            <button type="submit" className="yes">
              예_
            </button>
            <button type="submit" className="no">
              아니요
            </button>
          </div>
        </li>
      </Modal.Body>
      <Modal.Footer>
        <Button>다음</Button>
      </Modal.Footer>
    </div>
  );
};

export default Step22;

