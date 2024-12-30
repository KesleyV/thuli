import { useState, useEffect, useRef } from "react";
import "./App.css";
import FirstPage from "./CarrousselsPages/FirstPage";
import fizz from "./assets/fgvvnt9nlz5d1.jpeg";
import helloKitty from "./assets/papeis-de-parede-hello-kitty.jpg.jpg";
import choGath from "./assets/zxx7030r7dpc1.jpeg";
import superTeemo from "./assets/Superhero-Teemo.jpg";
import abelheemo from "./assets/tumblr_p80grehtCq1vo6vclo1_1280.jpg";
import missFortune from "./assets/jessica-oyhenart-cowgirl-mf-inhouse05.jpg";
import caytlin from "./assets/1920x1200-headhunter-caitlyn-league-of-legends-lol-lol_1574104099.jpg";
import anya from "./assets/Screenshot_75.png";
import amumu from "./assets/Screenshot_1.png";
import simLindo from "./assets/simLindo.jpeg";
import simLinda from "./assets/simLinda.jpeg";
import nos from "./assets/nos.jpeg";
import tears from "./assets/animeQueElaGosta.jpeg";
import backgroundMusic from "./assets/Close To You.mp3";
import jiwon from "./assets/jiwon.jpeg";
import chupetao from "./assets/chupetao.jpg";
import cyberpunk from "./assets/cyberpunk.png";
import step11Audio from "./assets/Thuli.ogg";
import step12Audio from "./assets/WhatsApp Ptt 2024-09-27 at 01.03.33.ogg";
import olhos from "./assets/blueEyes.jpg";

