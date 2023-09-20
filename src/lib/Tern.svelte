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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.983-16.226v-.23l-4.52 2.628v-1.31l4.52-2.627V9.387L15.99 3l-5.495 3.194-.198.115 4.52 2.627-1.126.654-4.52-2.627L5 9.387v12.774l5.495 3.194.199.115v-5.254l1.126.654v5.255l4.172 2.423 10.991-6.387v-6.387zm-5.695-2.424l-4.55 2.646v5.502l-.746.433-.563-.327v-5.29l-4.735-2.752v-.866l.563-.328 4.552 2.645 4.735-2.75.745.433v.655zM14.83 6.27l1.161-.674 8.758 5.09v2.175l-1.16.674v-2.176L20.542 9.59l-4.734 2.751-1.127-.654 4.735-2.752L14.83 6.27zM8.395 21.54l-1.162-.675v-10.18l1.872-1.088 1.162.674-1.872 1.089v3.538l4.734 2.752v1.309l-4.734-2.751v5.33zm16.355-2.025v1.35l-8.758 5.09-1.872-1.089v-1.35l1.872 1.088 3.045-1.769v-5.502l1.126-.655v5.503l4.587-2.666z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F4C257"/><path d="M8.395 21.539l-1.162-.675V10.685l1.872-1.088 1.162.674-1.872 1.089v3.538l4.734 2.752v1.309l-4.734-2.751v5.33zm16.355-2.025v1.35l-8.758 5.09-1.872-1.089v-1.35l1.872 1.088 3.045-1.769v-5.502l1.126-.655v5.503l4.587-2.666zm2.233-3.74v-.23l-4.52 2.628v-1.31l4.52-2.627V9.387L15.99 3l-5.495 3.194-.198.115 4.52 2.627-1.126.654-4.52-2.627L5 9.387v12.774l5.495 3.194.199.115v-5.254l1.126.654v5.255l4.172 2.423 10.991-6.387v-6.387zm-5.695-2.424l-4.55 2.646v5.502l-.746.433-.563-.327v-5.29l-4.735-2.752v-.866l.563-.328 4.552 2.645 4.735-2.75.745.433v.655zM14.83 6.27l1.161-.674 8.758 5.09v2.175l-1.16.674v-2.176L20.542 9.59l-4.734 2.751-1.127-.654 4.735-2.752L14.83 6.27z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F4C257" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M9.086 19.853L8.03 19.24V9.986l1.702-.989 1.056.613-1.702.99v3.217l4.304 2.5v1.191l-4.304-2.5v4.845zm14.869-1.84v1.227l-7.962 4.626-1.703-.989v-1.226l1.702.989 2.768-1.609v-5.002l1.024-.595v5.002l4.17-2.423zm2.03-3.4v-.21l-4.11 2.39v-1.19l4.11-2.39V8.807L15.991 3l-4.996 2.903-.18.105 4.11 2.388-1.024.595-4.11-2.388L6 8.806V20.42l4.996 2.904.18.104v-4.776l1.024.595v4.777l3.792 2.203 9.993-5.807v-5.806zm-5.177-2.204l-4.138 2.406v5.002l-.677.393-.513-.297v-4.81l-4.304-2.501v-.788l.512-.298 4.138 2.405 4.304-2.5.678.393v.596zm-5.871-6.436l1.055-.613 7.962 4.627v1.977l-1.055.613V10.6L20.13 8.991l-4.304 2.501-1.024-.595 4.304-2.501-4.17-2.423z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.983-16.226v-.23l-4.52 2.628v-1.31l4.52-2.627V9.387L15.99 3l-5.495 3.194-.198.115 4.52 2.627-1.126.654-4.52-2.627L5 9.387v12.774l5.495 3.194.199.115v-5.254l1.126.654v5.255l4.172 2.423 10.991-6.387v-6.387zm-5.695-2.424l-4.55 2.646v5.502l-.746.433-.563-.327v-5.29l-4.735-2.752v-.866l.563-.328 4.552 2.645 4.735-2.75.745.433v.655zM14.83 6.27l1.161-.674 8.758 5.09v2.175l-1.16.674v-2.176L20.542 9.59l-4.734 2.751-1.127-.654 4.735-2.752L14.83 6.27zM8.395 21.54l-1.162-.675v-10.18l1.872-1.088 1.162.674-1.872 1.089v3.538l4.734 2.752v1.309l-4.734-2.751v5.33zm16.355-2.025v1.35l-8.758 5.09-1.872-1.089v-1.35l1.872 1.088 3.045-1.769v-5.502l1.126-.655v5.503l4.587-2.666z" fill="#FFF"/>';
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
  export let ariaLabel = 'tern';
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
@prop export let ariaLabel = 'tern';
-->
