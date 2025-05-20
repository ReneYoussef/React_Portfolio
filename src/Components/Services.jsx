export default function Service(props) {
  return (

    <article className="journal-entry">
      <div className="info-container">
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>

  );
}
