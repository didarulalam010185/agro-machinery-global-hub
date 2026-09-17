import material from "@/assets/sol-material.jpg";
import poultry from "@/assets/sol-poultry.jpg";
import hatchery from "@/assets/sol-hatchery.jpg";
import processing from "@/assets/sol-processing.jpg";
import feed from "@/assets/sol-feed.jpg";
import flour from "@/assets/sol-flour.jpg";
import rice from "@/assets/sol-rice.jpg";
import seed from "@/assets/sol-seed.jpg";
import insect from "@/assets/sol-insect.jpg";
import aqua from "@/assets/sol-aqua.jpg";
import energy from "@/assets/sol-energy.jpg";
import plastic from "@/assets/sol-plastic.jpg";
import steel from "@/assets/sol-steel.jpg";

// Photos extracted from the official AgroMachGlobal solutions document (CDN assets).
const pdfPointers = import.meta.glob<{ default: { url: string } }>(
  "../assets/solutions/*.asset.json",
  { eager: true },
);
const pdfPhoto = (file: string): string | undefined => {
  const entry = Object.entries(pdfPointers).find(([path]) => path.endsWith(`/${file}`));
  return entry?.[1]?.default?.url;
};

export type Equipment = {
  slug: string;
  no: number;
  title: string;
  summary: string;
  details: string[];
  highlights: string[];
  image: string;
};


