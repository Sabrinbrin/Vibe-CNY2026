// ===== Pixel Art Data =====
// Each number maps to a color in the palette. 0 = transparent.

// Mandarin orange palette (shared by both left and right oranges)
const orangePalette = {
  1: '#6b3300',   // outline dark brown
  2: '#ff8c00',   // bright mandarin orange
  3: '#cc6600',   // dark orange (shadow)
  4: '#ffbb55',   // light orange (highlight)
  5: '#33aa44',   // green leaf
  6: '#1a7733',   // dark green leaf
  7: '#8b5a2b',   // brown stem
  8: '#ffffff',   // white sparkle
};

// Mandarin orange pixel grid (14 wide x 16 tall)
// Round fruit with leaf + stem on top; highlight top-left, shadow bottom-right
const orangeGrid = [
  //0  1  2  3  4  5  6  7  8  9 10 11 12 13
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],  // row 0:  leaf tip
  [0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 0, 0, 0, 0],  // row 1:  leaf body
  [0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0],  // row 2:  stem
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],  // row 3:  top outline
  [0, 0, 0, 1, 4, 4, 2, 2, 2, 2, 1, 0, 0, 0],  // row 4:  upper, highlight left
  [0, 0, 1, 4, 8, 4, 2, 2, 2, 2, 2, 1, 0, 0],  // row 5:  shine spot
  [0, 1, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 1, 0],  // row 6:  upper body
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],  // row 7:  widest
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],  // row 8:  widest
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 0],  // row 9:  shadow starts
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 1, 0],  // row 10: shadow
  [0, 0, 1, 2, 2, 2, 2, 2, 3, 3, 2, 1, 0, 0],  // row 11: narrowing + shadow
  [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],  // row 12: narrowing
  [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],  // row 13: bottom
  [0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0],  // row 14: bottom crease
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],  // row 15: navel
];

// Small horse pixel art for the scroll (8 wide x 6 tall)
const scrollHorseGrid = [
  [0, 1, 0, 0, 0, 0, 2, 0],
  [1, 1, 1, 1, 1, 1, 2, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
];

const scrollHorsePalette = {
  1: '#ffd700',
  2: '#ff6600',
};

// Small pixel horse (8 wide x 6 tall, side view facing right)
// 1 = body, 2 = mane/tail accent
const horseGrid = [
  [0, 1, 0, 0, 0, 0, 2, 0],  // row 0: ear + tail
  [1, 1, 1, 1, 1, 1, 2, 0],  // row 1: head + neck + back + tail
  [0, 0, 1, 1, 1, 1, 0, 0],  // row 2: body
  [0, 0, 1, 1, 1, 1, 0, 0],  // row 3: belly
  [0, 0, 1, 0, 0, 1, 0, 0],  // row 4: upper legs
  [0, 0, 1, 0, 0, 1, 0, 0],  // row 5: lower legs
];

const horsePalettes = [
  { 1: '#ffd700', 2: '#ff6600' },  // gold + orange
  { 1: '#ff8c00', 2: '#ffd700' },  // orange + gold
  { 1: '#00ffff', 2: '#ff00ff' },  // cyan + magenta (Y2K)
  { 1: '#ffffff', 2: '#ff8c00' },  // white + orange
];


// ===== Pixel Art Generator =====
function generatePixelArt(grid, palette, pixelSize) {
  const shadows = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const colorKey = grid[y][x];
      if (colorKey === 0) continue;
      const color = palette[colorKey];
      if (!color) continue;
      shadows.push(`${x * pixelSize}px ${y * pixelSize}px 0 ${color}`);
    }
  }
  return shadows.join(', ');
}


// ===== Horse Element Factory =====
// Injects palette CSS rules once, then creates horse divs reusing them.
let horseStylesInjected = false;
function ensureHorseStyles() {
  if (horseStylesInjected) return;
  horseStylesInjected = true;
  const pixelSize = 3;
  const style = document.createElement('style');
  horsePalettes.forEach(function(palette, i) {
    style.textContent += `.horse-palette-${i}::after { box-shadow: ${generatePixelArt(horseGrid, palette, pixelSize)}; }`;
  });
  document.head.appendChild(style);
}

function createHorseElement(paletteIndex) {
  ensureHorseStyles();
  const horse = document.createElement('div');
  horse.className = 'pixel-horse horse-palette-' + paletteIndex;
  return horse;
}


