# VCEC 프로젝트
## virtual Coin Exchange Challenge

실시간으로 비트코인 가격정보를 불러와 모의투자를 해볼 수 있는 사이트 이다.

실시간으로 1초에 한번씩 빗썸api에서 가격정보를 불러와 chart.js를 이용해서 차트로 변환하여 웹에 보여주고
그 시세에 맞는 가격으로 구매와 판매가 가능하도록 구현하였다. ( 초기자금은 10억으로 설정하였다.)
추세선을 그릴 수 있는 기능을 만들었다.

#### 사용한 언어
1. HTML
2. CSS
3. JavaScript

#### 사용한 기술들
1. Bithumb API ( 비트코인 가격정보 불러오기 위한 API이다. )
2. websocket (실시간 통신을 가능하게 함)
3. Bootstrap ( 빠른 웹디자인을 위한 프레임워크 )
4. canvas API ( 추세선을 그리려고 사용함 )
5. Chart.js (비트코인 그래프를 그리는데 사용함 )


#### 사용한 부트스트랩 템플릿
- [메인페이지 사용 템플릿](https://startbootstrap.com/theme/agency)
- [모의투자 전체 디자인 템플릿](https://startbootstrap.com/theme/sb-admin-2)

#### 이미지, 동영상 출처
[픽사베이 : 무료이미지 제공사이트 ( 저작권 문제 해결 )](https://pixabay.com/ko/)

#### 설명
루트디렉토리에 index.html이 메인페이지이다. 나머지 html들을 테스트 하려고 만들었기 때문에 지워도 상관없음
chart디렉토리에 index.html 모의투자 메인페이지이다. 템플릿을 사용하였기 때문에 다른 html파일이 많다. 삭제하지 않은 이유는 좋은 디자인 가져오려고
지우기 않고 남겨두었다. 지워도 상관없음.
utilities-color.html이 비트코인 구매관련 페이지임
데이터베이스를 구현하지 않았기 때문에 회원정보나 잔액등이 저장되지 않음.
모르거나 이상한게 있으면 3학년 6반 김민서 찾아오면 됨

[유료호스팅 - 호스팅케이알](https://www.hosting.kr/)
[무료 호스팅 - 닷홈](https://www.dothome.co.kr/)




#### 다운로드 후 로컬에서 실행하는 방법

초록색 코드버튼 클릭 후 Download ZIP 클릭