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
    '<path d="M9.928 16.574H7.123L4 19.072h6.522A8.05 8.05 0 0017.954 24C22.398 24 26 20.418 26 16s-3.602-8-8.046-8a8.049 8.049 0 00-7.46 4.996H4l3.123 2.498h2.8a8.076 8.076 0 00.005 1.08zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.537-15.851v.306c0 .102-.006.204-.02.306H15.48a2.262 2.262 0 00.849 1.617c.244.198.52.354.829.469s.63.172.964.172c.578 0 1.067-.105 1.465-.316.399-.21.726-.5.983-.87l1.543 1.224c-.913 1.225-2.237 1.838-3.972 1.838-.72 0-1.382-.112-1.986-.335a4.693 4.693 0 01-1.571-.948 4.269 4.269 0 01-1.041-1.502c-.251-.593-.376-1.266-.376-2.019 0-.74.125-1.413.376-2.019s.594-1.122 1.031-1.55c.437-.427.955-.759 1.552-.995s1.244-.354 1.938-.354c.643 0 1.237.105 1.783.316s1.019.523 1.418.937c.398.415.71.932.935 1.55s.337 1.343.337 2.173zm-2.314-1.034a2.8 2.8 0 00-.125-.842 1.923 1.923 0 00-.395-.708c-.18-.204-.408-.367-.685-.488s-.6-.182-.973-.182c-.694 0-1.282.208-1.765.622a2.261 2.261 0 00-.8 1.598z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1693d4" fill-rule="nonzero" r="16"/><path d="M9.928 16.574a8.07 8.07 0 01-.005-1.08h-2.8L4 12.996h6.494A8.049 8.049 0 0117.954 8C22.398 8 26 11.582 26 16s-3.602 8-8.046 8a8.05 8.05 0 01-7.432-4.928H4l3.123-2.498zm12.609-.425c0-.83-.112-1.554-.337-2.172s-.537-1.136-.935-1.55c-.399-.415-.871-.728-1.418-.938s-1.14-.316-1.783-.316c-.694 0-1.34.118-1.938.354s-1.115.568-1.552.995c-.437.428-.78.944-1.031 1.55s-.376 1.28-.376 2.02c0 .752.125 1.425.376 2.018.25.593.597 1.094 1.04 1.502.444.409.968.724 1.572.948a5.688 5.688 0 001.986.335c1.735 0 3.06-.613 3.972-1.838l-1.543-1.224c-.257.37-.584.66-.983.87-.398.21-.887.316-1.465.316-.334 0-.656-.057-.964-.172s-.585-.271-.83-.469a2.262 2.262 0 01-.848-1.617h7.038c.013-.102.019-.204.019-.306zm-2.314-1.034H15.48c.052-.65.318-1.183.8-1.598.483-.414 1.07-.622 1.765-.622.372 0 .697.06.973.182s.505.284.685.488c.18.204.311.44.395.708a2.8 2.8 0 01.125.842z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="121.9%" x="-8%" y="-7.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M9.928 15.574a8.07 8.07 0 01-.005-1.08h-2.8L4 11.996h6.494A8.049 8.049 0 0117.954 7C22.398 7 26 10.582 26 15s-3.602 8-8.046 8a8.05 8.05 0 01-7.432-4.928H4l3.123-2.498h2.805zm12.609-.425c0-.83-.112-1.554-.337-2.172-.225-.62-.537-1.136-.935-1.55a3.87 3.87 0 00-1.418-.938 4.919 4.919 0 00-1.783-.316c-.694 0-1.34.118-1.938.354a4.618 4.618 0 00-1.552.995c-.437.428-.78.944-1.031 1.55-.251.606-.376 1.28-.376 2.02 0 .752.125 1.425.376 2.018.25.593.597 1.094 1.04 1.502.444.409.968.724 1.572.948a5.688 5.688 0 001.986.335c1.735 0 3.06-.613 3.972-1.838l-1.543-1.224c-.257.37-.584.66-.983.87-.398.21-.887.316-1.465.316-.334 0-.656-.057-.964-.172a2.932 2.932 0 01-.83-.469 2.262 2.262 0 01-.848-1.617h7.038c.013-.102.019-.204.019-.306v-.306zm-2.314-1.034H15.48c.052-.65.318-1.183.8-1.598.483-.414 1.07-.622 1.765-.622.372 0 .697.06.973.182.277.121.505.284.685.488.18.204.311.44.395.708a2.8 2.8 0 01.125.842z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1693D4" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M9.928 16.574H7.123L4 19.072h6.522A8.05 8.05 0 0017.954 24C22.398 24 26 20.418 26 16s-3.602-8-8.046-8a8.049 8.049 0 00-7.46 4.996H4l3.123 2.498h2.8a8.076 8.076 0 00.005 1.08zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.537-15.851v.306c0 .102-.006.204-.02.306H15.48a2.262 2.262 0 00.849 1.617c.244.198.52.354.829.469s.63.172.964.172c.578 0 1.067-.105 1.465-.316.399-.21.726-.5.983-.87l1.543 1.224c-.913 1.225-2.237 1.838-3.972 1.838-.72 0-1.382-.112-1.986-.335a4.693 4.693 0 01-1.571-.948 4.269 4.269 0 01-1.041-1.502c-.251-.593-.376-1.266-.376-2.019 0-.74.125-1.413.376-2.019s.594-1.122 1.031-1.55c.437-.427.955-.759 1.552-.995s1.244-.354 1.938-.354c.643 0 1.237.105 1.783.316s1.019.523 1.418.937c.398.415.71.932.935 1.55s.337 1.343.337 2.173zm-2.314-1.034a2.8 2.8 0 00-.125-.842 1.923 1.923 0 00-.395-.708c-.18-.204-.408-.367-.685-.488s-.6-.182-.973-.182c-.694 0-1.282.208-1.765.622a2.261 2.261 0 00-.8 1.598z" fill="#fff"/>';
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
  export let ariaLabel = 'ebst';
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
@prop export let ariaLabel = 'ebst';
-->
