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
    '<path d="M11.76 14.102a.97.97 0 01-.035 1.278l3.874 6.9a1.008 1.008 0 01.86.005l3.762-6.788a.976.976 0 01-.025-1.532l-4.074-7.4c-.056-.024-.072-.015-.08-.001zm-.41 1.534a1.01 1.01 0 01-.496.06l-2.492 4.387c.238.503.52.984.844 1.438.763.18 2.713.644 5.851 1.396a.974.974 0 01.181-.356zm-.539-1.883a1.02 1.02 0 01.586.073L15.559 6.5c-3.12.05-5.731.635-7.835 1.754zm-.42.176L7.335 8.483a.889.889 0 00-.332.748l.462 7.382a9.464 9.464 0 00.671 2.953l2.29-4.03a.977.977 0 01-.033-1.607zm6.6 8.998L22.88 21.4c.272-.397.514-.813.724-1.245l-2.474-4.494a1.013 1.013 0 01-.496.024l-3.818 6.887c.08.104.141.224.175.355zm-.741 1.2v2.361a.914.914 0 00.244-.11l3.623-2.313a9.661 9.661 0 002.336-2.092l-5.456 1.415a.993.993 0 01-.747.74zm-.454 0a.992.992 0 01-.75-.753 2530.22 2530.22 0 00-5.409-1.29 9.664 9.664 0 002.246 1.981l3.623 2.314c.09.058.189.098.29.121zm5.37-10.334l3.08-5.555c-2.062-1.09-4.609-1.668-7.641-1.735l3.997 7.262a1.016 1.016 0 01.564.028zm.383.241a.973.973 0 01-.027 1.402l2.313 4.203a9.465 9.465 0 00.7-3.025l.463-7.383a.89.89 0 00-.36-.769zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-20.765a.55.55 0 01.541.533v1.954l2.886 1.778-.353.711-2.533-.89v1.955l.722.533v.533L16 17.987l-1.263.355v-.533l.722-.533v-1.954l-2.577.844-.31-.667 2.887-1.777v-1.954a.55.55 0 01.541-.533z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#0092b5" r="16"/><path d="M11.76 14.102l4.282-7.538c.008-.014.024-.023.08 0l4.074 7.401a.976.976 0 00.025 1.532l-3.763 6.788a1.008 1.008 0 00-.86-.006l-3.873-6.899a.971.971 0 00.034-1.278zm-.41 1.534l3.888 6.925a.974.974 0 00-.18.356c-3.139-.752-5.089-1.217-5.852-1.396a9.556 9.556 0 01-.844-1.438l2.492-4.386a1.024 1.024 0 00.496-.06zm-.539-1.883l-3.087-5.5C9.828 7.136 12.439 6.55 15.559 6.5l-4.162 7.326a1.008 1.008 0 00-.586-.073zm-.42.176a.977.977 0 00.034 1.608l-2.29 4.03a9.464 9.464 0 01-.67-2.954l-.463-7.382a.889.889 0 01.332-.748zm6.6 8.998a.974.974 0 00-.175-.355l3.818-6.887a1.018 1.018 0 00.496-.024l2.474 4.494c-.21.432-.452.848-.724 1.245zm-.741 1.2a.993.993 0 00.747-.739l5.456-1.415a9.661 9.661 0 01-2.336 2.092l-3.623 2.314a.914.914 0 01-.244.11zm-.454 0V26.5a.915.915 0 01-.29-.121l-3.623-2.314a9.664 9.664 0 01-2.246-1.982c.99.235 2.793.665 5.409 1.291.08.373.374.668.75.754zm5.37-10.334a1.011 1.011 0 00-.564-.028l-3.997-7.262c3.032.067 5.58.646 7.641 1.735zm.383.241l3.09-5.572a.89.89 0 01.36.769l-.463 7.383a9.465 9.465 0 01-.7 3.025l-2.314-4.203a.974.974 0 00.027-1.402zM16 11.234a.55.55 0 00-.541.534v1.954L12.573 15.5l.309.667 2.577-.844v1.954l-.722.533v.533L16 17.987l1.263.355v-.533l-.722-.533v-1.954l2.533.89.353-.712-2.886-1.778v-1.954a.55.55 0 00-.54-.533z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.76 13.102l4.282-7.538c.008-.014.024-.023.08 0l4.074 7.401a.976.976 0 00.025 1.532l-3.763 6.788a1.008 1.008 0 00-.86-.006l-3.873-6.899a.971.971 0 00.034-1.278zm-.41 1.534l3.888 6.925a.974.974 0 00-.18.356c-3.139-.752-5.089-1.217-5.852-1.396a9.556 9.556 0 01-.844-1.438l2.492-4.386a1.024 1.024 0 00.496-.06zm-.539-1.883l-3.087-5.5C9.828 6.136 12.439 5.55 15.559 5.5l-4.162 7.326a1.008 1.008 0 00-.586-.073zm-.42.176a.977.977 0 00.034 1.608l-2.29 4.03a9.464 9.464 0 01-.67-2.954l-.463-7.382a.889.889 0 01.332-.748l3.058 5.446zm6.6 8.998a.974.974 0 00-.175-.355l3.818-6.887a1.018 1.018 0 00.496-.024l2.474 4.494c-.21.432-.452.848-.724 1.245l-5.89 1.527zm-.741 1.2a.993.993 0 00.747-.739l5.456-1.415a9.661 9.661 0 01-2.336 2.092l-3.623 2.314a.914.914 0 01-.244.11v-2.361zm-.454 0V25.5a.915.915 0 01-.29-.121l-3.623-2.314a9.664 9.664 0 01-2.246-1.982c.99.235 2.793.665 5.409 1.291.08.373.374.668.75.754zm5.37-10.334a1.011 1.011 0 00-.564-.028l-3.997-7.262c3.032.067 5.58.646 7.641 1.735l-3.08 5.555zm.383.241l3.09-5.572a.89.89 0 01.36.769l-.463 7.383a9.465 9.465 0 01-.7 3.025l-2.314-4.203a.974.974 0 00.027-1.402zM16 10.234a.55.55 0 00-.541.534v1.954L12.573 14.5l.309.667 2.577-.844v1.954l-.722.533v.533L16 16.987l1.263.355v-.533l-.722-.533v-1.954l2.533.89.353-.712-2.886-1.778v-1.954a.55.55 0 00-.54-.533z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0092B5" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M11.76 14.102a.97.97 0 01-.035 1.278l3.874 6.9a1.008 1.008 0 01.86.005l3.762-6.788a.976.976 0 01-.025-1.532l-4.074-7.4c-.056-.024-.072-.015-.08-.001zm-.41 1.534a1.01 1.01 0 01-.496.06l-2.492 4.387c.238.503.52.984.844 1.438.763.18 2.713.644 5.851 1.396a.974.974 0 01.181-.356zm-.539-1.883a1.02 1.02 0 01.586.073L15.559 6.5c-3.12.05-5.731.635-7.835 1.754zm-.42.176L7.335 8.483a.889.889 0 00-.332.748l.462 7.382a9.464 9.464 0 00.671 2.953l2.29-4.03a.977.977 0 01-.033-1.607zm6.6 8.998L22.88 21.4c.272-.397.514-.813.724-1.245l-2.474-4.494a1.013 1.013 0 01-.496.024l-3.818 6.887c.08.104.141.224.175.355zm-.741 1.2v2.361a.914.914 0 00.244-.11l3.623-2.313a9.661 9.661 0 002.336-2.092l-5.456 1.415a.993.993 0 01-.747.74zm-.454 0a.992.992 0 01-.75-.753 2530.22 2530.22 0 00-5.409-1.29 9.664 9.664 0 002.246 1.981l3.623 2.314c.09.058.189.098.29.121zm5.37-10.334l3.08-5.555c-2.062-1.09-4.609-1.668-7.641-1.735l3.997 7.262a1.016 1.016 0 01.564.028zm.383.241a.973.973 0 01-.027 1.402l2.313 4.203a9.465 9.465 0 00.7-3.025l.463-7.383a.89.89 0 00-.36-.769zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-20.765a.55.55 0 01.541.533v1.954l2.886 1.778-.353.711-2.533-.89v1.955l.722.533v.533L16 17.987l-1.263.355v-.533l.722-.533v-1.954l-2.577.844-.31-.667 2.887-1.777v-1.954a.55.55 0 01.541-.533z" fill="#fff"/>';
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
  export let ariaLabel = 'arn';
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
[Go to docs](https://svelte-cryptocurrency-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'arn';
-->
