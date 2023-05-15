import * as THREE from 'three';

import { Header } from '~/composables/useHeader';

const PRIMARY_COLOR = 0x93FFD8;

export default class TokenElement {
  canvas: HTMLCanvasElement;
  size: number;

  ready: boolean;

  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  element: THREE.Mesh;

  activateShadowInterval: NodeJS.Timer | number | undefined;
  deactivateShadowInterval: NodeJS.Timer | number | undefined;

  rotateZ: number;
  rotateY: number;

  previousHeader: Header | undefined;
  skillsListener?: (e: Event) => void | undefined;

  constructor(canvas: HTMLCanvasElement, size: number) {
    this.ready = false;
    this.canvas = canvas;
    this.size = size;

    this.scene = new THREE.Scene();

    this.camera = this.buildCamera();
    this.renderer = this.buildRenderer();
    this.element = this.defaultElement();

    this.rotateY = 0.005;
    this.rotateZ = 0.001;
  }

  init() {
    this.scene.add(this.element);
    this.canvas.style.setProperty('opacity', '1');

    const light = new THREE.PointLight(0x660000, 0.5);
    light.position.set(0, 0, 15);
    this.scene.add(light);

    this.ready = true;

    this.animate();
  }

  resize(size: number) {
    this.size = size;
    this.renderer.setSize(this.size, this.size);
  }

  resolveHeader(header: Header) {
    this.closePreviousHeader();
    this.previousHeader = header;

    switch (header.anchor) {
    case '':           this.onHero(); break;
    case 'about':      this.onAbout(); break;
    case 'skills':     this.onSkills(); break;
    case 'experience': this.onExperience(); break;
    case 'contact':    this.onContact(); break;
    }
  }

  private closePreviousHeader() {
    if (!this.previousHeader) return;

    switch (this.previousHeader.anchor) {
    // case '':           this.closeHero(); break;
    case 'about':      this.closeAbout(); break;
    case 'skills':     this.closeSkills(); break;
    // case 'experience': this.closeExperience(); break;
    // case 'contact':    this.closeContact(); break;
    default: break;
    }
  }

