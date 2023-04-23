import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    axios("https://bitnalee.dev/feed.xml").then((res) => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(res.data, "text/html");
      let xmlArr = xmlDoc.querySelectorAll("entry");
      let postArr = Array.from(xmlArr);
      setPostList(postArr);
    });
  };

  const setPostList = (postArr) => {
    let resultList = [];
    postArr.forEach((item) => {
      console.log(item);

      // let date = new Date(item.querySelector("published").innerHTML);
      // let week = null;
      let day = item.querySelector("published").innerHTML.slice(0, 10);

      resultList.push({
        title: item.querySelector("title").innerHTML,
        content: item.querySelector("content").innerHTML,
        summary: item.querySelector("summary").innerHTML,
        link: item.querySelector("link").href,
        // category: item.querySelector("category"),
        date: day,
      });
    });
    console.log(resultList);
    setPost(resultList);
  };

  return (
    <div>
      <Header />
      <section className="wrapper">
        <article className="content">
          <div className="inner author">
            <img
              src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
              alt=""
              className="avatar"
            />
            <h2 className="title">
              Bitna <span>Lee</span>
            </h2>
            <p className="info">
              사용자 관점에서 고민하고 꾸준히 노력하는 프론트엔드 개발자 입니다
              <br /> 다양한 프로젝트 및 협업 경험을 통해
              기획자/디자이너/개발자와
              <br /> 유연한 소통이 가능하며 다양한 접근방법으로 문제 해결에
              노력합니다
              <br />
              <Link to="https://github.com/bitnaleeeee" target="_blank">
                Github
              </Link>
            </p>
          </div>
        </article>

        <article className="content">
          <h2 className="title">
            Skill <span>&</span> Tool
          </h2>
          <div className="inner skill">
            <dl>
              <dt>HTML5</dt>
              <dd>
                시멘틱 마크업이 가능하며 웹표준/웹접근성을 고려한 작업을
                추구합니다
              </dd>
            </dl>
            <dl>
              <dt>CSS3/Sass</dt>
              <dd>
                디자인 결과물에 대해 문제없이 구현할 수 있으며 애니메이션 활용이
                가능합니다
              </dd>
            </dl>
            <dl>
              <dt>JavaScript</dt>
              <dd>
                직관적이고 유연한 코드를 지향하고 다양한 방법으로 문제에
                접근하며 최신 문법에 거부감이 없습니다
              </dd>
            </dl>
            <dl>
              <dt>React</dt>
              <dd>
                프로젝트를 주로 리액트 및 컴포넌트 단위로 개발하여 화면/기능
                구현에 자신이 있습니다
              </dd>
            </dl>
            <dl>
              <dt>jQuery</dt>
              <dd>
                개발을 처음 배울때 접근성이 좋아 여러가지 UI를 제작해봤으며
                다양한 기능 구현이 가능합니다
              </dd>
            </dl>
            <dl>
              <dt>Git/Github</dt>
              <dd>
                버전관리를 이해하고 업무 순서에 맞게 작업하며 통일성 및 체계적인
                커밋 컨벤션을 지향합니다
              </dd>
            </dl>
          </div>
        </article>

        <article className="content">
          <h2 className="title">
            Pro<span>ject</span>
          </h2>
          <div className="inner project">
            <dl>
              <dt>
                <img
                  src={process.env.PUBLIC_URL + '/images/logo-onboarding.png'}
                  alt="onboarding logo"
                />
                <div className="title">
                  실시간 검색창 구축 및 AWS EC2에 JSON Server
                  배포하기(프리온보딩)
                </div>
                <div className="date">2022.08.12 ~ 2022.8.26</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://bitnaleeeee.github.io/medical-search/"
                    target="_blank"
                  >
                    배포 링크
                  </Link>
                  <Link
                    to="https://bitnaleeeee.github.io/back-end-build/"
                    target="_blank"
                  >
                    관련 포스팅
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/medical-search"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/project-search.gif'}
                    alt="실시간 검색창 영상"
                  />
                </div>
                <div className="info">
                  프리온보딩 프로젝트중 하나로써 검색창에 질환명 검색시
                  실시간으로 API 호출 통해서 검색어를 추천해주는 UI를
                  구현하였습니다. 정규표현식/캐싱/리액트 최적화 등 여러가지
                  기술들을 경험 할 수 있었던 프로젝트입니다. 무엇보다 실시간으로
                  JSON Server를 동작하기 위해 AWS에 직접 배포하는 과정이 기억에
                  남았습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>
                    정규표현식을 사용하여 사용자가 검색한 텍스트와 일치하는 부분
                    볼드처리
                  </dd>
                  <dd>검색어가 없을 시 '검색어 없음' 표출</dd>
                  <dd>API 호출 최적화(Debounce)</dd>
                  <dd>키보드로 추천 검색어들 이동 가능하도록 구현</dd>
                  <dd>
                    캐싱 기능을 제공하는 라이브러리(React-Query)등을 사용 하지
                    않고 API 호출별로 로컬 캐싱 구현
                  </dd>
                  <dd>
                    API를 호출할 때 마다 console.info('calling api') 출력을 통해
                    콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
                  </dd>
                  <dd>API 호출을 위한 JSON Server를 AWS EC2 서버에 배포</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, JSX, Sass,
                      CRA
                    </p>
                    <p>
                      <strong>Back-End</strong> Node.js, Express, aws(EC2)
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-wanted.png'} alt="wanted logo" />
                <div className="title">
                  로그인 / 회원가입, TodoList 추가, 수정, 삭제 기능 구현
                </div>
                <div className="date">2022.10.01 ~ 2022.10.07</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://bitnaleeeee.github.io/wanted-task/"
                    target="_blank"
                  >
                    배포 링크
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/wanted-task"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/project-todo.gif'}
                    alt="원티드 프론트엔드코스 사전과제 영상"
                  />
                </div>
                <div className="info">
                  원티드 프론트엔드코스 과정 선발 과제입니다. 로그인하여 토큰이
                  발급되면 TODO 페이지로 리다이렉트합니다. 글쓰기/수정/삭제 및
                  할일 상태를 서버와 POST 방식으로 통신을 구현하였습니다. 또한
                  로그인 유효성 검사/토큰 세션 저장 등 여러가지 로직을 경험할 수
                  있었습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>로그인, 회원가입 유효성 검사</dd>
                  <dd>
                    로그인 API 호출, 올바른 응답을 받았을 때 todo 경로로 이동
                  </dd>
                  <dd>로그인 여부에 따른 리다리렉트 처리 구현</dd>
                  <dd>
                    TODO 경로 접속시 투두 리스트, 입력창, 추가 버튼, 수정, 삭제
                    기능 구현
                  </dd>
                  <dd>TODO 체크 박스 구현</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, JSX, React
                      Router, Sass
                    </p>
                    <p>
                      <strong>Tool</strong> Git
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>

            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-airbnb.png'} alt="airbnb logo" />
                <div className="title">Airbnb를 모티브로한 팀 프로젝트</div>
                <div className="date">2022.08.29 ~ 2022.09.08</div>
                <div className="date">주관 : 위코드 부트캠프</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://www.youtube.com/watch?v=DWaKFjUI7Ew"
                    target="_blank"
                  >
                    배포 영상
                  </Link>
                  <Link
                    to="https://bitnaleeeee.github.io/2022/09/08/2%EC%B0%A8%20project%20%ED%9A%8C%EA%B3%A0/"
                    target="_blank"
                  >
                    회고록
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/36-2nd-WeNB-frontend"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/project-wenb.gif'}
                    alt="wenb 프로젝트 영상"
                  />
                </div>
                <div className="info">
                  숙박 공유 서비스 Airbnb의 클론코딩이며 두번째 프로젝트인 만큼
                  1차 프로젝트의 아쉬웠던 부분을 보완하며 작업하게 되었습니다.
                  위 프로젝트는 유저 페이지와 호스트 페이지가 나눠져있어
                  기능적으로 구현할 부분이 많아 학습에 도움이 많이 되었습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>반응형 웹, 케럿셀, 아코디언 메뉴</dd>
                  <dd>리뷰 평점 분포 그래프 적용</dd>
                  <dd>평점 표현시 소수 한자리 반올림 적용</dd>
                  <dd>
                    쿼리파라미터(페이지네이션, 오더링)를 이용한 페이지네이션
                    구현
                  </dd>
                  <dd>네이버 맵 라이브러리 적용</dd>
                  <dd>파일첨부 적용</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, JSX, Redux,
                      CRA
                    </p>
                    <p>
                      <strong>Back-End</strong> Node.js, Express, MySQL, jest,
                      aws(EC2)
                    </p>
                    <p>
                      <strong>Tool</strong> Notion, Slack, Trello
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-aesop.png'} alt="aesop logo" />
                <div className="title">Aesop을 모티브로한 팀 프로젝트</div>
                <div className="date">2022.08.12 ~ 2022.8.26</div>
                <div className="date">주관 : 위코드 부트캠프</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://www.youtube.com/watch?v=n2kL24FnHsE"
                    target="_blank"
                  >
                    배포 영상
                  </Link>
                  <Link
                    to="https://bitnaleeeee.github.io/2022/08/27/1%EC%B0%A8%20project%20%ED%9A%8C%EA%B3%A0/"
                    target="_blank"
                  >
                    회고록
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/36-1st-Usopp-frontend"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/project-usopp.gif'}
                    alt="우솝 프로젝트 영상"
                  />
                </div>
                <div className="info">
                  커머스 사이트 Aesop을 모티브로 제작한 클론코딩 프로젝트
                  입니다. 첫 프로젝트인 만큼 서버에서 넘어오는 데이터를 어떻게
                  UI에 뿌려줄지 고민하며 겪은 시행착오 과정이 큰 경험이
                  되었습니다. 또한 팀원들과 협업하면서 효율적인 업무를 위한
                  커뮤니케이션의 중요성을 다시끔 깨달았습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>state, props, usefarams를 사용하여 UI구현</dd>
                  <dd>로그인 입력시 유효성 검사 함수에 따른 화면 구현</dd>
                  <dd>
                    이메일 정보를 호출하여 DB에 없다면 메세지 출력과
                    회원가입으로 이동
                  </dd>
                  <dd>이메일 정보 일치시 비밀번호 입력란 호버 출력</dd>
                  <dd>정규집에 맞는 아이디 및 비밀번호 일치시 게정 생성</dd>
                  <dd>메인 페이지 및 카테고리별, 상품별 페이지 구현</dd>
                  <dd>장바구니에 상품 담기, 삭제, 수량조절 구현</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, JSX, Redux,
                      CRA
                    </p>
                    <p>
                      <strong>Back-End</strong> Node.js, Express, MySQL, jest,
                      aws(EC2)
                    </p>
                    <p>
                      <strong>Tool</strong> Notion, Slack, Trello
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-wanted.png'} alt="wanted logo" />
                <div className="title">
                  깃 레포 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
                </div>
                <div className="date">2022.10.29 ~ 2022.10.30</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://2nd-assignment.vercel.app/"
                    target="_blank"
                  >
                    배포 링크
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/angular-cli-issue-list"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/project-issue.gif'}
                    alt="원티드 프론트엔드코스 기업협업 과제"
                  />
                </div>
                <div className="info">
                  특정 github(Angular-cli) 이슈 목록과 상세 내용을 확인하는
                  반응형 웹을 구현했습니다. GitHub REST API를 사용하여 access
                  token발급받아 프론트엔드만으로 서버와 통신하고 웹을 구축하는
                  경험을 할 수 있었습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>지정조건에 맞게 데이터 요청 및 표시</dd>
                  <dd>이슈 중 코멘트가 많은 순으로 정렬</dd>
                  <dd>상세 이슈 페이지 구현</dd>
                  <dd>
                    화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티
                    스크롤)
                  </dd>
                  <dd>지정조건에 맞게 데이터 요청 및 표시</dd>
                  <dd>Context API를 활용한 이슈 상태관리 및 API 연동</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, TypeScript,
                      JSX, React Router, Styled-component
                    </p>
                    <p>
                      <strong>Tool</strong> Git
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-wanted.png'} alt="wanted logo" />
                <div className="title">B2C 차량대여 서비스 모바일 웹 제작</div>
                <div className="date">2022.11.01 ~ 2022.11.03</div>
              </dt>
              <dd>
                <div className="link">
                  <Link
                    to="https://3rd-assignment.vercel.app/"
                    target="_blank"
                  >
                    배포 링크
                  </Link>
                  <Link
                    to="https://github.com/bitnaleeeee/car-rental-service"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + '/images/carrentalservice.gif'}
                    alt="원티드 프론트엔드코스 기업협업 과제"
                  />
                </div>
                <div className="info">
                  Figma를 사용하여 디자인 및 B2C 차량 대여 서비스 모바일 웹을
                  그대로 제작한 프로젝트입니다. 쿼리키 값, 쿼리 함수에 대한
                  파라미터를 커스텀 훅으로 설정할 수 있게 분리하고 해당 페이지의
                  사용 맥락에 맞게 staleTime 옵션등을 활용해 사용성을
                  개선하였습니다.
                </div>
                <dl className="service">
                  <dt>주요 기능</dt>
                  <dd>Figma 상의 디자인 및 기능 구현</dd>
                  <dd>
                    차량 리스트: 차량이 없을 때 처리, 차량 불러오는 중 처리
                  </dd>
                  <dd>차량 상세 페이지 구현</dd>
                  <dd> 카카오톡, 페이스북 공유 시 미리보기 기능</dd>
                  <dd>비동기 통신 로직 최적화</dd>
                </dl>
                <dl className="skill">
                  <dt>기술 스택</dt>
                  <dd>
                    <p>
                      <strong>Front-End</strong> JavaScript, React, TypeScript,
                      JSX, React Query, Styled-Component
                    </p>
                    <p>
                      <strong>Tool</strong> Git
                    </p>
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </article>

        <article className="content">
          <h2 className="title"><span>Time</span>line</h2>
          <div className="inner timeline">
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-onboarding.png'} alt="onboarding logo" />
              </dt>
              <dd>
                <div className="date">2022.10 - 2022.11</div>
                <strong className="title">원티드 프론트엔드 코스<br />(Pre-onboarding)</strong>
                <p className="text">원티드에서 주관하는 프론트엔드 코스로써 여러 IT기업의 실무 과제로 이루어졌으며 실무자/취준생 등 여러 팀원들과 같이 다양한 프로젝트를 진행하였습니다.</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-weggle.png'} alt="weggle logo" />
              </dt>
              <dd>
                <div className="date">2022.09 - 2022.10</div>
                <strong className="title">위글 기업 인턴십</strong>
                <p className="text">부트캠프 기업 협업 인턴쉽으로 숏폼커머스 플랫폼 위글에서 백 오피스 프로젝트를 진행하면서 실무 로직 및 가이드를 경험하였습니다.</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-wecode.png'} alt="wecode logo" />
              </dt>
              <dd>
                <div className="date">2022.06 ~ 2022.10</div>
                <strong className="title">위코드 부트캠프</strong>
                <p className="text">프론트엔드 개발자로 나아가고 다양한 프로젝트를 경험하기 위해 위코드 부트캠프를 수료하였습니다. 웹에 대한 폭넓은 학습 및 알고리즘을 학습했으며, 프론트/서버 개발자와 다양한 프로젝트를 진행하면서 많은 경험을 쌓았습니다.</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-codeit.png'} alt="codeit logo" />
              </dt>
              <dd>
                <div className="date">2022.03 ~ 2022.06</div>
                <strong className="title">코드잇 프론트엔드 과정</strong>
                <p className="text">웹 개발을 본격적으로 알아가기 위해 생활코딩 강의를 시작으로 HTML, CSS, JavaScript를 학습하였으며 체계적으로 배우기위해 코드잇 프론트엔드 과정을 3개월 수강하였습니다. 단순히 학습하는것이 아닌 여러가지 UI를 구축해보면서 개발의 매력에 더욱 빠지게 되었습니다.<br /><a href="https://codepen.io/bitnaleeeee/" target="_blank" className="link">UI 보러가기</a>
                </p>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src={process.env.PUBLIC_URL + '/images/logo-yogiyo.png'} alt="yogiyo logo" />
              </dt>
              <dd>
                <div className="date">2018.02 ~ 2022.02</div>
                <strong className="title">위대한상상<span className="dot">·</span>경희대학교<span className="dot">·</span>화성고등학교</strong>
                <p className="text">인사, HRD 업무 담당하였으며 위대한상상 IT부서에서 일하면서 웹 개발에 대한 큰 관심이 생겼고 이때부터 개발자의 커리어 전환에 도전하게 되었습니다.</p>
              </dd>
            </dl>
          </div>
        </article>



        <article className="content">
          <h2 className="title"><span>Recent</span> Posts</h2>
          <div className="inner post">
            <ul className="post-list">
              {post &&
                post.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link className="link" to={item.link} target="_blank">
                        <div className="top">
                          <strong className="title">{item.title}</strong>
                          <span className="date">{item.date}</span>
                        </div>
                        <div className="bottom">{item.summary}</div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;