import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTitle from "./MainTitle/MainTitle";
import MainMenu from "./MainMenu/MainMenu";
import TopButtons from "./TopButtons/TopButton";
import IntroAnimation from "./IntroAnimation/IntroAnimation";
import SideVideo from "./SideVideo/SideVideo";
import ImageBG from "./ImageBG/ImageBG";
import englishBW from "./englishBW.svg";
import portugueseBW from "./portugueseBW.svg";
import darkMode from "./darkMode.png";
import novologo from "./novologo.jpeg";
import logo1 from "./logo1.svg";
import logo2 from "./logo2.png";
import AboutUs from "./AboutUs/AboutUs";
import OurWork from "./OurWork/OurWork";
import ContactUs from "./ContactUs/ContactUs";
import TopArrow from "./TopArrow/TopArrow";
import spanishBW from "./spanishBW.svg";
import cine1 from "./cine1.svg";
import cine2 from "./cine2.svg";
import copywrite from "./copywrite.json";

const App = () => {
  //source for videos -main page
  const varLink1 = copywrite.videoLink.find(item => item.id === 1).link;
  const varLink2 = copywrite.videoLink.find(item => item.id === 2).link;


  //source for texts -about page
  const portugueseText = copywrite.about.find(item => item.id === "PT").text;
  const englishText = copywrite.about.find(item => item.id === "EN").text;
  const spanishText = copywrite.about.find(item => item.id === "ES").text;

  //split the text into paragraphs
  let portText = portugueseText
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);
  let engText = englishText.split("\n").map((item, i) => <p key={i}>{item}</p>);
  let spanText = spanishText
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);

  //source for title name -work page
  const portugueseTitle = copywrite.languageTitle.find(item => item.id === "PT").titles;
  const englishtTitle = copywrite.languageTitle.find(item => item.id === "EN").titles;
  const spanishTitle = copywrite.languageTitle.find(item => item.id === "ES").titles;

  //source for work description -work page
  const portugueseDescription = copywrite.languageDescription.find(item => item.id === "PT").description;
  const englishDescription = copywrite.languageDescription.find(item => item.id === "EN").description;
  const spanishDescription = copywrite.languageDescription.find(item => item.id === "ES").description;


  // hook/function changes the theme and bg img

  const [logoImg, setLogoImg] = useState(logo1);
  const [cineImg, setCineImg] = useState(cine2);

  const changePic = () => {
    if (logoImg === logo1) {
      setTimeout(() => {
        setLogoImg(logo2);
        setCineImg(cine1);
      }, 500);
    } else {
      setTimeout(() => {
        setLogoImg(logo1);
        setCineImg(cine2);
      }, 500);
    }
  };

  function toggleBackGround() {
    const appPage = document.querySelector(".appPage");
    const lightMode = document.querySelector(".light");

    appPage
      ? (appPage.className = "light")
      : lightMode
        ? (lightMode.className = "appPage")
        : console.log("Error");

    changePic();
  }

  //hook and variable to change the language img
  const [flag, setFlag] = useState(englishBW);
  const flagDefault = "british flag";
  //hook  to change the language img alt
  const [alt, setAlt] = useState(flagDefault);
  //hook to change class of the language img
  const [newClass, setNewClass] = useState("menuBox inPortuguese");

  //hook to change language of the page
  const portugueseOption = copywrite.languageOption.find(item => item.id === "PT").option;
  const englishOption = copywrite.languageOption.find(item => item.id === "EN").option;
  const spanishOption = copywrite.languageOption.find(item => item.id === "ES").option;

  const [language, setLanguage] = useState(portugueseOption);
  const [aboutText, setAboutText] = useState(portText);
  /* const titleArr = [{TitleOne}, {TitleTwo}, {TitleThree}]; */
  const [title, setTitle] = useState(portugueseTitle);
  const [description, setDescription] = useState(portugueseDescription);

  const changeFlag = () => {
    if (flag === englishBW) {
      setFlag(spanishBW);
      setAlt("spanish flag");
      setLanguage(englishOption);
      setNewClass("menuBox inEnglish");
      setAboutText(engText);
      setTitle(englishtTitle);
      setDescription(englishDescription);
    } else if (flag === spanishBW) {
      setFlag(portugueseBW);
      setAlt("brazilian flag");
      setLanguage(spanishOption);
      setNewClass("menuBox inSpanish");
      setAboutText(spanText);
      setTitle(spanishTitle);
      setDescription(spanishDescription);
    } else {
      setFlag(englishBW);
      setAlt(flagDefault);
      setLanguage(portugueseOption);
      setNewClass("menuBox inPortuguese");
      setAboutText(portText);
      setTitle(portugueseTitle);
      setDescription(portugueseDescription);
    }
  };
  //

  //hook to show animation first then actual page
  const [oldclass, setClass] = useState("introAnimation animatePage");

  useEffect(
    () => {
      //what's in here will be rendered everytime the page firsts loads(could be at other times too)
      setTimeout(() => {
        setClass("appPage animatePage");
      }, 3000);
    },
    [
      /* whatever goes here will decide how many times the effect will be rendered. something here happens, then you get the 'side effect' */
    ]
  );

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={oldclass}>
        <IntroAnimation imgSrc={logo1} imgClass={"introImg"} />
        <Switch>
          <Route exact path="/">
            <div className="mainPage" id={"main-page"}>
              <div className="headerBox">
                <TopButtons
                  imageSrc={darkMode}
                  imageAlt={"dark/light mode"}
                  clickAction={toggleBackGround}
                  buttonClass={"btnClass"}
                  btnId={"mode-id"}
                />
                <MainTitle newLogoSrc={novologo} />
                <TopButtons
                  imageSrc={flag}
                  imageAlt={alt}
                  clickAction={changeFlag}
                  buttonClass={"btnClass"}
                />
              </div>
              <div className="mainBox">
                <SideVideo
                  videoLink={varLink1}
                  title="Cantareira Trailer"
                  addClass={"videoBox"}
                />
                <ImageBG
                  imgClass="cineBox"
                  imgSrc={cineImg}
                  alt={"cannes festival cinefondation logo"}
                  id={"cannes-img"}
                />
                <ImageBG
                  imgClass="imgBox"
                  imgSrc={logoImg}
                  alt={"company logo"}
                  id={"logo-img"}
                />
                <SideVideo
                  videoLink={varLink2}
                  title="Antes do Çairé Trailer"
                  addClass={"videoBox"}
                />
              </div>
              <div className="footerBox">
                <MainMenu
                  item1={language[0]}
                  item2={language[1]}
                  item3={language[2]}
                  divClass={newClass}
                />
              </div>
            </div>
          </Route>
          <Route path="/about-us-page">
            <div className="aboutUsPage" id="about-us-page">
              <AboutUs textContent={aboutText} aboutClass={"aboutBox"} />
              <TopArrow linkIcon={"#main-page"} arrowClass="arrowBox" />
            </div>
          </Route>
          <Route path="/our-work-page">
            <div className="ourWorkPage" id="our-work-page">
              <OurWork
                workClass={"workBox"}
                TitleOne={title[0]}
                DescriptionOne={description[0]}
                TitleTwo={title[1]}
                DescriptionTwo={description[1]}
                TitleThree={title[2]}
                DescriptionThree={description[2]}
                TitleFour={title[3]}
                DescriptionFour={description[3]}
                TitleFive={title[4]}
                DescriptionFive={description[4]}
                TitleSix={title[5]}
                DescriptionSix={description[5]}
              />
              <TopArrow linkIcon={"#main-page"} arrowClass="arrowBox" />
            </div>
          </Route>
          <Route path="/contact-us-page">
            <div className="contactUsPage" id="contact-us-page">
              <ContactUs iconClass={"contactBox"} />
              <TopArrow linkIcon={"#main-page"} arrowClass="arrowBox" />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
