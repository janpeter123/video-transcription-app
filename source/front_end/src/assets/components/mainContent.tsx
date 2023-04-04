import "../styles/mainContent.css";
import logo from "../images/transcription.png"
import { useSearchParams } from "react-router-dom";

function MainContent() {
  return (
   <article className="mainContent">
    <p>
    Transforme seus vídeos favoritos do YouTube em texto e receba suas categorias com o Scribe App! 
    Envie o vídeo e receba o texto em instantes.
    </p>
   </article>
  );
}

export default MainContent;
