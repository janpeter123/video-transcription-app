import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../assets/styles/videoProcessing.css";
import VideoMetadata from "../assets/components/videoMetadata";
function VideoProcessing() {
  const [loading,setLoading] = useState(true);
  const [videoId,setVideoId] = useState(String)
  const [metadata,setMetadata] = useState({"transcription":"","categories":[]});
  const [searchParams] = useSearchParams();
  const url = String(searchParams.get("url"));
  const regexPattern: string = "(https://)?(www.)(youtube|(youtu.be)).com/";
  const regexYoutube = new RegExp(regexPattern);
  
  useEffect(() => {
    if (regexYoutube.exec(url)) {
      if (url.match("watch?")) {
        setVideoId(url.split("watch?v=")[1]);
      } else if (url.match("shorts")) {
        setVideoId(url.split("shorts/")[1]);
      } else {
        //TODO: REDIRECIONAR P/ HOME
      }

      try {
        const response = fetch("http://localhost:8080/video", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url }),
        }).then((dt)=>{
          dt.json().then((parsedData)=>{
            setMetadata(parsedData)
            setLoading(false)
          })
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, [metadata]);

  return (
    <section className="videoProcessing">
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
      <VideoMetadata loading={loading} topics={metadata.categories} transcription={metadata.transcription}/>
     
    </section>
  );
}

export default VideoProcessing;
