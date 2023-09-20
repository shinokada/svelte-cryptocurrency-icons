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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.671 12C5.423 12 4 13.695 4 15.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C11.345 13.683 9.922 12 7.67 12zm16.687.002c-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266v-3.916h-3.41v1.26h2.102l-.027.172c-.184.95-.928 1.396-1.867 1.396-1.423 0-2.216-1.046-2.216-2.553 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39l-.026-.19c-.26-1.554-1.505-2.416-3.164-2.416zm-10.331.176H12.3v7.323h1.245v-5.159l1.884 5.159h1.224l1.882-5.159v5.159h1.276v-7.323h-1.725l-2.03 5.598-2.03-5.598zm-6.356 1.13c1.433 0 2.293 1.089 2.293 2.537 0 1.447-.858 2.538-2.293 2.538-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#101010" cx="16" cy="16" r="16"/><path d="M16.057 17.776l-2.03-5.598H12.3v7.323h1.245v-5.159l1.884 5.159h1.224l1.882-5.159v5.159h1.276v-7.323h-1.725zM7.671 12C5.423 12 4 13.695 4 15.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C11.345 13.683 9.922 12 7.67 12zm0 6.383c-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541s2.293 1.088 2.293 2.536c0 1.447-.858 2.538-2.293 2.538zm16.467-1.547h2.102c-.124 1.068-.9 1.57-1.894 1.57-1.423 0-2.216-1.047-2.216-2.554 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39c-.188-1.674-1.465-2.606-3.19-2.606-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266v-3.916h-3.41v1.26z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-15.6%" y="-46.9%" width="131.2%" height="193.8%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#101010" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(4 11)" fill="#FFF" fill-rule="nonzero"><path d="M12.057 5.776L10.027.178H8.3v7.323h1.245V2.342l1.884 5.159h1.224l1.882-5.159v5.159h1.276V.178h-1.725zM3.671 0C1.423 0 0 1.695 0 3.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C7.345 1.683 5.922 0 3.67 0zm0 6.383c-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541s2.293 1.088 2.293 2.536c0 1.447-.858 2.538-2.293 2.538zm16.467-1.547h2.102c-.124 1.068-.9 1.57-1.894 1.57-1.423 0-2.216-1.047-2.216-2.554 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39C23.36.934 22.083.002 20.358.002c-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266V3.577h-3.41v1.26z"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.671 12C5.423 12 4 13.695 4 15.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C11.345 13.683 9.922 12 7.67 12zm16.687.002c-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266v-3.916h-3.41v1.26h2.102l-.027.172c-.184.95-.928 1.396-1.867 1.396-1.423 0-2.216-1.046-2.216-2.553 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39l-.026-.19c-.26-1.554-1.505-2.416-3.164-2.416zm-10.331.176H12.3v7.323h1.245v-5.159l1.884 5.159h1.224l1.882-5.159v5.159h1.276v-7.323h-1.725l-2.03 5.598-2.03-5.598zm-6.356 1.13c1.433 0 2.293 1.089 2.293 2.537 0 1.447-.858 2.538-2.293 2.538-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'omg';
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
@prop export let ariaLabel = 'omg';
-->
