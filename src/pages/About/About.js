import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./About.scss";

const About = () => {
  return (
    <div>
      <Header />
      <section className="wrapper">
        <article className="content about">
          <h2 className="title">Ab<span>ou</span>t</h2>
          <div className="inner">
            <dl>
                <dt>
                    <img src={process.env.PUBLIC_URL + "/images/icon-lego.png"} alt="" />
                    <h3>개발에 중독되기</h3>
                </dt>
                <dd>
                  전문성 있는 일을 하고 싶다는 열망에 개발직군을 알게되었고 <strong>아이디어를 구현하는 매력</strong>에 푹 빠져 프론트엔드 개발자에 도전하게 되었습니다.
                  많은 시행착오를 거쳐 내것으로 만든 레고같은 코드들로 결과물을 완성할 때 성취감은 이루 말할 수 없었습니다.
                  또한 구현한 결과물의 동작 원리를 심도있게 공부할 때 깨우치는 순간이 너무 행복하며 개발에 대한 애착 및 도전에 큰 원동력이 되고 있습니다.
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src={process.env.PUBLIC_URL + "/images/icon-sponge.png"} alt="" />
                    <h3>흡수하고 공유하기</h3>
                </dt>
                <dd>
                새로운 기술에 거부감이 없고 끊임없이 탐구하여 제것으로 만드는 것을 좋아합니다.
                이렇게 배운 지식을 팀원들과 서로 공유하는 개발문화 또한 저에게는 큰 매력으로 다가왔습니다.
                <strong>스펀지같은 흡수력</strong>으로 급변하는 프론트엔드 기술분야에 적응하며 제가 가지고있는 장점을 동료와 나누는 것에 목표를 가지고 있습니다.
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src={process.env.PUBLIC_URL + "/images/icon-pen.png"} alt="" />
                    <h3>성장하며 기록하기</h3>
                </dt>
                <dd>
                부트캠프 및 프로젝트를 진행하면서 알게된 지식은 틈틈히 정리하여 기록하는 습관을 가지고 있습니다.
                사소한것도 정리하고 문서화 하는 매일의 노력이 큰 변화를 만든다고 믿습니다.
                <strong>어제보다 나은 내가 되는 것을 목표</strong>로 하고 끊임없이 공부하며 기록하는 개발자를 추구합니다.
                </dd>
            </dl>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default About;