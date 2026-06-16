<script lang="ts">
	import { page } from '$app/stores';
	import type { AgentDefinition } from '$lib/agents';

	export let agent: AgentDefinition;
	export let onClick: () => void = () => {};

	$: href = `/agents/${agent.id}`;
	$: active = $page.url.pathname === href;
</script>

<a
	class="w-full flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 transition group text-sm {active
		? 'bg-gray-100 dark:bg-gray-900'
		: ''}"
	{href}
	on:click={onClick}
	draggable="false"
	aria-label={agent.name}
	title={agent.description}
>
	<div class="self-center text-base leading-none" aria-hidden="true">
		{agent.icon}
	</div>

	<div class="min-w-0 flex-1">
		<div class="text-ellipsis line-clamp-1">{agent.name}</div>
		<div class="text-xs text-gray-500 dark:text-gray-400 text-ellipsis line-clamp-1">
			{agent.description}
		</div>
	</div>
</a>
