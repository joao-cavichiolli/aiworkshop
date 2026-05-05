import { writeFileSync } from "fs";
import { execSync } from "child_process";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <!-- Background -->
  <rect width="400" height="400" fill="#0a0a0a" rx="40"/>

  <!-- Dashed outer circle -->
  <circle cx="200" cy="170" r="130" stroke="#7B5CF6" stroke-width="1.5" stroke-dasharray="7 5" fill="none" opacity="0.6"/>

  <!-- Hexagon -->
  <polygon points="200,60 290,110 290,210 200,260 110,210 110,110"
    stroke="#7B5CF6" stroke-width="2" fill="none"/>

  <!-- Spokes center to vertices -->
  <line x1="200" y1="160" x2="200" y2="60"  stroke="#7B5CF6" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="290" y2="110" stroke="#7B5CF6" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="290" y2="210" stroke="#7B5CF6" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="200" y2="260" stroke="#7B5CF6" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="110" y2="210" stroke="#7B5CF6" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="110" y2="110" stroke="#7B5CF6" stroke-width="1.5"/>

  <!-- Outer nodes -->
  <circle cx="200" cy="60"  r="7" fill="#7B5CF6"/>
  <circle cx="290" cy="110" r="7" fill="#7B5CF6"/>
  <circle cx="290" cy="210" r="7" fill="#7B5CF6"/>
  <circle cx="200" cy="260" r="7" fill="#7B5CF6"/>
  <circle cx="110" cy="210" r="7" fill="#7B5CF6"/>
  <circle cx="110" cy="110" r="7" fill="#7B5CF6"/>

  <!-- Center node -->
  <circle cx="200" cy="160" r="14" fill="#7B5CF6"/>
  <circle cx="200" cy="160" r="7"  fill="#0a0a0a"/>

  <!-- AIWorkshop text -->
  <text x="200" y="316" text-anchor="middle"
    font-family="DM Sans, Arial, sans-serif" font-size="36" font-weight="700" letter-spacing="-1">
    <tspan fill="#ffffff">AI</tspan><tspan fill="#7B5CF6">Workshop</tspan>
  </text>

  <!-- Subtitle -->
  <text x="200" y="346" text-anchor="middle"
    font-family="monospace" font-size="11" fill="#7B5CF6" letter-spacing="3" opacity="0.8">
    GENERATIVE AI TRAINING
  </text>
</svg>`;

writeFileSync("logo.svg", svg);
console.log("SVG saved.");

// Try to convert with sharp
try {
  execSync("node -e \"require('sharp')('logo.svg').resize(400,400).png().toFile('public/logo.png').then(()=>console.log('PNG saved to public/logo.png')).catch(e=>console.error(e))\"", { stdio: "inherit" });
} catch {
  console.log("sharp not available, trying Inkscape...");
  try {
    execSync("inkscape logo.svg --export-png=public/logo.png --export-width=400", { stdio: "inherit" });
  } catch {
    console.log("Inkscape not found. SVG saved as logo.svg — convert manually or install sharp: npm install sharp");
  }
}