// ===== Apply Pixel Art to DOM =====
function applyPixelArt() {
  const pixelSize = 4;

  // Mandarin oranges (both use the same art)
  const orangeArt = generatePixelArt(orangeGrid, orangePalette, pixelSize);
  const orangeStyle = document.createElement('style');
  orangeStyle.textContent = `.lion-red::after, .lion-green::after { box-shadow: ${orangeArt}; }`;
  document.head.appendChild(orangeStyle);

  // Horse in scroll
  const horseEl = document.querySelector('.horse-pixel');
  if (horseEl) {
    const style = document.createElement('style');
    style.textContent = `.horse-pixel::after { box-shadow: ${generatePixelArt(scrollHorseGrid, scrollHorsePalette, pixelSize)}; }`;
    document.head.appendChild(style);
  }
}


// ===== Horse Field (background ambient horseys) =====
function createHorseField() {
  const field = document.getElementById('sparkle-field');
  if (!field) return;
  for (let i = 0; i < 80; i++) {
    const paletteIndex = Math.floor(Math.random() * horsePalettes.length);
    const horse = createHorseElement(paletteIndex);
    horse.style.left = (Math.random() * 100) + 'vw';
    horse.style.top = (Math.random() * 100) + 'vh';
    horse.style.setProperty('--delay', (Math.random() * 5) + 's');
    horse.style.setProperty('--dur', (2 + Math.random() * 3) + 's');
    field.appendChild(horse);
  }
}


// ===== Click Horse Burst =====
function initClickHorses() {
  document.addEventListener('click', function(e) {
    for (let i = 0; i < 8; i++) {
      const paletteIndex = Math.floor(Math.random() * horsePalettes.length);
      const horse = createHorseElement(paletteIndex);
      horse.classList.add('horse-gallop');
      horse.style.left = e.clientX + 'px';
      horse.style.top = e.clientY + 'px';
      const angle = (Math.PI * 2 * i) / 8;
      const dist = 40 + Math.random() * 60;
      horse.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
      horse.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
      document.body.appendChild(horse);
      horse.addEventListener('animationend', function() {
        horse.remove();
      });
    }
  });
}


// ===== Horse Burst Effect (for grow moment) =====
function createHorseBurst(x, y) {
  for (let i = 0; i < 12; i++) {
    const paletteIndex = Math.floor(Math.random() * horsePalettes.length);
    const horse = createHorseElement(paletteIndex);
    horse.classList.add('horse-gallop');
    horse.style.left = x + 'px';
    horse.style.top = y + 'px';
    const angle = (Math.PI * 2 * i) / 12;
    const dist = 50 + Math.random() * 80;
    horse.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
    horse.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
    document.body.appendChild(horse);
    horse.addEventListener('animationend', function() {
      horse.remove();
    });
  }
}


// ===== Animation Orchestration =====
function startAnimation() {
  const leftLion = document.querySelector('.lion-left');
  const rightLion = document.querySelector('.lion-right');
  const scrollEl = document.querySelector('.cny-scroll');
  const greetingText = document.querySelector('.greeting-text');

  if (!leftLion || !rightLion || !scrollEl || !greetingText) return;

  // Step 1: Lions enter and walk to scroll edges (after 0.5s delay)
  setTimeout(function() {
    leftLion.classList.add('animate-enter');
    rightLion.classList.add('animate-enter');
  }, 500);

  // Step 2: Lions arrive at scroll edges, switch to idle bobbing + burst effect
  setTimeout(function() {
    leftLion.classList.remove('animate-enter');
    rightLion.classList.remove('animate-enter');
    leftLion.classList.add('animate-idle');
    rightLion.classList.add('animate-idle');

    // Sparkle burst at center of stage
    var stage = document.querySelector('.lion-dance-area');
    if (stage) {
      var rect = stage.getBoundingClientRect();
      createHorseBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }, 2700);

  // Step 3: Scroll unfurls between the lions
  setTimeout(function() {
    scrollEl.classList.add('animate-unfurl');
  }, 3000);

  // Step 4: Greeting text fades in
  setTimeout(function() {
    greetingText.classList.add('animate-fadein');
  }, 4200);

  // Add glow pulse to scroll after everything settles
  setTimeout(function() {
    // Lock in the unfurl end state before swapping animation
    scrollEl.style.clipPath = 'inset(0 0 0% 0)';
    scrollEl.style.opacity = '1';
    scrollEl.classList.remove('animate-unfurl');
    scrollEl.style.animation = 'pulseGlow 3s ease-in-out infinite';
  }, 5500);
}


// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', function() {
  applyPixelArt();
  createHorseField();
  initClickHorses();
  startAnimation();
});
