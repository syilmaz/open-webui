<script lang="ts">
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	import Chat from '$lib/components/chat/Chat.svelte';
	import { page } from '$app/stores';
	import { user } from '$lib/stores';

	onMount(() => {
		if ($user === undefined || $user === null) {
			goto('/auth');
			return;
		}

		if ($page.url.searchParams.get('error')) {
			toast.error($page.url.searchParams.get('error') || 'An unknown error occurred.');
		}
	});
</script>

<Chat />
