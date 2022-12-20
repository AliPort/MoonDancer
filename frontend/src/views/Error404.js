import oops from "../assets/oops.jpeg"

function Error404() {
    return (
        <div className="oops">
            <h1>404: PAGE NOT FOUND</h1>
            <p>looks like you're a fish out of water!
            </p>
            <img src={oops} alt="man in water holding a sign that says oops with shark looking at him." />
        </div>
    );
}

export default Error404;