export type SolutionCategory = {
  letter: string;
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  items: Equipment[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

type RawItem = [string, string, string[], string[]];

function build(
  letter: string,
  slug: string,
  title: string,
  tagline: string,
  intro: string,
  image: string,
  raw: RawItem[],
): SolutionCategory {
  return {
    letter,
    slug,
    title,
    tagline,
    intro,
    image,
    items: raw.map(([t, summary, details, highlights], i) => ({
      slug: slugify(t),
      no: i + 1,
      title: t,
      summary,
      details,
      highlights,
    })),
  };
}

const TURNKEY = [
  "Feasibility study, capacity planning and plant layout in 3D",
  "Machinery selection from vetted European, Turkish and Chinese manufacturers",
  "Supply, erection, commissioning and performance guarantee run",
  "Operator and maintenance training with documented SOPs",
];

export const categories: SolutionCategory[] = [
  build(
    "A",
    "material-management-and-storage",
    "Material Management and Storage Solution",
    "Receive, clean, dry, store and move bulk raw material with minimum loss.",
    "From jetty to silo to production intake, we engineer complete bulk material handling systems that cut manual handling cost, protect grain quality and keep your plant running around the clock.",
    material,
    [
      [
        "Grain Storage Silos",
        "Flat-bottom and hopper-bottom galvanised steel silos from 500 MT to 20,000 MT per unit for maize, wheat, paddy, soya and DDGS.",
        [
          "Hot-dip galvanised corrugated wall sheets designed to local wind and seismic loads.",
          "Aeration floor, roof exhaust fans and temperature cable monitoring keep grain within safe moisture and temperature limits.",
          "Sweep auger and unloading conveyor for complete, labour-free discharge.",
          "Steel support structure, catwalks, tower and bucket elevators supplied as one integrated package.",
        ],
        ["500–20,000 MT per silo", "Temperature monitoring", "Aeration & sweep auger"],
      ],
      [
        "Grain Cleaning and Drying",
        "Pre-cleaners, destoners and continuous flow or batch dryers that bring incoming grain to safe storage moisture.",
        [
          "Drum and vibrating pre-cleaners remove straw, dust, stones and metal before storage.",
          "Continuous flow mixed-flow dryers with hot air generator running on natural gas, husk or biomass.",
          "Automatic moisture control keeps outlet moisture stable at 13–14% with minimum fuel per tonne.",
          "Heat recovery options reduce drying energy cost significantly.",
        ],
        ["5–50 TPH capacity", "Biomass or gas fired", "Automatic moisture control"],
      ],
      [
        "Bulk Grain Sampling and Testing",
        "Hydraulic truck probe samplers and laboratory equipment for objective, dispute-free raw material acceptance.",
        [
          "Hydraulic or pneumatic auto-samplers taking representative multi-point samples from trucks and barges.",
          "Sample divider, moisture meter, test weight and NIR analyser for protein, moisture, fat and starch.",
          "Data logging linked to weighbridge and ERP for full traceability of every consignment.",
        ],
        ["Multi-point auto probe", "NIR analysis", "Weighbridge integration"],
      ],
      [
        "Bulk Truck Unloading Platform",
        "Hydraulic truck tipplers and intake hoppers that empty a bulk truck in minutes instead of hours.",
        [
          "Front or side hydraulic tipplers for 10–60 MT trucks with safety interlocks.",
          "Dust-controlled intake hopper with grating, chain conveyor and bucket elevator.",
          "Aspiration and bag filter system to protect operators and keep the yard clean.",
        ],
        ["Unload in 5–8 minutes", "Dust controlled intake", "Safety interlocked"],
      ],
      [
        "Jetty Management, Bulk Unloading and Loading Machineries",
        "Pneumatic and mechanical ship unloaders, barge loaders and jetty conveying lines for river ports.",
        [
          "Pneumatic ship unloaders from 100 to 600 TPH suited to Bangladesh river jetties.",
          "Belt and chain conveyor galleries from jetty to silo complex with transfer towers.",
          "Loading spouts with dust filters for clean, low-loss barge and truck loading.",
        ],
        ["100–600 TPH", "River jetty proven", "Low-loss transfer"],
      ],
      [
        "Warehouse Automation Conveyors",
        "Belt, chain, screw and bucket conveying networks that connect intake, storage, production and dispatch.",
        [
          "Layout engineered for the shortest path with minimum transfer points and product damage.",
          "Motorised diverters and slide gates with PLC route control from a single HMI.",
          "Telescopic truck loading conveyors for fast bag dispatch.",
        ],
        ["PLC route control", "Low product damage", "Telescopic loaders"],
      ],
      [
        "Finished Goods Packaging and Staking Robot",
        "Automatic bagging, stitching and robotic palletising lines for feed, flour, rice and fertiliser bags.",
        [
          "Net or gross weighers with ±50 g accuracy for 25–50 kg bags.",
          "Automatic bag placer, stitching or heat sealing and metal detection.",
          "Robotic palletiser with pattern programming and stretch wrapping for export-ready pallets.",
        ],
        ["Up to 1,200 bags/hour", "±50 g accuracy", "Robotic palletising"],
      ],
    ],
  ),
  build(
    "B",
    "poultry-keeping-equipment",
    "Poultry Keeping Equipment Solution",
    "Climate controlled housing and automation for broiler, breeder and layer farms.",
    "We supply complete farm equipment packages — feeding, drinking, ventilation, climate control, egg collection and manure handling — designed for the heat and humidity of Bangladesh.",
    poultry,
    [
      [
        "Broiler Farms Equipment",
        "Complete floor or multi-tier broiler house equipment with automatic feeding, drinking and climate control.",
        [
          "Pan feeding lines and nipple drinking lines with anti-leak cups.",
          "Tunnel ventilation fans, cooling pads, air inlets and heaters sized to bird density and local climate.",
          "Environment controller managing temperature, humidity, CO2, static pressure and light programme.",
          "Multi-tier cage systems available for higher density with automatic manure belts.",
        ],
        ["Floor & multi-tier", "Tunnel ventilation", "Central controller"],
      ],
      [
        "Breeder Farms Equipment",
        "Parent stock equipment with separate male and female feeding, automatic nests and egg collection.",
        [
          "Chain or pan feeding with grill for separate male–female feeding.",
          "Automatic community nests with egg belt to central collection room.",
          "Slat and floor layout engineered for good mating behaviour and low floor eggs.",
        ],
        ["Separate sex feeding", "Automatic nests", "Low floor-egg design"],
      ],
      [
        "Layer Farm Equipment",
        "H-type and A-type layer battery systems with automatic feeding, egg collection and manure removal.",
        [
          "3–8 tier H-type cages with galvanised or hot-dip coated frames.",
          "Travelling hopper feeding, nipple drinking and central egg belt collection.",
          "Manure belt with drying air duct producing low-moisture, sellable manure.",
        ],
        ["3–8 tiers", "Central egg collection", "Manure belt drying"],
      ],
      [
        "Fertilizer Composting Equipment",
        "Turning, drying and granulating equipment converting poultry manure into organic fertiliser.",
        [
          "Windrow or in-vessel composting turners with controlled aeration.",
          "Rotary dryer, crusher, granulator and packing line.",
          "Odour control and leachate management for neighbourhood-friendly operation.",
        ],
        ["Organic fertiliser output", "Odour control", "Granulating & packing"],
      ],
      [
        "Automatic Layer Case Cleaning Machine",
        "Mechanised cage and house cleaning that cuts down-time between flocks and improves biosecurity.",
        [
          "High pressure washing units travelling along the cage rows.",
          "Detergent and disinfectant dosing with controlled water consumption.",
          "Reduces cleaning manpower and turnaround time between batches.",
        ],
        ["Faster turnaround", "Better biosecurity", "Lower water use"],
      ],
      [
        "Automatic Layer Bird Inspection Robot",
        "Rail-guided robot with cameras and sensors inspecting birds, feed and environment in every tier.",
        [
          "Detects dead birds, empty feed troughs and blocked nipples automatically.",
          "Measures temperature, humidity, ammonia and light level along the house.",
          "Daily reports to the manager's phone for early intervention.",
        ],
        ["Dead bird detection", "Ammonia monitoring", "Daily digital reports"],
      ],
      [
        "Automatic Egg Sorting, Grading and Packing Machine",
        "Egg graders from 20,000 to 120,000 eggs per hour with candling, weighing and packing.",
        [
          "Dirt, crack and blood spot detection by camera and acoustic sensor.",
          "Weight grading into standard classes with printing and traceability.",
          "Automatic packing into trays, cartons and pallets.",
        ],
        ["20k–120k eggs/hour", "Crack detection", "Automatic packing"],
      ],
    ],
  ),
  build(
    "C",
    "poultry-hatchery-equipment",
    "Poultry Hatchery Equipment Solution",
    "Single-stage incubation and hatchery climate systems for uniform, high quality chicks.",
    "We design hatcheries as one biosecure system — egg handling, incubation, climate, hygiene and waste — so that hatchability and chick quality stay consistent throughout the year.",
    hatchery,
    [
      [
        "Egg Grading and Setting Machine",
        "Automatic hatching egg grading, transfer and setting equipment for fast, gentle egg handling.",
        [
          "Vacuum lift heads transfer eggs from farm trays to setter trays without damage.",
          "Weight grading and candling to remove cracked and unsuitable eggs.",
          "Reduces manpower and micro-cracks that cost hatchability.",
        ],
        ["Vacuum egg transfer", "Candling & grading", "Less micro-cracking"],
      ],
      [
        "Setter and Hatcher",
        "Single-stage setters and hatchers with precise temperature, humidity, CO2 and turning control.",
        [
          "Uniform airflow design giving less than 0.2°C variation across the machine.",
          "Embryo-response programmes for temperature, humidity, CO2 and ventilation by day.",
          "Central hatchery software with alarms, trends and remote monitoring.",
        ],
        ["Single stage", "±0.2°C uniformity", "Remote monitoring"],
      ],
      [
        "HVAC, Chiller, AHU and FCU",
        "Hatchery air handling and chilled water systems giving each room its own pressure and climate.",
        [
          "Cascade pressure design from clean to dirty rooms for biosecurity.",
          "Chillers, AHUs, FCUs and duct network sized to the incubator heat load.",
          "Heat recovery and inverter drives to cut electricity cost.",
        ],
        ["Cascade pressure", "Room-wise climate", "Inverter energy saving"],
      ],
      [
        "Automatic Tray Washing Machine",
        "Tunnel washers for setter trays, hatcher baskets, chick boxes and trolleys.",
        [
          "Multi-stage pre-rinse, detergent wash, disinfection and drying.",
          "Water recycling and dosing control to reduce chemical and water use.",
          "Consistent hygiene results independent of operator effort.",
        ],
        ["Tunnel washing", "Water recycling", "Validated hygiene"],
      ],
      [
        "Hatchery Wast Rendering Plant",
        "Rendering and drying lines converting hatchery waste into hygienic protein meal.",
        [
          "Cooking, pressing and drying of eggshell, infertile eggs and culled chicks.",
          "Odour treatment with condenser and biofilter or scrubber.",
          "Turns a disposal cost into a saleable protein meal by-product.",
        ],
        ["Waste to protein meal", "Odour treatment", "Compliance ready"],
      ],
    ],
  ),
  build(
    "D",
    "poultry-processing-equipment",
    "Poultry Processing and Further Processing Equipment Solution",
    "Slaughtering, chilling, cutting and value-added processing under one hygienic roof.",
    "From live bird receiving to sausage, nugget and smoked product lines, we supply food-grade stainless steel equipment and cold chain systems that meet modern food safety expectations.",
    processing,
    [
      [
        "Poultry Slaughterhouse Equipment (Hanging Chain Loop, Stunner, De-necking, Scalding, De-feathering, Evisceration and Transferring to Screw Chiller)",
        "Complete slaughter line from 500 to 6,000 birds per hour, fully stainless steel and hygienic.",
        [
          "Overhead conveyor loop, shackles, electrical or gas stunner and automatic killer.",
          "Multi-stage scalder with counterflow water and plucker with high grade fingers.",
          "Automatic evisceration set, cropper, washer and inside–outside cleaning.",
          "Offal separation, by-product handling and CIP-ready design.",
        ],
        ["500–6,000 birds/hour", "Full stainless steel", "Halal compliant layout"],
      ],
      [
        "Screw Chiller",
        "Counterflow screw chillers that bring carcass core temperature down to 4°C quickly and hygienically.",
        [
          "Counterflow water and ice dosing with controlled residence time.",
          "Water chilling unit and filtration to reduce fresh water use.",
          "Gentle screw geometry protects skin and carcass appearance.",
        ],
        ["Core temp ≤4°C", "Counterflow design", "Water saving"],
      ],
      [
        "De-boning Machine",
        "Manual-assist and automatic deboning lines for breast fillet, leg and whole leg products.",
        [
          "Cone lines and automatic front-half or leg deboners.",
          "High yield with consistent fillet appearance.",
          "Ergonomic stainless workstations with product and waste conveyors.",
        ],
        ["High yield", "Cone or automatic", "Ergonomic layout"],
      ],
      [
        "Portioning Machine",
        "Fixed-weight and fixed-thickness portion cutters for fillets and boneless products.",
        [
          "Vision-guided waterjet or blade portioning for accurate target weights.",
          "Reduces giveaway and increases fixed-weight pack yield.",
          "Recipe-based programmes stored on the HMI.",
        ],
        ["Vision guided", "Low giveaway", "Recipe control"],
      ],
      [
        "Chilling Room",
        "Insulated chilling rooms with panel, door, evaporator and control package.",
        [
          "PUF sandwich panels, hygienic flooring and rapid-roll or sliding doors.",
          "Evaporators sized for fast pull-down with low dehydration.",
          "Temperature logging for HACCP records.",
        ],
        ["0–4°C rooms", "HACCP logging", "Low dehydration"],
      ],
      [
        "Blast Freezing or IQF Machine",
        "Spiral and tunnel IQF freezers plus blast rooms for individually quick frozen products.",
        [
          "Spiral IQF from 500 to 5,000 kg/hour with stainless belt.",
          "Freon or ammonia refrigeration plant designed for local utility conditions.",
          "Fast core freezing preserves texture and drip loss performance.",
        ],
        ["Spiral & tunnel IQF", "500–5,000 kg/h", "Low drip loss"],
      ],
      [
        "Refrigerated Van",
        "Insulated and refrigerated vehicle bodies keeping the cold chain intact to the customer.",
        [
          "Insulated bodies with chiller or freezer units for 1–10 MT payload.",
          "Temperature data logger and GPS tracking options.",
          "Loading ramp and hygienic interior finishing.",
        ],
        ["1–10 MT payload", "Data logger", "Chiller or freezer"],
      ],
      [
        "Dicing Machine",
        "Industrial dicers and strip cutters for uniform cubes and slices of fresh or tempered meat.",
        [
          "Adjustable cube size with clean cut and minimal smear.",
          "Quick-change knife sets for easy sanitation.",
          "Stainless construction with wash-down rating.",
        ],
        ["Uniform cubes", "Quick knife change", "Wash-down design"],
      ],
      [
        "Marinating Machining",
        "Vacuum and continuous marinators for uniform brine uptake and better yield.",
        [
          "Vacuum tumbling marination with programmable cycles.",
          "Brine mixing and dosing skids for repeatable recipes.",
          "Improves tenderness, taste and cooking yield.",
        ],
        ["Vacuum marination", "Recipe programmes", "Higher yield"],
      ],
      [
        "Bowl Chopping Machine",
        "Vacuum bowl cutters for emulsion products such as sausage and nugget batter.",
        [
          "High speed knife head with temperature-controlled chopping.",
          "Vacuum operation for dense, bright coloured emulsion.",
          "Capacities from 40 to 500 litre bowls.",
        ],
        ["40–500 L bowls", "Vacuum chopping", "Stable emulsion"],
      ],
      [
        "Tumbling Machine",
        "Vacuum tumblers for massaging, protein extraction and brine distribution.",
        [
          "Cooling jacket and programmable rotation and rest cycles.",
          "Uniform brine distribution across every piece.",
          "Loading and discharging trolleys for hygienic transfer.",
        ],
        ["Cooled vacuum tumbling", "Programmable cycles", "Even brine uptake"],
      ],
      [
        "Mixing Machine",
        "Paddle and ribbon meat mixers for blending meat, spices and additives.",
        [
          "Single or twin shaft with reverse discharge.",
          "Vacuum option for reduced oxidation and better binding.",
          "Fully stainless, easy strip-down for cleaning.",
        ],
        ["Single/twin shaft", "Vacuum option", "Easy cleaning"],
      ],
      [
        "Automatic Sausage Making Machine",
        "Complete sausage line: filler, linker, hanging, cooking and packing.",
        [
          "Vacuum filler with portioning accuracy for natural, collagen and cellulose casing.",
          "Automatic linking, hanging on smoke sticks and trolley loading.",
          "Integration with cooking and smoke house programme.",
        ],
        ["Vacuum filling", "Automatic linking", "Line integration"],
      ],
      [
        "Automatic Nugget Making Machine",
        "Forming, battering, breading and frying line for nuggets, patties and strips.",
        [
          "Drum or plate former with interchangeable shape moulds.",
          "Batter applicator, crumb coating machine and continuous fryer.",
          "Spiral freezer connection for finished IQF product.",
        ],
        ["Shape moulds", "Batter & breading", "Continuous fryer"],
      ],
      [
        "Smoke House",
        "Universal cooking and smoking chambers with steam, dry heat, smoke and shower cooling.",
        [
          "Single or multi-trolley chambers with uniform airflow.",
          "Automatic recipe control for drying, smoking, cooking and cooling.",
          "Friction or smoulder smoke generator with cleaning system.",
        ],
        ["Recipe controlled", "Uniform airflow", "1–6 trolley sizes"],
      ],
      [
        "Poultry By-product Rendering Plant Complete Turn Key Solution",
        "Batch and continuous rendering plants converting feather, blood and offal into meal and fat.",
        [
          "Feather hydrolyser, cooker, press, decanter and dryer package.",
          "Odour control by condenser, scrubber and biofilter.",
          "Produces poultry by-product meal, feather meal and fat for the feed industry.",
        ],
        ["Batch or continuous", "Feather & offal meal", "Odour controlled"],
      ],
    ],
  ),
  build(
    "E",
    "feed-milling",
    "Feed Milling Solution",
    "Turnkey poultry, dairy and aqua feed plants plus BMRE, audits and consumables.",
    "Whether you are building a new mill or improving an existing one, we deliver the process design, machinery, automation and after-sales consumables that keep pellet quality high and cost per tonne low.",
    feed,
    [
      [
        "Feed Milling Complete Turn Key Solutions for Poultry, Dairy and Aqua Feed Production Line.",
        "Complete feed mills from 5 to 60 TPH including intake, grinding, batching, mixing, pelleting and bagging.",
        [
          ...TURNKEY,
          "Extrusion lines for floating and sinking aqua feed.",
          "Full automation with batching accuracy and traceability per batch.",
        ],
        ["5–60 TPH", "Poultry, dairy & aqua", "Full automation"],
      ],
      [
        "Balancing, Modernization, Rehabilitation and Expansion (BMRE) for the existing Feed Mills.",
        "Debottlenecking of running mills to add capacity without building a new plant.",
        [
          "Bottleneck study of intake, grinding, mixing, pelleting and bagging sections.",
          "Targeted equipment upgrades with minimum shutdown time.",
          "Typical outcome: 20–40% more output from the same building.",
        ],
        ["Capacity uplift", "Minimum downtime", "Phased investment"],
      ],
      [
        "Feed Milling Process Audit and Energy Audit.",
        "Independent audit of process performance, pellet quality and energy consumption per tonne.",
        [
          "Measurement of kWh/tonne by section and benchmarking against best practice.",
          "Pellet durability, particle size and mixing uniformity (CV) testing.",
          "Prioritised action plan with payback calculation.",
        ],
        ["kWh/tonne benchmark", "Mixer CV test", "Payback based plan"],
      ],
      [
        "Consumable Support (Die, Roller Cell, Hammer Blade and Hammer Screen)",
        "Genuine and equivalent consumables with correct metallurgy and fast replenishment.",
        [
          "Pellet dies in stainless and alloy steel with recipe-matched compression ratio.",
          "Roller shells, hammer blades and screens for all major mill brands.",
          "Stock planning support so a die change never stops production.",
        ],
        ["All major brands", "Recipe-matched dies", "Stock planning"],
      ],
      [
        "Spare Parts Support",
        "Critical spare parts supply with documented lead times and preventive maintenance lists.",
        [
          "Bearings, gearboxes, drives, sensors, valves and conveyor parts.",
          "Recommended critical spare list per equipment.",
          "Emergency sourcing from global suppliers when a line is down.",
        ],
        ["Critical spare lists", "Global sourcing", "Emergency support"],
      ],
    ],
  ),
  build(
    "F",
    "flour-milling",
    "Flour Milling Solution",
    "Atta, mayda and suji lines, BMRE, audits and consumable support.",
    "Modern roller mill technology, correct cleaning and conditioning and a well balanced diagram give you higher extraction, better colour and stable ash — we deliver all of it as one responsibility.",
    flour,
    [
      [
        "Flour Milling Complete Turn Key Solutions for Atta, Mayda and Suji Production Line.",
        "Turnkey wheat mills from 50 to 500 MT per day with cleaning, conditioning, milling and packing.",
        [
          ...TURNKEY,
          "Optimised milling diagram for the local wheat mix and required extraction.",
          "Pneumatic conveying, plansifters, purifiers and flour dressing systems.",
        ],
        ["50–500 MTPD", "Atta, mayda & suji", "Optimised diagram"],
      ],
      [
        "Balancing, Modernization, Rehabilitation and Expansion (BMRE) for the existing Flour Mills.",
        "Upgrading older mills for higher capacity, better extraction and lower energy.",
        [
          "Diagram review, roll surface and sifter mesh optimisation.",
          "Replacement of critical machines while the mill keeps running.",
          "Improvement in extraction of 1–3% is common and pays back quickly.",
        ],
        ["Extraction uplift", "Running-mill upgrade", "Fast payback"],
      ],
      [
        "Flour Milling Process Audit and Energy Audit.",
        "Diagram, extraction, ash and energy audit with a measurable improvement plan.",
        [
          "Sampling at every passage and full sieve analysis.",
          "Energy mapping by section and motor loading study.",
          "Written report with prioritised actions and expected gains.",
        ],
        ["Passage sampling", "Ash & colour study", "Energy mapping"],
      ],
      [
        "Consumable Support",
        "Rolls, sieves, cloth, brushes and other running consumables from proven sources.",
        [
          "Roll fluting and regrinding support with correct spiral and disposition.",
          "Sifter cloth, cleaners and brushes to original specification.",
          "Scheduled supply matched to your maintenance calendar.",
        ],
        ["Roll fluting support", "Original spec cloth", "Scheduled supply"],
      ],
      [
        "Spare Parts Support",
        "Fast supply of mill spares to avoid extended production stoppage.",
        [
          "Roller mill, plansifter, purifier and pneumatic system spares.",
          "Critical spare list and stocking advice for each installed machine.",
          "Technician support during replacement.",
        ],
        ["Critical spares", "Technician support", "Documented lead times"],
      ],
    ],
  ),
  build(
    "G",
    "rice-milling",
    "Rice Milling Solution",
    "Automatic rice mills, BMRE, audits and consumables for higher head rice yield.",
    "Head rice yield and whiteness decide the profit of a rice mill. We design parboiling, drying, husking, whitening, polishing and colour sorting as one balanced line.",
    rice,
    [
      [
        "Rice Milling Complete Turn Key Solutions.",
        "Automatic rice mills from 2 to 20 TPH including parboiling, drying, milling, sorting and packing.",
        [
          ...TURNKEY,
          "Parboiling and dryer section engineered for fuel efficiency and even colour.",
          "Rubber roll husker, paddy separator, whitener, polisher, length grader and colour sorter.",
        ],
        ["2–20 TPH", "Parboiling to packing", "Colour sorting"],
      ],
      [
        "Balancing, Modernization, Rehabilitation and Expansion (BMRE) for the existing Rice Mills.",
        "Upgrading existing mills to raise head rice yield and reduce broken percentage.",
        [
          "Section-wise capacity balancing to remove bottlenecks.",
          "Addition of modern whitening, polishing and sorting machines.",
          "Reduction of broken rice directly improves realisation per tonne.",
        ],
        ["Higher head rice", "Less broken", "Section balancing"],
      ],
      [
        "Rice Milling Process Audit and Energy Audit.",
        "Measurement based audit of yield, breakage, whiteness and energy per tonne.",
        [
          "Sampling before and after each machine with breakage analysis.",
          "Steam and electricity consumption benchmarking.",
          "Action plan with expected yield and cost improvement.",
        ],
        ["Yield analysis", "Steam & power study", "Improvement plan"],
      ],
      [
        "Consumable Support",
        "Rubber rolls, emery rolls, screens, sieves and brushes for continuous operation.",
        [
          "Correct hardness rubber rolls for the paddy variety being milled.",
          "Emery rolls, silk screens and polishing brushes.",
          "Regular supply plan aligned with your milling season.",
        ],
        ["Rubber & emery rolls", "Screens and brushes", "Season-aligned supply"],
      ],
      [
        "Spare Parts Support",
        "Mechanical, electrical and automation spares for all main rice mill machines.",
        [
          "Bearings, blowers, elevators, motors and sensors.",
          "Colour sorter ejectors, valves and camera spares.",
          "Support during peak season when downtime is most costly.",
        ],
        ["All machine spares", "Sorter parts", "Peak season support"],
      ],
    ],
  ),
  build(
    "H",
    "seed-crushing-equipment",
    "Seed Crushing Equipment Solution",
    "Oilseed preparation, expelling, extraction and refining plants.",
    "Soya, mustard, rice bran and sunflower processing plants engineered for high oil recovery, safe solvent handling and quality meal for the feed industry.",
    seed,
    [
      [
        "Seed Crushing Plant Complete Turn Key Solutions.",
        "Complete preparation, expelling, solvent extraction and refining plants.",
        [
          ...TURNKEY,
          "Cleaning, cracking, flaking, cooking, expelling and solvent extraction sections.",
          "Refinery options: degumming, neutralising, bleaching, deodorising and winterising.",
        ],
        ["50–1,000 TPD", "Expelling & extraction", "Refinery option"],
      ],
      [
        "Balancing, Modernization, Rehabilitation and Expansion (BMRE) for the existing Seed Crushing Plant.",
        "Capacity and recovery improvement projects for existing crushing plants.",
        [
          "Residual oil in meal reduction through preparation and extraction upgrades.",
          "Solvent loss reduction and steam consumption improvement.",
          "Phased execution around your maintenance shutdown.",
        ],
        ["Lower residual oil", "Solvent loss control", "Phased execution"],
      ],
      [
        "Seed Crushing Plant Process Audit and Energy Audit.",
        "Independent evaluation of oil recovery, solvent loss and utility consumption.",
        [
          "Mass balance across preparation, extraction and refining.",
          "Steam, power and solvent benchmark against industry norms.",
          "Safety review of solvent areas and hazardous zone classification.",
        ],
        ["Mass balance", "Utility benchmark", "Safety review"],
      ],
      [
        "Consumable Support",
        "Wear parts and process consumables for crushing and extraction plants.",
        [
          "Expeller worms, cages, knives and flaking roll re-surfacing.",
          "Filter cloth, bleaching earth and gaskets.",
          "Planned supply to match maintenance intervals.",
        ],
        ["Expeller wear parts", "Filter media", "Planned supply"],
      ],
      [
        "Spare Parts Support",
        "Critical spares for extractors, distillation, dryers and refinery equipment.",
        [
          "Pumps, gearboxes, valves and instruments.",
          "Explosion-proof electrical components for solvent zones.",
          "Documented critical spare inventory list.",
        ],
        ["Ex-rated components", "Critical spares", "Documented lists"],
      ],
    ],
  ),
  build(
    "I",
    "insect-protein-production",
    "Insect Protein Production Equipment Solution",
    "Black soldier fly facilities converting organic waste into protein and frass.",
    "Insect protein is a sustainable, locally produced alternative to imported fish and soya meal. We support design and complete equipment supply for commercial BSF facilities.",
    insect,
    [
      [
        "Insect Protein Production Facility Design Support",
        "Concept and detailed design of nursery, growing, harvesting and processing areas.",
        [
          "Mass balance from organic substrate input to protein meal, oil and frass output.",
          "Climate and biosecurity design for nursery, love cage and growing halls.",
          "Layout, utility and manpower planning with investment estimate.",
        ],
        ["Mass balance design", "Climate & biosecurity", "Capex estimate"],
      ],
      [
        "Insect Protein Production Complete Turn Key Solutions.",
        "Complete automated BSF line: substrate preparation, crate handling, harvesting and drying.",
        [
          ...TURNKEY,
          "Automatic crate filling, stacking, washing and robotic handling systems.",
          "Sieving, separation, killing, drying, pressing and packing of protein meal, oil and frass.",
        ],
        ["Automated crate line", "Meal, oil & frass", "Turnkey delivery"],
      ],
    ],
  ),
  build(
    "J",
    "aqua-culture-production",
    "Aqua Culture Production Equipment Solution",
    "IPRS and RAS fish production systems with design and equipment support.",
    "Higher stocking density, controlled water quality and lower feed conversion — modern aquaculture systems make fish farming predictable and land-efficient.",
    aqua,
    [
      [
        "IPRS Fish Production Facility Design and Equipment Support",
        "In-Pond Raceway System design, aeration, waste capture and monitoring equipment.",
        [
          "Raceway cell sizing, water flow and aeration design for the target biomass.",
          "White water units, quiescent zone and waste collection equipment.",
          "Dissolved oxygen and water quality monitoring with alarm system.",
        ],
        ["Raceway design", "Waste capture", "DO monitoring"],
      ],
      [
        "RAS Fish Production Facility Design and Equipment Support",
        "Recirculating Aquaculture System with filtration, oxygenation and disinfection.",
        [
          "Drum filter, biofilter, degasser, oxygen cone and UV or ozone disinfection.",
          "Tank, pipework and pumping design for target exchange rate and energy use.",
          "Automation with sensors, alarms and backup oxygen for fish safety.",
        ],
        ["Full filtration train", "Energy optimised", "Backup oxygen safety"],
      ],
    ],
  ),
  build(
    "K",
    "renewable-energy",
    "Renewable Energy Solution",
    "Solar, wind and tidal power design and equipment for agro industry.",
    "Energy is one of the largest costs in agro processing. We help you cut it with well engineered renewable systems that suit your load profile and available space.",
    energy,
    [
      [
        "Solar Power Plant Design and Equipment Support",
        "Rooftop and ground-mounted solar plants with net metering or hybrid storage.",
        [
          "Shadow analysis, yield simulation and financial modelling before investment.",
          "Modules, inverters, mounting structure, cabling and monitoring supply.",
          "Net metering documentation support and O&M planning.",
        ],
        ["Rooftop & ground", "Yield simulation", "Net metering support"],
      ],
      [
        "Wind Mill Design and Equipment Support",
        "Small and medium wind turbine assessment, design and equipment supply.",
        [
          "Wind resource assessment for coastal and open sites.",
          "Turbine selection, tower, foundation and grid interface design.",
          "Hybrid operation with solar and diesel for stable supply.",
        ],
        ["Resource assessment", "Turbine selection", "Hybrid capable"],
      ],
      [
        "Tidal Power Plant Design and Equipment Support",
        "Feasibility and equipment support for tidal and river-current power in coastal areas.",
        [
          "Site survey, tidal range and current velocity study.",
          "Technology selection and preliminary engineering.",
          "Equipment sourcing and implementation support.",
        ],
        ["Site feasibility", "Technology selection", "Implementation support"],
      ],
    ],
  ),
  build(
    "L",
    "plastic-and-paper-equipment",
    "Plastic and Paper Equipment Solution",
    "Packaging, tray, paper and plastic processing machinery turnkey lines.",
    "Packaging quality protects your product and your brand. We supply complete lines for woven and non-woven bags, egg and chick trays, paper products and plastic processing.",
    plastic,
    [
      [
        "Complete Turnkey Solution for PP Woven and Non-woven Bag Equipment",
        "Tape extrusion, circular looms, lamination, printing, cutting and stitching lines.",
        [...TURNKEY, "Capacity matched to your bag size, GSM and daily requirement."],
        ["Tape to finished bag", "Printing & lamination", "Turnkey line"],
      ],
      [
        "Complete Turnkey Solution for PP Non-woven Bag Equipment",
        "Spunbond non-woven fabric and shopping bag making machinery.",
        [...TURNKEY, "Bag making machines with handle attachment and printing."],
        ["Spunbond fabric", "Bag making", "Printing option"],
      ],
      [
        "Complete Turnkey Solution for Day Old Chicks Transport Paper Tray Equipment",
        "Moulded pulp lines producing chick transport trays and boxes.",
        [...TURNKEY, "Pulping, moulding, drying and stacking equipment with mould sets."],
        ["Moulded pulp", "Mould sets included", "Automatic stacking"],
      ],
      [
        "Complete Turnkey Solution for Hatching Egg and Table Egg Transport Tray and Basket Equipment",
        "Egg tray and basket production lines in moulded pulp and plastic.",
        [...TURNKEY, "Multiple mould options for hatching egg trays, table egg trays and baskets."],
        ["Pulp & plastic", "Multiple moulds", "High output"],
      ],
      [
        "Complete Turnkey Solution for Paper Mill Equipment",
        "Kraft, testliner and tissue paper machine lines with stock preparation.",
        [...TURNKEY, "Stock preparation, headbox, press, dryer section and rewinder."],
        ["Kraft & tissue", "Stock preparation", "Complete machine line"],
      ],
      [
        "Complete Turnkey Solution for Plastic Injection Molding Equipment",
        "Injection moulding machines, moulds, robots and auxiliary equipment.",
        [...TURNKEY, "Machine tonnage selection, mould design and automation with take-out robots."],
        ["Machine + mould", "Robot take-out", "Auxiliaries included"],
      ],
      [
        "Complete Turnkey Solution for Plastic Extrusion Equipment",
        "Pipe, sheet, film and profile extrusion lines with downstream equipment.",
        [...TURNKEY, "Extruder, die, calibration, haul-off, cutter and winder as a matched set."],
        ["Pipe, sheet & film", "Matched downstream", "Recipe support"],
      ],
      [
        "Complete Turnkey Solution for Mold Making Equipment",
        "Tool room equipment for making and maintaining moulds in-house.",
        [...TURNKEY, "CNC machining centre, EDM, wire cut, grinding and measuring equipment."],
        ["CNC & EDM", "In-house tooling", "Training included"],
      ],
    ],
  ),
  build(
    "M",
    "pre-engineered-steel-building",
    "Pre-engineered Steel Building Solution",
    "Fast, engineered steel structures for farms, hatcheries and mills.",
    "Pre-engineered buildings are faster to erect, lighter, and precisely engineered for the loads of poultry houses and mill towers — with insulation and cladding suited to our climate.",
    steel,
    [
      [
        "Pre-engineered Steel Building Solution for Broiler, Layer, Breeder Farms and Hatcheries.",
        "Farm and hatchery buildings designed for climate control, biosecurity and long life.",
        [
          "Clear-span portal frames with no internal columns for equipment freedom.",
          "Insulated PUF or rockwool panel walls and roof for stable inside temperature.",
          "Design detailing for tunnel ventilation, cooling pad and fan openings.",
          "Foundation design, fabrication, galvanising, transport and erection.",
        ],
        ["Clear span", "Insulated panels", "Erection included"],
      ],
      [
        "Pre-engineered Steel Building Solution for Feed Mills, Flour Mills, Rice Mills and other Industrial needs.",
        "Mill towers, warehouses and workshops engineered for process loads and equipment support.",
        [
          "Structures designed for silo, elevator and machinery dynamic loads.",
          "Mezzanine floors, staircases, platforms, crane beams and cladding.",
          "Complies with applicable BNBC wind and seismic requirements.",
        ],
        ["Process load design", "Mezzanine & platforms", "Code compliant"],
      ],
    ],
  ),
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getEquipment = (catSlug: string, itemSlug: string) => {
  const cat = getCategory(catSlug);
  return cat ? { cat, item: cat.items.find((i) => i.slug === itemSlug) } : { cat: undefined, item: undefined };
};
