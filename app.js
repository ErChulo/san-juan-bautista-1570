const islands = [
  { name:"Monito", slug:"monito", group:"Núcleo de Puerto Rico", lat:18.1589, lon:-67.9478, area:0.057, status:"Extremo occidental usado por el video y por este cálculo", confidence:"medio", note:"Se conserva como punto de partida geográfico del recorrido Monito–Dominica." },
  { name:"Mona", slug:"mona", group:"Núcleo de Puerto Rico", lat:18.0890, lon:-67.8925, area:22.010, status:"Núcleo insular de Puerto Rico", confidence:"medio", note:"Unidad moderna incluida para representar físicamente el núcleo occidental del archipiélago puertorriqueño." },
  { name:"Desecheo", slug:"desecheo", group:"Núcleo de Puerto Rico", lat:18.3838, lon:-67.4806, area:0.589, status:"Núcleo insular de Puerto Rico", confidence:"medio", note:"Islote del entorno inmediato de Puerto Rico; su área moderna se usa como proxy físico." },
  { name:"Puerto Rico", slug:"puerto-rico", group:"Núcleo de Puerto Rico", lat:18.2000, lon:-66.4500, area:3424.320, status:"Sede del obispado de San Juan", confidence:"alto", note:"Centro de la jurisdicción eclesiástica que el video resume y que las fuentes históricas documentan." },
  { name:"Vieques", slug:"vieques", group:"Núcleo de Puerto Rico", lat:18.1234, lon:-65.4415, area:50.190, status:"Núcleo insular de Puerto Rico", confidence:"medio", note:"Se representa como parte del núcleo geográfico puertorriqueño para el cálculo de superficie." },
  { name:"Culebra", slug:"culebra", group:"Núcleo de Puerto Rico", lat:18.3153, lon:-65.2891, area:10.810, status:"Núcleo insular de Puerto Rico", confidence:"medio", note:"Unidad moderna próxima al arco de las Vírgenes." },
  { name:"Santa Cruz", slug:"santa-cruz", alt:"St. Croix", group:"Arco oriental", lat:17.7330, lon:-64.7683, area:84.000, status:"Nombrada en la documentación de anexión de 1519", confidence:"alto", note:"PARES registra Santa Cruz entre las islas cuya anexión al obispado de San Juan se solicitó en 1519." },
  { name:"Islas Vírgenes", slug:"islas-virgenes", group:"Arco oriental", lat:18.4300, lon:-64.5700, area:99.460, status:"Grupo nombrado en la documentación de 1519", confidence:"alto", note:"Se cuenta como una sola unidad narrativa, siguiendo la forma agrupada de las fuentes; el área suma las principales islas modernas del grupo usadas en la versión técnica." },
  { name:"Anguilla", slug:"anguilla", group:"Arco oriental", lat:18.2206, lon:-63.0686, area:35.140, status:"Normalización geográfica moderna", confidence:"condicional", note:"Sirve para representar la continuidad física del arco. La equivalencia exacta entre algunos topónimos del siglo XVI y nombres modernos no siempre es unívoca." },
  { name:"Sombrero", slug:"sombrero", group:"Arco oriental", lat:18.5892, lon:-63.4253, area:0.147, status:"Topónimo documentado en fuentes del siglo XVI", confidence:"alto", note:"López de Velasco describe Sombrero en su geografía de 1571–1574. Su superficie terrestre moderna es aproximadamente 0.38 km²." },
  { name:"Saint-Martin / Sint Maarten", slug:"saint-martin-sint-maarten", group:"Arco oriental", lat:18.0600, lon:-63.0600, area:33.670, status:"San Martín aparece en la documentación histórica", confidence:"alto", note:"La nomenclatura política moderna divide la isla; aquí se trata como una sola unidad física." },
  { name:"Saint-Barthélemy", slug:"saint-barthelemy", group:"Arco oriental", lat:17.9016, lon:-62.8293, area:9.650, status:"Unidad de normalización moderna", confidence:"condicional", note:"Se incluye como unidad física del arco; las fuentes del XVI emplean topónimos cuya correspondencia moderna requiere cautela." },
  { name:"Saba", slug:"saba", group:"Arco oriental", lat:17.6314, lon:-63.2377, area:5.020, status:"Sava/Saba aparece en la documentación histórica", confidence:"alto", note:"La cédula de 1519 y fuentes posteriores registran una forma histórica del nombre Saba." },
  { name:"Sint Eustatius", slug:"sint-eustatius", group:"Arco oriental", lat:17.4904, lon:-62.9762, area:8.110, status:"Estasia / San Estado en fuentes del siglo XVI", confidence:"alto", note:"La grafía histórica varía; la identificación moderna corresponde a Sint Eustatius." },
  { name:"Saint Kitts", slug:"saint-kitts", group:"Arco oriental", lat:17.3398, lon:-62.7657, area:64.900, status:"San Cristóbal aparece en la documentación histórica", confidence:"alto", note:"San Cristóbal es uno de los topónimos claramente documentados en la ampliación del obispado." },
  { name:"Nevis", slug:"nevis", group:"Arco oriental", lat:17.1508, lon:-62.5867, area:35.900, status:"Las Nieves aparece en la documentación histórica", confidence:"alto", note:"La forma histórica 'Las Nieves' corresponde a Nevis." },
  { name:"Barbuda", slug:"barbuda", group:"Arco oriental", lat:17.6333, lon:-61.8000, area:62.000, status:"Barbuda aparece en la documentación histórica", confidence:"alto", note:"La grafía histórica puede aparecer deformada en transcripciones, pero la unidad está documentada en el conjunto de anexión." },
  { name:"Antigua", slug:"antigua", group:"Arco oriental", lat:17.0773, lon:-61.7993, area:108.500, status:"Antigua aparece en la documentación histórica", confidence:"alto", note:"Se mantiene como una unidad insular moderna para la suma física." },
  { name:"Redonda", slug:"redonda", group:"Arco oriental", lat:16.9383, lon:-62.3455, area:0.620, status:"Redonda aparece en la documentación histórica", confidence:"alto", note:"Pequeña isla entre Nevis y Montserrat; su contribución al área total es reducida." },
  { name:"Montserrat", slug:"montserrat", group:"Arco oriental", lat:16.7391, lon:-62.1893, area:39.380, status:"Monserrat aparece en la documentación histórica", confidence:"alto", note:"Topónimo claramente reconocible en la documentación de 1519." },
  { name:"Guadalupe", slug:"guadalupe", group:"Arco oriental", lat:16.2100, lon:-61.5300, area:627.810, status:"Guadalupe aparece en la documentación histórica", confidence:"alto", note:"Para conservar el conteo narrativo de 22, aquí se agrupan Basse-Terre, Grande-Terre, La Désirade, Marie-Galante y Les Saintes; la superficie es la suma de esas unidades modernas usadas en el cálculo." },
  { name:"Dominica", slug:"dominica", group:"Extremo meridional", lat:15.4347, lon:-61.3502, area:289.500, status:"Extremo meridional documentado", confidence:"alto", note:"La documentación histórica sitúa a Dominica como extremo del arco jurisdiccional descrito; es el punto final de la medición lineal del sitio." }
];

