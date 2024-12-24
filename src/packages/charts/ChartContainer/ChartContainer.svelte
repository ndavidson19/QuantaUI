<script lang="ts">
    import { cn } from '$utils/cn';
  
    interface $$Props {
      width?: string;
      height?: string;
      class?: string;
    }
  
    export let width: $$Props['width'] = 'w-full';
    export let height: $$Props['height'] = 'h-64';
  
    // SVG viewport calculations
    export let padding = { top: 20, right: 30, bottom: 30, left: 40 };
    export let viewBox = `0 0 800 400`;
  </script>
  
  <div class={cn('relative', width, height, $$props.class)}>
    <svg
      {viewBox}
      preserveAspectRatio="xMidYMid meet"
      class="w-full h-full"
    >
      <g 
        transform={`translate(${padding.left},${padding.top})`}
      >
        <slot />
      </g>
    </svg>
  </div>