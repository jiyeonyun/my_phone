## my_phone 📱
* https://jiyeonyun.github.io/my_phone/
<br>↑ 배포사이트
<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git hub-181717?style=flat-square&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>
<br>
<img width="491" alt="main" src="https://user-images.githubusercontent.com/94913420/160829195-ccff671e-8dcf-431f-8223-26d7850fe849.png">
<br> <br>
기존에 etc 리포지토리에 있던 토이프로젝트를 한 파일로 합쳐보고싶어 리액트를 사용해 만들어 보았습니다.<br>
핸드폰처럼 ui를 디자인해 어플을 누르는 형태로 만들었습니다.<br>
기존에 js로만 만든 파일이 많아 리액트로 변환하는 과정이 많아, js를 리액트로 변환하는방법을 알게 되었고, 리액트의 장점을 알게 되었습니다.
<br>


## 상세 페이지
<img width="491" alt="main" src="https://user-images.githubusercontent.com/94913420/160829195-ccff671e-8dcf-431f-8223-26d7850fe849.png">
<br> <br> <br> 
메인페이지입니다. 위에 헤더에는 실시간 시간과 하단바에는 뒤로가기 취소버튼 메뉴 버튼이 있습니다. <br>
6개의 어플리케이션이 있습니다.<br>
클릭시 해당 어플로 이동합니다.
<br> <br>

### habit Tracker
<img width="480" alt="habit" src="https://user-images.githubusercontent.com/94913420/160829211-2d37f731-ffba-4e82-b41a-ef55db776b01.png">
<br> <br> <br> 
habit Tracker입니다. 취미를 추가할수있고, 삭제, 카운트 할수있습니다.
<br> 리셋버튼을 누르며 기존에 카운트 되었던걸 리셋 할 수 있습니다.<br>
<img width="480" alt="habit" src="https://user-images.githubusercontent.com/94913420/160827951-e9dce819-edd5-4cf1-b0ed-d7411d72ab5c.gif">
<br> <br>

### 그림판
<img width="488" alt="painting" src="https://user-images.githubusercontent.com/94913420/160829248-bc1da019-7740-4dd7-abf6-b1a3e323aa54.png">
<br> <br> <br> 
그림판 입니다. 색상변경, 채우기, 브러쉬 크기조절을 할수있습니다.
<img width="480" alt="painting" src="https://user-images.githubusercontent.com/94913420/160827886-3e656e18-0cb7-414c-9c6a-5fc67d257488.gif">
<br> <br>
기존에 js로 만들었었는데, web에서는 마우스로 그림을 그리리면 canvas라는 html 태그를 사용해야 하고,<br>
JS의 경우, getElementById 등의 방법으로 DOM에서 canvas 태그에 접근이 가능합니다.<br>
그런데 리액트로 변환하는 중 , canvas태그에 접근하는방법을 찾는데 시간을 많이 소모했습니다. useRef를 사용해 canvas태그에 접근해,<br>
그림판-리액트 버전을 완성했습니다.<br>



