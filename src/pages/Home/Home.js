import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="wrapper">
        <article className="content">
          <div className="author">
            <img
              src="https://bitnalee.dev/assets/img/avatar.jpg"
              alt=""
              className="avatar"
            />
            <p class>
              사용자 관점에서 고민하고 꾸준히 노력하는 프론트엔드 개발자 입니다
              <br /> 다양한 프로젝트 및 협업 경험을 통해 기획자/디자이너/개발자와
              <br /> 유연한 소통이 가능하며 다양한 접근방법으로 문제 해결에 노력합니다
              <br />
              <Link to="https://github.com/bitnaleeeee" target="_blank">
                Github
              </Link>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;