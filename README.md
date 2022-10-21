# BOB

GraphQL과 Vue3를 활용한 간단한 맛집 예약 서비스

## 프로젝트 실행 & 배포

/BOB/package.json

```jsx
{
///  ... 생략
"scripts": {
    "start:client": "cd ./client && npm run serve",
    "build:client": "cd ./client && npm run build",
    "deploy:client": "cd ./client && npm run deploy && start /max `https://taeminchoe.github.io/BOB/`",
    "start:server": "cd ./server && npm run start",
    "deploy:server": "git subtree push --prefix server heroku main"
  }
```

- `start:client` : 클라이언트 로컬 실행
- `build:client` : 클라이언트 빌드
- `deploy:client` : git page에 client소스 배포
- `start:server` : 서버 로컬 실행
- `deploy:server` : heroku에 서버 코드 배포
