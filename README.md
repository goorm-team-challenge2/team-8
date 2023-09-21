# goorm Team-Challenge

## 📚 참고자료

-   [GDS 스토리북 링크](https://challenge-gds-storybook.dev.goorm.io/)
-   [피그마 시안 링크](https://www.figma.com/file/ihvdLEzT5Q8ivyJjnOv2h0/%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8-%ED%8C%80-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EA%B3%BC%EC%A0%9C?type=design&node-id=0%3A1&mode=design&t=qQrOq7Nm4TUc7r9A-1)

## ⚙️ 프로젝트 초기 설정법

1. `npm i`
2. `eslint & prettier` 사용하실 분은 [Eslint & Prettier 사용법](#eslint--prettier-사용법)을 확인해주세요.

### Eslint & Prettier 사용법

> 사용하실분만 사용하시면 됩니다. `(선택 사항)`

1. `vscode extension` 중 `ESLint`와 `Prettier` 설치
2. 명령 팔레트 오픈 (`command(또는 ctrl) + shifr + P`)
3. 사용자 설정(JSON)오픈 (`Preferences: Open User Settings (JSON)`)
4. 아래 내용 `Copy & Paste`

    ```json
    {
    	"workbench.colorTheme": "Default Dark+",
    	"editor.formatOnSave": false,
    	"editor.codeActionsOnSave": {
    		"source.fixAll.eslint": true
    	}
    }
    ```

## 🚀 프로젝트 실행법

-   `npm start`

## GDS 및 alias 사용법

```js
// GDS 컴포넌트
import { Button } from '@goorm-dev/gds-challenge';
import { ChevronDoubleLeftIcon } from '@goorm-dev/gds-icons';

// alias (src/* === @/*)
import { Card } from '@/components';

const Example = () => {
	return (
		<>
			<Button icon={<ChevronDoubleLeftIcon />}>GDS TEST</Button>;<Card></Card>
		</>
	);
};
```
