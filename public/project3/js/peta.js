
let places = JSON.parse(localStorage.getItem('places'));

function findLocation(x,y) {
    // console.log(x,y);
    for (var i=0; i< places.length;i++) {
        if (places[i].lokasi[0]==x &&
            places[i].lokasi[1]==y) {
        return i;
        }
    }
    return -1;
}

function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix= findLocation(e.latlng.lat,e.latlng.lng);
    if (ix >=0) {
        console.log(places[ix].gambar);
        img.src= places[ix].gambar;
        par.textContent=places[ix].review;
    }
}

let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.getElementById('fotoPlace');
let par= document.createElement('p');
rev.appendChild(par);

var URL="https://tata-49004.firebaseapp.com/project3/data/peta.json";

async function f(URL){
    try {
        const resp= await(fetch(URL));
        const resp2= await resp.json();
        localStorage.setItem('places',
        JSON.stringify(resp2.places));
        places = resp2.places;
        for (var p of resp2.places) {
            var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
            marker.on('click', showLocation);
        }
    }
    catch(err){
        console.log(err);
    }
}

f(URL);
console.log(places);
for (var p of places) {
    var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on('click', showLocation);
}