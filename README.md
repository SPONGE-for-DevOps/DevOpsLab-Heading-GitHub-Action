# DevOpsLab-Heading-GitHub-Action

## Env-info

- [Node.js 설치](https://nodejs.org/ko/download/)
- [npm 설치](https://www.npmjs.com/get-npm)
- [yarn 설치](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Mac에서 간단하게 Node.js, npm, yarn 설치](https://junhobaik.github.io/install-node-yarn/)

```bash
  # 터미널에서 설치확인
  node -v # v12.16.1
  npm -v  # 6.13.4
  yarn -v # 1.21.1
```

Express.js 프로젝트 생성

```bash
  # 프로젝트 관리 시작
  yarn init
  # 프로젝트에 Express.js 추가
  yarn add express
  yarn add express-generator

  # Express 프로젝트 생성
  express --no-view -f .

  # Express 서버 시작
  yarn start
  # App listening on port 3000!
```

미들웨어 설치

```bash
  # Express 프로젝트가 생성될때 기본으로 사용하도록 지정된 모듈
  yarn add cookie-parser
  yarn add morgan
  # Reqeust Body 객체를 사용하기 위한 모듈
  yarn add body-parser
```
