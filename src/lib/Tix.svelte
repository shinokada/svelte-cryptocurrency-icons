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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 11.386v1.15c0 .214.173.387.386.387H11.7c.773 0 1.16.353 1.16 1.058 0 .513-.387.833-1.16.961H6.386A.386.386 0 006 15.33v1.15c0 .213.173.386.386.386H11.7c1.095.064 1.643.45 1.643 1.154s-.548 1.058-1.643 1.058H6.386a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387H11.7c1.546 0 3.865-.48 3.865-2.885 0-1.025-.45-1.794-1.352-2.307.644-.577.966-1.218.966-1.923 0-1.69-1.45-2.885-3.768-2.885H6.387a.387.387 0 00-.387.386zm10.435 0v1.15c0 .214.173.387.386.387h2.899c.213 0 .386.173.386.387v7.304c0 .213.173.386.387.386h1.449a.386.386 0 00.387-.386v-9.228a.386.386 0 00-.387-.386h-5.12a.386.386 0 00-.387.386zM23.68 11a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387h1.933a.386.386 0 00.386-.386v-1.15a.386.386 0 00-.386-.387z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ef494d" fill-rule="nonzero" r="16"/><path d="M6 11.386c0-.213.173-.386.387-.386h5.024c2.318 0 3.768 1.196 3.768 2.885 0 .705-.322 1.346-.966 1.923.901.513 1.352 1.282 1.352 2.307C15.565 20.52 13.246 21 11.7 21H6.386A.386.386 0 016 20.614v-1.15c0-.214.173-.387.386-.387H11.7c1.095 0 1.643-.353 1.643-1.058s-.548-1.09-1.643-1.154H6.386A.386.386 0 016 16.48v-1.15c0-.214.173-.387.386-.387H11.7c.773-.128 1.16-.448 1.16-.961 0-.705-.387-1.058-1.16-1.058H6.386A.386.386 0 016 12.537v-1.15zm10.435 0c0-.213.173-.386.386-.386h5.121c.213 0 .387.173.387.386v9.228a.386.386 0 01-.387.386h-1.45a.386.386 0 01-.386-.386V13.31a.386.386 0 00-.386-.387h-2.9a.386.386 0 01-.386-.386zM23.68 11h1.933c.213 0 .386.173.386.386v1.15a.386.386 0 01-.386.387H23.68a.386.386 0 01-.386-.386v-1.15c0-.214.173-.387.386-.387z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="135%" x="-8.8%" y="-12.5%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M6 10.386c0-.213.173-.386.387-.386h5.024c2.318 0 3.768 1.196 3.768 2.885 0 .705-.322 1.346-.966 1.923.901.513 1.352 1.282 1.352 2.307C15.565 19.52 13.246 20 11.7 20H6.386A.386.386 0 016 19.614v-1.15c0-.214.173-.387.386-.387H11.7c1.095 0 1.643-.353 1.643-1.058 0-.705-.548-1.09-1.643-1.154H6.386A.386.386 0 016 15.48v-1.15c0-.214.173-.387.386-.387H11.7c.773-.128 1.16-.448 1.16-.961 0-.705-.387-1.058-1.16-1.058H6.386A.386.386 0 016 11.537v-1.15zm10.435 0c0-.213.173-.386.386-.386h5.121c.213 0 .387.173.387.386v9.228a.386.386 0 01-.387.386h-1.45a.386.386 0 01-.386-.386V12.31a.386.386 0 00-.386-.387h-2.9a.386.386 0 01-.386-.386v-1.15zM23.68 10h1.933c.213 0 .386.173.386.386v1.15a.386.386 0 01-.386.387H23.68a.386.386 0 01-.386-.386v-1.15c0-.214.173-.387.386-.387z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#EF494D" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 11.386v1.15c0 .214.173.387.386.387H11.7c.773 0 1.16.353 1.16 1.058 0 .513-.387.833-1.16.961H6.386A.386.386 0 006 15.33v1.15c0 .213.173.386.386.386H11.7c1.095.064 1.643.45 1.643 1.154s-.548 1.058-1.643 1.058H6.386a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387H11.7c1.546 0 3.865-.48 3.865-2.885 0-1.025-.45-1.794-1.352-2.307.644-.577.966-1.218.966-1.923 0-1.69-1.45-2.885-3.768-2.885H6.387a.387.387 0 00-.387.386zm10.435 0v1.15c0 .214.173.387.386.387h2.899c.213 0 .386.173.386.387v7.304c0 .213.173.386.387.386h1.449a.386.386 0 00.387-.386v-9.228a.386.386 0 00-.387-.386h-5.12a.386.386 0 00-.387.386zM23.68 11a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387h1.933a.386.386 0 00.386-.386v-1.15a.386.386 0 00-.386-.387z" fill="#fff"/>';
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
  export let ariaLabel = 'tix';
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
@prop export let ariaLabel = 'tix';
-->