const sources = [
  { type:"Video", title:"Video de referencia de El Boricuazo", url:"https://www.youtube.com/watch?v=ez03o2q7pr4", text:"Es el hilo narrativo principal del sitio. Se conserva su cifra de 22 islas o unidades como marco divulgativo; las notas técnicas sólo aclaran nomenclatura, cronología y método." },
  { type:"Fuente primaria", title:"PARES — Anexión de islas al obispado de la isla de San Juan, 15 de enero de 1519", url:"https://pares.mcu.es/ParesBusquedas20/catalogo/description/247777", text:"Registro del Archivo General de Indias sobre la petición real de anexar islas al obispado de San Juan para mejorar su sostenimiento." },
  { type:"Fuente primaria", title:"PARES — Real Cédula a Luis Carros sobre las islas a anexar", url:"https://pares.mcu.es/ParesBusquedas20/catalogo/description/247774", text:"El catálogo enumera topónimos como Santa Cruz, Las Vírgenes, San Martín, El Sombrero, Sava, San Cristóbal, Las Nieves, Redonda, Monserrat, Antigua, Barbuda, Guadalupe, Deseada, Marigalante, Todos los Santos y Dominica, entre otros." },
  { type:"Geografía del siglo XVI", title:"Juan López de Velasco — Geografía y descripción universal de las Indias, 1571–1574", url:"https://www.cervantesvirtual.com/obra/geografia-y-descripcion-universal-de-las-indias-859811/", text:"Aporta descripciones contemporáneas de varias islas y topónimos del arco, incluidos Vírgenes, Anegada, Sombrero, El Águila, San Martín, San Cristóbal, San Bartolomé, Redonda y Monserrate." },
  { type:"Síntesis histórica", title:"Catholic Encyclopedia — Puerto Rico", url:"https://www.newadvent.org/cathen/12291b.htm", text:"Resume que en 1519 el territorio diocesano se amplió para incluir las islas de Barlovento de las Antillas Menores desde Santa Cruz hasta Dominica." },
  { type:"Cartografía moderna", title:"USGS — Geologic map of St. Thomas, U.S. Virgin Islands", url:"https://pubs.usgs.gov/of/1985/0297/report.pdf", text:"El mapa federal identifica Little St. James entre las islas menores del entorno de St. Thomas; se usa sólo para justificar su pertenencia geográfica al grupo moderno de las Islas Vírgenes." }
];

