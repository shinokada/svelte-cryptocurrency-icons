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
    '<path d="M25.977 19.754l2.183.545.363-1.456-2.183-.544.544-2.183-1.456-.363-.544 2.183-2.183-.544-.363 1.455 2.183.545-.544 2.183 1.455.363zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.611-18.24c.28-1.844-1.09-2.826-2.965-3.477l.623-2.499-1.487-.37-.606 2.433a53.14 53.14 0 00-1.191-.28l.61-2.45-1.485-.37-.624 2.498a48.602 48.602 0 01-.949-.223l.002-.007-2.05-.512-.405 1.624s1.103.253 1.08.269c.602.15.709.557.689.88l-.71 2.846c.041.01.095.026.154.05l-.157-.039-.994 3.988c-.075.187-.264.469-.684.365.014.021-1.08-.27-1.08-.27l-.75 1.743 1.935.482c.36.09.713.185 1.06.274l-.63 2.527 1.485.37.624-2.5c.405.11.8.212 1.184.308l-.62 2.489 1.486.37.63-2.523c2.535.477 4.445.269 5.26-2.079.658-1.89-.016-2.974-1.348-3.676.974-.234 1.71-.891 1.913-2.24zm-3.427 4.886c-.47 1.888-3.577.886-4.585.635l.836-3.348c1.007.251 4.24.743 3.749 2.713zm.487-4.897c-.43 1.718-3.015.86-3.854.651l.757-3.037c.84.21 3.543.594 3.097 2.386z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f7931a" r="16"/><path d="M25.977 19.754l-.545 2.183-1.455-.362.544-2.184-2.183-.544.363-1.455 2.183.544.545-2.183 1.455.363-.544 2.183 2.183.544-.363 1.456zM20.61 13.76c-.203 1.35-.939 2.006-1.912 2.24 1.331.703 2.005 1.787 1.348 3.677-.816 2.347-2.726 2.555-5.262 2.08l-.63 2.522-1.486-.37.621-2.49a55.255 55.255 0 01-1.184-.307l-.624 2.5-1.484-.37.63-2.528c-.348-.089-.7-.183-1.06-.273l-1.935-.483.748-1.742s1.095.291 1.08.27c.422.103.61-.178.685-.365l.994-3.988.158.039a1.204 1.204 0 00-.155-.05l.71-2.847c.02-.323-.087-.729-.69-.88.024-.015-1.079-.268-1.079-.268l.405-1.624 2.05.512-.002.007c.308.077.626.15.95.223l.623-2.498 1.486.37-.611 2.45c.399.09.8.182 1.19.28l.607-2.433 1.487.37-.623 2.499c1.876.65 3.245 1.633 2.965 3.477zm-3.427 4.885c.491-1.97-2.742-2.46-3.75-2.712L12.6 19.28c1.008.25 4.115 1.253 4.585-.636zm.487-4.896c.446-1.793-2.258-2.177-3.097-2.386l-.757 3.037c.839.21 3.425 1.067 3.854-.651z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M26.51 16.917v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25h1.5v2.25h2.25v1.5h-2.25zm-6.657-4.519c.13 1.359-.426 2.174-1.314 2.637 1.462.36 2.378 1.249 2.198 3.242-.224 2.474-2.027 3.138-4.603 3.29v2.6h-1.532V21.6c-.396 0-.803-.003-1.223-.011v2.577h-1.53l-.001-2.605c-.359-.003-.724-.009-1.095-.01H8.76l.304-1.871s1.133.018 1.114 0c.433-.001.548-.32.575-.52v-4.11h.163a1.204 1.204 0 00-.162-.01v-2.934c-.06-.319-.261-.687-.882-.687.019-.022-1.112 0-1.112 0V9.746h2.112v.009c.318 0 .644-.007.976-.014V7.167h1.531V9.69c.41-.008.82-.017 1.224-.017V7.167h1.531v2.575c1.978.177 3.544.8 3.719 2.656zm-2.144 5.57c0-2.03-3.255-1.725-4.294-1.725v3.45c1.038 0 4.295.221 4.294-1.725zm-.712-4.87c0-1.846-2.717-1.565-3.582-1.565v3.13c.865 0 3.581.207 3.582-1.564z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F7931A" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero" transform="rotate(14 18.76 15.667)"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M25.977 19.754l2.183.545.363-1.456-2.183-.544.544-2.183-1.456-.363-.544 2.183-2.183-.544-.363 1.455 2.183.545-.544 2.183 1.455.363zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.611-18.24c.28-1.844-1.09-2.826-2.965-3.477l.623-2.499-1.487-.37-.606 2.433a53.14 53.14 0 00-1.191-.28l.61-2.45-1.485-.37-.624 2.498a48.602 48.602 0 01-.949-.223l.002-.007-2.05-.512-.405 1.624s1.103.253 1.08.269c.602.15.709.557.689.88l-.71 2.846c.041.01.095.026.154.05l-.157-.039-.994 3.988c-.075.187-.264.469-.684.365.014.021-1.08-.27-1.08-.27l-.75 1.743 1.935.482c.36.09.713.185 1.06.274l-.63 2.527 1.485.37.624-2.5c.405.11.8.212 1.184.308l-.62 2.489 1.486.37.63-2.523c2.535.477 4.445.269 5.26-2.079.658-1.89-.016-2.974-1.348-3.676.974-.234 1.71-.891 1.913-2.24zm-3.427 4.886c-.47 1.888-3.577.886-4.585.635l.836-3.348c1.007.251 4.24.743 3.749 2.713zm.487-4.897c-.43 1.718-3.015.86-3.854.651l.757-3.037c.84.21 3.543.594 3.097 2.386z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'xbc';
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
@prop export let ariaLabel = 'xbc';
-->
