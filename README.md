# VCEC 프로젝트
## virtual Coin Exchange Challenge

실시간으로 비트코인 가격정보를 불러와 모의투자를 해볼 수 있는 사이트 이다.

실시간으로 1초에 한번씩 빗썸api에서 가격정보를 불러와 chart.js를 이용해서 차트로 변환하여 웹에 보여주고
그 시세에 맞는 가격으로 구매와 판매가 가능하도록 구현하였다. ( 초기자금은 10억으로 설정하였다.)
추세선을 그릴 수 있는 기능을 만들었다.

#### 사용한 언어
1. HTML
2. CSS
3. JavaSCript

#### 사용한 기술들
1. Bithumb API ( 비트코인 가격정보 불러오기 위한 API이다. )
2. websocket (실시간 통신을 가능하게 함)
3. Bootstrap ( 빠른 웹디자인을 위한 프레임워크 )
4. canvas API ( 추세선을 그리려고 사용함 )
5. Chart.js (비트코인 그래프를 그리는데 사용함 )


사용한 부트스트랩 템플릿
- [메인페이지 사용 템플릿](https://startbootstrap.com/theme/agency)
- [모의투자 전체 디자인 템플릿](https://startbootstrap.com/theme/sb-admin-2)