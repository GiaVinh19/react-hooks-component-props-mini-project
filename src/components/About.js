export default function About({image, about}) {
    return (
        <aside>
            <img src={(image == null ? "https://via.placeholder.com/215" : image )} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    );
}