function Error404() {
    return (
        <div className="container my-5">
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="${process.env.REACT_APP_SERVER_URL}images/kittykat.jpeg" alt="cute cat pic" />
        </div>
    );
}

export default Error404;
