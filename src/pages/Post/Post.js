import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Post.scss";

const Post = () => {
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
    postArr.forEach((item, idx) => {
      if (idx >= 10) {
        return false;
      }

      let day = item.querySelector("published").innerHTML.slice(0, 10);
      resultList.push({
        title: item.querySelector("title").innerHTML,
        content: item.querySelector("content").innerHTML,
        summary: item.querySelector("summary").innerHTML,
        name: item.querySelector("name").innerHTML,
        link: item.querySelector("link").href,
        // category: item.querySelector("category"),
        date: day,
      });
    });
    setPost(resultList);
  };

  return (
    <div>
      <Header />
      <section className="wrapper">
        <article className="content post">
          <h2 className="title">
            <span>P</span>ost
          </h2>
          <div className="inner">
            <ul className="post-list">
              {post &&
                post.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link className="link" to={item.link} target="_blank">
                        <div className="top">
                          <strong className="title">{item.title}</strong>
                          <span className="name">{item.name}</span>
                          <span className="date">{item.date}</span>
                        </div>
                        <div className="bottom">{item.summary}</div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <div className="post-btn" >
              <Link to="https://bitnalee.dev/archive/" target="_blank">More</Link>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Post;