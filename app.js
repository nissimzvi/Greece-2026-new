const tripDays = [
{date:'16.10.2026',dow:'יום ו׳',title:'אתונה, תעלת קורינתוס ולוטראקי',summary:'נחיתה, איסוף רכב, תצפית מדויקת בתעלת קורינתוס וערב רגוע על הים.',drive:'כ־1:40 ש׳',cost:150,hotel:'Club Hotel Casino Loutraki',notes:'אם הנחיתה מתעכבת, מקצרים את הטיילת אך לא מחליפים את נקודת התעלה.',stops:[
{name:'Athens International Airport',lat:37.9364,lng:23.9475,duration:'45–75 דק׳',cost:'ללא עלות',desc:'נחיתה, מזוודות, איסוף הרכב ויציאה מערבה.'},
{name:'Corinth Canal, Greece',lat:37.9273,lng:22.9941,duration:'30–40 דק׳',cost:'חינם',desc:'תצפית מהגשר על התעלה הצרה והעמוקה. זו נקודת הניווט המדויקת שנבחרה.'},
{name:'Club Hotel Casino Loutraki',lat:37.9606,lng:22.9838,duration:'צ׳ק־אין',cost:'לפי ההזמנה',desc:'התארגנות קצרה במלון לפני היציאה לערב.'},
{name:'Loutraki Promenade',lat:37.9787,lng:22.9774,duration:'1.5–2 ש׳',cost:'אוכל כ־€100 ל־4',desc:'טיילת מול הים, בתי קפה וארוחת ערב.'}]},
{date:'17.10.2026',dow:'שבת',title:'לוטראקי, נפפקטוס ויואנינה',summary:'יום מעבר יפה צפונה עם נמל ונציאני, הגשר המרשים של ריו–אנטיריו וערב בעיר העתיקה.',drive:'כ־4:30 ש׳',cost:210,hotel:'The Lake Hotel Ioannina',notes:'כדאי לצאת בזמן כדי להגיע ליואנינה באור.',stops:[
{name:'Club Hotel Casino Loutraki',lat:37.9606,lng:22.9838,duration:'יציאה 08:30',cost:'—',desc:'יציאה צפונה לאחר ארוחת הבוקר.'},
{name:'Nafpaktos Venetian Port',lat:38.3912,lng:21.8279,duration:'60–75 דק׳',cost:'קפה/צהריים כ־€70',desc:'נמל קטן וציורי, חומות, בתי קפה והליכה קצרה.'},
{name:'Rio–Antirrio Bridge',lat:38.3228,lng:21.7726,duration:'מעבר וצילום',cost:'אגרת גשר',desc:'אחד הגשרים המרשימים ביוון, מעל מפרץ קורינתוס.'},
{name:'The Lake Hotel Ioannina',lat:39.6870,lng:20.8387,duration:'45–60 דק׳',cost:'לפי ההזמנה',desc:'צ׳ק־אין ומנוחה קצרה.'},
{name:'Ioannina Castle',lat:39.6739,lng:20.8592,duration:'2–2.5 ש׳',cost:'חינם',desc:'העיר העתיקה, החומות וטיילת אגם פמבוטידה.'}]},
{date:'18.10.2026',dow:'יום א׳',title:'קניון ויקוס וגשרי זגוריה',summary:'יום תצפיות, כפרי אבן וגשרים עתיקים – שונה לחלוטין מיום המים שלמחרת.',drive:'כ־3:15 ש׳',cost:170,hotel:'The Lake Hotel Ioannina',notes:'Beloi מוצגת כאפשרות נוספת בלבד, משום שהיא מוסיפה הליכה וזמן.',stops:[
{name:'Monodendri Zagori',lat:39.8825,lng:20.7467,duration:'60–75 דק׳',cost:'חינם',desc:'כפר אבן מסורתי, סמטאות, כיכר וקפה.'},
{name:'Oxya Viewpoint',lat:39.9094,lng:20.7262,duration:'45–60 דק׳',cost:'חינם',desc:'תצפית דרמטית מעל קניון ויקוס, בהליכה קצרה מהחניה.'},
{name:'Stone Forest Zagori',lat:39.9009,lng:20.7358,duration:'30–45 דק׳',cost:'חינם',desc:'שכבות סלע טבעיות הנראות כמגדלים בתוך היער.'},
{name:'Kokkoris Bridge Zagori',lat:39.8480,lng:20.7878,duration:'45–60 דק׳',cost:'חינם',desc:'גשר אבן חד־קשתי וירידה קצרה לערוץ.'},
{name:'Kipoi Zagori',lat:39.8624,lng:20.7950,duration:'60 דק׳',cost:'צהריים כ־€70',desc:'כפר קטן ונוח לארוחת צהריים.'},
{name:'Plakidas Bridge Zagori',lat:39.8554,lng:20.8057,duration:'45–60 דק׳',cost:'חינם',desc:'גשר מפורסם בעל שלוש קשתות, מצוין לצילום.'}]},
{date:'19.10.2026',dow:'יום ב׳',title:'קוניצה, וידומאטיס ופפיגו',summary:'יום צפוני נוסף אך באופי אחר: נהרות טורקיז, בריכות סלע וכפרים מתחת למגדלי אסטרקה.',drive:'כ־3:40 ש׳',cost:175,hotel:'The Lake Hotel Ioannina',notes:'הכבישים הרריים ומפותלים. Mikro Papigo נשארת תחנה אופציונלית אם יש אור וזמן.',stops:[
{name:'Konitsa Bridge',lat:40.0483,lng:20.7497,duration:'45–60 דק׳',cost:'חינם',desc:'גשר אבן גדול מעל נהר האאוס והליכה קצרה לצד המים.'},
{name:'Kleidonia Bridge',lat:39.9604,lng:20.6599,duration:'45–60 דק׳',cost:'חינם',desc:'נקודה יפה ונגישה על נהר וידומאטיס הצלול.'},
{name:'Aristi',lat:39.9347,lng:20.6738,duration:'45–60 דק׳',cost:'קפה/צהריים כ־€65',desc:'כפר אבן נעים לעצירת אוכל ומנוחה.'},
{name:'Papingo Rock Pools',lat:39.9705,lng:20.7264,duration:'45–60 דק׳',cost:'חינם',desc:'בריכות וערוצי סלע טבעיים; להיזהר מהחלקה אחרי גשם.'},
{name:'Megalo Papigo',lat:39.9694,lng:20.7177,duration:'75–90 דק׳',cost:'חינם',desc:'כפר מרשים עם סמטאות אבן ונוף למגדלי אסטרקה.'},
{name:'Mikro Papigo',lat:39.9769,lng:20.7335,duration:'30–45 דק׳',cost:'חינם',desc:'כפר קטן וציורי – רק אם נשאר זמן ואור.'}]},
{date:'20.10.2026',dow:'יום ג׳',title:'מערת פראמה, מצובו ומטאורה',summary:'יום מעבר מעניין עם מערת נטיפים, עיירת הרים ושקיעה מעל צוקי מטאורה.',drive:'כ־3:10 ש׳',cost:220,hotel:'Hotel Doupiani House',notes:'להגיע לתצפית השקיעה לפחות חצי שעה לפני השקיעה בפועל.',stops:[
{name:'Perama Cave Ioannina',lat:39.6963,lng:20.8460,duration:'75–90 דק׳',cost:'כרטיסים כ־€32 ל־4',desc:'מערת נטיפים גדולה עם סיור מודרך ומדרגות.'},
{name:'Metsovo Central Square',lat:39.7699,lng:21.1826,duration:'1.5–2 ש׳',cost:'צהריים כ־€80',desc:'עיירת הרים, בתי אבן, גבינות מקומיות וכיכר נעימה.'},
{name:'Hotel Doupiani House',lat:39.7189,lng:21.6143,duration:'45–60 דק׳',cost:'לפי ההזמנה',desc:'צ׳ק־אין בקסטרקי מול צוקי מטאורה.'},
{name:'Meteora Observation Deck',lat:39.7212,lng:21.6308,duration:'1.5–2 ש׳',cost:'חינם',desc:'נסיעה בין הצוקים ועצירות צילום.'},
{name:'Meteora Sunset Viewpoint',lat:39.7147,lng:21.6373,duration:'45–60 דק׳',cost:'חינם',desc:'שקיעה מעל עמודי הסלע והמנזרים.'}]},
{date:'21.10.2026',dow:'יום ד׳',title:'מנזרי מטאורה ונסיעה לוולוס',summary:'שני מנזרים עיקריים, אפשרות למנזר נגיש נוסף, ולאחר מכן ערב בטיילת וולוס.',drive:'כ־2:45 ש׳',cost:225,hotel:'Domotel Xenia Volos',notes:'מספיקים שני מנזרים. שעות פתיחה ולבוש יש לבדוק שוב לפני הטיול.',stops:[
{name:'Great Meteoron Monastery',lat:39.7264,lng:21.6265,duration:'75–90 דק׳',cost:'כ־€20 ל־4',desc:'המנזר הגדול והחשוב במטאורה, עם מוזיאון ותצפיות.'},
{name:'Varlaam Monastery',lat:39.7251,lng:21.6308,duration:'60–75 דק׳',cost:'כ־€20 ל־4',desc:'מנזר מרשים על צוק סמוך עם ציורי קיר.'},
{name:'St. Stephen Monastery',lat:39.7090,lng:21.6384,duration:'45–60 דק׳',cost:'כ־€20 ל־4',desc:'חלופה נגישה יחסית, עם גשר במקום מדרגות רבות.'},
{name:'Kalambaka',lat:39.7040,lng:21.6268,duration:'60–75 דק׳',cost:'צהריים כ־€75',desc:'ארוחת צהריים לפני הנסיעה דרומה.'},
{name:'Domotel Xenia Volos',lat:39.3545,lng:22.9488,duration:'ערב',cost:'לפי ההזמנה',desc:'צ׳ק־אין וטיול ערב בטיילת; מומלץ ציפוראדיקו.'}]},
{date:'22.10.2026',dow:'יום ה׳',title:'כפרי פיליון ודמוחארי',summary:'כבישים מפותלים, כפרים ירוקים, תצפיות למפרץ ונמל קטן המזוהה עם מאמא מיה.',drive:'כ־4:00 ש׳',cost:180,hotel:'Domotel Xenia Volos',notes:'Mylopotamos נשמרת כאפשרות אם מזג האוויר והזמן מאפשרים.',stops:[
{name:'Portaria Pelion',lat:39.3890,lng:22.9991,duration:'45–60 דק׳',cost:'חינם',desc:'כפר הררי ירוק עם בתי אבן ושבילי מים.'},
{name:'Makrinitsa Central Square',lat:39.4004,lng:22.9889,duration:'75–90 דק׳',cost:'חינם',desc:'המרפסת של פיליון ותצפית רחבה על וולוס.'},
{name:'Tsagarada Plane Tree',lat:39.3868,lng:23.1763,duration:'75–90 דק׳',cost:'צהריים כ־€75',desc:'כיכר יפה ובה עץ דולב עתיק ומרשים.'},
{name:'Damouchari Beach',lat:39.4103,lng:23.1747,duration:'75–90 דק׳',cost:'חינם',desc:'מפרץ ונמל דייגים קטן, הליכה וצילומים.'},
{name:'Mylopotamos Beach',lat:39.3832,lng:23.1937,duration:'45–60 דק׳',cost:'חינם',desc:'תחנת רשות לפי מזג האוויר, הזמן והכביש.'}]},
{date:'23.10.2026',dow:'יום ו׳',title:'וולוס ואתונה – אקרופוליס וקניות',summary:'יציאה מוקדמת, חניה במרכז אתונה, ביקור באקרופוליס והליכה רציפה דרך פלאקה, מונסטיראקי וארמו.',drive:'כ־4:15 ש׳',cost:390,hotel:'Dolce by Wyndham Athens Attica Riviera',notes:'זהו המסלול הסופי: אין תרמופילאי ואין קמנה וורלה. משאירים את הרכב בחניון מרכזי וממשיכים ברגל.',stops:[
{name:'Domotel Xenia Volos',lat:39.3545,lng:22.9488,duration:'יציאה מוקדמת',cost:'—',desc:'יציאה ישירה לכיוון אתונה.'},
{name:'Parking near Acropolis',lat:37.9688,lng:23.7257,duration:'חניה ל־5–6 ש׳',cost:'כ־€25–35',desc:'חניה במרכז והמשך רגלי; לא נכנסים עם הרכב לסמטאות.'},
{name:'Acropolis of Athens',lat:37.9715,lng:23.7267,duration:'2–2.5 ש׳',cost:'כ־€120 ל־4',desc:'האקרופוליס, הפרתנון והתצפית על העיר.'},
{name:'Plaka Athens',lat:37.9730,lng:23.7290,duration:'60–75 דק׳',cost:'צהריים כ־€90',desc:'סמטאות עתיקות, חנויות ובתי קפה.'},
{name:'Monastiraki Square',lat:37.9760,lng:23.7257,duration:'45–60 דק׳',cost:'חינם',desc:'כיכר מרכזית, שוק ואווירה תוססת.'},
{name:'Ermou Street Athens',lat:37.9777,lng:23.7298,duration:'1.5–2 ש׳',cost:'לפי קניות',desc:'מדרחוב הקניות המרכזי של אתונה.'},
{name:'Dolce by Wyndham Athens Attica Riviera',lat:37.9247,lng:24.0107,duration:'לינה',cost:'לפי ההזמנה',desc:'איסוף הרכב ונסיעה למלון ליד השדה.'}]},
{date:'24.10.2026',dow:'שבת',title:'החזרת הרכב וטיסה הביתה',summary:'בוקר מוקדם, תדלוק, החזרת הרכב וטיסה מאתונה לישראל.',drive:'כ־30 דק׳',cost:70,hotel:'טיסה הביתה',notes:'הטיסה בשעה 09:55; לצאת מהמלון עם מרווח ביטחון.',stops:[
{name:'Dolce by Wyndham Athens Attica Riviera',lat:37.9247,lng:24.0107,duration:'צ׳ק־אאוט',cost:'—',desc:'ארוחת בוקר מוקדמת ויציאה.'},
{name:'Fuel station near Athens Airport',lat:37.9176,lng:23.9586,duration:'15–20 דק׳',cost:'לפי צריכה',desc:'תדלוק וצילום מד הדלק.'},
{name:'Athens Airport Car Rental',lat:37.9368,lng:23.9445,duration:'45–60 דק׳',cost:'—',desc:'החזרת הרכב וקבלת אישור.'},
{name:'Athens International Airport',lat:37.9364,lng:23.9475,duration:'טיסה 09:55',cost:'—',desc:'צ׳ק־אין, בידוק וטיסה לישראל.'}]}
];

