# goorm Team-Challenge

---

## 📚 참고자료

-   [GDS 스토리북 링크](https://challenge-gds-storybook.dev.goorm.io/)
-   [피그마 시안 링크](https://www.figma.com/file/ihvdLEzT5Q8ivyJjnOv2h0/%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8-%ED%8C%80-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EA%B3%BC%EC%A0%9C?type=design&node-id=263%3A8662&mode=design&t=VVq5AmuPQFHEL6qG-1)

## ⚙️ 프로젝트 초기 설정법

1. `npm i`
2. `eslint & prettier` 사용하실 분은 [Eslint & Prettier 사용법](###Eslint-&-Prettier-사용법)을 확인해주세요.

### Eslint & Prettier 사용법

> 사용하실분만 사용하시면 됩니다. `(선택 사항)`

1. `npm run set:lint`
2. `기본 설정: 사용자 설정 열기(JSON)`에 아래 내용 추가

    ```json
    {
        ...
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        },
    }
    ```

## 🚀 프로젝트 실행법

1. `npm start`
