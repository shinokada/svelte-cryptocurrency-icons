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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.755 5.246l.01-.011a11.947 11.947 0 00-6.137 14.198 11.023 11.023 0 002.495 4.407c.807-1.773 1.434-3.62 2.177-5.405l2.22-5.628c.35-.86.626-1.774 1.242-2.485.648-.754 1.646-1.083 2.602-1.19a6.074 6.074 0 013.494.542c.775.425 1.274 1.21 1.571 2.028l3.08 8.071c.51 1.338.966 2.697 1.561 3.993a11.936 11.936 0 00-14.315-18.52zm4.439 8.134c-1.54 3.855-3.037 7.72-4.566 11.575-.18.446-.425.882-.478 1.37.52.372 1.136.584 1.73.829a11.968 11.968 0 009.834-.659c.11-.062.21-.141.298-.233-.107-.542-.372-1.041-.553-1.561-1.37-3.622-2.729-7.254-4.11-10.864-.137-.34-.244-.722-.54-.945-.553-.361-1.403-.149-1.615.488z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#A71435"/><g fill="#FFF"><path d="M10.755 5.246a11.936 11.936 0 0114.315 18.52c-.595-1.296-1.051-2.655-1.561-3.993l-3.08-8.07c-.297-.818-.796-1.604-1.571-2.029a6.074 6.074 0 00-3.494-.542c-.956.107-1.954.436-2.602 1.19-.616.711-.892 1.625-1.242 2.485L9.3 18.435c-.743 1.784-1.37 3.632-2.177 5.405a11.023 11.023 0 01-2.495-4.407 11.947 11.947 0 016.138-14.198l-.011.01z"/><path d="M15.194 13.38c.212-.637 1.062-.85 1.614-.488.297.223.404.605.542.945 1.38 3.61 2.74 7.242 4.11 10.864.18.52.445 1.019.552 1.56a1.256 1.256 0 01-.298.234 11.968 11.968 0 01-9.833.659c-.595-.245-1.21-.457-1.731-.829.053-.488.297-.924.478-1.37 1.529-3.854 3.026-7.72 4.566-11.575z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#A71435" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M11.192 5.142a10.942 10.942 0 0113.122 16.977c-.545-1.188-.963-2.434-1.43-3.66L20.06 11.06c-.272-.75-.73-1.47-1.44-1.859a5.568 5.568 0 00-3.203-.496c-.876.097-1.791.399-2.385 1.09-.565.652-.818 1.49-1.139 2.278l-2.035 5.16c-.68 1.635-1.255 3.328-1.995 4.954a10.104 10.104 0 01-2.288-4.04 10.951 10.951 0 015.627-13.015l-.01.01z"/><path d="M15.261 12.598c.195-.584.974-.778 1.48-.447.272.204.37.555.496.866 1.266 3.31 2.512 6.639 3.768 9.958.165.477.408.935.506 1.431-.08.085-.172.157-.273.215a10.97 10.97 0 01-9.014.603c-.545-.224-1.11-.418-1.587-.76.049-.447.273-.846.438-1.255 1.402-3.534 2.775-7.077 4.186-10.61z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.755 5.246l.01-.011a11.947 11.947 0 00-6.137 14.198 11.023 11.023 0 002.495 4.407c.807-1.773 1.434-3.62 2.177-5.405l2.22-5.628c.35-.86.626-1.774 1.242-2.485.648-.754 1.646-1.083 2.602-1.19a6.074 6.074 0 013.494.542c.775.425 1.274 1.21 1.571 2.028l3.08 8.071c.51 1.338.966 2.697 1.561 3.993a11.936 11.936 0 00-14.315-18.52zm4.439 8.134c-1.54 3.855-3.037 7.72-4.566 11.575-.18.446-.425.882-.478 1.37.52.372 1.136.584 1.73.829a11.968 11.968 0 009.834-.659c.11-.062.21-.141.298-.233-.107-.542-.372-1.041-.553-1.561-1.37-3.622-2.729-7.254-4.11-10.864-.137-.34-.244-.722-.54-.945-.553-.361-1.403-.149-1.615.488z" fill="#FFF"/>';
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
  export let ariaLabel = 'arg';
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
@prop export let ariaLabel = 'arg';
-->
