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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.14-20.473c-.318.086-.445.421-.593.691-1.25 2.386-2.52 4.76-3.77 7.124a.696.696 0 00.096.842c.243.27.624.173.942.195.328 0 .752.053.953-.281.413-.734.773-1.511 1.186-2.256.243-.454.974-.378 1.143.097.286.723.52 1.479.816 2.202.2.475.931.475 1.154.022 1.334-2.494 2.678-4.977 4.012-7.47.276-.421-.084-1.036-.571-1.004-.466.043-1.08-.173-1.42.27-.412.712-.75 1.457-1.174 2.159-.254.388-.9.334-1.09-.087-.319-.701-.594-1.424-.9-2.126-.128-.302-.477-.475-.784-.378zm-4.363.184c-.243.01-.423.216-.529.42-1.292 2.43-2.583 4.858-3.875 7.276-.275.4.106.993.561.972.37 0 .752.032 1.122-.022.318-.086.434-.432.583-.69 1.238-2.333 2.488-4.664 3.727-7.006.2-.378-.064-.907-.477-.95a9.55 9.55 0 00-1.112 0zm13.14.021c-.254.087-.36.367-.476.583-.202.421-.456.82-.636 1.252-.2.54.487 1.09.953.767.741-.454 1.461-.95 2.192-1.414.36-.184.445-.734.159-1.026-.233-.28-.636-.216-.953-.227-.413.033-.837-.054-1.239.065zm-3.505 6.455c-.211.097-.307.346-.402.55-.127.27-.286.519-.392.8-.148.388.17.863.572.863.805.01 1.62 0 2.435 0 .381.032.71-.345.667-.734-.01-.291-.264-.496-.508-.604-.572-.27-1.133-.573-1.694-.853-.201-.108-.466-.151-.678-.022z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#df1a14" r="16"/><path d="M14.86 11.527c.307-.097.656.076.783.378.307.702.582 1.425.9 2.126.19.421.837.475 1.09.087.424-.702.763-1.447 1.176-2.16.339-.442.953-.226 1.419-.269.487-.032.847.583.571 1.004-1.334 2.493-2.678 4.976-4.012 7.47-.223.453-.953.453-1.154-.022-.297-.723-.53-1.479-.816-2.202-.17-.475-.9-.55-1.143-.097-.413.745-.773 1.522-1.186 2.256-.201.334-.625.28-.953.28-.318-.021-.699.076-.942-.194a.696.696 0 01-.096-.842c1.25-2.364 2.52-4.738 3.77-7.124.148-.27.275-.605.593-.69zm-4.363.184a9.55 9.55 0 011.112 0c.413.043.678.572.477.95-1.24 2.342-2.489 4.673-3.727 7.005-.149.26-.265.605-.583.69-.37.055-.751.023-1.122.023-.455.021-.836-.573-.561-.972 1.292-2.418 2.583-4.847 3.875-7.275.106-.205.286-.41.53-.421zm13.14.021c.402-.119.826-.032 1.239-.065.317.011.72-.054.953.227.286.292.2.842-.16 1.026-.73.464-1.45.96-2.19 1.414-.467.323-1.155-.227-.954-.767.18-.432.434-.83.636-1.252.116-.216.222-.496.476-.583zm-3.505 6.455c.212-.13.477-.086.678.022.561.28 1.122.583 1.694.853.244.108.498.313.508.604.043.389-.286.766-.667.734-.815 0-1.63.01-2.435 0-.402 0-.72-.475-.572-.863.106-.281.265-.53.392-.8.095-.204.19-.453.402-.55z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="138.9%" x="-8.8%" y="-13.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.86 10.527c.307-.097.656.076.783.378.307.702.582 1.425.9 2.126.19.421.837.475 1.09.087.424-.702.763-1.447 1.176-2.16.339-.442.953-.226 1.419-.269.487-.032.847.583.571 1.004-1.334 2.493-2.678 4.976-4.012 7.47-.223.453-.953.453-1.154-.022-.297-.723-.53-1.479-.816-2.202-.17-.475-.9-.55-1.143-.097-.413.745-.773 1.522-1.186 2.256-.201.334-.625.28-.953.28-.318-.021-.699.076-.942-.194a.696.696 0 01-.096-.842c1.25-2.364 2.52-4.738 3.77-7.124.148-.27.275-.605.593-.69zm-4.363.184a9.55 9.55 0 011.112 0c.413.043.678.572.477.95-1.24 2.342-2.489 4.673-3.727 7.005-.149.26-.265.605-.583.69-.37.055-.751.023-1.122.023-.455.021-.836-.573-.561-.972 1.292-2.418 2.583-4.847 3.875-7.275.106-.205.286-.41.53-.421zm13.14.021c.402-.119.826-.032 1.239-.065.317.011.72-.054.953.227.286.292.2.842-.16 1.026-.73.464-1.45.96-2.19 1.414-.467.323-1.155-.227-.954-.767.18-.432.434-.83.636-1.252.116-.216.222-.496.476-.583zm-3.505 6.455c.212-.13.477-.086.678.022.561.28 1.122.583 1.694.853.244.108.498.313.508.604.043.389-.286.766-.667.734-.815 0-1.63.01-2.435 0-.402 0-.72-.475-.572-.863.106-.281.265-.53.392-.8.095-.204.19-.453.402-.55z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#DF1A14" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.14-20.473c-.318.086-.445.421-.593.691-1.25 2.386-2.52 4.76-3.77 7.124a.696.696 0 00.096.842c.243.27.624.173.942.195.328 0 .752.053.953-.281.413-.734.773-1.511 1.186-2.256.243-.454.974-.378 1.143.097.286.723.52 1.479.816 2.202.2.475.931.475 1.154.022 1.334-2.494 2.678-4.977 4.012-7.47.276-.421-.084-1.036-.571-1.004-.466.043-1.08-.173-1.42.27-.412.712-.75 1.457-1.174 2.159-.254.388-.9.334-1.09-.087-.319-.701-.594-1.424-.9-2.126-.128-.302-.477-.475-.784-.378zm-4.363.184c-.243.01-.423.216-.529.42-1.292 2.43-2.583 4.858-3.875 7.276-.275.4.106.993.561.972.37 0 .752.032 1.122-.022.318-.086.434-.432.583-.69 1.238-2.333 2.488-4.664 3.727-7.006.2-.378-.064-.907-.477-.95a9.55 9.55 0 00-1.112 0zm13.14.021c-.254.087-.36.367-.476.583-.202.421-.456.82-.636 1.252-.2.54.487 1.09.953.767.741-.454 1.461-.95 2.192-1.414.36-.184.445-.734.159-1.026-.233-.28-.636-.216-.953-.227-.413.033-.837-.054-1.239.065zm-3.505 6.455c-.211.097-.307.346-.402.55-.127.27-.286.519-.392.8-.148.388.17.863.572.863.805.01 1.62 0 2.435 0 .381.032.71-.345.667-.734-.01-.291-.264-.496-.508-.604-.572-.27-1.133-.573-1.694-.853-.201-.108-.466-.151-.678-.022z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ink';
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
@prop export let ariaLabel = 'ink';
-->
