import { writeFileSync } from "fs";
import { execSync } from "child_process";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
  <!-- Background -->
  <rect width="1200" height="400" fill="#0a0a0a"/>

  <!-- Grid lines vertical -->
  ${Array.from({length: 25}, (_,i) => `<line x1="${i*50}" y1="0" x2="${i*50}" y2="400" stroke="#7B5CF6" stroke-width="0.4" opacity="0.12"/>`).join("\n  ")}
  <!-- Grid lines horizontal -->
  ${Array.from({length: 9}, (_,i) => `<line x1="0" y1="${i*50}" x2="1200" y2="${i*50}" stroke="#7B5CF6" stroke-width="0.4" opacity="0.12"/>`).join("\n  ")}

  <!-- Molecule (right side) -->
  <!-- hexagon -->
  <polygon points="960,80 1080,150 1080,270 960,320 840,270 840,150"
    stroke="#7B5CF6" stroke-width="2" fill="none" opacity="0.7"/>
  <!-- spokes -->
  <line x1="960" y1="200" x2="960" y2="80"  stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <line x1="960" y1="200" x2="1080" y2="150" stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <line x1="960" y1="200" x2="1080" y2="270" stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <line x1="960" y1="200" x2="960" y2="320"  stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <line x1="960" y1="200" x2="840" y2="270"  stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <line x1="960" y1="200" x2="840" y2="150"  stroke="#7B5CF6" stroke-width="1.5" opacity="0.7"/>
  <!-- outer nodes -->
  <circle cx="960"  cy="80"  r="8" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="1080" cy="150" r="8" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="1080" cy="270" r="8" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="960"  cy="320" r="8" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="840"  cy="270" r="8" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="840"  cy="150" r="8" fill="#7B5CF6" opacity="0.9"/>
  <!-- center node -->
  <circle cx="960" cy="200" r="16" fill="#7B5CF6" opacity="0.9"/>
  <circle cx="960" cy="200" r="8"  fill="#0a0a0a"/>

  <!-- Left content -->
  <!-- Title -->
  <text x="80" y="160" font-family="DM Sans, Arial, sans-serif" font-size="88" font-weight="700" letter-spacing="-3">
    <tspan fill="#ffffff">AI</tspan><tspan fill="#7B5CF6">Workshop</tspan>
  </text>

  <!-- Subtitle -->
  <text x="80" y="198" font-family="monospace" font-size="13" fill="#888888" letter-spacing="4">
    GENERATIVE AI TRAINING PLATFORM
  </text>

  <!-- Tags -->
  <!-- Prompt Engineering -->
  <rect x="80" y="224" width="192" height="34" rx="6" fill="none" stroke="#7B5CF6" stroke-width="1.2" opacity="0.7"/>
  <text x="176" y="246" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="13" fill="#7B5CF6">Prompt Engineering</text>

  <!-- MCP Tools -->
  <rect x="284" y="224" width="110" height="34" rx="6" fill="none" stroke="#7B5CF6" stroke-width="1.2" opacity="0.7"/>
  <text x="339" y="246" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="13" fill="#7B5CF6">MCP Tools</text>

  <!-- AI for Builders -->
  <rect x="406" y="224" width="130" height="34" rx="6" fill="none" stroke="#7B5CF6" stroke-width="1.2" opacity="0.7"/>
  <text x="471" y="246" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="13" fill="#7B5CF6">AI for Builders</text>

  <!-- Bottom divider -->
  <line x1="80" y1="320" x2="480" y2="320" stroke="#7B5CF6" stroke-width="0.8" opacity="0.4"/>
  <circle cx="480" cy="320" r="3" fill="#7B5CF6" opacity="0.6"/>

  <!-- Bottom text -->
  <text x="80" y="350" font-family="monospace" font-size="12" fill="#555555" letter-spacing="1">
    TAIKAI · Hacklayer 4_1 MCP Edition
  </text>
</svg>`;

writeFileSync("cover.svg", svg);
console.log("SVG saved.");

execSync(`node -e "require('sharp')('cover.svg').resize(1200,400).png().toFile('public/cover.png').then(()=>console.log('PNG saved to public/cover.png')).catch(e=>console.error(e))"`, { stdio: "inherit" });
