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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.236-21.309c-.777-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.785 2.74c-.45.128-.907.269-1.362.41l-.79-2.758-1.712.49.806 2.813c-.369.114-.73.225-1.086.327l-.002-.008-2.362.676.525 1.829s1.257-.387 1.243-.357c.693-.2 1.035.139 1.2.467l.92 3.205c.047-.013.11-.03.184-.04l-.181.052 1.287 4.49c.032.227.003.612-.481.752.027.013-1.245.356-1.245.356l.246 2.143 2.229-.64c.414-.118.824-.228 1.226-.34l.816 2.845 1.71-.49-.806-2.815a65.74 65.74 0 001.371-.38l.803 2.803 1.712-.491-.813-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.725-2.912-3.472-2.836.848-.79 1.214-1.859.643-3.301zm-.651 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.08-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.513 2.857l-.98-3.419c.966-.277 3.914-1.455 4.493.562z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#8dc351" r="16"/><path d="M21.207 10.534c-.776-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.786 2.74c-.45.128-.908.27-1.363.41l-.79-2.758-1.711.49.805 2.813c-.368.114-.73.226-1.085.328l-.003-.01-2.362.677.525 1.83s1.258-.388 1.243-.358c.694-.199 1.035.139 1.2.468l.92 3.204c.047-.013.11-.029.184-.04l-.181.052 1.287 4.49c.032.227.004.612-.48.752.027.013-1.246.356-1.246.356l.247 2.143 2.228-.64c.415-.117.825-.227 1.226-.34l.817 2.845 1.71-.49-.807-2.815a65.74 65.74 0 001.372-.38l.802 2.803 1.713-.491-.814-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.724-2.912-3.471-2.836.848-.79 1.213-1.858.642-3.3zm-.65 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.081-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.514 2.857l-.98-3.419c.966-.277 3.915-1.455 4.494.563z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.7%" height="117.5%" x="-10.8%" y="-6.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M21.207 9.534c.571 1.442.206 2.511-.642 3.301 1.747-.076 3.05.602 3.471 2.837.525 2.775-1.282 4.078-4.113 5.068l.814 2.84-1.713.492-.802-2.803c-.444.128-.9.255-1.372.38l.807 2.815-1.71.49-.817-2.845c-.401.112-.811.222-1.226.34l-2.228.64-.247-2.143s1.273-.343 1.245-.356c.485-.14.513-.525.481-.752l-1.287-4.49.18-.052c-.073.01-.136.027-.184.04l-.919-3.205c-.165-.328-.506-.666-1.2-.468.015-.029-1.243.358-1.243.358l-.525-1.829 2.362-.676.003.008c.355-.102.717-.213 1.085-.327l-.805-2.812 1.711-.491.79 2.757c.455-.14.913-.28 1.363-.41L13.7 5.502l1.712-.491.807 2.813c2.266-.44 4.212-.262 4.988 1.71zm-.65 6.77c-.637-2.217-4.18-.84-5.341-.507l1.08 3.77c1.16-.334 4.87-1.136 4.26-3.262zm-2.322-5.09c-.58-2.017-3.528-.84-4.494-.562l.98 3.42c.967-.278 4.068-.923 3.514-2.858z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#8DC351" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.236-21.309c-.777-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.785 2.74c-.45.128-.907.269-1.362.41l-.79-2.758-1.712.49.806 2.813c-.369.114-.73.225-1.086.327l-.002-.008-2.362.676.525 1.829s1.257-.387 1.243-.357c.693-.2 1.035.139 1.2.467l.92 3.205c.047-.013.11-.03.184-.04l-.181.052 1.287 4.49c.032.227.003.612-.481.752.027.013-1.245.356-1.245.356l.246 2.143 2.229-.64c.414-.118.824-.228 1.226-.34l.816 2.845 1.71-.49-.806-2.815a65.74 65.74 0 001.371-.38l.803 2.803 1.712-.491-.813-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.725-2.912-3.472-2.836.848-.79 1.214-1.859.643-3.301zm-.651 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.08-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.513 2.857l-.98-3.419c.966-.277 3.914-1.455 4.493.562z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'bch';
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
@prop export let ariaLabel = 'bch';
-->
