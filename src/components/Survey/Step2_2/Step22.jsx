// import React, { useState } from 'react';
// import { Button, Input, Label, Modal } from '@goorm-dev/gds-challenge';

// const Step22 = ({ used, setUsed }) => {
//     const [infos, setInfos] = useState({ EDU: false, LEVEL: false, DEVTH: false, IDE: false, EXP: false });
//     const handleChange = (event) => {
//         const temp = event.target.id
//         setInfos((infos) => ({ ...infos, tmp: !infos.temp }));
//         console.log(survey.username);
//     };
// }
// return (
//     <Modal.Body>
//         <div>2-1. 사용 경험이 있는 서비스를 선택해주세요. (복수 선택 가능)</div>
//         <div>
//             {infos.keys.map((data) => {
//                 return (
// 							<Input
// 							type="checkbox"
// 							size="sm"
// 							checked={true}
// 							id={data}
// 							onClick={(e) => handleChange(e.target.id)}
// 						></Input>
// 						<span>
// 							구름 {data}
// 						</span>
//                 )
//             })}
//         </div>
//         <div>2-2. 사용 경험이 있는 서비스를 선택해주세요. (복수 선택 가능)</div>
//         <TextArea block placeholder='ex. 구름톤 챌린지에 참여하기 위해 레벨 서비스를 사용해봤습니다.'></TextArea>
//     </Modal.Body>
// )
// };

// export default Step22;
