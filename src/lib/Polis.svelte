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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.636-9.32v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#2C3E50"/><path d="M25.636 22.68v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2C3E50" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M24.672 21.012v-.9c0-.178-.119-.298-.3-.298h-.6v-.903c0-.178-.119-.3-.298-.3h-.599V12h.596c.179 0 .301-.12.301-.301v-.9h.6a.29.29 0 00.297-.242c.03-.149-.03-.268-.149-.33l-8.386-4.206a.414.414 0 00-.268 0l-8.687 4.205a.3.3 0 00-.15.328c0 .152.12.245.269.245h.9v.9c0 .178.12.298.298.298h.599v6.612h-.596c-.179 0-.301.12-.301.298v.903h-.599c-.179 0-.298.12-.298.298v.903c-.179 0-.301.12-.301.301 0 .182.12.301.298.301h17.374c.179 0 .301-.119.301-.298 0-.178-.119-.304-.298-.304h-.003zM8.794 11.4v-.6H23.17v.6H8.794zm12.278.6v6.61h-1.195V12h1.195zm-2.995 0v6.61H16.88V12h1.198zm-2.995 0v6.61h-1.195V12h1.195zm-2.995 0v6.61h-1.195V12h1.195zm11.083 7.811H8.797v-.602h14.376v.602h-.003z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.636-9.32v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z" fill="#FFF"/>';
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
  export let ariaLabel = 'polis';
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
@prop export let ariaLabel = 'polis';
-->
