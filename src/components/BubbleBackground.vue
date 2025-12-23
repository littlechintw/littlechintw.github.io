<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref(null);
let ctx = null;
let animationFrameId = null;
let bubbles = [];
const mouse = { x: undefined, y: undefined };

const props = defineProps({
  bubbleCount: {
    type: Number,
    default: 60
  }
});

class Bubble {
  constructor(canvasWidth, canvasHeight) {
    this.init(canvasWidth, canvasHeight);
  }

  init(canvasWidth, canvasHeight) {
    this.radius = Math.random() * 15 + 5;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.baseAlpha = Math.random() * 0.15 + 0.05;
    this.color = `rgba(255, 255, 255, ${this.baseAlpha})`;
    
    // Lifecycle
    this.state = 'growing'; // growing, stable, popping
    this.growthProgress = 0;
    this.growthSpeed = 0.01 + Math.random() * 0.02;
    this.life = 200 + Math.random() * 500; // Frames to live in stable state
    this.popProgress = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    
    if (this.state === 'growing') {
      // Draw sector (pie slice)
      ctx.moveTo(this.x, this.y);
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2 * this.growthProgress);
      ctx.lineTo(this.x, this.y);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else if (this.state === 'stable') {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else if (this.state === 'popping') {
      // Pop effect: expand and fade
      const scale = 1 + this.popProgress * 0.5;
      const alpha = this.baseAlpha * (1 - this.popProgress);
      
      // Fill
      ctx.arc(this.x, this.y, this.radius * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
      
      // Ring
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * scale, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  update(canvasWidth, canvasHeight, mouse) {
    // State transitions
    if (this.state === 'growing') {
      this.growthProgress += this.growthSpeed;
      if (this.growthProgress >= 1) {
        this.growthProgress = 1;
        this.state = 'stable';
      }
    } else if (this.state === 'stable') {
      this.life--;
      if (this.life <= 0) {
        this.state = 'popping';
      }
    } else if (this.state === 'popping') {
      this.popProgress += 0.05;
      if (this.popProgress >= 1) {
        // Respawn
        this.init(canvasWidth, canvasHeight);
        return;
      }
    }

    // Mouse interaction
    if (mouse.x !== undefined && mouse.y !== undefined) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = 250;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const force = (minDistance - distance) / minDistance;
        const pushX = Math.cos(angle) * force * 12;
        const pushY = Math.sin(angle) * force * 12;
        
        this.x -= pushX;
        this.y -= pushY;
      }
    }

    // Move
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }
}

const init = () => {
  if (!canvas.value) return;
  const width = canvas.value.width = canvas.value.offsetWidth;
  const height = canvas.value.height = canvas.value.offsetHeight;
  
  bubbles = [];
  for (let i = 0; i < props.bubbleCount; i++) {
    bubbles.push(new Bubble(width, height));
  }
};

const animate = () => {
  if (!canvas.value) return;
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
  // Draw lines between bubbles
  for (let i = 0; i < bubbles.length; i++) {
    // Skip if popping
    if (bubbles[i].state === 'popping') continue;

    for (let j = i + 1; j < bubbles.length; j++) {
      // Skip if popping
      if (bubbles[j].state === 'popping') continue;

      const dx = bubbles[i].x - bubbles[j].x;
      const dy = bubbles[i].y - bubbles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / maxDistance)})`;
        ctx.lineWidth = 2;
        ctx.moveTo(bubbles[i].x, bubbles[i].y);
        ctx.lineTo(bubbles[j].x, bubbles[j].y);
        ctx.stroke();
      }
    }
  }

  bubbles.forEach(bubble => {
    bubble.update(canvas.value.width, canvas.value.height, mouse);
    bubble.draw(ctx);
  });
  
  animationFrameId = requestAnimationFrame(animate);
};

const handleMouseMove = (e) => {
  if (!canvas.value) return;
  const rect = canvas.value.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
};

const handleMouseLeave = () => {
  mouse.x = undefined;
  mouse.y = undefined;
};

const handleResize = () => {
  init();
};

onMounted(() => {
  ctx = canvas.value.getContext('2d');
  init();
  animate();
  
  window.addEventListener('resize', handleResize);
  // Listen on window to catch mouse even if it's over other elements, 
  // but we need to check if it's over the canvas area effectively.
  // Actually, since the canvas is in the background, we want the effect to happen 
  // when the mouse is over the container.
  // Let's attach to the parent element if possible, but here we can just use window and check bounds or just use window coordinates relative to canvas.
  // Using window listener is safer for "dodging" even if cursor is slightly outside or on top of other elements.
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseout', handleMouseLeave);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseout', handleMouseLeave);
  cancelAnimationFrame(animationFrameId);
});
</script>
