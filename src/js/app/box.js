'use strict';

const THREE = require('../../../node_modules/three/build/three.min');

module.exports = class Box {
  constructor () {

    this.mesh = new THREE.Mesh( new THREE.BoxGeometry( 3, 1, 2 ),
      new THREE.MeshPhongMaterial({
        color: 0x4080ff
      })
    );

    this.mesh.castShadow = true;
  }

};