  private buildRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas
    });
    renderer.setPixelRatio(1);
    renderer.setSize(this.size, this.size);
    renderer.setClearColor(0x000000, 0);
    return renderer;
  }

  private buildCamera(): THREE.Camera {
    const camera = new THREE.PerspectiveCamera(100, 1, 0.5, 100);
    camera.position.z = 15;
    return camera;
  }

  private defaultElement(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(7, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: PRIMARY_COLOR, wireframe: true });
    return new THREE.Mesh(geometry, material);
  }

  private animate() {
    this.element.rotation.y += this.rotateY;
    this.element.rotation.z += this.rotateZ;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }

  private onHero() {
    const heroEl = document.querySelector('#hero') as HTMLElement;
    const middle = (heroEl.offsetHeight - this.size) / 2;
    this.canvas.style.setProperty('top', `${middle}px`);
  }

  private onAbout() {
    this.deactivateShadow();
    const imageEl = document.querySelector('#about .image') as HTMLElement;
    const middle = window.scrollY + imageEl.getBoundingClientRect().top - (this.size / 4);
    this.canvas.style.setProperty('top', `${middle}px`);
  }

  private closeAbout() {
    this.activateShadow();
  }

  private closeSkills() {
    this.rotateZ = 0.001;
    this.resetElement();
    document.removeEventListener('scroll', this.skillsListener as (e: Event) => void);
    this.changeColumn(1);
    this.canvas.style.setProperty('opacity', '1');
    this.canvas.style.setProperty('filter', 'none');
  }

  private onSkills() {
    const geometry = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0, -7),
        new THREE.Vector2(7, 0),
        new THREE.Vector2(3, 3),
        new THREE.Vector2(0, 3.25)
      ],
      16
    );
    this.rotateZ = 0;
    this.element.rotation.z = 0.25;

    this.changeElementGeometry(geometry);
    this.changeElementMesh(0xCC0000, false);
    this.changeBackgroundColor('#CC000060');
    const summaryEl = document.querySelector('#skills .summary') as HTMLElement;
    const middle = window.scrollY + summaryEl.getBoundingClientRect().top - (this.size / 4);
    this.canvas.style.setProperty('top', `${middle}px`);
    this.changeColumn(3);

    let scrolled = window.scrollY;
    let scrollValue = 0;

    // this.canvas.style.setProperty('transition', 'unset');
    this.skillsListener ||= (_e: Event) => {
      let distance = window.scrollY - scrolled;
      if (scrollValue <= 0) scrollValue = 0;

      if (scrollValue < 33) {
        this.changeElementGeometry(geometry);
        this.changeBackgroundColor('#CC000060');
        this.changeElementMesh(0xCC0000, false);
        this.changeColumn(3);
        this.canvas.style.setProperty('opacity', `${(90 - scrollValue * 1.5) / 100}`);
        this.canvas.style.setProperty('filter', `blur(${(scrollValue > 16 ? scrollValue - 16 : 0.5)}px)`);
      } else if (distance > 0) {
        this.resetElement();
        this.changeColumn(2.5);
        this.canvas.style.setProperty('opacity', '1');
        this.canvas.style.setProperty('filter', `blur(${scrollValue * 4 / 100 * 128}px)`);
      }

      this.canvas.style.setProperty('top', `${middle + (scrollValue * 10)}px`);

      if (distance < 0) distance += -24;

      scrollValue = scrollValue + (distance / 10);
      scrolled = window.scrollY;
    };
    setTimeout(
      () => document.addEventListener('scroll', this.skillsListener as (e: Event) => void),
      1000
    );
  }

  private onExperience() {
    this.changeColumn(1);
    const experienceEl = document.querySelector('#experience') as HTMLElement;
    const middle = window.scrollY + experienceEl.getBoundingClientRect().top - (this.size / 16);
    this.canvas.style.setProperty('top', `${middle}px`);
  }

  private onContact() {
    const contactEl = document.querySelector('#contact') as HTMLElement;
    const middle = window.scrollY + contactEl.getBoundingClientRect().bottom - (this.size / 2);
    this.canvas.style.setProperty('top', `${middle}px`);
    this.changeColumn(2.5);
  }

  private activateShadow() {
    const shadowSize = getComputedStyle(this.canvas).getPropertyValue('--shadow-size');
    if (shadowSize === '100%') return;

    clearInterval(this.deactivateShadowInterval);

    let shadowSizeInt = parseInt(shadowSize);

    const interval = setInterval(() => {
      if (shadowSizeInt == 100) {
        clearInterval(interval);
        return;
      }

      shadowSizeInt += 1;

      this.canvas.style.setProperty('--shadow-size', `${shadowSizeInt}%`);
    }, 10);
  }

  private deactivateShadow() {
    const shadowSize = getComputedStyle(this.canvas).getPropertyValue('--shadow-size');
    if (shadowSize === '0%') return;

    clearInterval(this.activateShadowInterval);

    let shadowSizeInt = parseInt(shadowSize);

    this.deactivateShadowInterval = setInterval(() => {
      if (shadowSizeInt <= 0) {
        clearInterval(this.deactivateShadowInterval);
        return;
      }

      shadowSizeInt -= 1;

      this.canvas.style.setProperty('--shadow-size', `${shadowSizeInt}%`);
    }, 100);
  }

  private changeColumn(column: number) {
    const wrapper = document.querySelector('#wrapper') as HTMLElement;
    const base =  (window.innerWidth - wrapper.offsetWidth) / 2;
    const posX = base - (this.size / 4) + (column - 1) * (wrapper.offsetWidth / 4);

    this.canvas.style.setProperty('right', `${posX}px`);
  }

  private changeBackgroundColor(color: string) {
    this.canvas.style.setProperty('--shadow-color', color);
  }

  private changeElementMesh(color: number, basic = true) {
    if (basic) {
      this.element.material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true
      });

      // Remove wireframe
      this.element.children = [];

      return;
    }

    this.element.material = new THREE.MeshPhysicalMaterial({
      roughness: 0.125,
      transmission: 0.5,
      thickness: 1
    });

    // Add wireframes
    const wireframeGeomtry = new THREE.WireframeGeometry(this.element.geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xAA0000 });
    const wireframeSegment = new THREE.LineSegments(wireframeGeomtry, wireframeMaterial);
    this.element.add(wireframeSegment);
  }

  private changeElementGeometry(geometry: THREE.BufferGeometry) {
    this.element.geometry = geometry;
  }

  private resetElement() {
    this.changeBackgroundColor('#93FFD860');
    this.changeElementMesh(PRIMARY_COLOR, true);
    this.changeElementGeometry(new THREE.SphereGeometry(7, 32, 16));
  }
}