const hotels=[
{name:'Club Hotel Casino Loutraki',dates:'16–17.10',place:'לוטראקי',lat:37.9606,lng:22.9838},
{name:'The Lake Hotel Ioannina',dates:'17–20.10',place:'יואנינה',lat:39.6870,lng:20.8387},
{name:'Hotel Doupiani House',dates:'20–21.10',place:'קסטרקי / מטאורה',lat:39.7189,lng:21.6143},
{name:'Domotel Xenia Volos',dates:'21–23.10',place:'וולוס',lat:39.3545,lng:22.9488},
{name:'Dolce by Wyndham Athens Attica Riviera',dates:'23–24.10',place:'וראוורונה, ליד השדה',lat:37.9247,lng:24.0107}
];
const gm=(lat,lng,name)=>`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
const wz=(lat,lng)=>`https://www.waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`;

function markerIcon(n){return L.divIcon({className:'',html:`<div style="width:30px;height:30px;border-radius:50%;background:#0b2545;color:white;border:3px solid white;box-shadow:0 3px 12px #0004;display:grid;place-items:center;font-weight:800">${n}</div>`,iconSize:[30,30],iconAnchor:[15,15]})}
function initMap(id,stops,zoom=9){const map=L.map(id,{scrollWheelZoom:false});L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);const latlngs=stops.map((s,i)=>{L.marker([s.lat,s.lng],{icon:markerIcon(i+1)}).addTo(map).bindPopup(`<strong>${s.name}</strong><br>${s.desc||''}`);return[s.lat,s.lng]});L.polyline(latlngs,{color:'#155d8b',weight:5,opacity:.85}).addTo(map);map.fitBounds(latlngs,{padding:[35,35],maxZoom:zoom});return map}

