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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26l-1.66 3.016c-.188.328-.525.298-.863.115l-1.2-.607.894 4.633c.189.847-.415.847-.713.48L10.36 11.35l-.34 1.162c-.04.153-.212.313-.471.275l-2.65-.544.695 2.468c.15.549.266.776-.15.92l-.945.434 4.563 3.612a.575.575 0 01.208.605l-.4 1.278c1.572-.177 2.98-.442 4.552-.606.139-.014.371.209.37.366L15.585 26h.764l-.12-4.67c-.001-.157.21-.39.348-.376 1.572.164 2.98.43 4.551.606l-.399-1.278a.574.574 0 01.208-.605l4.563-3.612-.945-.433c-.416-.145-.3-.372-.15-.921l.696-2.468-2.651.544c-.259.038-.432-.122-.47-.275l-.341-1.162-2.097 2.288c-.298.366-.902.366-.713-.48l.895-4.634-1.201.607c-.338.183-.675.213-.863-.115z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f70808" r="16"/><path d="M16 6l-1.66 3.016c-.188.328-.525.298-.863.115l-1.2-.607.894 4.633c.189.847-.415.847-.713.48L10.36 11.35l-.34 1.162c-.04.153-.212.313-.471.275l-2.65-.544.695 2.468c.15.549.266.776-.15.92l-.945.434 4.563 3.612a.575.575 0 01.208.605l-.4 1.278c1.572-.177 2.98-.442 4.552-.606.139-.014.371.209.37.366L15.585 26h.764l-.12-4.67c-.001-.157.21-.39.348-.376 1.572.164 2.98.43 4.551.606l-.399-1.278a.574.574 0 01.208-.605l4.563-3.612-.945-.433c-.416-.145-.3-.372-.15-.921l.696-2.468-2.651.544c-.259.038-.432-.122-.47-.275l-.341-1.162-2.097 2.288c-.298.366-.902.366-.713-.48l.895-4.634-1.201.607c-.338.183-.675.213-.863-.115z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16 5l-1.66 3.016c-.188.328-.525.298-.863.115l-1.2-.607.894 4.633c.189.847-.415.847-.713.48L10.36 10.35l-.34 1.162c-.04.153-.212.313-.471.275l-2.65-.544.695 2.468c.15.549.266.776-.15.92l-.945.434 4.563 3.612a.575.575 0 01.208.605l-.4 1.278c1.572-.177 2.98-.442 4.552-.606.139-.014.371.209.37.366L15.585 25h.764l-.12-4.67c-.001-.157.21-.39.348-.376 1.572.164 2.98.43 4.551.606l-.399-1.278a.574.574 0 01.208-.605l4.563-3.612-.945-.433c-.416-.145-.3-.372-.15-.921l.696-2.468-2.651.544c-.259.038-.432-.122-.47-.275l-.341-1.162-2.097 2.288c-.298.366-.902.366-.713-.48l.895-4.634-1.201.607c-.338.183-.675.213-.863-.115L16 5z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F70808" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26l-1.66 3.016c-.188.328-.525.298-.863.115l-1.2-.607.894 4.633c.189.847-.415.847-.713.48L10.36 11.35l-.34 1.162c-.04.153-.212.313-.471.275l-2.65-.544.695 2.468c.15.549.266.776-.15.92l-.945.434 4.563 3.612a.575.575 0 01.208.605l-.4 1.278c1.572-.177 2.98-.442 4.552-.606.139-.014.371.209.37.366L15.585 26h.764l-.12-4.67c-.001-.157.21-.39.348-.376 1.572.164 2.98.43 4.551.606l-.399-1.278a.574.574 0 01.208-.605l4.563-3.612-.945-.433c-.416-.145-.3-.372-.15-.921l.696-2.468-2.651.544c-.259.038-.432-.122-.47-.275l-.341-1.162-2.097 2.288c-.298.366-.902.366-.713-.48l.895-4.634-1.201.607c-.338.183-.675.213-.863-.115z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'cdn';
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
@prop export let ariaLabel = 'cdn';
-->
