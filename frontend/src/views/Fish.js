import React, { Fragment } from "react";
//import image from "../assets/scuba diving.jpg"
import Footer from '../components/Footer.js';

const Fish = () => {
 
  return (
    <Fragment>
        <h1>FISH INDEX</h1>

        <div class="container">
        <div class="row">
        <div class="col">
          <img src="../assets/Rock Sea Bass.jpg"/>
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
          Similar Species: Bank sea bass, C. ocyurus - black spot near middle of dorsal fin base and nape lacks scales. 
          Size: Rarely more than 10 inches in length 
          </p>
          <h3>Habitat</h3>
          <p>Coastal waters over hard bottom areas; also found near sand or mud bottoms</p>
          <h3>Behavior</h3>
          <p>Spawn January through March. Young adults are predominantly female and transform into males as they grow older.  The maximum size for rock sea bass is about 10 inches.</p>
        </div>
        <div class="col">
         <h2>Gulf Flounder</h2>
         <h3>Appearance</h3> 
         <ul>
          Bottom-oriented flatfish with both eyes on the left side
          Numerous spots and blotches on body with three prominent dark, eyelike spots forming a triangle-shape (one spot on lateral line, one above and one below)
          Strong canine-like teeth
          Wedge-shaped tail, its tip in the middle
         </ul>
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
    <div class="col">
      <h2> Spanish Mackeral</h2>
      <h3>Appearance</h3>
      <ul>
          Back is bluish-green, fading to silvery sides and belly
          Irregular golden-yellow spots on sides
          Bluish-black blotch on front of first dorsal fin
          Lateral line slopes gently from behind the gill cover to the tail
      </ul>
      <h3>Habitat</h3>
      <p>Prevalent throughout Florida waters: inshore, offshore and nearshore. Frequently found over grass beds and reefs. Absent from north Florida waters in winter.</p>
      <h3>Behavior</h3>
      <p>Schooling fish that migrates northward in spring, returning to southerly waters when water temperature drops below 70 degrees F.  Spawn offshore from spring through summer.
        Feeds on small fishes and invertebrates.</p>
    </div>
    <div class="col">
      <h2>Cobia      </h2>
            
      <h3>Appearance</h3>
      <ul>   
       Long, slim fish with a broad, depressed head
       Brown in color, fading to a whitish belly
       Dark lateral stripe extending through eye to tail
       Lower jaw projects past upper jaw
       Young have alternating black and white horizontal stripes
      </ul>
      <h3>Habitat</h3>
      <p>Cobia are found in nearshore and inshore waters with inlets and bays. Cobia are frequently found around buoys, pilings and wrecks in these areas.</p>
      <h3>Behavior</h3>
      <p>They spawn in spring and early summer. Feeds on crabs, squid and small fishes.</p>
    </div>
    <div class="col">
      <h2>Kingfish</h2>
      <h3>Appearance</h3>
      <ul>Body is silvery all over, without dark marks
          First dorsal fin tip is often dusky-brown
          Caudal fin - tail - has a blackish tip
          Scales on underside are smaller than body scales
          Barbel on lower jaw
      </ul>
      <h3>Habitat</h3>
      <p>Coastal waters; common in surf zones along beaches.</p>
      <h3>Behavior</h3>
      <p>Thought to prefer high wave action areas such as sand bars where the crashing waves dislodge and suspend small crabs and other small crustaceans. Feeds on fishes and invertabrates.      </p>
    </div>
    <div class="col">
      <h2>Redfish</h2>
      <h3>Appearance</h3>
      <ul>
        Body is copper-bronze, fading to a lighter belly
        One or more dark, ocellated spots at base of tail (occasionally without spot)
        Lack barbels on lower jaw
        Large scales
        Powerful pharyngeal teeth used to crush oysters and other shellfish
      </ul>
    </div>
  </div>

  </div>

        
    </Fragment>


  )
  
  
  };

export default Fish;
