// eslint-disable-next-line no-unused-vars
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Fullstackdev from './pages/Fullstackdev';
import Cybersecurity from './pages/Cybersecurity';
import Careers from './pages/Careers';
import Datascience from './pages/Datascience';
import { Link } from "react-router-dom";


function App() {

  let data=[{
    image:'https://i.pinimg.com/736x/af/ec/71/afec71040217224f194756321ffbfc00.jpg',
    head:"Full Stack Development",
    content:"A full stack developer needs skills in front-end technologies (HTML, CSS, JavaScript), back-end frameworks (NodeJS, ExpressJS, Django, Flask), databases (MySQL, PostgreSQL, MongoDB), version control (Git), and web hosting platforms.",
    date:"25",
    month:"march"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqfdxZfNSK1lQ_CgZCqZNWMYBe4uaKLCE5Q&s",
    head:"Data Science",
    content:"Data science involves analyzing and interpreting complex data to help make informed decisions. It combines statistics, programming, and domain knowledge to extract insights and predict trends.",
    date:"27",
    month:"april"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmkkjhzJmEEvHhEHoqTkGNh15r6WtemI2vQ&s",
    head:"Career Development",
    content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"19",
    month:"july"
  },
  {
    image:"https://qph.cf2.quoracdn.net/main-qimg-297418eba9f794c5443ee32e466b4300-lq",
    head:"Full Stack Development",
    content:"Full stack developers rate their happiness above average. At CareerExplorer, we conduct an ongoing survey with millions of people and ask them how satisfied they are with their careers. As it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"13",
    month:"November"

  },
  {
    image:"https://www.etudemy.com/wp-content/uploads/2022/02/FULL-STACK-DEVELOPER-COURSE-IN-PERINTHALMANNA.jpg",
    head:"Full Stack Development",
    content:"The most popular full stack frameworks include Laravel, Ruby on Rails, and Express. js. If you're just starting, you might want to choose a framework that is relatively easy to learn, such as Laravel or Ruby on Rails. Alternatively, if you're looking for something more versatile or powerful, you might consider Express.",
    date:"18",
    month:"January"

  },
  {
    image:"https://asc.army.mil/web/wp-content/uploads/2023/03/DACM_Career-Development-Model_700x395pixels-scaled.jpg",
    head:"Career Development",
    content:"The four stages consist of establishment, advancement, maintenance and withdrawal. Each of the stages represents the age of a worker and the responsibilities and challenges that need to be addressed. Some workers repeat this model if they have a second career or midlife career change",
    date:"22",
    month:"October"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpHzDC68pR8FVulCoGGOAyhW1acu0TeE-RQ&s",
    head:"Career Development",
    content:"This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
    date:"13",
    month:"june"

  },
  {
    image:"https://www.shutterstock.com/image-vector/november-national-career-development-month-260nw-2057890004.jpg",
    head:"Career Development",
    content:"The Big Five Model, also referred to as the Five-Factor Model, is a famous personality theory that describes personality as the play between five personality traits or factors. These factors or characteristics include openness to experience, conscientiousness, agreeableness, extraversion and neuroticism.",
    date:"14",
    month:"april"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNd5rlzDdbnNSIA9tjHPY7KA07emIQCqhRA&s",
    head:"Cyber Security",
    content:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
    date:"16",
    month:"december"

  },
  {
    image:"https://image.slidesharecdn.com/cybersecurity-careerpath-240131092807-e92ce7c6/85/Cyber-security-course-in-Kerala-Kochi-1-320.jpg",
    head:"Cyber Security",
    content:"TLet's delve into the salary ranges for cyber security professionals in Nigeria. According to PayScale, the average annual salary for a Cyber Security Analyst in Nigeria ranges from ₦2,400,000 to ₦6,500,000. Glassdoor reports a similar range, with an average of ₦4,000,000 per year.",
    date:"17",
    month:"March"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AjIqx4cVYtdFVo_rmARSUcLO3qfuZMuY1w&s",
    head:"Cyber Security",
    content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    date:"12",
    month:"may"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMH4kJhsXr1Xwe-X68UrfEm6QD05ugw5ND4Q&s",
    head:"Cyber Security",
    content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    date:"16",
    month:"April"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Sv-lE-dgNLUkM44I8oCoXrP5s33luN0tKQ&s",
    head:"Cyber Security",
    content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    date:"17",
    month:"may"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-cAQ1r6TaopzGtHlTH6PH4spW3NeZXu7yg&s",
    head:"Cyber Security",
    content:"The 3 major types of cyber security are network security, cloud security, and physical security. Your operating systems and network architecture make up your network security. It can include network protocols, firewalls, wireless access points, hosts, and servers.",
    date:"07",
    month:"April"

  },
  {
    image:"https://5.imimg.com/data5/SELLER/Default/2023/12/368207473/RJ/SY/BK/5903079/data-science-and-analytics-course.png",
    head:"Data Science",
    content:"Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average. A data scientist, on the other hand, earns more than USD 140000 per year. If you are a software developer or an experienced systems engineer, owning skillsets can instantly boost your salary.",
    date:"06",
    month:"september"

  },
  {
    image:"https://assets.indiaonline.in/businessimg/gallery/650/3109322_fd8a2.jpeg",
    head:"Data Science",
    content:"The highest salary of data scientists can go beyond USD 200,000 if you have the required skills. On average, a data scientist can make $126,694 per year. Generally, the range is $99,000 to $164,000.",
    date:"02",
    month:"May"

  },
  {
    image:"https://media.licdn.com/dms/image/D4D22AQHg0hLtkpFcIg/feedshare-shrink_800/0/1690964033929?e=2147483647&v=beta&t=cr8LIZKlvUgjp_i5kDdCNG5Wnvf2jwYaF537f5akuOo",
    head:"Data Science",
    content:"Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future. Data science job roles are likely to get more specific, which in turn will lead to specializations in the field.",
    date:"16",
    month:"june"

  },
  {
    image:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/data-science-online-training-template-design-bb33519ad44bd26d70e828c9e4eb9433.jpg?ts=1596800491",
    head:"Data Science",
    content:"Data Sciences uses AI (and its Machine Learning subset) to interpret historical data, recognize patterns, and make predictions. In this case, AI and Machine Learning help data scientists to gather data in the form of insights.",
    date:"28",
    month:"July"

  },
  {
    image:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
    head:"Data Science",
    content:"Every one of us wants to work in top product-based companies, Right? But, Not everyone",
    date:"13",
    month:"August"

  },
  {
    image:"https://thetapacademy.com/wp-content/uploads/2023/01/java-full-stack-syllabus-1024x1024.jpg",
    head:"Full Stack Development",
    content:"The Frontend Syllabus starts with programming basics, transitions to Java, covers data structures, and then delves into HTML, CSS, CSS frameworks, animations, Figma, and JavaScript. Learners also explore DOM manipulation, asynchronous JavaScript, and frontend frameworks like React.",
    date:"12",
    month:"august"

  }
]
  return (
    <>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav align-middle">
          <Link className="nav-link active" to="/">All</Link>
          <Link className="nav-link" to="/Fullstackdev">Full Stack Development</Link>
          <Link className="nav-link" to="/Datascience">Data Science</Link>
          <Link className="nav-link" to="/Cybersecurity">Cybersecurity</Link>
          <Link className="nav-link" to="/Careers">Career</Link>
        </div>
      </div>
    </div>
  </nav>
    <Routes>
      <Route path='/' element={<Home data = {data} />} />
      <Route path='/Fullstackdev' element={<Fullstackdev data = {data}  />} />
      <Route path='/Cybersecurity' element={<Cybersecurity data = {data} />} />
      <Route path='/Datascience' element={<Datascience data = {data} />} />
      <Route path='/Careers' element={<Careers data = {data} />} />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
