function AskTheCaptain() {
    return (
    <div id="ask">
        <form id="AskForm">
            <input type="text" name="fname" placeholder="First Name" required/><br/>
            <input type="text" name="lname" placeholder="Last Name" required/><br/>
            <input type="text" name="email" placeholder="E-Mail" required/><br/>
            <input type="text" name="subject" placeholder="Subject" required/><br/>
            <input type="text" name="message" placeholder="Your Message" required/><br/>
            <input id="askSubmit" type="submit" value="Submit" />
        </form>
    </div>
)};

export default AskTheCaptain;