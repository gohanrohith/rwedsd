const FILL   = '#0D2218';
const FOREST = '#1A4332';

// Stepped gopuram tower as a polygon points string
// Each level: slightly narrower, stepping outward then inward at each tier boundary

const CENTRAL =
  '338,128 348,128 348,108 358,108 358,94 365,94 365,80 371,80 371,66 376,66 ' +
  '376,52 380,52 380,38 384,38 384,28 387,28 387,20 390,20 390,13 394,10 400,3 ' +
  '406,10 410,13 410,20 413,20 413,28 416,28 416,38 420,38 420,52 424,52 424,66 ' +
  '429,66 429,80 435,80 435,94 442,94 442,108 452,108 452,128';

const L_MED =
  '222,128 230,128 230,116 236,116 236,106 241,106 241,96 245,96 245,87 249,87 ' +
  '249,79 253,79 253,72 257,69 261,65 265,62 269,65 273,69 277,72 277,79 281,79 ' +
  '281,87 285,87 285,96 289,96 289,106 294,106 294,116 300,116 300,128';

// Mirror of L_MED around x=400: x → 800 - x
const R_MED =
  '500,128 506,128 506,116 511,116 511,106 515,106 515,96 519,96 519,87 523,87 ' +
  '523,79 527,79 527,72 531,69 535,65 539,62 543,65 547,69 551,72 551,79 555,79 ' +
  '555,87 559,87 559,96 563,96 563,106 568,106 568,116 574,116 574,128';

const L_SM =
  '114,128 122,128 122,118 126,118 126,110 130,110 130,102 134,102 134,95 137,95 ' +
  '137,89 141,86 145,83 149,80 153,83 157,86 161,89 161,95 164,95 164,102 168,102 ' +
  '168,110 172,110 172,118 176,118 176,128';

// Mirror of L_SM around x=400: x → 800 - x
const R_SM =
  '624,128 628,128 628,118 632,118 632,110 636,110 636,102 640,102 640,95 643,95 ' +
  '643,89 647,86 651,83 655,80 659,83 663,86 667,89 667,95 670,95 670,102 674,102 ' +
  '674,110 678,110 678,118 682,118 682,128';

export default function TempleSilhouette() {
  // Crenellations along the wall between/beside towers
  const CRENEL_XS = Array.from({ length: 38 }, (_, i) => 8 + i * 21)
    .filter(x => !(x > 110 && x < 186) && !(x > 220 && x < 302) && !(x > 336 && x < 454) && !(x > 498 && x < 578) && !(x > 622 && x < 698));

  return (
    <div className="temple-sil" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
      <svg
        viewBox="0 0 800 140"
        preserveAspectRatio="xMidYMax slice"
        style={{ width: '100%', height: '130px', display: 'block' }}
        aria-hidden="true" role="presentation"
      >
        {/* Platform wall base */}
        <rect x={0} y={125} width={800} height={15} fill={FILL} />

        {/* Crenellations / battlements on wall top */}
        {CRENEL_XS.map(x => (
          <rect key={x} x={x} y={116} width={10} height={9} fill={FILL} />
        ))}

        {/* Towers */}
        <polygon points={L_SM}    fill={FILL} />
        <polygon points={L_MED}   fill={FILL} />
        <polygon points={CENTRAL} fill={FILL} />
        <polygon points={R_MED}   fill={FILL} />
        <polygon points={R_SM}    fill={FILL} />

        {/* Arch cutouts (forest green = same as bg → "holes" in towers) */}
        {/* Central arch */}
        <rect    x={387} y={116} width={26} height={12} fill={FOREST} />
        <ellipse cx={400} cy={116} rx={13} ry={9}       fill={FOREST} />
        {/* Left med arch */}
        <rect    x={259} y={118} width={12} height={10} fill={FOREST} />
        <ellipse cx={265} cy={118} rx={6} ry={5}        fill={FOREST} />
        {/* Right med arch */}
        <rect    x={529} y={118} width={12} height={10} fill={FOREST} />
        <ellipse cx={535} cy={118} rx={6} ry={5}        fill={FOREST} />
        {/* Left small arch */}
        <rect    x={142} y={119} width={8}  height={9}  fill={FOREST} />
        <ellipse cx={146} cy={119} rx={4} ry={4}        fill={FOREST} />
        {/* Right small arch */}
        <rect    x={650} y={119} width={8}  height={9}  fill={FOREST} />
        <ellipse cx={654} cy={119} rx={4} ry={4}        fill={FOREST} />

        {/* Kalasha (pot) dots on main tower tip */}
        <circle cx={400} cy={3}  r={3.5} fill={FILL} opacity={.6} />
        <circle cx={265} cy={62} r={2.5} fill={FILL} opacity={.6} />
        <circle cx={535} cy={62} r={2.5} fill={FILL} opacity={.6} />
        <circle cx={149} cy={80} r={2}   fill={FILL} opacity={.6} />
        <circle cx={651} cy={80} r={2}   fill={FILL} opacity={.6} />

        {/* Subtle gold outline on central tower */}
        <polygon points={CENTRAL} fill="none"
          stroke="rgba(212,175,55,0.2)" strokeWidth={1} />
      </svg>
    </div>
  );
}
