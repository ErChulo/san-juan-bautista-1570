const islands = [
  { name:"Monito", slug:"monito", group:"Núcleo de Puerto Rico", lat:18.1589, lon:-67.9478, area:0.057, status:"Núcleo PR; inclusión insular no verificada literalmente en el video", confidence:"medio", note:"Extremo occidental del modelo. Islote satélite de Puerto Rico usado como punto inicial de la medición Monito–Dominica." },
  { name:"Mona", slug:"mona", group:"Núcleo de Puerto Rico", lat:18.0890, lon:-67.8925, area:22.010, status:"Núcleo PR; inclusión insular no verificada literalmente en el video", confidence:"medio", note:"Isla mayor del Pasaje de la Mona; forma parte del núcleo geográfico inmediato de Puerto Rico en esta reconstrucción." },
  { name:"Desecheo", slug:"desecheo", group:"Núcleo de Puerto Rico", lat:18.3838, lon:-67.4806, area:0.589, status:"Núcleo PR; inclusión insular no verificada literalmente en el video", confidence:"medio", note:"Islote al oeste de la isla principal, incluido como parte del núcleo geográfico puertorriqueño." },
  { name:"Puerto Rico", slug:"puerto-rico", group:"Núcleo de Puerto Rico", lat:18.2000, lon:-66.4500, area:3424.320, status:"Núcleo documentado de la diócesis de San Juan", confidence:"alto", note:"Centro territorial y sede episcopal de San Juan. Es la unidad dominante por superficie del modelo." },
  { name:"Vieques", slug:"vieques", group:"Núcleo de Puerto Rico", lat:18.1234, lon:-65.4415, area:50.190, status:"Núcleo PR; inclusión insular no verificada literalmente en el video", confidence:"medio", note:"Isla al este de Puerto Rico, tratada aquí como parte del núcleo insular inmediato." },
  { name:"Culebra", slug:"culebra", group:"Núcleo de Puerto Rico", lat:18.3153, lon:-65.2891, area:10.810, status:"Núcleo PR; inclusión insular no verificada literalmente en el video", confidence:"medio", note:"Isla nororiental del núcleo puertorriqueño, próxima al arco de las Vírgenes." },
  { name:"Santa Cruz", slug:"santa-cruz", alt:"St. Croix", group:"Islas Vírgenes", lat:17.7330, lon:-64.7683, area:84.000, status:"Islas Vírgenes; estatus documental sensible a fecha", confidence:"condicional", note:"La evidencia archivística obliga a tratar su anexión con cautela; su estatus exacto debe vincularse a documentos fechados." },
  { name:"Santo Tomás", slug:"santo-tomas", alt:"St. Thomas", group:"Islas Vírgenes", lat:18.3400, lon:-64.9300, area:32.000, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"Incluida bajo la interpretación operativa de la extensión episcopal desde las Vírgenes hasta Dominica." },
  { name:"San Juan", slug:"san-juan-virgenes", alt:"St. John", group:"Islas Vírgenes", lat:18.3406, lon:-64.7464, area:20.000, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"No confundir con San Juan de Puerto Rico; corresponde a St. John, en el grupo de las Islas Vírgenes." },
  { name:"Jost Van Dyke", slug:"jost-van-dyke", group:"Islas Vírgenes", lat:18.4465, lon:-64.7466, area:3.090, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"Pequeña isla del grupo de las Vírgenes, incorporada para representar el arco insular principal." },
  { name:"Tortola", slug:"tortola", group:"Islas Vírgenes", lat:18.4236, lon:-64.6260, area:21.510, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"Isla principal de las actuales Islas Vírgenes Británicas, incluida en el conjunto operativo de Vírgenes." },
  { name:"Virgin Gorda", slug:"virgin-gorda", group:"Islas Vírgenes", lat:18.4759, lon:-64.3995, area:8.190, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"Componente oriental relevante del grupo de las Vírgenes." },
  { name:"Anegada", slug:"anegada", group:"Islas Vírgenes", lat:18.7274, lon:-64.3378, area:14.670, status:"Islas Vírgenes; inclusión condicional", confidence:"condicional", note:"Punto más septentrional entre los centroides del modelo; por eso Monito no debe describirse como el extremo norte." },
  { name:"Anguilla", slug:"anguilla", group:"Arco intermedio", lat:18.2206, lon:-63.0686, area:35.140, status:"Intermedia; interpolación geográfica condicional", confidence:"condicional", note:"Incluida por continuidad geográfica entre las Vírgenes y Dominica, no por una lista insular primaria recuperada para 1570." },
  { name:"Saint-Martin / Sint Maarten", slug:"saint-martin-sint-maarten", group:"Arco intermedio", lat:18.0600, lon:-63.0600, area:33.670, status:"Intermedia; estatus documental sensible a fecha", confidence:"condicional", note:"El inventario archivístico menciona solicitudes de anexión; por eso su inclusión debe entenderse como escenario de trabajo." },
  { name:"Saint-Barthélemy", slug:"saint-barthelemy", group:"Arco intermedio", lat:17.9016, lon:-62.8293, area:9.650, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Isla intermedia incluida por continuidad del arco insular hasta Dominica." },
  { name:"Saba", slug:"saba", group:"Arco intermedio", lat:17.6314, lon:-63.2377, area:5.020, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Pequeña isla volcánica del arco septentrional, incluida condicionalmente." },
  { name:"Sint Eustatius", slug:"sint-eustatius", group:"Arco intermedio", lat:17.4904, lon:-62.9762, area:8.110, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Incluida como eslabón geográfico del arco de las Antillas Menores." },
  { name:"Saint Kitts", slug:"saint-kitts", group:"Arco intermedio", lat:17.3398, lon:-62.7657, area:64.900, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Isla mayor del par Saint Kitts–Nevis, incluida por interpolación geográfica." },
  { name:"Nevis", slug:"nevis", group:"Arco intermedio", lat:17.1508, lon:-62.5867, area:35.900, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Segunda isla del par Saint Kitts–Nevis; su inclusión es geográfica, no una enumeración primaria fechada en 1570." },
  { name:"Barbuda", slug:"barbuda", group:"Barlovento septentrional", lat:17.6333, lon:-61.8000, area:62.000, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Componente septentrional del conjunto Antigua–Barbuda dentro del arco de Barlovento." },
  { name:"Antigua", slug:"antigua", group:"Barlovento septentrional", lat:17.0773, lon:-61.7993, area:108.500, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Unidad insular principal de Antigua y Barbuda, incluida en el escenario continuo hacia Dominica." },
  { name:"Redonda", slug:"redonda", group:"Barlovento septentrional", lat:16.9383, lon:-62.3455, area:0.620, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Islote pequeño cuya contribución a la suma de área es mínima, aunque ayuda a representar el arco insular." },
  { name:"Montserrat", slug:"montserrat", group:"Barlovento septentrional", lat:16.7391, lon:-62.1893, area:39.380, status:"Intermedia; inclusión condicional", confidence:"condicional", note:"Isla volcánica situada al norte del conjunto de Guadalupe." },
  { name:"Basse-Terre", slug:"basse-terre", group:"Guadalupe", lat:16.1500, lon:-61.7200, area:327.400, status:"Guadalupe; inclusión condicional", confidence:"condicional", note:"Mitad occidental de la isla mariposa de Guadalupe; una de las unidades de mayor área del modelo." },
  { name:"Grande-Terre", slug:"grande-terre", group:"Guadalupe", lat:16.3263, lon:-61.4281, area:226.500, status:"Guadalupe; inclusión condicional", confidence:"condicional", note:"Mitad oriental del principal conjunto de Guadalupe." },
  { name:"La Désirade", slug:"la-desirade", group:"Guadalupe", lat:16.3100, lon:-61.0500, area:8.270, status:"Guadalupe; inclusión condicional", confidence:"condicional", note:"Es el punto más oriental entre los centroides del modelo, por lo que Dominica no es literalmente el extremo oriental." },
  { name:"Marie-Galante", slug:"marie-galante", group:"Guadalupe", lat:15.9319, lon:-61.2687, area:61.000, status:"Guadalupe; inclusión condicional", confidence:"condicional", note:"Isla meridional del conjunto de Guadalupe, próxima a Dominica." },
  { name:"Terre-de-Haut", slug:"terre-de-haut", group:"Les Saintes / Guadalupe", lat:15.8670, lon:-61.5830, area:2.010, status:"Les Saintes; inclusión condicional", confidence:"condicional", note:"Una de las dos principales islas de Les Saintes, al sur de Basse-Terre." },
  { name:"Terre-de-Bas", slug:"terre-de-bas", group:"Les Saintes / Guadalupe", lat:15.8500, lon:-61.6500, area:2.630, status:"Les Saintes; inclusión condicional", confidence:"condicional", note:"Segunda unidad principal de Les Saintes en la reconstrucción." },
  { name:"Dominica", slug:"dominica", group:"Extremo meridional", lat:15.4347, lon:-61.3502, area:289.500, status:"Extremo meridional; término explícito de la síntesis secundaria", confidence:"medio", note:"Extremo meridional explícito del escenario. Monito–Dominica resulta además ser la pareja de centroides más distante del modelo." }
];

const sources = [
  { type:"Video", title:"Video de referencia: jurisdicción de Puerto Rico en 1570", url:"https://www.youtube.com/watch?v=ez03o2q7pr4", text:"Punto de partida narrativo del proyecto. La investigación pudo verificar el año 1570 y el tema general, pero no recuperar una transcripción completa minuto a minuto." },
  { type:"Fuente académica", title:"Academia Puertorriqueña de la Historia — estudio sobre el archivo de Vicente Murga", url:"https://academiaprhistoria.org/wp-content/uploads/2019/11/1985-01-01.pdf", text:"Corrobora el crecimiento histórico del obispado de San Juan mediante territorios agregados desde tiempos de Alonso Manso y su permanencia bajo jurisdicción episcopal de Puerto Rico hasta la creación posterior de nuevas sedes." },
  { type:"Archivo / proyecto", title:"Centro de Investigaciones Históricas UPR / Rutgers — noticias sobre el archivo Murga", url:"https://prac.rutgers.edu/noticias-del-cih-upr/", text:"Menciona documentación sobre anexiones y solicitudes relacionadas con Santa Cruz, San Martín y otras islas; sustenta el tratamiento prudente de casos sensibles a fecha." },
  { type:"Cartografía", title:"Library of Congress — Map of Lesser Antilles, ca. 1650", url:"https://www.loc.gov/item/99443222/", text:"Cartografía histórica posterior a 1570 útil como contexto visual. No se utiliza como frontera catastral de 1570 ni para medir superficies." },
  { type:"Cartografía", title:"Library of Congress — Hispaniola and Puerto Rico, ca. 1639", url:"https://www.loc.gov/item/2003623402/", text:"Mapa histórico de Puerto Rico e Hispaniola; sirve como referencia cartográfica contextual, no como fuente de áreas modernas." }
];

const KM2_PER_MI2 = 2.589988110336;
const explicitArea = islands.reduce((sum, d) => sum + d.area, 0);
const adjustedArea = 5029;

function degToRad(d){ return d * Math.PI / 180; }
function radToDeg(r){ return r * 180 / Math.PI; }

// Vincenty inverse solution on WGS-84. Returns kilometers.
function vincentyKm(a, b) {
  const A = 6378137.0;
  const F = 1 / 298.257223563;
  const B = (1 - F) * A;
  const phi1 = degToRad(a.lat), phi2 = degToRad(b.lat);
  const L = degToRad(b.lon - a.lon);
  const U1 = Math.atan((1 - F) * Math.tan(phi1));
  const U2 = Math.atan((1 - F) * Math.tan(phi2));
  const sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
  const sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);
  let lambda = L, prev, iter = 0;
  let sinSigma, cosSigma, sigma, sinAlpha, cosSqAlpha, cos2SigmaM;
  do {
    const sinLambda = Math.sin(lambda), cosLambda = Math.cos(lambda);
    const t1 = cosU2 * sinLambda;
    const t2 = cosU1 * sinU2 - sinU1 * cosU2 * cosLambda;
    sinSigma = Math.sqrt(t1*t1 + t2*t2);
    if (sinSigma === 0) return 0;
    cosSigma = sinU1*sinU2 + cosU1*cosU2*cosLambda;
    sigma = Math.atan2(sinSigma, cosSigma);
    sinAlpha = cosU1*cosU2*sinLambda / sinSigma;
    cosSqAlpha = 1 - sinAlpha*sinAlpha;
    cos2SigmaM = cosSqAlpha === 0 ? 0 : cosSigma - (2*sinU1*sinU2/cosSqAlpha);
    const C = F/16*cosSqAlpha*(4+F*(4-3*cosSqAlpha));
    prev = lambda;
    lambda = L + (1-C)*F*sinAlpha*(sigma + C*sinSigma*(cos2SigmaM + C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));
  } while (Math.abs(lambda-prev) > 1e-12 && ++iter < 200);
  const uSq = cosSqAlpha * (A*A - B*B)/(B*B);
  const bigA = 1 + uSq/16384*(4096 + uSq*(-768 + uSq*(320 - 175*uSq)));
  const bigB = uSq/1024*(256 + uSq*(-128 + uSq*(74 - 47*uSq)));
  const deltaSigma = bigB*sinSigma*(cos2SigmaM + bigB/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM) - bigB/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));
  return B*bigA*(sigma-deltaSigma)/1000;
}

function haversineKm(a,b){
  const R = 6371.0088;
  const p1 = degToRad(a.lat), p2 = degToRad(b.lat);
  const dp = degToRad(b.lat-a.lat), dl = degToRad(b.lon-a.lon);
  const h = Math.sin(dp/2)**2 + Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}

const monito = islands[0], dominica = islands[islands.length-1];
const directKm = vincentyKm(monito, dominica);
const directMiles = directKm / 1.609344;
const directSphereMiles = haversineKm(monito, dominica) / 1.609344;
const routeKm = islands.slice(1).reduce((sum, d, i) => sum + vincentyKm(islands[i], d), 0);
const routeMiles = routeKm / 1.609344;

function fmt(n, digits=1){ return n.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits }); }
function fmtSmart(n){ return n >= 100 ? fmt(n,1) : n >= 10 ? fmt(n,2) : fmt(n,3); }
function esc(s){ return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function project(lat, lon, width=720, height=500, pad=48){
  const minLon=-68.2, maxLon=-60.8, minLat=15.15, maxLat=18.95;
  const x = pad + (lon-minLon)/(maxLon-minLon)*(width-2*pad);
  const y = pad + (maxLat-lat)/(maxLat-minLat)*(height-2*pad);
  return [x,y];
}

function greatCirclePoints(a,b,n=80){
  const p1=degToRad(a.lat), l1=degToRad(a.lon), p2=degToRad(b.lat), l2=degToRad(b.lon);
  const d=2*Math.asin(Math.sqrt(Math.sin((p2-p1)/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin((l2-l1)/2)**2));
  const pts=[];
  for(let i=0;i<=n;i++){
    const f=i/n;
    const A=Math.sin((1-f)*d)/Math.sin(d), B=Math.sin(f*d)/Math.sin(d);
    const x=A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2);
    const y=A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2);
    const z=A*Math.sin(p1)+B*Math.sin(p2);
    pts.push({lat:radToDeg(Math.atan2(z,Math.sqrt(x*x+y*y))), lon:radToDeg(Math.atan2(y,x))});
  }
  return pts;
}

function mapSvg({highlight=null, compact=false}={}){
  const W=720,H=500;
  const gridLons=[-68,-67,-66,-65,-64,-63,-62,-61];
  const gridLats=[15.5,16,16.5,17,17.5,18,18.5];
  const routePts=islands.map(d=>project(d.lat,d.lon,W,H));
  const gc=greatCirclePoints(monito,dominica).map(d=>project(d.lat,d.lon,W,H));
  const poly=routePts.map(p=>p.join(',')).join(' ');
  const gcp=gc.map(p=>p.join(',')).join(' ');
  const labels = compact ? new Set(["Monito","Puerto Rico","Anegada","Antigua","Basse-Terre","Dominica"]) : new Set(["Monito","Puerto Rico","Anegada","Anguilla","Saint Kitts","Antigua","Basse-Terre","Dominica"]);
  const landShapes = [
    `<path d="M45 172c50-38 122-46 172-19 26 14 28 41-6 54-56 21-126 19-166-6-19-12-18-20 0-29z" fill="#b8c6a5" opacity=".64"/>`,
    `<path d="M392 82c40-17 76-12 103 4 17 10 16 24-3 31-38 13-76 8-99-4-14-8-14-23-1-31z" fill="#c9d1b2" opacity=".5"/>`,
    `<path d="M531 262c33-11 68-3 78 14 8 13-4 28-28 30-27 2-61-9-65-23-3-9 3-17 15-21z" fill="#b6c59f" opacity=".54"/>`
  ].join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa esquemático de las islas incluidas entre Monito y Dominica">
    <rect width="${W}" height="${H}" fill="#e8dfcf"/>
    ${landShapes}
    ${gridLons.map(l=>{const [x]=project(17,l,W,H);return `<line class="map-grid" x1="${x}" y1="32" x2="${x}" y2="468"/><text class="map-axis" x="${x+3}" y="485">${Math.abs(l)}°O</text>`}).join('')}
    ${gridLats.map(l=>{const [,y]=project(l,-64,W,H);return `<line class="map-grid" x1="34" y1="${y}" x2="686" y2="${y}"/><text class="map-axis" x="7" y="${y+3}">${l}°N</text>`}).join('')}
    <polyline class="map-route" points="${poly}"/>
    <polyline class="map-geodesic" points="${gcp}"/>
    ${islands.map((d,i)=>{const [x,y]=routePts[i]; const isH=highlight===d.slug; const isEnd=d.slug==='monito'||d.slug==='dominica'; return `<g><a href="/isla/${d.slug}" data-link aria-label="${esc(d.name)}"><circle class="map-point" cx="${x}" cy="${y}" r="${isH?8:isEnd?5.6:3.4}" fill="${isH?'#c96f49':isEnd?'#c96f49':'#26515c'}" stroke="#f4eee2" stroke-width="${isH?3:1.5}" opacity="${highlight && !isH ? .46 : 1}"/></a>${labels.has(d.name)?`<text class="map-label" x="${x+7}" y="${y-7}">${esc(d.name)}</text>`:''}</g>`}).join('')}
    <g transform="translate(48 36)"><rect width="232" height="52" rx="14" fill="#f7f2e8" opacity=".94"/><line x1="14" y1="17" x2="52" y2="17" stroke="#c96f49" stroke-width="3" stroke-dasharray="6 7"/><text x="62" y="20" class="map-label">Geodésica Monito–Dominica</text><line x1="14" y1="36" x2="52" y2="36" stroke="rgba(38,81,92,.45)"/><text x="62" y="39" class="map-label">Ruta insular analítica</text></g>
  </svg>`;
}

function shell(content, current=""){
  return `<div class="site-shell">
    <header class="topbar">
      <nav class="nav" aria-label="Navegación principal">
        <a class="brand" href="/" data-link aria-label="Inicio">
          <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M4 20c6-10 16-14 24-8-4 2-6 5-7 10-7-3-12-2-17 2z" fill="#d2b58b"/><circle cx="23" cy="8" r="3" fill="#c96f49"/></svg></span>
          <span>San Juan Bautista · 1570</span>
        </a>
        <div class="nav-links">
          <a class="nav-link" href="/" data-link ${current==='home'?'aria-current="page"':''}>Archipiélago</a>
          <a class="nav-link" href="/islas" data-link ${current==='islands'?'aria-current="page"':''}>Islas</a>
          <a class="nav-link" href="/metodologia" data-link ${current==='method'?'aria-current="page"':''}>Método</a>
        </div>
      </nav>
    </header>
    <main>${content}</main>
    <footer class="footer"><div class="footer-inner"><div><strong>San Juan Bautista del Boriquén en 1570</strong><p>Proyecto cartográfico divulgativo complementario al video de referencia. Las superficies son proxies terrestres modernas; la adscripción histórica exacta de varias islas permanece condicional.</p></div><p><a href="https://www.youtube.com/watch?v=ez03o2q7pr4" target="_blank" rel="noreferrer">Ver video ↗</a></p></div></footer>
  </div>`;
}

function homePage(){
  return shell(`
    <section class="hero"><div class="hero-inner">
      <div>
        <div class="eyebrow">Reconstrucción histórico-geográfica</div>
        <h1>San Juan Bautista <span>del Boriquén</span> en 1570</h1>
        <p class="hero-lede">¿Qué tan extensa era la jurisdicción vinculada a Puerto Rico en el siglo XVI? Esta experiencia traduce la pregunta del video a un modelo cartográfico reproducible: isla por isla, área por área y con una medición geodésica corregida por la curvatura terrestre.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="#resultados">Ver los resultados</a><a class="btn btn-ghost" href="/islas" data-link>Explorar 31 islas</a></div>
      </div>
      <div class="map-card">${mapSvg({compact:true})}</div>
    </div></section>

    <section class="section" id="resultados">
      <div class="section-kicker">La respuesta numérica</div>
      <h2 class="section-title">Una jurisdicción insular de escala regional</h2>
      <p class="section-intro">El modelo suma las principales unidades insulares desde el núcleo de Puerto Rico hasta Dominica. La cifra exacta de la tabla y la cifra ajustada responden a preguntas distintas: la primera suma sólo las 31 unidades explícitas; la segunda absorbe cayos e islotes menores omitidos.</p>
      <div class="metric-grid">
        <div class="metric-card featured"><strong>${fmt(explicitArea,3)}</strong><span>mi² · suma explícita de 31 unidades</span></div>
        <div class="metric-card"><strong>≈${fmt(adjustedArea,0)}</strong><span>mi² · estimación ajustada con cayos menores</span></div>
        <div class="metric-card"><strong>${fmt(directMiles,1)}</strong><span>mi · geodésica WGS-84 Monito → Dominica</span></div>
        <div class="metric-card"><strong>${fmt(routeMiles,1)}</strong><span>mi · ruta acumulada por los 31 centroides</span></div>
      </div>
      <div class="callout"><strong>Corrección cardinal importante.</strong> Monito es el extremo occidental del modelo, pero Anegada está más al norte. Dominica es el extremo meridional, pero La Désirade está más al este. Aun así, Monito–Dominica es la pareja de centroides más separada del conjunto y por eso funciona bien como diámetro lineal.</div>
    </section>

    <section class="section section-tight"><div class="two-col">
      <div class="panel"><div class="section-kicker">Qué significa “jurisdicción”</div><h3>La evidencia apunta sobre todo a una jurisdicción episcopal</h3><p>La lectura más prudente no es la de una provincia civil homogénea administrada efectivamente desde San Juan. La reconstrucción se apoya en la expansión histórica del obispado de San Juan y en una síntesis que sitúa la extensión hacia las islas de Barlovento hasta Dominica.</p></div>
      <div class="panel"><div class="section-kicker">Qué NO significa el área</div><h3>No es un catastro de 1570</h3><p>Las áreas son superficies terrestres modernas usadas como proxy físico. La incertidumbre histórica —qué islas estaban anexadas exactamente en esa fecha— es mayor que el error matemático de la distancia geodésica.</p></div>
    </div></section>

    <section class="section">
      <div class="section-kicker">Curvatura terrestre</div>
      <h2 class="section-title">De Monito a Dominica sobre el elipsoide WGS-84</h2>
      <p class="section-intro">La medición principal usa una solución geodésica elipsoidal de Vincenty. Como control, se calcula también la distancia de gran círculo sobre una esfera de radio medio terrestre.</p>
      <div class="two-col" style="margin-top:30px">
        <div class="panel"><h3>Resultado elipsoidal</h3><p><strong style="font-family:Georgia,serif;font-size:2.3rem;color:var(--ink)">${fmt(directMiles,3)} mi</strong><br>${fmt(directKm,3)} km sobre WGS-84.</p><div class="formula">a = 6,378,137 m\nf = 1 / 298.257223563\nb = (1 − f)a\n\nVincenty⁻¹(Monito, Dominica)\n= ${fmt(directMiles,3)} mi</div></div>
        <div class="panel"><h3>Control esférico</h3><p><strong style="font-family:Georgia,serif;font-size:2.3rem;color:var(--ink)">${fmt(directSphereMiles,3)} mi</strong><br>La diferencia frente al elipsoide es de sólo ${fmt(Math.abs(directMiles-directSphereMiles),3)} mi.</p><div class="formula">h = sin²(Δφ/2) + cos φ₁ cos φ₂ sin²(Δλ/2)\nc = 2 asin(√h)\nd = Rc</div></div>
      </div>
    </section>

    <section class="section">
      <div class="section-kicker">Explorar la cadena insular</div>
      <h2 class="section-title">31 páginas, una por isla</h2>
      <p class="section-intro">Cada ficha conserva la misma estructura: posición, superficie, papel en la reconstrucción de 1570, nivel de cautela documental y ubicación dentro de la cadena.</p>
      ${islandBrowser(false)}
    </section>

    <section class="section"><div class="section-kicker">Video original</div><h2 class="section-title">El punto de partida de la pregunta</h2><p class="section-intro">El sitio está concebido como complemento del video: mantiene la pregunta histórica, pero separa los hechos documentales de las inferencias geográficas y hace explícitos los cálculos.</p><div class="video-wrap" style="margin-top:30px"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/ez03o2q7pr4" title="Video de referencia sobre la jurisdicción de Puerto Rico en 1570" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></section>
  `,"home");
}

function islandBrowser(showTable=true){
  return `<div class="island-browser">
    <div class="search-row"><div class="search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="island-search" class="search-input" type="search" placeholder="Buscar isla o grupo…" autocomplete="off" aria-label="Buscar isla" /></div></div>
    <div id="island-grid" class="island-grid">${islandCards(islands)}</div>
    ${showTable?`<div id="table-wrap">${islandTable(islands)}</div>`:''}
  </div>`;
}

function islandCards(rows){
  return rows.map((d,i)=>`<a class="island-card" style="--shape-rotate:${(i*17)%80-25}deg" href="/isla/${d.slug}" data-link><span class="index">${String(islands.indexOf(d)+1).padStart(2,'0')}</span><span class="area">${fmtSmart(d.area)} mi²</span><h3>${esc(d.name)}</h3><p>${esc(d.group)}</p></a>`).join('');
}
function islandTable(rows){
  return `<div class="data-table-wrap"><table><thead><tr><th>#</th><th>Isla</th><th>Grupo</th><th>Lat.</th><th>Lon.</th><th>Área mi²</th><th>Área km²</th><th>Estatus 1570</th></tr></thead><tbody>${rows.map(d=>`<tr><td>${islands.indexOf(d)+1}</td><td><a class="table-link" href="/isla/${d.slug}" data-link>${esc(d.name)}</a></td><td>${esc(d.group)}</td><td>${d.lat.toFixed(4)}°N</td><td>${Math.abs(d.lon).toFixed(4)}°O</td><td>${fmtSmart(d.area)}</td><td>${fmtSmart(d.area*KM2_PER_MI2)}</td><td>${esc(d.status)}</td></tr>`).join('')}</tbody></table></div>`;
}

function islandsPage(){
  return shell(`<section class="page-hero"><div class="page-hero-inner"><div class="eyebrow">Índice insular</div><h1>Las islas del modelo</h1><p class="subtitle">Treinta y una unidades insulares ordenadas de oeste a sur, desde Monito hasta Dominica. La lista es una reconstrucción operativa, no una transcripción de una cédula insular de 1570.</p></div></section><section class="section section-tight">${islandBrowser(true)}</section>`,"islands");
}

function islandPage(slug){
  const d=islands.find(x=>x.slug===slug); if(!d) return notFound();
  const i=islands.indexOf(d), prev=islands[i-1], next=islands[i+1];
  const km2=d.area*KM2_PER_MI2;
  const distFromMonito=vincentyKm(monito,d)/1.609344;
  return shell(`
    <section class="page-hero"><div class="page-hero-inner">
      <div class="breadcrumbs"><a href="/" data-link>Archipiélago</a><span>›</span><a href="/islas" data-link>Islas</a><span>›</span><span>${esc(d.name)}</span></div>
      <h1>${esc(d.name)}</h1>
      <p class="subtitle">${esc(d.note)}</p>
      <div class="tag-row"><span class="tag">${esc(d.group)}</span>${d.alt?`<span class="tag">También: ${esc(d.alt)}</span>`:''}<span class="tag">Ficha ${i+1} de ${islands.length}</span></div>
    </div></section>
    <section class="section section-tight">
      <div class="fact-grid"><div class="fact"><span class="label">Área</span><strong>${fmtSmart(d.area)} mi²</strong></div><div class="fact"><span class="label">Área métrica</span><strong>${fmtSmart(km2)} km²</strong></div><div class="fact"><span class="label">Latitud</span><strong>${d.lat.toFixed(4)}°N</strong></div><div class="fact"><span class="label">Longitud</span><strong>${Math.abs(d.lon).toFixed(4)}°O</strong></div></div>
    </section>
    <section class="section section-tight"><div class="two-col">
      <div><div class="section-kicker">Ubicación regional</div><h2 class="section-title">${esc(d.name)} dentro de la cadena</h2><p class="section-intro">La línea naranja representa la geodésica Monito–Dominica; la gris sigue el orden analítico isla por isla. Esta ficha resalta la posición del centroide utilizado para los cálculos.</p><div class="panel" style="margin-top:24px"><h3>Distancia desde Monito</h3><p><strong style="font-family:Georgia,serif;font-size:2.2rem;color:var(--ink)">${fmt(distFromMonito,1)} mi</strong><br>medidas sobre WGS-84 entre centroides representativos.</p></div></div>
      <div class="island-map-panel">${mapSvg({highlight:d.slug, compact:true})}</div>
    </div></section>
    <section class="section section-tight"><div class="status-card" data-level="${d.confidence}"><h3>Papel en la reconstrucción de 1570</h3><p><strong>${esc(d.status)}.</strong> ${d.confidence==='alto'?'Su relación con la sede de San Juan es el anclaje más sólido del modelo.':d.confidence==='medio'?'La inclusión es razonable dentro del marco histórico general, pero conviene no presentarla como una enumeración literal sin el instrumento primario correspondiente.':'La inclusión es condicional y depende de interpretar de forma continua el arco geográfico; la documentación disponible no autoriza a tratarla como una certeza insular individual para 1570.'}</p></div></section>
    <section class="section section-tight"><div class="two-col"><div class="panel"><h3>Cómo leer el área</h3><p>${fmtSmart(d.area)} mi² (${fmtSmart(km2)} km²) es una superficie terrestre moderna utilizada como proxy geográfico. No pretende representar una medición de costa efectuada en 1570.</p></div><div class="panel"><h3>Por qué importa</h3><p>${d.area>250?'Es una de las unidades que más pesan en el total de área terrestre del modelo.':d.area<1?'Su efecto sobre el área total es mínimo; su valor es sobre todo cartográfico y topológico dentro de la cadena insular.':'Aporta una fracción intermedia del área y ayuda a representar la continuidad física del arco insular.'}</p></div></div>
      <div class="prev-next">${prev?`<a href="/isla/${prev.slug}" data-link><small>← Isla anterior</small><strong>${esc(prev.name)}</strong></a>`:'<span></span>'}${next?`<a class="next" href="/isla/${next.slug}" data-link><small>Isla siguiente →</small><strong>${esc(next.name)}</strong></a>`:'<a class="next" href="/" data-link><small>Volver al</small><strong>Archipiélago</strong></a>'}</div>
    </section>
  `,"islands");
}

function methodologyPage(){
  return shell(`
    <section class="page-hero"><div class="page-hero-inner"><div class="eyebrow">Metodología y fuentes</div><h1>Cómo se construyó el modelo</h1><p class="subtitle">La prioridad es separar tres capas: lo que está documentado históricamente, lo que se infiere para construir una lista operativa y lo que se calcula matemáticamente con geografía moderna.</p></div></section>
    <section class="section">
      <div class="section-kicker">Proceso</div><h2 class="section-title">De una afirmación histórica a una cifra reproducible</h2>
      <div class="method-grid"><div class="method-step"><span class="num">01 · HISTORIA</span><h3>Definir el alcance</h3><p>Se interpreta “jurisdicción” principalmente como jurisdicción eclesiástica del obispado de San Juan, con fecha de corte en 1570.</p></div><div class="method-step"><span class="num">02 · GEOGRAFÍA</span><h3>Construir la lista</h3><p>Se incluyen el núcleo de Puerto Rico, las principales Islas Vírgenes y las principales unidades del arco hasta Dominica. Los casos no demostrados individualmente quedan marcados como condicionales.</p></div><div class="method-step"><span class="num">03 · CÁLCULO</span><h3>Medir y sumar</h3><p>Se suman áreas terrestres modernas y se usa WGS-84 para las distancias entre centroides. La cifra ajustada agrega un pequeño residuo por cayos menores no enumerados.</p></div></div>
    </section>
    <section class="section section-tight"><div class="two-col"><div class="panel"><h3>Área total explícita</h3><div class="formula">A = Σᵢ Aᵢ\n  = ${islands.map(d=>d.area.toFixed(3)).slice(0,7).join(' + ')} + …\n  = ${explicitArea.toFixed(3)} mi²</div></div><div class="panel"><h3>Distancia principal</h3><div class="formula">d = Vincenty⁻¹[(18.1589, −67.9478),\n              (15.4347, −61.3502)]\n  = ${directMiles.toFixed(3)} mi\n  = ${directKm.toFixed(3)} km</div></div></div></section>
    <section class="section"><div class="section-kicker">Fuentes de trabajo</div><h2 class="section-title">Qué respalda la reconstrucción</h2><p class="section-intro">La cartografía histórica se usa como contexto visual, no como una geometría catastral exacta. El mayor foco de incertidumbre no es la matemática sino la adscripción insular precisa en 1570.</p><div class="source-list">${sources.map(s=>`<article class="source-item"><div class="source-type">${esc(s.type)}</div><div><h3><a href="${s.url}" target="_blank" rel="noreferrer">${esc(s.title)} ↗</a></h3><p>${esc(s.text)}</p></div></article>`).join('')}</div></section>
    <section class="section section-tight"><div class="callout"><strong>Principio de lectura.</strong> “≈5,030 mi²” es una estimación geográfica condicional; no debe citarse como si fuera una superficie territorial oficial medida en 1570. La precisión de la geodesia moderna supera la precisión documental de la premisa histórica.</div></section>
  `,"method");
}

function notFound(){ return shell(`<section class="not-found"><div><div class="eyebrow" style="color:var(--terracotta);justify-content:center">Ruta no encontrada</div><h1>404</h1><p>La página solicitada no existe en este atlas.</p><a class="btn" style="background:var(--ocean);color:white" href="/" data-link>Volver al archipiélago</a></div></section>`); }

function usesHashRouting(){
  return location.protocol==='file:' || location.hostname.endsWith('github.io');
}
function currentRoute(){
  if(usesHashRouting()) return location.hash.startsWith('#/') ? decodeURI(location.hash.slice(1).replace(/\/$/,'')||'/') : '/';
  return decodeURI(location.pathname.replace(/\/$/,'')||'/');
}

function render(){
  const path=currentRoute();
  let html;
  if(path==='/') html=homePage();
  else if(path==='/islas') html=islandsPage();
  else if(path==='/metodologia') html=methodologyPage();
  else if(path.startsWith('/isla/')) html=islandPage(path.split('/')[2]);
  else html=notFound();
  document.querySelector('#app').innerHTML=html;
  wire();
  window.scrollTo({top:0,behavior:'instant'});
}

function navigate(href){
  if(usesHashRouting()){ location.hash = '#' + href; return; }
  history.pushState({},'',href); render();
}
function wire(){
  document.querySelectorAll('[data-link]').forEach(a=>a.addEventListener('click',e=>{ if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return; e.preventDefault(); navigate(a.getAttribute('href')); }));
  const input=document.querySelector('#island-search');
  if(input){ input.addEventListener('input',()=>{ const q=input.value.trim().toLowerCase(); const rows=islands.filter(d=>`${d.name} ${d.alt||''} ${d.group}`.toLowerCase().includes(q)); const grid=document.querySelector('#island-grid'); if(grid) grid.innerHTML=islandCards(rows)||'<p>No se encontraron islas.</p>'; const table=document.querySelector('#table-wrap'); if(table) table.innerHTML=islandTable(rows); wire(); }); }
}

window.addEventListener('popstate',render);
window.addEventListener('hashchange',render);
render();
