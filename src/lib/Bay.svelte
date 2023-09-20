<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    variation?: 'black' | 'color' | 'icon' | 'white';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '32';
  export let role: string = ctx.role || 'img';
  export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
  let svgpath: string;
  let svgblack =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.784-16.026c.058-.065.123-.13.188-.196.21-.226.44-.467.657-.7a4.875 4.875 0 001.357-3.369c0-.087.014-.445.014-.496C24.899 8.341 22.481 6 19.623 6h-9v3.631H7V26h12.767C22.604 26 25 23.477 25 20.488c.007-2.137-1.314-3.646-2.216-4.514zm-3.017 8.196H8.804V11.447h1.82v10.915h8.92c.736 0 1.393-.445 1.674-1.13a1.832 1.832 0 00-.39-1.991l-3.182-3.223 3.233-3.274c.52-.525.671-1.305.39-1.99a1.808 1.808 0 00-1.675-1.13h-7.16V7.816h7.196c1.906 0 3.508 1.553 3.573 3.441 0 .08-.015.394-.015.401v.036a3.054 3.054 0 01-.858 2.122c-.224.234-.455.481-.664.7-.354.372-.657.693-.802.839l-.65.641.643.65c.087.087.195.189.325.313.75.7 2.014 1.866 2.014 3.514.007 1.969-1.595 3.697-3.429 3.697zm-7.34-12.716l7.167.007-4.503 4.565 4.453 4.52h-7.117z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#6356ab" r="16"/><path d="M22.784 15.974c.058-.065.123-.13.188-.196.21-.226.44-.467.657-.7a4.875 4.875 0 001.357-3.369c0-.087.014-.445.014-.496C24.899 8.341 22.481 6 19.623 6h-9v3.631H7V26h12.767C22.604 26 25 23.477 25 20.488c.007-2.137-1.314-3.646-2.216-4.514zm-10.357-4.52l7.167.007-4.503 4.565 4.453 4.52h-7.117zm7.34 12.716H8.804V11.447h1.82v10.915h8.92c.736 0 1.393-.445 1.674-1.13a1.832 1.832 0 00-.39-1.991l-3.182-3.223 3.233-3.274c.52-.525.671-1.305.39-1.99a1.808 1.808 0 00-1.675-1.13h-7.16V7.816h7.196c1.906 0 3.508 1.553 3.573 3.441 0 .08-.015.394-.015.401v.036a3.054 3.054 0 01-.858 2.122c-.224.234-.455.481-.664.7-.354.372-.657.693-.802.839l-.65.641.643.65c.087.087.195.189.325.313.75.7 2.014 1.866 2.014 3.514.007 1.969-1.595 3.697-3.429 3.697z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.8%" height="116.7%" x="-9.4%" y="-8.3%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M22.03 14.977c.052-.059.11-.118.167-.177.186-.204.392-.42.584-.63a4.417 4.417 0 001.206-3.032c0-.079.013-.4.013-.446C23.91 8.106 21.761 6 19.22 6h-8v3.268H8V24h11.349C21.87 24 24 21.73 24 19.039c.006-1.923-1.168-3.281-1.97-4.062zm-9.206-4.069l6.37.007-4.002 4.108 3.958 4.069h-6.326v-8.184zm6.525 11.445H9.604V10.902h1.617v9.823h7.929c.654 0 1.238-.4 1.488-1.017a1.664 1.664 0 00-.346-1.791l-2.83-2.9 2.875-2.947a1.664 1.664 0 00.346-1.791 1.607 1.607 0 00-1.488-1.018H12.83V7.634h6.396c1.694 0 3.118 1.398 3.176 3.097 0 .072-.013.355-.013.361v.033c0 .958-.475 1.608-.764 1.91-.199.21-.404.433-.59.63-.314.334-.584.623-.712.754l-.577.578.57.584c.078.078.174.17.29.282.666.63 1.79 1.68 1.79 3.163.006 1.772-1.419 3.327-3.048 3.327z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#6356AB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.784-16.026c.058-.065.123-.13.188-.196.21-.226.44-.467.657-.7a4.875 4.875 0 001.357-3.369c0-.087.014-.445.014-.496C24.899 8.341 22.481 6 19.623 6h-9v3.631H7V26h12.767C22.604 26 25 23.477 25 20.488c.007-2.137-1.314-3.646-2.216-4.514zm-3.017 8.196H8.804V11.447h1.82v10.915h8.92c.736 0 1.393-.445 1.674-1.13a1.832 1.832 0 00-.39-1.991l-3.182-3.223 3.233-3.274c.52-.525.671-1.305.39-1.99a1.808 1.808 0 00-1.675-1.13h-7.16V7.816h7.196c1.906 0 3.508 1.553 3.573 3.441 0 .08-.015.394-.015.401v.036a3.054 3.054 0 01-.858 2.122c-.224.234-.455.481-.664.7-.354.372-.657.693-.802.839l-.65.641.643.65c.087.087.195.189.325.313.75.7 2.014 1.866 2.014 3.514.007 1.969-1.595 3.697-3.429 3.697zm-7.34-12.716l7.167.007-4.503 4.565 4.453 4.52h-7.117z" fill="#fff" fill-rule="evenodd"/>';
  switch (variation) {
    case 'black':
      svgpath = svgblack;
      break;
    case 'color':
      svgpath = svgcolor;
      break;
    case 'icon':
      svgpath = svgicon;
      break;
    case 'white':
      svgpath = svgwhite;
      break;
    default:
      svgpath = svgcolor;
  }
  export let ariaLabel = 'bay';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 32 32"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-cryptocurrency-icons.vercel.app)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'bay';
-->
