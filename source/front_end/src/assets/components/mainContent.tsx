import "../styles/mainContent.css";
import { useSearchParams } from "react-router-dom";
import Blogger from "../images/Blogging.png";

function MainContent() {
  return (
   <article className="mainContent">
    <img src={Blogger} width={"40%"}/>
    <p>
    Transforme seus vídeos favoritos do YouTube em texto e receba suas categorias com o Scribe App!<br></br> 
    Envie o vídeo e receba o texto em instantes.
    </p>
   </article>
  );
}

export default MainContent;
