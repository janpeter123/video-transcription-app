import { useSearchParams } from "react-router-dom";

function VideoProcessing(){

    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");

    return (<h1>Video Processing page <br></br>
        {url}
    </h1>)
}


export default VideoProcessing