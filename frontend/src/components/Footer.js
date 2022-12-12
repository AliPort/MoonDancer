import React from "react";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <div className="logo" />
    <h1>MoonDancer Boat Charters</h1>
   <h1>Ask the Captain </h1>

   <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label> 
    Address:
    <input type="text" address="address" />
  </label>
  <label>
    City:
    <input type="text" city="city" />
  </label>
  <label>
    State:
    <select>
  <option value="al">AL</option>
  <option value="ak">AK</option>
  <option value="az">AZ</option>
  <option value="ar">AR</option>
  <option value="ca">CA</option>
  <option value="co">CO</option>
  <option value="ct">CT</option>
  <option value="de">DE</option>
  <option value="fl">FL</option>
  <option value="ga">GA</option>
  <option value="hi">HI</option>
  <option value="id">ID</option>
  <option value="il">IL</option>
  <option value="in">IN</option>
  <option value="ia">IA</option>
  <option value="ks">KS</option>
  <option value="ky">KY</option>
  <option value="la">LA</option>
  <option value="me">ME</option>
  <option value="md">MD</option>
  <option value="ma">MA</option>



  
</select>
    <input type="text" state="state" />
  </label>

  <input type="submit" value="Submit" />
</form>


    <p>
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p>
  </footer>
);



<link to={{ pathname: "https://www.visitflorida.com/listing/wakulla-diving-center/29406"}} target="_blank" />


export default Footer;
