let getIntersectionWithEarth = ( _mouse, camera, object , raycaster) =>{

  let mouse = {
    x: ((_mouse.x - 1) / this.mount.clientWidth) * 2 - 1,
    y: -((_mouse.y - 1) / this.mount.clientHeight) * 2 + 1
  }
  raycaster.setFromCamera(mouse, camera)

  return raycaster.intersectObject(object)
}
self.onmessage = function( e ) {

    // let t1 = getIntersectionWithEarth(e.data.params._mouse, e.data.params.camera, e.data.params.object, e.data.params.raycaster)
    // let t2 = getIntersectionWithEarth(e.data.params._mouse2, e.data.params.camera, e.data.params.object, e.data.params.raycaster)
  self.postMessage([423,34]);
     
}