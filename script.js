// ===== Pixel Art Data =====
// Each number maps to a color in the palette. 0 = transparent.
// Lions are ~28 columns x 20 rows (side-profile with body + dancer legs)

const redLionPalette = {
  1: '#1a0a00',   // outline dark
  2: '#ff2244',   // bright red mane
  3: '#cc1133',   // dark red mane
  4: '#ffd700',   // gold
  5: '#ffaa00',   // dark gold
  6: '#ffffff',   // white (eyes, teeth)
  7: '#111111',   // black (pupil)
  8: '#00ffff',   // cyan sparkle (Y2K)
  9: '#ff6688',   // pink nose
  10: '#330000',  // mouth interior
  11: '#ff4466',  // ear tuft
  12: '#ffcc00',  // light gold accent
  13: '#ff6666',  // fabric body (lighter red)
  14: '#1a1a3a',  // dancer pants (dark navy)
  15: '#222222',  // shoes
};

const greenLionPalette = {
  1: '#0a1a00',   // outline dark
  2: '#00cc44',   // bright green mane
  3: '#009933',   // dark green mane
  4: '#c0c0c0',   // silver
  5: '#909090',   // dark silver
  6: '#ffffff',   // white
  7: '#111111',   // black
  8: '#ff00ff',   // magenta sparkle (Y2K)
  9: '#66ff88',   // light green nose
  10: '#003300',  // mouth interior
  11: '#44ff66',  // ear tuft
  12: '#e0e0e0',  // light silver accent
  13: '#66ff99',  // fabric body (lighter green)
  14: '#1a1a3a',  // dancer pants (dark navy)
  15: '#222222',  // shoes
};

// Side-profile lion dance pixel grid (28 wide x 20 tall)
// Southern-style lion dance: head + body costume + dancer legs, facing RIGHT
const lionGrid = [
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 0:  horn tip
  [0, 0, 0, 0, 4, 5,12, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 1:  horn
  [0, 0, 0, 4, 5, 4, 4, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 2:  horn base
  [0, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 3:  forehead top
  [0, 1, 2, 2, 4,12, 5, 4, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 4:  forehead
  [0, 1, 2, 3, 2, 2, 4, 2, 3, 2,11, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 5:  brow + ear tuft
  [1, 2, 6, 6, 6, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 6:  eye row
  [1, 2, 6, 7, 8, 1, 9, 9, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 7:  eye pupil + nose
  [1, 3, 6, 6, 6, 1, 9, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 8:  eye bottom + cheek
  [1, 4, 4, 1, 1,10,10,10, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 9:  mouth top (gold trim)
  [1, 6, 6,10,10,10,10, 6, 1, 4, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 10: teeth + mouth open
  [0, 1, 1,10,10,10,10, 1, 4, 4, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 11: lower jaw
  [0, 0, 1, 1, 4, 4, 1, 1, 2, 3, 2, 1,13,13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 12: chin + fur ruff
  [0, 0, 0, 2, 3, 2, 2, 3, 1,13,13,13,13,13,13, 4,13,13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 13: mane → body fabric
  [0, 0, 0, 0, 1, 2, 2, 1,13,13, 4,13,13,13,13,13,13,13,13, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 14: mane → body
  [0, 0, 0, 0, 0, 1, 1,13,13,13,13, 4,13,13,13,13,13,13,13,13, 2, 2, 0, 0, 0, 0, 0, 0],  // row 15: body with gold trim + tail fringe
  [0, 0, 0, 0, 0, 0, 1, 1,13,13,13,13,13, 4,13,13,13,13,13, 1, 2, 3, 2, 0, 0, 0, 0, 0],  // row 16: body lower + tail
  [0, 0, 0, 0, 0, 0, 0, 0, 1,14,14, 1, 1, 1,14,14, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0],  // row 17: dancer pants
  [0, 0, 0, 0, 0, 0, 0, 0, 1,14, 1, 0, 0, 1,14, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 18: dancer legs
  [0, 0, 0, 0, 0, 0, 0, 0,15,15, 0, 0, 0,15,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // row 19: shoes
];

// Small snake pixel art for the scroll (12 wide x 6 tall)
const snakeGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 2, 0],
  [0, 2, 2, 2, 0, 0, 2, 4, 0, 0, 0, 0],
  [2, 4, 0, 4, 2, 2, 4, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
];

const snakePalette = {
  2: '#00cc44',
  4: '#ffd700',
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
  { 1: '#ffd700', 2: '#ff4444' },  // gold + red
  { 1: '#ff2244', 2: '#ffd700' },  // red + gold
  { 1: '#00ffff', 2: '#ff00ff' },  // cyan + magenta
  { 1: '#ffffff', 2: '#ffd700' },  // white + gold
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

  // Red lion
  const redLionEl = document.querySelector('.lion-red');
  if (redLionEl) {
    redLionEl.style.setProperty('--pixel-art', generatePixelArt(lionGrid, redLionPalette, pixelSize));
    redLionEl.style.cssText += `; width: ${pixelSize}px; height: ${pixelSize}px;`;
    const style = document.createElement('style');
    style.textContent = `.lion-red::after { box-shadow: ${generatePixelArt(lionGrid, redLionPalette, pixelSize)}; }`;
    document.head.appendChild(style);
  }

  // Green lion
  const greenLionEl = document.querySelector('.lion-green');
  if (greenLionEl) {
    const style = document.createElement('style');
    style.textContent = `.lion-green::after { box-shadow: ${generatePixelArt(lionGrid, greenLionPalette, pixelSize)}; }`;
    document.head.appendChild(style);
  }

  // Snake in scroll
  const snakeEl = document.querySelector('.snake-pixel');
  if (snakeEl) {
    const style = document.createElement('style');
    style.textContent = `.snake-pixel::after { box-shadow: ${generatePixelArt(snakeGrid, snakePalette, pixelSize)}; }`;
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
