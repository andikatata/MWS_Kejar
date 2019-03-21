// =========== TUGAS 1 =============
let lokasi = [-7.959773, 112.64185];
let markertitle = "<p align='center'><b>Kopikan Mlg</b><br>Lat:-7.959773 Long:112.64185 <br><br> Jl. Sanan No.3, Purwantoro, Blimbing, Kota Malang, Jawa Timur 65126</p>";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(markertitle);

// ========== TUGAS 2 ==============
let places = [
    { "lokasi": [-7.974268, 112.658075], "sponsor": "<p align='center'><b>Urban Pop Cafe</b><br>Lat:-7.974268 Long:112.658075 <br><br> Jl. D. Maninjau Raya No.85, Sawojajar, Kedungkandang, Kota Malang, Jawa Timur 65139</p>" },
    { "lokasi": [-7.967592, 112.639858], "sponsor": "<p align='center'><b>Twenty First Coffee</b><br>Lat:-7.967592 Long:112.639858 <br><br> Twenty First Coffee, Jl. Hamid Rusdi No.21, Bunulrejo, Blimbing, Kota Malang, Jawa Timur 65126</p>"},
    { "lokasi": [-7.973099, 112.666560], "sponsor": "<p align='center'><b>Warkop Ranggayo</b><br>Lat:-7.973099 Long:112.666560 <br><br> Warkop Ranggayo, Jl. Danau Sentani Raya No.23, Madyopuro, Kedungkandang, Kota Malang, Jawa Timur 65139</p>"},
    { "lokasi": [-7.980049, 112.630080], "sponsor": "<p align='center'><b>Nomaden Coffee</b><br>Lat:-7.980049 Long:112.630080 <br><br> Jl. Jenderal Basuki Rahmat 7-11, Kauman, Klojen, Kota Malang, Jawa Timur 65119</p>" },
    { "lokasi": [-7.979449, 112.65574], "sponsor": "<p align='center'><b>Kafe Endorse</b><br>Lat:-7.979449 Long:112.65574 <br><br> Jalan Danau Maninjau Selatan Blok D1 - D26, Sawojajar, Kedungkandang, Sawojajar, Kedungkandang, Sawojajar, Kedungkandang, Kota Malang, Jawa Timur 65139</p>" },
    { "lokasi": [-7.959773, 112.64185], "sponsor": "<p align='center'><b>Kopikan Mlg</b><br>Lat:-7.959773 Long:112.64185 <br><br> Jl. Sanan No.3, Purwantoro, Blimbing, Kota Malang, Jawa Timur 65126</p>"},    
];

for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}


// ============ TUGAS 3 =============
function findLocation(x, y) {
    console.log(x, y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    // console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if (ix >= 0) {
        img.src = placesreview[ix].gambar;
        par.textContent = placesreview[ix].review;
    }
}

// Persiapkan tempat untuk gambar dan review
let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0 = "Urban Pop Cafe  Tempat nongkrong yang nyaman.";
let r1 = "Twenty First Coffee - Nikmatnya perpaduan kopi dan susu di sini.";
let r2 = "Warkop Ranggayo - Nikmatnya kopi khas indonesia cuma ada di sini.";
let r3 = "Nomaden Coffee- Tempat ngopi yang wajib dikunjungi di kota Malang.";
let r4 = "Kafe Endorse - Minum kopi jangan lupa beli untuk orang di rumah.";
let r5 = "Kopikan Mlg - Malang lagi dingin kopikan aja !"

let placesreview = [
    { "lokasi": [-7.974268, 112.658075], "sponsor": "<p align='center'><b>Urban Pop Cafe</b><br>Lat:-7.974268 Long:112.658075 <br><br> Jl. D. Maninjau Raya No.85, Sawojajar, Kedungkandang, Kota Malang, Jawa Timur 65139</p>", "gambar": "images/urban-pop-cafe.jpg", "review": r0 },
    { "lokasi": [-7.967592, 112.639858], "sponsor": "<p align='center'><b>Twenty First Coffee</b><br>Lat:-7.967592 Long:112.639858 <br><br> Twenty First Coffee, Jl. Hamid Rusdi No.21, Bunulrejo, Blimbing, Kota Malang, Jawa Timur 65126</p>", "gambar": "images/21 coffee.jpg", "review": r1 },
    { "lokasi": [-7.973099, 112.666560], "sponsor": "<p align='center'><b>Warkop Ranggayo</b><br>Lat:-7.973099 Long:112.666560 <br><br> Warkop Ranggayo, Jl. Danau Sentani Raya No.23, Madyopuro, Kedungkandang, Kota Malang, Jawa Timur 65139</p>", "gambar": "images/warkop-ranggayo.jpg", "review": r2 },
    { "lokasi": [-7.980049, 112.630080], "sponsor": "<p align='center'><b>Nomaden Coffee</b><br>Lat:-7.980049 Long:112.630080 <br><br> Jl. Jenderal Basuki Rahmat 7-11, Kauman, Klojen, Kota Malang, Jawa Timur 65119</p>", "gambar": "images/nomaden coffee.jpg", "review": r3 },
    { "lokasi": [-7.979449, 112.65574], "sponsor": "<p align='center'><b>Kafe Endorse</b><br>Lat:-7.979449 Long:112.65574 <br><br> Jalan Danau Maninjau Selatan Blok D1 - D26, Sawojajar, Kedungkandang, Kota Malang, Jawa Timur 65139</p>", "gambar": "images/kafe endorse.jpg", "review": r4 },
    { "lokasi": [-7.959773, 112.64185], "sponsor": "<p align='center'><b>Kopikan Mlg</b><br>Lat:-7.959773 Long:112.64185 <br><br> Jl. Sanan No.3, Purwantoro, Blimbing, Kota Malang, Jawa Timur 65126</p>", "gambar": "images/kopikan mlg.jpg", "review": r5 },
];

for (var p of placesreview) {
    var markerreview = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    markerreview.on('click', showLocation);
}