function renderCards(){document.querySelector('#day-cards').innerHTML=tripDays.map((d,i)=>`<a class="day-card" href="#day-${i+1}"><div class="date">${d.dow} · ${d.date}</div><h3>${d.title}</h3><p>${d.summary}</p><div class="meta"><span>${d.drive}</span><strong>€${d.cost}</strong></div></a>`).join('')}
function renderDays(){const root=document.querySelector('#day-sections');root.innerHTML=tripDays.map((d,i)=>`<article class="day-section" id="day-${i+1}"><div class="day-head"><div><div class="day-kicker">יום ${i+1} · ${d.dow} · ${d.date}</div><h2>${d.title}</h2><p class="day-summary">${d.summary}</p></div><div class="day-stats"><div class="stat"><strong>${d.drive}</strong><span>נהיגה משוערת</span></div><div class="stat"><strong>€${d.cost}</strong><span>עלות משוערת ל־4</span></div><div class="stat"><strong>${d.stops.length}</strong><span>תחנות</span></div><div class="stat"><strong>${d.hotel}</strong><span>לינה</span></div></div></div><div class="day-layout"><div class="timeline">${d.stops.map((s,j)=>`<div class="stop"><div class="stop-number">${j+1}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="stop-meta"><span class="pill">⏱ ${s.duration}</span><span class="pill">💶 ${s.cost}</span></div><div class="nav-links"><a class="nav-link" target="_blank" rel="noopener" href="${gm(s.lat,s.lng,s.name)}">Google Maps</a><a class="nav-link waze" target="_blank" rel="noopener" href="${wz(s.lat,s.lng)}">Waze</a></div></div>`).join('')}</div><div class="day-map-wrap"><div id="map-${i+1}" class="day-map"></div><div class="day-notes"><strong>הערת היום:</strong> ${d.notes}<br><strong>ערב ואוכל:</strong> ${restaurantTip(i)}</div></div></div><div class="day-nav"><a href="${i?`#day-${i}`:'#overview'}">→ היום הקודם</a><a href="${i<tripDays.length-1?`#day-${i+2}`:'#budget'}">היום הבא ←</a></div></article>`).join('');tripDays.forEach((d,i)=>setTimeout(()=>initMap(`map-${i+1}`,d.stops,11),50))}
function restaurantTip(i){return[
'טיילת לוטראקי – דגים, פירות ים או טברנה מול המפרץ.',
'יואנינה העתיקה – טברנה מקומית בתוך החומות או ליד הטיילת.',
'יואנינה – ארוחת ערב רגועה על האגם לאחר החזרה מזגוריה.',
'יואנינה – מומלץ להזמין מקום בטברנה באזור הטירה.',
'קסטרקי – טברנה מול צוקי מטאורה.',
'וולוס – ציפוראדיקו בטיילת, עם מנות קטנות לחלוקה.',
'וולוס – ערב נוסף בטיילת או באזור הנמל.',
'פלאקה או מונסטיראקי לצהריים; במלון ארוחה קלה בערב.',
'ארוחת בוקר מוקדמת במלון או כריך לשדה.'
][i]}
function renderHotels(){document.querySelector('#hotel-grid').innerHTML=hotels.map(h=>`<div class="hotel"><div class="eyebrow dark">${h.dates}</div><h3>${h.name}</h3><p>${h.place}</p><a target="_blank" rel="noopener" href="${gm(h.lat,h.lng,h.name)}">פתיחה ב־Google Maps</a></div>`).join('')}
function renderBudget(){const total=tripDays.reduce((a,d)=>a+d.cost,0);document.querySelector('#budget-table').innerHTML=`<div class="budget-row header"><span>תאריך</span><span>יום</span><span>ל־4</span></div>${tripDays.map(d=>`<div class="budget-row"><span>${d.date.slice(0,5)}</span><span>${d.title}</span><strong>€${d.cost}</strong></div>`).join('')}<div class="budget-row"><strong>סה״כ</strong><span>ללא מלונות, רכב ודלק</span><strong class="budget-total">€${total}</strong></div>`}
function renderOverviewMap(){const general=tripDays.flatMap(d=>d.stops).filter((s,i,a)=>i===0||s.name!==a[i-1].name);initMap('overview-map',general,8)}
renderCards();renderDays();renderHotels();renderBudget();renderOverviewMap();
