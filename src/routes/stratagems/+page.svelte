<script lang="ts">
	import { Stratagems, StratagemCategories } from '$lib/stratagems/Stratagems';
	import StratagemInput from '$lib/stratagems/StratagemInput.svelte';
</script>

<h1 class="text-white text-4xl mb-10 uppercase">Stratagems</h1>

{#each StratagemCategories.all as category}
	<div class="mb-10">
		<h2 class="text-yellow text-xl mb-3">{category}</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
			{#each Stratagems.allByCategory(category) as stratagem}
				<div class="flex gap-x-2">
					<img
						src={stratagem.icon}
						alt={stratagem.name}
						class="w-[50px] aspect-square object-cover object-center"
					/>
					<div>
						<h2 class="text-yellow">{stratagem.name}</h2>
						<div class="flex gap-x-1">
							{#each stratagem.inputs as input}
								<StratagemInput {input} class="text-grey-light w-[18px]" />
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/each}
