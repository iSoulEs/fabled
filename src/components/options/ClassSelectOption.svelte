<script lang='ts'>
	import ProInput                  from '$input/ProInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import SearchableSelect          from '$input/SearchableSelect.svelte';
	import ProClass                  from '$api/proclass';
	import { classes, getClass }     from '../../data/class-store';

	export let data: ProClass[] | ProClass | string[] | string = [];
	export let name: string | undefined                        = '';
	export let tooltip: string | undefined                     = undefined;
	export let multiple                                        = true;

	$: if (!multiple && data.length === 0) data = '';

	const dispatch = createEventDispatcher();
	$: if (data instanceof Array) {
		data = data.map(cl => {
			if (cl instanceof ProClass) return cl;

			const clazz = getClass(cl);
			if (clazz) return clazz;
		});
		dispatch('save');
	} else {
		if (data && !(data instanceof ProClass)) {
			const clazz = getClass(<string>data);
			if (clazz) data = clazz;
		}
		dispatch('save');
	}
</script>

<ProInput label={name} {tooltip}>
	<SearchableSelect bind:data={$classes}
										{multiple}
										bind:selected={data} />
</ProInput>