const KM2_PER_MI2 = 2.589988110336;
const explicitArea = islands.reduce((sum, d) => sum + d.area, 0);

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


function dot3(a,b){ return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }
function norm3(a){ return Math.hypot(a[0],a[1],a[2]); }
function normalize3(a){ const n=norm3(a); return a.map(v=>v/n); }
function add3(a,b){ return [a[0]+b[0],a[1]+b[1],a[2]+b[2]]; }
function scale3(a,c){ return [a[0]*c,a[1]*c,a[2]*c]; }
function cross3(a,b){ return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; }
function vecFromLatLon(lat,lon){
  const p=degToRad(lat), l=degToRad(lon);
  return [Math.cos(p)*Math.cos(l),Math.cos(p)*Math.sin(l),Math.sin(p)];
}
function latLonFromVec(x){
  return {lat:radToDeg(Math.asin(Math.max(-1,Math.min(1,x[2])))),lon:radToDeg(Math.atan2(x[1],x[0]))};
}
function solve3(A,b){
  const m=A.map((row,i)=>[...row,b[i]]);
  for(let k=0;k<3;k++){
    let p=k; for(let i=k+1;i<3;i++) if(Math.abs(m[i][k])>Math.abs(m[p][k])) p=i;
    [m[k],m[p]]=[m[p],m[k]];
    const q=m[k][k]; if(Math.abs(q)<1e-14) throw new Error("Singular quadratic fit");
    for(let j=k;j<4;j++) m[k][j]/=q;
    for(let i=0;i<3;i++) if(i!==k){
      const z=m[i][k]; for(let j=k;j<4;j++) m[i][j]-=z*m[k][j];
    }
  }
  return [m[0][3],m[1][3],m[2][3]];
}
function sphericalCenterline(data,n=180){
  const X=data.map(d=>vecFromLatLon(d.lat,d.lon));
  const mu=normalize3(X.reduce((a,x)=>add3(a,x),[0,0,0]));
  const ll=latLonFromVec(mu), p=degToRad(ll.lat), l=degToRad(ll.lon);
  const east=[-Math.sin(l),Math.cos(l),0];
  const north=[-Math.sin(p)*Math.cos(l),-Math.sin(p)*Math.sin(l),Math.cos(p)];
  const logs=X.map(x=>{
    const c=Math.max(-1,Math.min(1,dot3(mu,x))), th=Math.acos(c);
    if(th<1e-14) return [0,0,0];
    const w=add3(x,scale3(mu,-c));
    return scale3(w,th/norm3(w));
  });
  const xy=logs.map(y=>[dot3(y,east),dot3(y,north)]);
  const sxx=xy.reduce((a,z)=>a+z[0]*z[0],0)/xy.length;
  const syy=xy.reduce((a,z)=>a+z[1]*z[1],0)/xy.length;
  const sxy=xy.reduce((a,z)=>a+z[0]*z[1],0)/xy.length;
  const alpha=.5*Math.atan2(2*sxy,sxx-syy);
  let e1=normalize3(add3(scale3(east,Math.cos(alpha)),scale3(north,Math.sin(alpha))));
  let e2=normalize3(cross3(mu,e1));
  let uv=logs.map(y=>[dot3(y,e1),dot3(y,e2)]);
  if(uv[0][0]>uv[uv.length-1][0]){
    e1=scale3(e1,-1); e2=scale3(e2,-1);
    uv=logs.map(y=>[dot3(y,e1),dot3(y,e2)]);
  }
  const sums={n:uv.length,u:0,u2:0,u3:0,u4:0,v:0,uv:0,u2v:0};
  for(const [u,v] of uv){
    const u2=u*u; sums.u+=u; sums.u2+=u2; sums.u3+=u2*u; sums.u4+=u2*u2;
    sums.v+=v; sums.uv+=u*v; sums.u2v+=u2*v;
  }
  const beta=solve3(
    [[sums.n,sums.u,sums.u2],[sums.u,sums.u2,sums.u3],[sums.u2,sums.u3,sums.u4]],
    [sums.v,sums.uv,sums.u2v]
  );
  const uMin=Math.min(...uv.map(z=>z[0])), uMax=Math.max(...uv.map(z=>z[0]));
  const points=[];
  for(let i=0;i<=n;i++){
    const u=uMin+(uMax-uMin)*i/n;
    const v=beta[0]+beta[1]*u+beta[2]*u*u;
    const y=add3(scale3(e1,u),scale3(e2,v)), th=norm3(y);
    const x=th<1e-14?mu:add3(scale3(mu,Math.cos(th)),scale3(y,Math.sin(th)/th));
    points.push(latLonFromVec(normalize3(x)));
  }
  let lengthKm=0;
  for(let i=1;i<points.length;i++) lengthKm+=vincentyKm(points[i-1],points[i]);
  return {points,lengthKm,lengthMiles:lengthKm/1.609344,mean:ll,beta};
}
const centerline=sphericalCenterline(islands);
const centerlineKm=centerline.lengthKm;
const centerlineMiles=centerline.lengthMiles;

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
  const centerPts=centerline.points.map(d=>project(d.lat,d.lon,W,H));
  const poly=routePts.map(p=>p.join(',')).join(' ');
  const gcp=gc.map(p=>p.join(',')).join(' ');
  const ccp=centerPts.map(p=>p.join(',')).join(' ');
  const labels = compact ? new Set(["Monito","Puerto Rico","Islas Vírgenes","Sombrero","Antigua","Guadalupe","Dominica"]) : new Set(["Monito","Puerto Rico","Islas Vírgenes","Sombrero","Anguilla","Saint Kitts","Antigua","Guadalupe","Dominica"]);
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
    <polyline class="map-centerline" points="${ccp}"/>
    <polyline class="map-geodesic" points="${gcp}"/>
    ${islands.map((d,i)=>{const [x,y]=routePts[i]; const isH=highlight===d.slug; const isEnd=d.slug==='monito'||d.slug==='dominica'; return `<g><a href="/isla/${d.slug}" data-link aria-label="${esc(d.name)}"><circle class="map-point" cx="${x}" cy="${y}" r="${isH?8:isEnd?5.6:3.4}" fill="${isH?'#c96f49':isEnd?'#c96f49':'#26515c'}" stroke="#f4eee2" stroke-width="${isH?3:1.5}" opacity="${highlight && !isH ? .46 : 1}"/></a>${labels.has(d.name)?`<text class="map-label" x="${x+7}" y="${y-7}">${esc(d.name)}</text>`:''}</g>`}).join('')}
    <g transform="translate(48 36)"><rect width="252" height="72" rx="14" fill="#f7f2e8" opacity=".94"/><line x1="14" y1="17" x2="52" y2="17" stroke="#c96f49" stroke-width="3" stroke-dasharray="6 7"/><text x="62" y="20" class="map-label">Geodésica Monito–Dominica</text><line x1="14" y1="36" x2="52" y2="36" stroke="#1d6b74" stroke-width="3"/><text x="62" y="39" class="map-label">Eje central · regresión esférica</text><line x1="14" y1="55" x2="52" y2="55" stroke="rgba(38,81,92,.35)"/><text x="62" y="58" class="map-label">Secuencia de unidades</text></g>
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
        <div class="hero-actions"><a class="btn btn-primary" href="#resultados">Ver los resultados</a><a class="btn btn-ghost" href="/islas" data-link>Explorar 22 islas</a></div>
      </div>
      <div class="map-card">${mapSvg({compact:true})}</div>
    </div></section>

    <section class="section" id="resultados">
      <div class="section-kicker">La respuesta numérica</div>
      <h2 class="section-title">Una jurisdicción insular de escala regional</h2>
      <p class="section-intro">El anfitrión resume la extensión en 22 islas o unidades. Este sitio conserva ese número como marco principal y agrupa ciertos conjuntos modernos para que el conteo histórico y el cálculo físico puedan convivir sin crear una falsa discrepancia.</p>
      <div class="metric-grid">
        <div class="metric-card featured"><strong>22</strong><span>unidades · conteo principal del video</span></div>
        <div class="metric-card"><strong>${fmt(explicitArea,3)}</strong><span>mi² · suma técnica de superficie terrestre moderna</span></div>
        <div class="metric-card"><strong>${fmt(directMiles,3)}</strong><span>mi · geodésica WGS-84 Monito → Dominica</span></div>
        <div class="metric-card"><strong>${fmt(centerlineMiles,3)}</strong><span>mi · eje central por regresión esférica</span></div></div>
      <div class="callout"><strong>Cómo leer el 22.</strong> Es la cifra narrativa del video. Las fuentes históricas no siempre cuentan “islas” con la granularidad moderna: por ejemplo, pueden tratar Las Vírgenes o Guadalupe como una sola unidad. El sitio conserva el 22 y usa agrupaciones explícitas para que el cálculo sea reproducible sin presentar una falsa precisión histórica.</div>
    </section>

    <section class="section section-tight"><div class="two-col">
      <div class="panel"><div class="section-kicker">Qué significa “jurisdicción”</div><h3>El hilo histórico es el obispado de San Juan</h3><p>El video puede usar “Puerto Rico” en sentido amplio y divulgativo. La documentación más directa que sustenta la expansión insular es eclesiástica: en 1519 la Corona promovió la anexión de islas al obispado de San Juan. El sitio lo aclara sin convertir esa precisión terminológica en una refutación del relato.</p></div>
      <div class="panel"><div class="section-kicker">Qué significa el área</div><h3>Es una traducción moderna de una afirmación histórica</h3><p>Las superficies son áreas terrestres modernas usadas como proxy físico. Sirven para contestar “¿cuánta tierra representa aproximadamente ese arco?”; no pretenden ser mediciones levantadas en 1570.</p></div>
    </div></section>

    <section class="section">
      <div class="section-kicker">Curvatura terrestre</div>
      <h2 class="section-title">De Monito a Dominica sobre el elipsoide WGS-84</h2>
      <p class="section-intro">La medición principal usa una solución geodésica elipsoidal de Vincenty. Como control, se calcula también la distancia de gran círculo sobre una esfera de radio medio terrestre.</p>
      <div class="two-col" style="margin-top:30px">
        <div class="panel"><h3>Resultado elipsoidal</h3><p><strong style="font-family:Georgia,serif;font-size:2.3rem;color:var(--ink)">${fmt(directMiles,3)} mi</strong><br>${fmt(directKm,3)} km sobre WGS-84.</p><div class="formula">a = 6,378,137 m\nf = 1 / 298.257223563\nb = (1 − f)a\n\nVincenty⁻¹(Monito, Dominica)\n= ${fmt(directMiles,3)} mi</div></div>
        <div class="panel"><h3>Control esférico</h3><p><strong style="font-family:Georgia,serif;font-size:2.3rem;color:var(--ink)">${fmt(directSphereMiles,3)} mi</strong><br>La diferencia frente al elipsoide es de sólo ${fmt(Math.abs(directMiles-directSphereMiles),3)} mi.</p><div class="formula">h = sin²(Δφ/2) + cos φ₁ cos φ₂ sin²(Δλ/2)\nc = 2 asin(√h)\nd = Rc</div></div>
      </div>

      <div class="panel" style="margin-top:24px"><div class="section-kicker">Eje central del archipiélago</div><h3>Regresión cuadrática sobre la esfera</h3><p><strong style="font-family:Georgia,serif;font-size:2.3rem;color:var(--ink)">${fmt(centerlineMiles,3)} mi</strong><br>${fmt(centerlineKm,3)} km siguiendo la tendencia central de los 22 centroides.</p><p>El ajuste da el mismo peso a cada unidad para evitar que Puerto Rico domine por superficie. Se calcula una media esférica, se llevan los puntos al plano tangente, se obtiene el eje principal, se ajusta una cuadrática transversal y se devuelve la curva a la esfera. La longitud final se integra mediante pequeños tramos geodésicos WGS-84.</p><div class="formula">xᵢ ∈ S²
