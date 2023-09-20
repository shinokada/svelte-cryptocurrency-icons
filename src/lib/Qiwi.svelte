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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.59-12.555c-.025-.22-.152-.724-.482-.853-.165-.065-.305-.013-.368.103-.102.181-.026.53.165.84.19.311.368.466.495.466s.241-.155.19-.556zm-1.777.88c-.203-.182-.432-.272-.635-.272a.489.489 0 00-.407.18c-.228.285-.126.802.23 1.113.152.142.38.22.596.22a.663.663 0 00.52-.233c.204-.285.09-.672-.304-1.009zM7 14.894c0 4.912 3.91 8.894 8.734 8.894 1.283 0 2.552-.245 4.419-.259 1.663 0 3.491.595 5.497 2.405.203.181.47-.052.292-.271-1.968-2.547-3.796-3.025-5.624-3.44-2.235-.503-3.377-1.77-4.177-3.18-.153-.284-.229-.232-.242.13a8.078 8.078 0 00.115 1.59h-.267c-3.186 0-5.776-2.637-5.776-5.883C9.97 11.636 12.56 9 15.747 9s5.777 2.637 5.777 5.882c0 .233-.013.466-.038.686-.432-.078-1.257-.09-1.841-.039-.216.026-.19.129-.025.155 1.904.362 3.212 1.564 3.516 3.75.013.051.076.064.102.025a9.074 9.074 0 001.231-4.564C24.47 9.982 20.56 6 15.734 6 10.91 6 7 9.982 7 14.894z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#FF8C00"/><path fill="#FFF" d="M22.59 19.445c.051.401-.063.556-.19.556s-.305-.155-.495-.465c-.19-.31-.267-.66-.165-.84.063-.117.203-.169.368-.104.33.13.457.633.482.853zm-1.777.88c.393.336.508.723.304 1.008a.664.664 0 01-.52.232.896.896 0 01-.597-.22c-.355-.31-.457-.827-.229-1.111a.489.489 0 01.407-.181c.203 0 .432.09.635.271zM7 14.894C7 9.981 10.91 6 15.734 6c4.825 0 8.735 3.982 8.735 8.894a9.074 9.074 0 01-1.231 4.564c-.026.039-.09.026-.102-.026-.304-2.185-1.612-3.387-3.516-3.749-.166-.026-.191-.13.025-.155.584-.052 1.409-.039 1.84.039a5.9 5.9 0 00.039-.686c0-3.245-2.59-5.882-5.777-5.882-3.186 0-5.776 2.637-5.776 5.882 0 3.246 2.59 5.883 5.776 5.883h.267a8.078 8.078 0 01-.115-1.59c.013-.362.09-.414.242-.13.8 1.41 1.942 2.677 4.177 3.18 1.828.415 3.656.893 5.624 3.44.177.22-.089.452-.292.271-2.006-1.81-3.834-2.405-5.497-2.405-1.867.014-3.136.26-4.419.26C10.91 23.79 7 19.806 7 14.893z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M22.59 18.445c.051.401-.063.556-.19.556s-.305-.155-.495-.465c-.19-.31-.267-.66-.165-.84.063-.117.203-.169.368-.104.33.13.457.633.482.853zm-1.777.88c.393.336.508.723.304 1.008a.664.664 0 01-.52.232.896.896 0 01-.597-.22c-.355-.31-.457-.827-.229-1.111a.489.489 0 01.407-.181c.203 0 .432.09.635.271zM7 13.894C7 8.981 10.91 5 15.734 5c4.825 0 8.735 3.982 8.735 8.894a9.074 9.074 0 01-1.231 4.564c-.026.039-.09.026-.102-.026-.304-2.185-1.612-3.387-3.516-3.749-.166-.026-.191-.13.025-.155.584-.052 1.409-.039 1.84.039a5.9 5.9 0 00.039-.686c0-3.245-2.59-5.882-5.777-5.882-3.186 0-5.776 2.637-5.776 5.882 0 3.246 2.59 5.883 5.776 5.883h.267a8.078 8.078 0 01-.115-1.59c.013-.362.09-.414.242-.13.8 1.41 1.942 2.677 4.177 3.18 1.828.415 3.656.893 5.624 3.44.177.22-.089.452-.292.271-2.006-1.81-3.834-2.405-5.497-2.405-1.867.014-3.136.26-4.419.26C10.91 22.79 7 18.806 7 13.893z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FF8C00" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.59-12.555c-.025-.22-.152-.724-.482-.853-.165-.065-.305-.013-.368.103-.102.181-.026.53.165.84.19.311.368.466.495.466s.241-.155.19-.556zm-1.777.88c-.203-.182-.432-.272-.635-.272a.489.489 0 00-.407.18c-.228.285-.126.802.23 1.113.152.142.38.22.596.22a.663.663 0 00.52-.233c.204-.285.09-.672-.304-1.009zM7 14.894c0 4.912 3.91 8.894 8.734 8.894 1.283 0 2.552-.245 4.419-.259 1.663 0 3.491.595 5.497 2.405.203.181.47-.052.292-.271-1.968-2.547-3.796-3.025-5.624-3.44-2.235-.503-3.377-1.77-4.177-3.18-.153-.284-.229-.232-.242.13a8.078 8.078 0 00.115 1.59h-.267c-3.186 0-5.776-2.637-5.776-5.883C9.97 11.636 12.56 9 15.747 9s5.777 2.637 5.777 5.882c0 .233-.013.466-.038.686-.432-.078-1.257-.09-1.841-.039-.216.026-.19.129-.025.155 1.904.362 3.212 1.564 3.516 3.75.013.051.076.064.102.025a9.074 9.074 0 001.231-4.564C24.47 9.982 20.56 6 15.734 6 10.91 6 7 9.982 7 14.894z"/>';
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
  export let ariaLabel = 'qiwi';
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
@prop export let ariaLabel = 'qiwi';
-->
