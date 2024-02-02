export default function Article({title, date, preview}) {
    return (
        <article>
            <h3>{title}</h3>
            <small >{( date == null ? "January 1, 1970" : date)}</small>
            <p>{preview}</p>
        </article>
    );
}