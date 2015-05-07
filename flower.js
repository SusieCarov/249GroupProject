var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();

TW.mainInit(renderer,scene);

var points = 
[[1, 0, 0],
[2, 0, 1],
[3, 0, 2],
[4, 0, 3],
[4.3, 0, 4],
[4, 0, 6],
[2, 0, 8],
[1, 0, 10],
[0, 0, 12]];

function printPoints() {
    var i;
    console.log("[");
    for( i=0; i < points.length; i++) {
        p = points[i];
        console.log("["+p.x+","+p.y+","+p.z+"],");
    }
    console.log("]");
}

function getPoints() {
    var i;
    var pts = [];
    for( i=0; i<points.length; i++) {
        var p = new THREE.Vector3();
        p.x = points[i][0];
        p.y = points[i][1];
        p.z = points[i][2];
        pts.push( p );
    }
    return pts;
}

var latheObj;
function makePetal() {
    var geom = new THREE.LatheGeometry( getPoints() );
    var mat1 = new THREE.MeshBasicMaterial({color: 0xFF0000, opacity: 0.6});
    latheObj = new THREE.Mesh (geom, mat1);
    latheObj.name = "lathe";
    return latheObj;
}

var flowerFrame = new THREE.Object3D();
scene.add(flowerFrame);

var axis = new THREE.Object3D();
var midMat = new THREE.MeshBasicMaterial({color: 0xFFFF00});
var midGeom = new THREE.SphereGeometry(3, 50, 50);
var midRadius = 3/2;
var middle = new THREE.Mesh(midGeom, midMat);
axis.add(middle);
flowerFrame.add(axis);

for (i = 0; i<5; i++) {
    var petal = makePetal();
    petal.rotation.x = i*(Math.PI*2)/5;
    axis.add(petal);
}

var cameraFOVY = 75;

var state = TW.cameraSetup(renderer,
                           scene,
                           {minx: -6, maxx: 6,
                            miny: -6, maxy: 6,
                            minz: -8, maxz: 8},
                           cameraFOVY);

TW.render();