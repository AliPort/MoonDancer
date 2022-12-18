function AskTheCaptain() {
    return (
    <div id="Ask">
        <form id="AskForm">
            <input className="AskInput" type="text" name="fname" placeholder="First Name" required/><br/>
            <input className="AskInput" type="text" name="lname" placeholder="Last Name" required/><br/>
            <input className="AskInput" type="email" name="email" placeholder="E-Mail" required/><br/>
            <input className="AskInput" type="text" name="subject" placeholder="Subject" required/><br/>
            <input id="messageField" className="AskInput" type="text" name="message" placeholder="Your Message" required/><br/>
            <input id="askSubmit" className="AskInput" type="submit" value="Submit" />
        </form>
    </div>
)};

export default AskTheCaptain;