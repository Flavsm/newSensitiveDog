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

const App = () => {
  //source for videos -main page
  const varLink1 =
    "https://player.vimeo.com/video/410917207?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0&autopause=0#t=30s&texttrack=pt";
  const varLink2 =
    "https://player.vimeo.com/video/425697586?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0&autopause=0#t=30s&texttrack=pt";

  //source for texts -about page
  const portugueseText =
    "Fundada em 2019 pelo realizador Rodrigo Ribeyro, a Cachorro Sensível Filmes é uma produtora audiovisual independente que realiza videoclipes, ficções, documentários, híbridos e experimentais para o cinema, a televisão e as novas mídias. \n O nome nasce do encontro entre o interesse pela natureza contraditória dos animais, sejam eles humanos ou não, e o fator essencial para uma vida mais harmônica: o olhar sensibilizado. Através dessa ideia, a proposta é enxergar ao redor e a nós mesmos de maneira franca e curiosa. \n Original da cidade de São Paulo, transitando pelo Brasil e aberta ao mundo, a Cachorro Sensível Filmes tenta achar e compartilhar qualquer sombra ou lampejo das coisas que existem e inexistem por aí.";
  const englishText =
    "Founded in 2019 by director Rodrigo Ribeyro, Cachorro Sensível Filmes is an independent audiovisual production company that makes music videos, fiction, experimental and hybrid documentaries for cinema, television and new media. \n The name comes from the meeting between the interest in the contradictory nature of animals, whether human or not, and the essential factor for a more harmonious life: the sensitized gaze. Through this idea, the proposal is to see our surroundings and ourselves in a frank and curious way. \n Original from the city of São Paulo, transiting through Brazil and open to the world, Cachorro Sensível Filmes tries to find and share any shadow or glimmer of things that exist or do not exist out there.";
  const spanishText =
    "Fundada en 2019 por el director Rodrigo Ribeyro, Cachorro Sensível Filmes es una productora audiovisual independiente que realiza vídeos musicales, ficción, documentales, híbridos y experimentales para cine, televisión y nuevos medios. \n El nombre proviene del encuentro entre el interés por la naturaleza contradictoria de los animales, ya sean humanos o no, y el factor esencial para una vida más armoniosa: la mirada sensibilizada. A través de esta idea, la propuesta es ver alrededor y a nosotros mismos de una manera franca y curiosa. \n Originario de la ciudad de São Paulo, transitando por Brasil y abierto al mundo, Cachorro Sensível Filmes intenta encontrar y compartir cualquier sombra o atisbo de las cosas que existen o no existen ahí fuera.";

  //split the text into paragraphs
  let portText = portugueseText
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);
  let engText = englishText.split("\n").map((item, i) => <p key={i}>{item}</p>);
  let spanText = spanishText
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);

  //source for title name -work page
  const languageTitle = [
    [
      "vôltô (2020) - Trailer",
      "Antes do Çairé (2020) - Trailer",
      "Em Coma Sintético - Subjetivo Objetivo (2020)",
      "Cantareira (2020) - Trailer",
      "Entrevista Com O Grande Diretor (2018)",
      "continua - goldenloki (2017)",
    ],
    [
      "back (2020) - Trailer",
      "Before Çairé (2020) - Trailer",
      "Em Com Sintético - Subjetivo Objetivo (2020)",
      "Cantareira (2020)",
      "Interview With The Great Director (2018)",
      "continua - goldenloki (2017)",
    ],
    [
      "volver (2020) - Tráiler",
      "Antes del Çairé (2020) - Tráiler",
      "Em Coma Sintético - Subjetivo Objetivo (2020)",
      "Cantareira (2020)",
      "Entrevista Con El Gran Director (2018)",
      "continua - goldenloki (2017)",
    ],
  ];
  //source for work description -work page
  const languageDescription = [
    [
      "experimental, 3 retirem a terra, o cimento e principalmente o concreto. recolham as flores da saudade. ergam o caixão para que celebremos. hoje, ele volta dos mortos. realizado por rodrigo ribeyro",
      " Documentário, 21’ Na Vila de Alter do Chão, no Pará, os catraieiros exercem seu trabalho nos dias que antecedem o Çairé, festa local responsável pelo maior movimento turístico, econômico, cultural e religioso da temporada. Realização Rodrigo Ribeyro Festivais: Mostra Competitiva Nacional do Curta Cinema  2020 – Festival Internacional de Curtas do Rio de Janeiro. Mostra Competitiva Nacional do Festival Internacional de Cinema de Alter do Chão. ",
      "Videoclipe da faixa Subjetivo Objetivo, do duo experimental Em Coma Sintético",
      "Bento, trabalhador e morador do centro de São Paulo, volta ao lugar em que cresceu, a casa do avô na Serra da Cantareira, buscando não somente a paz, mas também um emprego.",
      "Nessa entrevista, o grande diretor utiliza imagens reais para detalhar o roubo que sofreu como parte do processo criativo de seu primeiro longa metragem, “Sem Celular”.",
      "Videoclipe da versão ao vivo de Continua, da banda Goldenloki (sp).",
    ],
    [
      "remove the earth, the cement, and especially the concrete. gather the flowers of nostalgia. raise the coffin so that we may celebrate. today, he returns from the dead.",
      "In the village of Alter do Chão, in Pará, the catraieiros do their work in the days before Çairé, the local festival responsible for the biggest touristic, economic, cultural and religious movement of the season",
      "Music video of the track Subjetivo Objetivo, from the experimental duo Em Coma Sintético.",
      "Bento, a worker and resident of downtown São Paulo, returns to the place where he grew up, his grandfather's house in the Cantareira Mountains, seeking not only peace, but also a job.",
      'In this interview, the great director uses real images to detail the robbery he suffered as part of the creative process of his first feature film, “Without  Cellphone".',
      "Music video of the live version of Continua, by the band Goldenloki (sp).",
    ],
    [
      "retira la tierra, el cemento y sobre todo el hormigón. recoge las flores de la nostalgia. levanta el féretro para que podamos celebrar. hoy vuelve de entre los muertos",
      "En la aldea de Alter do Chão, en Pará, los catraieiros trabajan en los días previos a Çairé, la fiesta local responsable del mayor movimiento turístico, económico, cultural y religioso de la temporada.",
      "Video musical del tema Subjectivo Objectivo , del dúo experimental Em Coma Sintético",
      "Bento, trabajador y residente en el centro de São Paulo, vuelve al lugar donde creció, la casa de su abuelo en la sierra de Cantareira, buscando no sólo paz, sino también un trabajo.",
      'En esta entrevista, el gran director utiliza imágenes reales para detallar el robo que sufrió como parte del proceso creativo de su primer largometraje, "Sin Móvil".',
      "Video musical de la versión en vivo de Continua, del grupo Goldenloki (sp).",
    ],
  ];

  // hook/function changes the theme and bg img

  const [logoImg, setLogoImg] = useState(logo1);

  const changePic = () => {
    if (logoImg === logo1) {
      setTimeout(() => setLogoImg(logo2), 500);
    } else {
      setTimeout(() => setLogoImg(logo1), 500);
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
  const languageOption = [
    ["sobre nós", "nosso trabalho", "contato"],
    ["about us", "our work", "contact"],
    ["sobre nosotros", "nuestro trabajo", "contacto"],
  ];
  const [language, setLanguage] = useState(languageOption[0]);
  const [aboutText, setAboutText] = useState(portText);
  /* const titleArr = [{TitleOne}, {TitleTwo}, {TitleThree}]; */
  const [title, setTitle] = useState(languageTitle[0]);
  const [description, setDescription] = useState(languageDescription[0]);

  const changeFlag = () => {
    if (flag === englishBW) {
      setFlag(spanishBW);
      setAlt("spanish flag");
      setLanguage(languageOption[1]);
      setNewClass("menuBox inEnglish");
      setAboutText(engText);
      setTitle(languageTitle[1]);
      setDescription(languageDescription[1]);
    } else if (flag === spanishBW) {
      setFlag(portugueseBW);
      setAlt("brazilian flag");
      setLanguage(languageOption[2]);
      setNewClass("menuBox inSpanish");
      setAboutText(spanText);
      setTitle(languageTitle[2]);
      setDescription(languageDescription[2]);
    } else {
      setFlag(englishBW);
      setAlt(flagDefault);
      setLanguage(languageOption[0]);
      setNewClass("menuBox inPortuguese");
      setAboutText(portText);
      setTitle(languageTitle[0]);
      setDescription(languageDescription[0]);
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
                <ImageBG imgClass="imgBox" imgSrc={logoImg} />
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
