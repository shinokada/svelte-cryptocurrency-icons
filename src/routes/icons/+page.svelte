<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';

  import * as Icons from '$lib';

  const random_tailwind_color = () => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    const shades = ['300', '400', '500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0 h-8 w-8`;
  };
  const random_black_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const random_white_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  const contentClass = 'rounded-lg dark:bg-neutral-900 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size = '24';
</script>

<h1>Svelte Cryptocurrency Icons: Icons</h1>
<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass="relative overflow-x-auto"
>
  <div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
    <Label class="text-lg py-4 ">Icon size: {size}</Label>
    <Range id="range1" min="20" max="50" bind:value={size} />
  </div>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      <span slot="title" class="text-lg">Color</span>
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component this={component} variation="icon" class="shrink-0" bind:size />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Black</span>
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:bg-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component
              this={component}
              color={random_black_code()}
              variation="black"
              bind:size
            />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">White</span>
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 text-white bg-neutral-900"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component
              this={component}
              color={random_white_code()}
              variation="white"
              bind:size
            />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