function App() {
  const [step, setStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(fizz);
  const [showVideo, setShowVideo] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const backgroundAudioRef = useRef(new Audio(backgroundMusic));
  const step11AudioRef = useRef(new Audio(step11Audio));
  const step12AudioRef = useRef(new Audio(step12Audio));

  const [playedStep11, setPlayedStep11] = useState(false);
  const [playedStep12, setPlayedStep12] = useState(false);
  const [isPlayngBackgroundMusic, setIsPlayngBackgroundMusic] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ top: string; left: string }>({ top: "0", left: "0" });  // Alteração aqui
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const step11Audio = step11AudioRef.current;
    const step12Audio = step12AudioRef.current;

    switch (step) {
      case 0:
        setBackgroundImage(helloKitty);
        break;
      case 1:
        setBackgroundImage(fizz);
        break;
      case 2:
        setBackgroundImage(choGath);
        break;
      case 3:
        setBackgroundImage(missFortune);
        break;
      case 4:
        setBackgroundImage(superTeemo);
        break;
      case 5:
        setBackgroundImage(abelheemo);
        break;
      case 6:
        setBackgroundImage(caytlin);
        break;
      case 7:
        setBackgroundImage(tears);
        break;
      case 8:
        setBackgroundImage(simLinda);
        break;
      case 9:
        setBackgroundImage(simLindo);
        break;
      case 10:
        setBackgroundImage(jiwon);
        break;
      case 11:
        setBackgroundImage(cyberpunk);
        if (!playedStep11) {
          step11Audio.play();
          step11Audio.onended = () => {
            setPlayedStep11(true);
          };
        }
        break;
      case 12:
        setBackgroundImage(anya);
        if (!playedStep12) {
          step12Audio.play();
          step12Audio.onended = () => {
            setPlayedStep12(true);
          };
        }
        break;
      case 13:
        setBackgroundImage(amumu);
        break;
      case 14:
        setBackgroundImage(nos);
        break;
      case 15:
        setBackgroundImage(olhos);
        break;
      case 17:
        setBackgroundImage(chupetao);
        break;
      default:
        break;
    }
  }, [step, playedStep11, playedStep12]);

  const handleMouseOver = () => {
    if (!hovered) {
      setHovered(true);
    }
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    setButtonPosition({ top: `${randomTop}vh`, left: `${randomLeft}vw` }); // Alteração aqui
  };

  const nextStep = () => {
    if (step < 15) setStep(step + 1);
  };

  const previousStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {  // Alteração aqui
    setInputValue(event.target.value);
  };

  const handleStart = () => {
    if (inputValue === "18") {
      setIsAuthorized(true);
      setStep(1);
      setInputValue("");

      if (!isPlayngBackgroundMusic) {
        const backgroundAudio = backgroundAudioRef.current;
        backgroundAudio.play().catch((error) => {
          console.error("Falha ao reproduzir áudio:", error);
        });
        backgroundAudio.volume = 0.1;
        setIsPlayngBackgroundMusic(true);
      }
    } else {
      alert("Troco um beijinho por uma dica...");
    }
  };

  const renderStepContent = () => {
    const messages = [
      "Pensei em várias formas de fazer isso. Posso ficar horas te contando as milhares de coisas que planejei...",
      "Eu sei que você acha que eu não sou romântico ou que sou emocionalmente indisponível. Em partes, eu era, mas isso tudo mudou e está mudando desde que você apareceu.",
      "Conforme o tempo foi passando, percebi que não tinha mais jeito, já estava apaixonado por você...",
      "Eu tento parecer durão, pois, de acordo com você e a MF, eu tenho cara de mal, e você gosta disso. Mas, no fim, eu sou só um bobinho apaixonado por você.",
      "E que sentimento bom... Eu gosto de cuidar de você e de te ver feliz.",
      "Gosto das nossas caminhadas noturnas, das partidas no LOL, do jeito que você fala mal de quase todos da medicina e da forma como ri quando está contando algo engraçado, antes mesmo de terminar...",
      "E falando em terminar, quero terminar as séries que começamos e começar outras com você. Quero viver todas as experiências possíveis com você. Quero que você finalmente experimente o óculos VR...",
      "Quero fazer parte da sua vida, trocar apelidos carinhosos, conhecer seus amigos e me apresentar oficialmente como seu namorado para os outros.",
      "Quero tirar várias fotos com você e mostrar para todo mundo meu bebêzinho. Malhar junto usando camisas combinando.",
      "Essa foi a forma mais criativa que um garoto de programa sem criatividade encontrou de demonstrar o quanto ele gosta de você. De tudo que foi dito anteriormente, espero de verdade que você sinta o mesmo.",
      "Não quero ser alguém com quem você fique por conveniência; quero ser seu porto seguro (assim como o Yoo Ji-hyuk é para Ji-won), alguém em quem você possa sempre contar, amar e admirar. Dito isso...",
      "Thuli...",
      "Quer namorar comigo?",
      "Tudo bem, de toda forma, fico feliz por ter vivido esse tempo com você. Foi bastante divertido. Te desejo tudo de melhor <3.",
      "Oi, mô. Seja bem vinda ao inicio de nós. E nada melhor que começar isso com uma água com limão, certo?",
    ];

    if (step === 15) {
      return (
        <div className="step16">
          <FirstPage
            key={step}
            text="Acordar e te ver é como despertar no paraíso, olhando para o céu mais limpo e com o azul mais profundo. E é isso que eu quero para o resto da minha vida."
          />
          <button onClick={() => setStep(17)}>💜💜💜💜</button>
        </div>
      );
    }

    if (step === 17) {
      return (
        <div className="step16">
          <FirstPage key={step} text="Quem é o meu bebezinho????" />
          <div className="step17">
            <button
              onClick={() => {
                setIsAuthorized(false);
                setInputValue("");
              }}
            >
              EUUUUUUU
            </button>
            <button
              onClick={() => {
                setIsAuthorized(false);
                setInputValue("");
              }}
            >
              👶👶👶👶
            </button>
          </div>
        </div>
      );
    }

    return <FirstPage key={step} text={messages[step] || ""} />;
  };

  if (!isAuthorized) {
    return (
      <div className="fundo">
        <div className="overlay">
          <p className="videoText">
            A senha é o dia que a gente começou a conversar:{" "}
          </p>
          <p className="videoText">
          Obs: As imagens que você verá a seguir não foram escolhidas com foco na qualidade, mas sim por remeterem a você e a nós. 
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite aqui..."
            className="inputField"
          />
          <button onClick={handleStart}>Começar</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fundo"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="overlay">
        <div>{renderStepContent()}</div>
        {showVideo ? (
          <div className="videoContainer">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/Bi-OmcYLe5Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="videoText">
              Agora que você já se hidratou, por favor, clique aqui:
            </p>
            <button
              onClick={() => {
                setShowVideo(false);
                setStep(15);
              }}
              style={{ marginTop: "10px", fontSize: "24px" }}
            >
              🧐🧐🧐🧐
            </button>
          </div>
        ) : step < 12 ? (
          <div className="buttonDiv">
            {step > 0 && (
              <button onClick={previousStep} style={{ marginTop: "10px" }}>
                Voltar
              </button>
            )}
            {step < 12 && (
              <button onClick={nextStep} style={{ marginTop: "10px" }}>
                Avançar
              </button>
            )}
          </div>
        ) : step < 14 ? (
          <div className="buttonDiv">
            <button
              onClick={nextStep}
              onMouseOver={handleMouseOver}
              style={{
                marginTop: "10px",
                position: "absolute",
                top: hovered ? buttonPosition.top : "0",
                left: hovered ? buttonPosition.left : "0",
              }}
              className="buttonNot"
            >
              Não
            </button>
            <button
              onClick={() => {
                setStep(14);
                setShowVideo(true);
              }}
              style={{ marginTop: "10px" }}
            >
              Sim
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
