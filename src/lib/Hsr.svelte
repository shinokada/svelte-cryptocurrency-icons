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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.75 7.5a4.78 4.78 0 01.815 2.74c-1.104.01-2.207.01-3.31.01C7.18 12.17 6.056 14.067 5 15.997V16c1.054 1.933 2.174 3.83 3.254 5.75h2.96v-2.313h-.969A788.677 788.677 0 018.287 16l1.955-3.437h7.867v2.27h-3.768v-1.98h-2.84c-.01 3.217.023 6.434-.01 9.647.103.943-.878 1.357-1.365 2h5.597c-.865-.697-1.61-1.53-1.454-2.74 3.317-.02 6.63-.003 9.944-.01.835-1.433 1.505-3.007 2.787-4.113-1.296-.174-2.605-.104-3.907-.137-.225.667-.507 1.31-.825 1.94-.434-.003-.868-.003-1.299-.003.01-3.324-.017-6.65.003-9.974-.05-.743.464-1.33.766-1.963h-4.384c.567.81.832 1.753.815 2.74-1.296.013-2.595.013-3.89 0-.02-.993.301-1.91.825-2.74h-4.355zm3.592 9.667h3.767v2.27h-3.767v-2.27zm6.915-6.917v2.313l.984-.003c.348.61.663 1.247.822 1.94 1.256-.063 2.518.064 3.764-.1-.023-.076-.066-.233-.09-.31-1.166-1.04-1.722-2.54-2.53-3.84h-2.95zm-3.045 11.79c.073 1.123-.772 1.774-1.495 2.46h5.637c-.765-.66-1.544-1.35-1.524-2.463-.872.003-1.747.006-2.618.003z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#56428E"/><path fill="#FFF" d="M10.75 7.5h4.354c-.524.83-.845 1.747-.825 2.74 1.295.013 2.594.013 3.89 0 .017-.987-.248-1.93-.815-2.74h4.384c-.302.633-.815 1.22-.766 1.963-.02 3.324.007 6.65-.003 9.974.43 0 .865 0 1.3.003.317-.63.599-1.273.824-1.94 1.302.033 2.611-.037 3.907.137-1.282 1.106-1.952 2.68-2.787 4.113-3.314.007-6.627-.01-9.944.01-.156 1.21.59 2.043 1.454 2.74h-5.597c.487-.643 1.468-1.057 1.365-2 .033-3.213 0-6.43.01-9.647h2.84v1.98h3.768v-2.27h-7.867L8.287 16c.65 1.147 1.302 2.292 1.958 3.437h.968v2.313H8.254C7.174 19.83 6.054 17.933 5 16v-.003c1.057-1.93 2.18-3.827 3.254-5.747 1.104 0 2.207 0 3.31-.01a4.772 4.772 0 00-.815-2.74zm3.592 9.667v2.27h3.767v-2.27h-3.767zm6.915-6.917h2.95c.808 1.3 1.364 2.8 2.53 3.84.024.077.067.234.09.31-1.246.164-2.508.037-3.764.1-.16-.693-.474-1.33-.822-1.94l-.984.003V10.25zm-3.045 11.79c.871.003 1.746 0 2.618-.003-.02 1.113.759 1.803 1.524 2.463h-5.637c.723-.686 1.568-1.337 1.495-2.46z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="120.6%" x="-8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.75 6.5h4.354c-.524.83-.845 1.747-.825 2.74 1.295.013 2.594.013 3.89 0 .017-.987-.248-1.93-.815-2.74h4.384c-.302.633-.815 1.22-.766 1.963-.02 3.324.007 6.65-.003 9.974.43 0 .865 0 1.3.003.317-.63.599-1.273.824-1.94 1.302.033 2.611-.037 3.907.137-1.282 1.106-1.952 2.68-2.787 4.113-3.314.007-6.627-.01-9.944.01-.156 1.21.59 2.043 1.454 2.74h-5.597c.487-.643 1.468-1.057 1.365-2 .033-3.213 0-6.43.01-9.647h2.84v1.98h3.768v-2.27h-7.867L8.287 15c.65 1.147 1.302 2.292 1.958 3.437h.968v2.313H8.254C7.174 18.83 6.054 16.933 5 15v-.003c1.057-1.93 2.18-3.827 3.254-5.747 1.104 0 2.207 0 3.31-.01a4.772 4.772 0 00-.815-2.74zm3.592 9.667v2.27h3.767v-2.27h-3.767zm6.915-6.917h2.95c.808 1.3 1.364 2.8 2.53 3.84.024.077.067.234.09.31-1.246.164-2.508.037-3.764.1-.16-.693-.474-1.33-.822-1.94l-.984.003V9.25zm-3.045 11.79c.871.003 1.746 0 2.618-.003-.02 1.113.759 1.803 1.524 2.463h-5.637c.723-.686 1.568-1.337 1.495-2.46z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#56428E" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.75 7.5a4.78 4.78 0 01.815 2.74c-1.104.01-2.207.01-3.31.01C7.18 12.17 6.056 14.067 5 15.997V16c1.054 1.933 2.174 3.83 3.254 5.75h2.96v-2.313h-.969A788.677 788.677 0 018.287 16l1.955-3.437h7.867v2.27h-3.768v-1.98h-2.84c-.01 3.217.023 6.434-.01 9.647.103.943-.878 1.357-1.365 2h5.597c-.865-.697-1.61-1.53-1.454-2.74 3.317-.02 6.63-.003 9.944-.01.835-1.433 1.505-3.007 2.787-4.113-1.296-.174-2.605-.104-3.907-.137-.225.667-.507 1.31-.825 1.94-.434-.003-.868-.003-1.299-.003.01-3.324-.017-6.65.003-9.974-.05-.743.464-1.33.766-1.963h-4.384c.567.81.832 1.753.815 2.74-1.296.013-2.595.013-3.89 0-.02-.993.301-1.91.825-2.74h-4.355zm3.592 9.667h3.767v2.27h-3.767v-2.27zm6.915-6.917v2.313l.984-.003c.348.61.663 1.247.822 1.94 1.256-.063 2.518.064 3.764-.1-.023-.076-.066-.233-.09-.31-1.166-1.04-1.722-2.54-2.53-3.84h-2.95zm-3.045 11.79c.073 1.123-.772 1.774-1.495 2.46h5.637c-.765-.66-1.544-1.35-1.524-2.463-.872.003-1.747.006-2.618.003z"/>';
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
  export let ariaLabel = 'hsr';
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
@prop export let ariaLabel = 'hsr';
-->
