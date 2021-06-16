// to see all the classes in THREE.js
console.log(THREE)

// make a scene
const scene = new THREE.Scene()

// make a cube
const geometry = new THREE.BoxGeometry(1,1,1)

// make a materal
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff
})

// make a mesh
const mesh = new THREE.Mesh(geometry,material) 

// add mesh to scene
scene.add(mesh)

// make a camera resolution
const size ={
    width:800,
    height:600
}

// make a camera
const camera =new THREE.PerspectiveCamera(70,size.width/size.height)
camera.position.x=1.5
camera.position.y=-1
camera.position.z=3





// add camera to my scene
scene.add(camera)

// make a renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// resize renderer
renderer.setSize(size.width,size.height)

// start rendering
renderer.render(scene,camera)