μ = normalize(Σxᵢ)
yᵢ = Log_μ(xᵢ)
v = β₀ + β₁u + β₂u²
γ(u) = Exp_μ(u e₁ + v e₂)

L(γ) ≈ ${fmt(centerlineMiles,3)} mi</div></div>
    </section>

    <section class="section">
      <div class="section-kicker">Explorar la cadena insular</div>
      <h2 class="section-title">22 fichas, siguiendo el conteo del video</h2>
      <p class="section-intro">Cada ficha añade coordenadas y superficie moderna al relato del video. Cuando un nombre histórico o una agrupación requiere cautela, la nota técnica lo indica sin alterar el hilo narrativo.</p>
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
  return shell(`<section class="page-hero"><div class="page-hero-inner"><div class="eyebrow">Índice insular</div><h1>Las islas del modelo</h1><p class="subtitle">Veintidós unidades de trabajo que conservan el conteo presentado por el anfitrión. Algunas fuentes del siglo XVI agrupan archipiélagos o usan topónimos antiguos, por lo que esta normalización moderna no debe leerse como una transcripción literal nombre por nombre.</p></div></section><section class="section section-tight">${islandBrowser(true)}</section>`,"islands");
}

function islandPage(slug){
  const d=islands.find(x=>x.slug===slug); if(!d) return notFound();
  const i=islands.indexOf(d), prev=islands[i-1], next=islands[i+1];
  const km2=d.area*KM2_PER_MI2;
  const distFromMonito=vincentyKm(monito,d)/1.609344;
  const epsteinFact=d.slug==='islas-virgenes' ? `<div class="callout"><strong>Dato geográfico interesante.</strong> Little Saint James —conocida posteriormente por su asociación con Jeffrey Epstein— está dentro del conjunto geográfico de las Islas Vírgenes, cerca de St. Thomas. La Real Cédula de 1519 incorpora <em>“Las Vírgenes”</em> como grupo, pero no enumera Little Saint James individualmente; por eso esta inclusión es una inferencia geográfica del grupo, no una mención nominal del siglo XVI. <a href="https://pubs.usgs.gov/of/1985/0297/report.pdf" target="_blank" rel="noreferrer">USGS ↗</a> · <a href="https://pares.mcu.es/ParesBusquedas20/catalogo/description/247774" target="_blank" rel="noreferrer">PARES ↗</a></div>` : '';
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
      <div><div class="section-kicker">Ubicación regional</div><h2 class="section-title">${esc(d.name)} dentro de la cadena</h2><p class="section-intro">La línea naranja representa la geodésica Monito–Dominica; la línea azul verdosa es el eje central ajustado sobre la esfera y la gris sigue la secuencia de unidades. Esta ficha resalta el centroide utilizado para los cálculos.</p><div class="panel" style="margin-top:24px"><h3>Distancia desde Monito</h3><p><strong style="font-family:Georgia,serif;font-size:2.2rem;color:var(--ink)">${fmt(distFromMonito,1)} mi</strong><br>medidas sobre WGS-84 entre centroides representativos.</p></div></div>
      <div class="island-map-panel">${mapSvg({highlight:d.slug, compact:true})}</div>
    </div></section>
    <section class="section section-tight"><div class="status-card" data-level="${d.confidence}"><h3>Papel en la reconstrucción de 1570</h3><p><strong>${esc(d.status)}.</strong> ${d.confidence==='alto'?'Su relación con la sede de San Juan es el anclaje más sólido del modelo.':d.confidence==='medio'?'La inclusión es razonable dentro del marco histórico general, pero conviene no presentarla como una enumeración literal sin el instrumento primario correspondiente.':'La inclusión es condicional y depende de interpretar de forma continua el arco geográfico; la documentación disponible no autoriza a tratarla como una certeza insular individual para 1570.'}</p></div></section>
    <section class="section section-tight"><div class="two-col"><div class="panel"><h3>Cómo leer el área</h3><p>${fmtSmart(d.area)} mi² (${fmtSmart(km2)} km²) es una superficie terrestre moderna utilizada como proxy geográfico. No pretende representar una medición de costa efectuada en 1570.</p></div><div class="panel"><h3>Por qué importa</h3><p>${d.area>250?'Es una de las unidades que más pesan en el total de área terrestre del modelo.':d.area<1?'Su efecto sobre el área total es mínimo; su valor es sobre todo cartográfico y topológico dentro de la cadena insular.':'Aporta una fracción intermedia del área y ayuda a representar la continuidad física del arco insular.'}</p></div></div>
      ${epsteinFact}
      <div class="prev-next">${prev?`<a href="/isla/${prev.slug}" data-link><small>← Isla anterior</small><strong>${esc(prev.name)}</strong></a>`:'<span></span>'}${next?`<a class="next" href="/isla/${next.slug}" data-link><small>Isla siguiente →</small><strong>${esc(next.name)}</strong></a>`:'<a class="next" href="/" data-link><small>Volver al</small><strong>Archipiélago</strong></a>'}</div>
    </section>
  `,"islands");
}

function methodologyPage(){
  return shell(`
    <section class="page-hero"><div class="page-hero-inner"><div class="eyebrow">Metodología y fuentes</div><h1>Cómo se construyó el modelo</h1><p class="subtitle">La prioridad es separar tres capas: lo que está documentado históricamente, lo que se infiere para construir una lista operativa y lo que se calcula matemáticamente con geografía moderna.</p></div></section>
    <section class="section">
      <div class="section-kicker">Proceso</div><h2 class="section-title">De una afirmación histórica a una cifra reproducible</h2>
      <div class="method-grid"><div class="method-step"><span class="num">01 · VIDEO</span><h3>Preservar el relato</h3><p>El sitio parte del conteo de 22 presentado por el anfitrión y lo usa como estructura principal, sin intentar “corregir” retóricamente el video.</p></div><div class="method-step"><span class="num">02 · HISTORIA</span><h3>Comprobar y matizar</h3><p>La Real Cédula de 1519 y descripciones del siglo XVI sirven para distinguir lo claramente documentado de las normalizaciones modernas de nombres y grupos.</p></div><div class="method-step"><span class="num">03 · CÁLCULO</span><h3>Medir sin fingir precisión histórica</h3><p>Se suman áreas terrestres modernas de 22 unidades normalizadas y se usa WGS-84 para Monito–Dominica. No se añade un “ajuste” arbitrario por cayos menores.</p></div><div class="method-step"><span class="num">04 · EJE CENTRAL</span><h3>Regresión no lineal sobre la esfera</h3><p>Los 22 centroides reciben igual peso. Tras calcular la media esférica, los puntos se proyectan mediante Log al plano tangente, se obtiene el eje principal, se ajusta una cuadrática transversal y se regresa a S² mediante Exp. La longitud se integra sobre pequeños tramos WGS-84.</p></div></div>
    </section>
    <section class="section section-tight"><div class="two-col"><div class="panel"><h3>Área total explícita</h3><div class="formula">A = Σᵢ Aᵢ\n  = ${islands.map(d=>d.area.toFixed(3)).slice(0,7).join(' + ')} + …\n  = ${explicitArea.toFixed(3)} mi²</div></div><div class="panel"><h3>Distancia principal</h3><div class="formula">d = Vincenty⁻¹[(18.1589, −67.9478),\n              (15.4347, −61.3502)]\n  = ${directMiles.toFixed(3)} mi\n  = ${directKm.toFixed(3)} km</div></div></div></section>
    <section class="section"><div class="section-kicker">Fuentes de trabajo</div><h2 class="section-title">Qué respalda la reconstrucción</h2><p class="section-intro">La documentación primaria confirma la ampliación del obispado y varios de los topónimos usados en el relato. Donde la equivalencia entre un nombre del siglo XVI y una unidad moderna no es exacta, el sitio lo declara de forma explícita.</p><div class="source-list">${sources.map(s=>`<article class="source-item"><div class="source-type">${esc(s.type)}</div><div><h3><a href="${s.url}" target="_blank" rel="noreferrer">${esc(s.title)} ↗</a></h3><p>${esc(s.text)}</p></div></article>`).join('')}</div></section>
    <section class="section section-tight"><div class="callout"><strong>Principio de lectura.</strong> El “22” pertenece al resumen del video; las 5,011.783 mi² son una suma moderna reproducible de las unidades físicas normalizadas por este sitio. Son dos capas distintas: una histórica-narrativa y otra geográfico-numérica.</div></section>
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
