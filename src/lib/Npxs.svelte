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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.028-28C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049zM9.774 10.658l4.686 4.686.882-.881-4.687-4.687-.881.882zm6.818 6.82l4.686 4.687.882-.882-4.687-4.686-.881.881zm-1.496-1.502l.888.888.881-.881-.887-.888-.882.881zm1.509-1.474l.881.88 4.687-4.686-.882-.88-4.686 4.686zM9.808 21.29l.88.881 4.687-4.686-.881-.881-4.686 4.686z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F5D100"/><g fill="#FFF"><path d="M15.972 4C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049z"/><path d="M9.774 10.656l.88-.881 4.688 4.687-.881.88zm6.818 6.821l.881-.881 4.687 4.687-.881.88zm-1.495-1.502l.88-.88.888.886-.88.882zm1.508-1.475l4.687-4.686.88.881-4.686 4.687zm-6.797 6.788l4.686-4.686.881.88-4.686 4.687z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F5D100" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M15.975 4C9.925 4 5 8.925 5 14.975s4.925 10.983 10.983 10.983c6.059 0 10.983-4.925 10.983-10.983C26.966 8.916 22.033 4 15.975 4zm0 21.112c-5.585 0-10.137-4.544-10.137-10.137C5.846 9.39 10.39 4.846 15.975 4.846c5.584 0 10.137 4.544 10.137 10.137 0 5.585-4.544 10.129-10.137 10.129z"/><path d="M10.292 10.102l.808-.808 4.295 4.296-.807.808zm6.25 6.252l.808-.808 4.295 4.296-.807.808zm-1.37-1.377l.807-.807.814.814-.807.807zm1.383-1.352L20.85 9.33l.808.808-4.296 4.296zm-6.231 6.223l4.295-4.296.808.808-4.296 4.296z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.028-28C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049zM9.774 10.658l4.686 4.686.882-.881-4.687-4.687-.881.882zm6.818 6.82l4.686 4.687.882-.882-4.687-4.686-.881.881zm-1.496-1.502l.888.888.881-.881-.887-.888-.882.881zm1.509-1.474l.881.88 4.687-4.686-.882-.88-4.686 4.686zM9.808 21.29l.88.881 4.687-4.686-.881-.881-4.686 4.686z" fill="#FFF"/>';
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
  export let ariaLabel = 'npxs';
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
@prop export let ariaLabel = 'npxs';
-->
