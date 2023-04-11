import "../styles/videoProcessing.css";

function VideoMetadata(props: any) {
  if (props.loading == true) {
    return (
        <section className="metadata">
        <h3>Topics</h3>
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
        <h3>Text transcription</h3>
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </section>
    );
  } else {
    return (
      <section className="metadata">
        <h3>Topics</h3>
        <div className="topics">
          {
            props.topics.map((element :string,i :any)=>{
              return <p className="topic" key={i}>{element}</p>
            })
          }
        </div>
        <h3>Text transcription</h3>
        <article className="transcription">
          {props.transcription}
        </article>
      </section>
    );
  }
}

export default VideoMetadata;
