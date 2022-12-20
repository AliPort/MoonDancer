import React from "react";
import RockSeaBass from "../assets/Rock Sea Bass.jpeg"
import GulfFlounder from "../assets/gulf flounder.jpeg"
import SpanishMackeral from "../assets/Spanish Mackerel.jpeg"
import Cobia from "../assets/Cobia.jpeg"
import GulfKingfish from "../assets/King Fish.jpeg"
import Redfish from "../assets/Red Fish.jpeg"

const Fish = () => {
  return (
    <main>
    <div className="row">
    <div className="column">
      <div className="flip-card">
      {/* ROCK SEA BASS */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="fishpic" src={RockSeaBass} alt="Rock Sea Bass" width="300px"/>
            <h1 className="fishname">Rock Sea Bass</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Olive-bronze on back, fading to a lighter belly</li>
              <li>Black blotches form vertical bars on sides</li>
              <li>Dark black spot near middle of dorsal fin base</li>
              <li>Tip of lower jaw is purple</li>
              <li>Head and fins with bright blue and orange markings</li>
              <li>Adults have tail with three lobes and elongated dorsal filaments</li>
              <li>Top of head -  nape - is fully-scaled</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Bank sea bass, C. ocyurus - black spot near middle of dorsal fin base and nape lacks scales</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Rarely more than 10 inches in length</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Coastal waters over hard bottom areas</li>
              <li>Also found near sand or mud bottoms</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>Spawn January through March</li>
              <li>Young adults are predominantly female and transform into males as they grow older</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
    <div className="flip-card">
      {/* GULF FLOUNDER */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img className="fishpic" src={GulfFlounder} alt="Gulf Flounder" width="300px"/>
            <h1 className="fishname">Gulf Flounder</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Bottom-oriented flatfish with both eyes on the left side</li>
              <li>Numerous spots and blotches on body with three prominent dark</li>
              <li>Eyelike spots forming a triangle-shape (one spot on lateral line, one above and one below)</li>
              <li>Strong canine-like teeth</li>
              <li>Wedge-shaped tail, its tip in the middle</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Southern flounder, P. lethostigma (may have 5 or more spots but they are not eyelike)</li>
              <li>Summer flounder, P. dentatus (have 5 or more ocellated or eyelike spots on the body)</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Common to 14 inches</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Inshore on sandy or mud bottoms</li>
              <li>Often ranging into tidal creeks</li>
              <li>Occasionally caught on nearshore rocky reefs</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>Right eye migrates over to left side early in life</li>
              <li>A bottom-dweller thought to spawn offshore</li>
              <li>Feeds on crustaceans and small fishes</li>
              <li>Ability to camouflage by changing colors to match their surrounding habitat and avoid predators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
    <div className="flip-card">
      {/* SPANISH MACKERAL */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img className="fishpic" src={SpanishMackeral} alt="Spanish Mackeral" width="300px"/>
            <h1 className="fishname">Spanish Mackeral</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Back is bluish-green, fading to silvery sides and belly</li>
              <li>Irregular golden-yellow spots on sides</li>
              <li>Bluish-black blotch on front of first dorsal fin</li>
              <li>Lateral line slopes gently from behind the gill cover to the tail</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Cero, S. regalis - has yellowish stripe on sides; and king mackerel</li>
              <li>S. cavalla - lateral line drops sharply below second dorsal fin</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Up to 36 inches</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Prevalent throughout Florida waters: inshore, offshore and nearshore</li>
              <li>Frequently found over grass beds and reefs</li>
              <li>Absent from north Florida waters in winter</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>Schooling fish that migrates northward in spring</li>
              <li>Returning to southerly waters when water temperature drops below 70 degrees F</li>
              <li>Spawn offshore from spring through summer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="row">
    <div className="column">
      <div className="flip-card">
      {/* COBIA */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="fishpic" src={Cobia} alt="Cobia" width="300px"/>
            <h1 className="fishname">Cobia</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Long, slim fish with a broad, depressed head</li>
              <li>Brown in color, fading to a whitish belly</li>
              <li>Dark lateral stripe extending through eye to tail</li>
              <li>Lower jaw projects past upper jaw</li>
              <li>Young have alternating black and white horizontal stripes</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Remora, E. naucrates - sucker disk present on top of head</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Up to 6 feet - 150 pounds</li>
              <li>Common from 10 to 50 pounds</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Cobia are found in nearshore and inshore waters with inlets and bays</li>
              <li>Cobia are frequently found around buoys, pilings and wrecks in these areas</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>hey spawn in spring and early summer</li>
              <li>Feeds on crabs, squid and small fishes</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <div className="column">
      <div className="flip-card">
      {/* GULF KINGFISH */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="fishpic" src={GulfKingfish} alt="Gulf Kingfish" width="300px"/>
            <h1 className="fishname">Gulf Kingfish</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Also known as whiting</li>
              <li>Body is silvery all over, without dark marks</li>
              <li>First dorsal fin tip is often dusky-brow</li>
              <li>Caudal fin - tail - has a blackish tip</li>
              <li>Scales on underside are smaller than body scales</li>
              <li>Barbel on lower jaw</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Southern kingfish, M. americanus (caudal fin lacks a blackish tip)</li>
              <li>Northern kingfish, M. saxatilis (disting "V" mark above pectoral fins)</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Up to 18 inches</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Coastal waters</li>
              <li>Common in surf zones along beaches</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>Thought to prefer high wave action areas such as sand bars where the crashing waves dislodge and suspend small crabs and other small crustaceans</li>
              <li>Feeds on fishes and invertabrates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="flip-card">
      {/* REDFISH */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="fishpic" src={Redfish} alt="Redfish" width="300px"/>
            <h1 className="fishname">Redfish</h1>
            <h3 className="fishheadings">Appearance</h3>
            <ul>
              <li>Also known as Red Drum</li>
              <li>Body is copper-bronze, fading to a lighter belly</li>
              <li>One or more dark, ocellated spots at base of tail (occasionally without spot)</li>
              <li>Lack barbels on lower jaw</li>
              <li>Large scales</li>
              <li>Powerful pharyngeal teeth used to crush oysters and other shellfish</li>
            </ul>
            <h3 className="hover">HOVER TO LEARN MORE</h3>
          </div>
          <div className="flip-card-back">
          <h3 className="fishheadings">Similar Species</h3>
            <ul>
              <li>Black drum, P. cromis - has chin barbels and lacks spot on tail</li>
            </ul>
            <h3 className="fishheadings">Size</h3>
            <ul>
              <li>Up to 18 inches</li>
            </ul>
            <h3 className="fishheadings">Habitat</h3>
            <ul>
              <li>Coastal waters</li>
              <li>In winter, redfish are found in seagrass, over muddy or sand bottoms, or near oyster bars or spring fed creeks</li>
            </ul>
            <h3 className="fishheadings">Behavior</h3>
            <ul>
              <li>Juvenile redfish are an inshore species until they reach roughly 30 inches - around 4 years</li>
              <li>They then migrate to the nearshore population</li>
              <li>Prodigious spawners that produce tens of millions of eggs</li>
              <li>Spawning season is from about August through December, in passes, inlets and lagoon estuaries around the state</li>
              <li>During spawning season, redfish use special muscles rubbing against their air bladder to produce a "drumming" sound for which they are named</li>
              <li>Feed on fishes and invertebrates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div> 
    </main>
  )
};

export default Fish;
