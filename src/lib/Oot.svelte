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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.346-7.007c.216-.021.624-.04 1.026-.104 2.118-.34 3.918-1.294 5.335-2.902 1.917-2.176 2.638-4.722 2.14-7.58-.394-2.258-1.521-4.107-3.334-5.511-2.03-1.573-4.342-2.16-6.88-1.788a8.583 8.583 0 00-4.862 2.404c-2.095 2.052-3.004 4.555-2.71 7.477a8.573 8.573 0 001.277 3.718.22.22 0 01.027.2 4.963 4.963 0 01-1.01 1.793c-.71.805-.3 2.047.747 2.26.386.079.774.025 1.158-.025a7.183 7.183 0 002.55-.862c.08-.045.14-.042.22-.003 1.3.645 2.677.94 4.316.923zm-6.43-2.388c.104-.225.2-.424.29-.626.204-.469.364-.952.479-1.451a1.1 1.1 0 00-.17-.899c-.48-.718-.818-1.498-.964-2.349-.446-2.583.331-4.736 2.344-6.417 1.038-.867 2.258-1.331 3.61-1.425 2.002-.138 3.73.504 5.152 1.912 1.18 1.169 1.83 2.604 1.905 4.266.117 2.595-.963 4.599-3.133 5.992-1.255.805-2.658 1.088-4.145.929a6.497 6.497 0 01-2.564-.837c-.371-.213-.718-.2-1.07.048a6.078 6.078 0 01-1.594.817c-.037.012-.075.022-.14.04zm6.091-10.412c-.029.052-.045.077-.059.104-.38.768-.76 1.535-1.137 2.305-.038.077-.08.126-.172.139-.577.079-1.152.163-1.728.245l-.916.132-.03.048c.04.026.089.045.123.079.598.583 1.194 1.167 1.79 1.752.056.055.112.101.093.202-.124.681-.241 1.364-.36 2.046l-.104.632c.059-.028.09-.041.121-.058.747-.392 1.494-.783 2.238-1.18.104-.056.181-.05.282.003.74.397 1.482.787 2.224 1.178.032.017.067.028.113.046-.003-.04-.003-.063-.006-.084-.143-.845-.282-1.69-.432-2.533-.022-.123.01-.197.094-.278.478-.458.953-.92 1.427-1.382.151-.147.295-.303.45-.462-.036-.008-.065-.016-.094-.02-.84-.122-1.678-.245-2.518-.362-.112-.015-.18-.053-.23-.161-.193-.415-.398-.823-.6-1.234-.185-.377-.37-.755-.569-1.157z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#25AAE1" fill-rule="nonzero"/><path fill="#FFF" d="M16.346 24.993c-1.64.018-3.017-.278-4.315-.923-.08-.04-.14-.042-.22.003a7.183 7.183 0 01-2.551.862c-.384.05-.772.104-1.158.025a1.366 1.366 0 01-.747-2.26 4.963 4.963 0 001.01-1.793.215.215 0 00-.027-.2 8.573 8.573 0 01-1.277-3.718c-.294-2.922.615-5.425 2.71-7.477a8.583 8.583 0 014.863-2.404c2.537-.371 4.849.215 6.88 1.788 1.812 1.404 2.94 3.253 3.333 5.511.498 2.858-.223 5.404-2.14 7.58-1.417 1.608-3.217 2.563-5.335 2.902-.402.065-.81.083-1.026.104zm-6.43-2.388c.065-.018.103-.028.14-.04a6.078 6.078 0 001.594-.817c.352-.248.699-.26 1.07-.048.796.456 1.649.74 2.564.837 1.487.159 2.89-.124 4.145-.93 2.17-1.392 3.25-3.396 3.133-5.991-.075-1.662-.726-3.097-1.905-4.266-1.421-1.408-3.15-2.05-5.153-1.912-1.35.094-2.57.558-3.609 1.425-2.013 1.68-2.79 3.834-2.344 6.417.146.85.485 1.63.963 2.35a1.1 1.1 0 01.171.898 8.16 8.16 0 01-.48 1.45c-.089.203-.185.402-.288.627zm6.091-10.412l.57 1.157c.2.41.406.82.6 1.234.05.108.117.146.229.161.84.117 1.679.24 2.518.361.029.005.058.013.094.02-.155.16-.299.316-.45.463-.474.463-.949.924-1.427 1.382-.083.08-.116.155-.094.278.15.843.29 1.688.432 2.533.003.021.003.043.006.084-.046-.018-.081-.029-.113-.046-.742-.391-1.485-.781-2.224-1.178-.1-.054-.178-.059-.282-.003-.744.397-1.491.788-2.238 1.18-.03.017-.062.03-.12.058.037-.227.069-.43.104-.632.118-.682.235-1.365.36-2.046.018-.1-.038-.147-.094-.202a590.25 590.25 0 00-1.79-1.752c-.034-.034-.082-.053-.124-.079l.031-.048.916-.132c.576-.082 1.151-.166 1.728-.245.092-.013.134-.062.172-.14.377-.769.758-1.536 1.137-2.304.014-.027.03-.052.06-.104z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.346 23.993c-1.64.018-3.017-.278-4.315-.923-.08-.04-.14-.042-.22.003a7.183 7.183 0 01-2.551.862c-.384.05-.772.104-1.158.025a1.366 1.366 0 01-.747-2.26 4.963 4.963 0 001.01-1.793.215.215 0 00-.027-.2 8.573 8.573 0 01-1.277-3.718c-.294-2.922.615-5.425 2.71-7.477a8.583 8.583 0 014.863-2.404c2.537-.371 4.849.215 6.88 1.788 1.812 1.404 2.94 3.253 3.333 5.511.498 2.858-.223 5.404-2.14 7.58-1.417 1.608-3.217 2.563-5.335 2.902-.402.065-.81.083-1.026.104zm-6.43-2.388c.065-.018.103-.028.14-.04a6.078 6.078 0 001.594-.817c.352-.248.699-.26 1.07-.048.796.456 1.649.74 2.564.837 1.487.159 2.89-.124 4.145-.93 2.17-1.392 3.25-3.396 3.133-5.991-.075-1.662-.726-3.097-1.905-4.266-1.421-1.408-3.15-2.05-5.153-1.912-1.35.094-2.57.558-3.609 1.425-2.013 1.68-2.79 3.834-2.344 6.417.146.85.485 1.63.963 2.35a1.1 1.1 0 01.171.898 8.16 8.16 0 01-.48 1.45c-.089.203-.185.402-.288.627zm6.091-10.412l.57 1.157c.2.41.406.82.6 1.234.05.108.117.146.229.161.84.117 1.679.24 2.518.361.029.005.058.013.094.02-.155.16-.299.316-.45.463-.474.463-.949.924-1.427 1.382-.083.08-.116.155-.094.278.15.843.29 1.688.432 2.533.003.021.003.043.006.084-.046-.018-.081-.029-.113-.046-.742-.391-1.485-.781-2.224-1.178-.1-.054-.178-.059-.282-.003-.744.397-1.491.788-2.238 1.18-.03.017-.062.03-.12.058.037-.227.069-.43.104-.632.118-.682.235-1.365.36-2.046.018-.1-.038-.147-.094-.202a590.25 590.25 0 00-1.79-1.752c-.034-.034-.082-.053-.124-.079l.031-.048.916-.132c.576-.082 1.151-.166 1.728-.245.092-.013.134-.062.172-.14.377-.769.758-1.536 1.137-2.304.014-.027.03-.052.06-.104z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#25AAE1" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-linejoin="square" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.346-7.007c.216-.021.624-.04 1.026-.104 2.118-.34 3.918-1.294 5.335-2.902 1.917-2.176 2.638-4.722 2.14-7.58-.394-2.258-1.521-4.107-3.334-5.511-2.03-1.573-4.342-2.16-6.88-1.788a8.583 8.583 0 00-4.862 2.404c-2.095 2.052-3.004 4.555-2.71 7.477a8.573 8.573 0 001.277 3.718.22.22 0 01.027.2 4.963 4.963 0 01-1.01 1.793c-.71.805-.3 2.047.747 2.26.386.079.774.025 1.158-.025a7.183 7.183 0 002.55-.862c.08-.045.14-.042.22-.003 1.3.645 2.677.94 4.316.923zm-6.43-2.388c.104-.225.2-.424.29-.626.204-.469.364-.952.479-1.451a1.1 1.1 0 00-.17-.899c-.48-.718-.818-1.498-.964-2.349-.446-2.583.331-4.736 2.344-6.417 1.038-.867 2.258-1.331 3.61-1.425 2.002-.138 3.73.504 5.152 1.912 1.18 1.169 1.83 2.604 1.905 4.266.117 2.595-.963 4.599-3.133 5.992-1.255.805-2.658 1.088-4.145.929a6.497 6.497 0 01-2.564-.837c-.371-.213-.718-.2-1.07.048a6.078 6.078 0 01-1.594.817c-.037.012-.075.022-.14.04zm6.091-10.412c-.029.052-.045.077-.059.104-.38.768-.76 1.535-1.137 2.305-.038.077-.08.126-.172.139-.577.079-1.152.163-1.728.245l-.916.132-.03.048c.04.026.089.045.123.079.598.583 1.194 1.167 1.79 1.752.056.055.112.101.093.202-.124.681-.241 1.364-.36 2.046l-.104.632c.059-.028.09-.041.121-.058.747-.392 1.494-.783 2.238-1.18.104-.056.181-.05.282.003.74.397 1.482.787 2.224 1.178.032.017.067.028.113.046-.003-.04-.003-.063-.006-.084-.143-.845-.282-1.69-.432-2.533-.022-.123.01-.197.094-.278.478-.458.953-.92 1.427-1.382.151-.147.295-.303.45-.462-.036-.008-.065-.016-.094-.02-.84-.122-1.678-.245-2.518-.362-.112-.015-.18-.053-.23-.161-.193-.415-.398-.823-.6-1.234-.185-.377-.37-.755-.569-1.157z"/>';
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
  export let ariaLabel = 'oot';
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
@prop export let ariaLabel = 'oot';
-->
