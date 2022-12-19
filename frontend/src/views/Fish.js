import React, { Fragment } from "react";
import RockSeaBass from "../assets/Rock Sea Bass.jpg"

const Fish = () => {
 
  return (
    <Fragment>
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li className="slide" data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li className="slide" data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li className="slide" data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className="card" width="18rem">
        <img src={RockSeaBass} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Rock Sea Bass</h5>
          <p className="card-text">Appearance</p>
          <ul>
            <li>Olive-bronze on back, fading to a lighter</li>
            <li>Black blotches form vertical bars on sides</li>
            <li>Dark black spot near middle of dorsal fin base</li>
            <li>Tip of lower jaw is purple</li>
            <li>Head and fins with bright blue and orange markings</li>
            <li>Adults have tail with three lobes and elongated dorsal filaments</li>
            <li>Top of head -  nape - is fully-scaled</li>
          </ul>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
      </div>
      </div>
      <div class="carousel-item">
      <div className="card" width="18rem">
        <img src={RockSeaBass} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Rock Sea Bass</h5>
          <p className="card-text">Appearance</p>
          <ul>
            <li>Olive-bronze on back, fading to a lighter</li>
            <li>Black blotches form vertical bars on sides</li>
            <li>Dark black spot near middle of dorsal fin base</li>
            <li>Tip of lower jaw is purple</li>
            <li>Head and fins with bright blue and orange markings</li>
            <li>Adults have tail with three lobes and elongated dorsal filaments</li>
            <li>Top of head -  nape - is fully-scaled</li>
          </ul>
        </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
      </div>
      <div class="carousel-item">
      <div className="card" width="18rem">
        <img src={RockSeaBass} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Rock Sea Bass</h5>
          <p className="card-text">Appearance</p>
          <ul>
            <li>Olive-bronze on back, fading to a lighter</li>
            <li>Black blotches form vertical bars on sides</li>
            <li>Dark black spot near middle of dorsal fin base</li>
            <li>Tip of lower jaw is purple</li>
            <li>Head and fins with bright blue and orange markings</li>
            <li>Adults have tail with three lobes and elongated dorsal filaments</li>
            <li>Top of head -  nape - is fully-scaled</li>
          </ul>
        </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  </div>
</div>
</div>
</div>
        {/* <h1>FISH INDEX</h1>
        <div className="container">
        <div className="row">
        <div className="col">
          <div className="fish1box">
            <div className = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
          </div>
         </div> 
          <h2>Rock Sea Bass</h2>
          <h3>Appearance</h3>
          <p>
          Olive-bronze on back, fading to a lighter belly
          Black blotches form vertical bars on sides
          Dark black spot near middle of dorsal fin base
          Tip of lower jaw is purple
          Head and fins with bright blue and orange markings
          Adults have tail with three lobes and elongated dorsal filaments
          Top of head -  nape - is fully-scaled
          Similar Species: Bank sea bass, C. ocyurus - black spot near middle of dorsal fin base and nape lacks scales.</p> 
          <h3>Size</h3>
          <p> Rarely more than 10 inches in length</p>
          <h3>Habitat</h3>
          <p>Coastal waters over hard bottom areas; also found near sand or mud bottoms</p>
          <h3>Behavior</h3>
          <p>Spawn January through March. Young adults are predominantly female and transform into males as they grow older.  The maximum size for rock sea bass is about 10 inches.</p>
        </div>
        <div className="col">
          <div className="fish1box">
            <div className = "imgForBox">
              <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
          </div>
         </div> 
         <h2>Gulf Flounder</h2>
         <h3>Appearance</h3> 
         <ul>
          Bottom-oriented flatfish with both eyes on the left side
          Numerous spots and blotches on body with three prominent dark, eyelike spots forming a triangle-shape (one spot on lateral line, one above and one below)
          Strong canine-like teeth
          Wedge-shaped tail, its tip in the middle
         </ul>
         <h3>Similar Species</h3>
           <p>Southern flounder, P. lethostigma (may have 5 or more spots but they are not eyelike); summer flounder, P. dentatus (have 5 or more ocellated or eyelike spots on the body)</p>
         <h3>Size</h3>
         <p>Common to 14 inches</p>
         <h3>Habitat</h3>
         <p>Inshore on sandy or mud bottoms, often ranging into tidal creeks. Occasionally caught on nearshore rocky reefs.</p>
         <h3>Behavior</h3>
            <ul>
             Right eye migrates over to left side early in life.
             A bottom-dweller thought to spawn offshore.
             Feeds on crustaceans and small fishes.
             Ability to camouflage by changing colors to match their surrounding habitat and avoid predators.
             </ul>
        </div>
    <div className="col">
      <div className="fish1box">
         <div className = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
          </div>
         </div> 
      <h2> Spanish Mackeral</h2>
       <h3>Appearance</h3>
        <ul>
          Back is bluish-green, fading to silvery sides and belly
          Irregular golden-yellow spots on sides
          Bluish-black blotch on front of first dorsal fin
          Lateral line slopes gently from behind the gill cover to the tail
        </ul>
      <h3>Similar Species</h3>
        <p>Cero, S. regalis - has yellowish stripe on sides; and king mackerel, S. cavalla - lateral line drops sharply below second dorsal fin</p>
    <h3>Size</h3>
     <p>Up to 36 inches</p>
      <h3>Habitat</h3>
      <p>Prevalent throughout Florida waters: inshore, offshore and nearshore. Frequently found over grass beds and reefs. Absent from north Florida waters in winter.</p>
      <h3>Behavior</h3>
      <p>Schooling fish that migrates northward in spring, returning to southerly waters when water temperature drops below 70 degrees F.  Spawn offshore from spring through summer.
        Feeds on small fishes and invertebrates.</p>
    </div>
    <div className="col">
    <div className="fish1box">
      <div className = "imgForBox">
        <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
      </div>
      </div> 
      <h2>Cobia</h2>
      <h3>Appearance</h3>
      <p>Also known as ling or lemonfish.</p>
      <ul>   
        Long, slim fish with a broad, depressed head
        Brown in color, fading to a whitish belly
        Dark lateral stripe extending through eye to tail
        Lower jaw projects past upper jaw
        Young have alternating black and white horizontal stripes
      </ul> 
      <h3>Similar Species</h3>
        <p>Remora, E. naucrates - sucker disk present on top of head</p>
      <h3>Size</h3>
        <p>Up to 6 feet - 150 pounds; common from 10 to 50 pounds</p>
      <h3>Habitat</h3>
        <p>Cobia are found in nearshore and inshore waters with inlets and bays. Cobia are frequently found around buoys, pilings and wrecks in these areas.</p>
      <h3>Behavior</h3>
        <p>They spawn in spring and early summer. Feeds on crabs, squid and small fishes.</p>
    </div>
    <div className="col">
    <div className= "fish1box">
        <div className = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
        </div>
    </div> 
      <h2>Gulf Kingfish</h2>
      <h3>Appearance</h3>
        <p>Also known as whiting</p>
        <ul>Body is silvery all over, without dark marks
            First dorsal fin tip is often dusky-brown
            Caudal fin - tail - has a blackish tip
            Scales on underside are smaller than body scales
            Barbel on lower jaw
        </ul>
      <h4>Similar Species</h4>
        <p>Southern kingfish, M. americanus (caudal fin lacks a blackish tip); and northern kingfish, M. saxatilis (disting "V" mark above pectoral fins) </p>
        <h3>Size</h3>
         <p>Up to 18 inches</p>
      <h3>Habitat</h3>
      <p>Coastal waters; common in surf zones along beaches.</p>
      <h3>Behavior</h3>
      <p>Thought to prefer high wave action areas such as sand bars where the crashing waves dislodge and suspend small crabs and other small crustaceans. Feeds on fishes and invertabrates.      </p>
    </div>
    <div className="col">
     <div className="fish1box">
       <div className = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
        </div>
      </div> 
      <h2>Redfish</h2>
      <h3>Appearance</h3>
       <p>Also known as Red Drum</p>
      <ul>
        Body is copper-bronze, fading to a lighter belly
        One or more dark, ocellated spots at base of tail (occasionally without spot)
        Lack barbels on lower jaw
        Large scales
        Powerful pharyngeal teeth used to crush oysters and other shellfish
      </ul>
      <h3>Similar Species</h3>
        <p>Black drum, P. cromis - has chin barbels and lacks spot on tail</p>
      <h3>Size</h3>
         <p>Up to 18 inches</p>
      <h3>Habitat</h3>
        <p>Coastal waters. In winter, redfish are found in seagrass, over muddy or sand bottoms, or near oyster bars or spring fed creeks.</p>
      <h3>Behavior</h3>
        <p>Juvenile redfish are an inshore species until they reach roughly 30 inches - around 4 years. They then migrate to the nearshore population.</p>
        <p>Prodigious spawners that produce tens of millions of eggs. Spawning season is from about August through December, in passes, inlets and lagoon estuaries around the state. During spawning season, redfish use special muscles rubbing against their air bladder to produce a "drumming" sound for which they are named.</p>
        <p>Feed on fishes and invertebrates.</p>
    </div>
  </div>
 </div> */}
       
    </Fragment>


     )
   
  };

export default Fish;
