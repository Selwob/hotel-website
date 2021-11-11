/* OSM & OL example code provided by https://mediarealm.com.au/ */
var map;
var mapLat = 35.6576;
var mapLng = 139.7640;
var mapDefaultZoom = 2;

function initialize_map() {
    map = new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([mapLng, mapLat]),
            zoom: mapDefaultZoom
        })
    });
}

function add_map_point(lat, lng) {
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            })]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
            })
        })
    });

    map.addLayer(vectorLayer);
}

// Add multiple points to the map from hotel database in firebase
function showMapPoints(hotelArray) {
    let coordinateArray = [];
    for (let hotel of hotelArray) {
        coordinateArray.push([hotel.location.latitude, hotel.location.longitude])
    }
    for (let coords of coordinateArray) {
        add_map_point(coords[0], coords[1])
    }
}