// ===== Pixel Art Data =====
// Each number maps to a color in the palette. 0 = transparent.
// Lions are ~18 columns x 22 rows

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
};

// Red lion pixel grid (18 wide x 22 tall)
// Frontal view of a Southern-style lion dance head
const lionGrid = [
  //  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0],   // row 0:  horn tip
  [0, 0, 0, 0, 0, 0, 4, 5, 12,12, 5, 4, 0, 0, 0, 0, 0, 0],   // row 1:  horn
  [0, 0, 0, 0, 0, 4, 5, 12, 4, 4,12, 5, 4, 0, 0, 0, 0, 0],   // row 2:  horn base
  [0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0],   // row 3:  forehead top
  [0, 0, 0, 1, 2, 2, 4, 12, 5, 5,12, 4, 2, 2, 1, 0, 0, 0],   // row 4:  forehead
  [0, 0, 1, 2, 3, 2, 2, 4, 4, 4, 4, 2, 2, 3, 2, 1, 0, 0],   // row 5:  forehead lower
  [0, 11, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1,11, 0],   // row 6:  brow ridge + ear tufts
  [0, 11, 1, 2, 1, 6, 6, 6, 1, 1, 6, 6, 6, 1, 2, 1,11, 0],   // row 7:  eyes top
  [0, 0, 1, 2, 1, 6, 7, 8, 1, 1, 6, 7, 8, 1, 2, 1, 0, 0],   // row 8:  eyes mid (pupil+sparkle)
  [0, 0, 1, 2, 1, 6, 6, 6, 1, 1, 6, 6, 6, 1, 2, 1, 0, 0],   // row 9:  eyes bottom
  [0, 0, 1, 3, 2, 1, 1, 1, 9, 9, 1, 1, 1, 2, 3, 1, 0, 0],   // row 10: nose bridge
  [0, 2, 1, 3, 2, 2, 9, 9, 9, 9, 9, 9, 2, 2, 3, 1, 2, 0],   // row 11: nose + cheek fur
  [2, 3, 1, 3, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 3, 1, 3, 2],   // row 12: wide cheeks
  [0, 2, 1, 1, 4, 4, 1,10,10,10,10, 1, 4, 4, 1, 1, 2, 0],   // row 13: mouth top (gold trim)
  [0, 0, 1, 4, 1, 6, 6,10,10,10,10, 6, 6, 1, 4, 1, 0, 0],   // row 14: teeth + mouth
  [0, 0, 1, 4, 1, 6,10,10,10,10,10,10, 6, 1, 4, 1, 0, 0],   // row 15: mouth interior
  [0, 0, 1, 4, 1, 1,10,10,10,10,10,10, 1, 1, 4, 1, 0, 0],   // row 16: lower mouth
  [0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 0, 0, 0],   // row 17: jaw (gold)
  [0, 0, 0, 0, 1, 2, 3, 2, 2, 2, 2, 3, 2, 1, 0, 0, 0, 0],   // row 18: chin fur
  [0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0],   // row 19: beard
  [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0],   // row 20: beard tassel
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],   // row 21: beard tip
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


// ===== Sparkle Field =====
function createSparkleField() {
  const field = document.getElementById('sparkle-field');
  if (!field) return;
  const colors = ['#00ffff', '#ff00ff', '#ffd700', '#ffffff', '#ff69b4', '#ff2244'];
  for (let i = 0; i < 80; i++) {
    const spark = document.createElement('div');
    spark.className = 'sparkle';
    spark.style.left = (Math.random() * 100) + 'vw';
    spark.style.top = (Math.random() * 100) + 'vh';
    spark.style.animationDelay = (Math.random() * 5) + 's';
    spark.style.animationDuration = (1 + Math.random() * 3) + 's';
    spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    field.appendChild(spark);
  }
}


// ===== Click Sparkle Burst =====
function initClickSparkles() {
  const colors = ['#ffd700', '#ff00ff', '#00ffff', '#ff2244', '#00ff00', '#ff69b4'];
  document.addEventListener('click', function(e) {
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'click-spark';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      const angle = (Math.PI * 2 * i) / 12;
      const dist = 30 + Math.random() * 50;
      particle.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
      particle.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
      document.body.appendChild(particle);
      particle.addEventListener('animationend', function() {
        particle.remove();
      });
    }
  });
}


// ===== Sparkle Burst Effect (for grow moment) =====
function createSparkBurst(x, y) {
  const colors = ['#ffd700', '#ff00ff', '#00ffff', '#ffffff', '#ff2244'];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'click-spark';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / 20;
    const dist = 50 + Math.random() * 80;
    particle.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
    particle.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
    document.body.appendChild(particle);
    particle.addEventListener('animationend', function() {
      particle.remove();
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

  // Step 1 & 2: Lions enter and walk to center (after 0.5s delay)
  setTimeout(function() {
    leftLion.classList.add('animate-enter');
    rightLion.classList.add('animate-enter');
  }, 500);

  // Step 3: Scale up when they reach center (after entrance finishes at ~2.5s)
  setTimeout(function() {
    leftLion.classList.remove('animate-enter');
    rightLion.classList.remove('animate-enter');
    leftLion.classList.add('animate-grow');
    rightLion.classList.add('animate-grow');

    // Sparkle burst at center of stage
    var stage = document.querySelector('.lion-dance-area');
    if (stage) {
      var rect = stage.getBoundingClientRect();
      createSparkBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }, 2700);

  // Step 4: Scroll unfurls (after grow finishes at ~3.7s)
  setTimeout(function() {
    // Switch to idle animation
    leftLion.classList.remove('animate-grow');
    rightLion.classList.remove('animate-grow');
    leftLion.classList.add('animate-idle');
    rightLion.classList.add('animate-idle');

    scrollEl.classList.add('animate-unfurl');
  }, 4000);

  // Step 5: Greeting text fades in
  setTimeout(function() {
    greetingText.classList.add('animate-fadein');
  }, 5200);

  // Add glow pulse to scroll after everything settles
  setTimeout(function() {
    scrollEl.style.animation = 'pulseGlow 3s ease-in-out infinite';
  }, 6500);
}


// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', function() {
  applyPixelArt();
  createSparkleField();
  initClickSparkles();
  startAnimation();
});
