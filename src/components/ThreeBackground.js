import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';


const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // At the start of your useEffect
let mixers = [];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
// Set initial camera rotation
const initialBeta = -90; // device looking down
const degtorad = Math.PI / 180; // Degree-to-Radian conversion
camera.rotation.x = initialBeta * degtorad;

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.21;
    bloomPass.strength = 1.12;
    bloomPass.radius = 0.55;
    composer.addPass(bloomPass);

    // Adding ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional light (commented out, but can be added if needed)
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight.position.set(0, 1, 0);
    // scene.add(directionalLight);

    // Animation Mixer
    let mixer;

    const loader = new GLTFLoader();
    loader.load('/portal/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(0.1, 0.1, 0.1);
      gltf.scene.position.set(0, -80, -300);
      gltf.scene.rotation.y = Math.PI / 2.2;

      // When loading '/portal/scene.gltf'
if (gltf.animations && gltf.animations.length) {
  const portalMixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => {
    const action = portalMixer.clipAction(clip);
    action.play();
  });
  mixers.push(portalMixer);
}
    });

// Adjusted loader for the blue dragon to repeat its 2nd animation
loader.load('/blue_dragon/scene.gltf', (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(10000, 10000, 10000); // Adjusted scale
  gltf.scene.position.set(0, -80, -300); // Adjusted position
  gltf.scene.rotation.y = 0; // Adjusted rotation

 // When loading '/blue_dragon/scene.gltf'
if (gltf.animations && gltf.animations.length > 1) {
  const dragonMixer = new THREE.AnimationMixer(gltf.scene);
  const secondAnimation = gltf.animations[1]; // Make sure the index is correct
  const action = dragonMixer.clipAction(secondAnimation);
  action.setLoop(THREE.LoopRepeat);
  action.play();
  mixers.push(dragonMixer);
}
});


    camera.position.z = 5;

    const clock = new THREE.Clock();

    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixers.forEach((mixer) => {
        mixer.update(delta);
      });
      composer.render(delta);
    };
    

    animate();

    const onDocumentMouseMove = (event) => {
      var mouseX = (event.clientX - window.innerWidth / 2) / 100;
      var mouseY = (event.clientY - window.innerHeight / 2) / 100;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    // Mobile control
    const onDeviceOrientation = (event) => {
      
      const { alpha, beta, gamma } = event;
      const degtorad = Math.PI / 180; // Degree-to-Radian conversion
    
      // Convert degrees to radians and adjust sensitivity
      const x = (gamma ? gamma * degtorad : 0); // Left to right
      const y = (beta ? beta * degtorad : 0); // Front to back
    
      // Set camera rotation
      camera.rotation.set(y, x, 0, "YXZ");
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('deviceorientation', onDeviceOrientation, false);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mixers = [];

      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('deviceorientation', onDeviceOrientation);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeBackground;
