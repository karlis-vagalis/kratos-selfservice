import { env } from '$env/dynamic/public';
import { checkEnabledFlows } from '$lib';

/** @type {import('./$types').LayoutServerLoad} */
export async function load ({ locals, fetch }) {

    let f = await checkEnabledFlows()

	const session = locals.session;

    return {
        session,
        flows: f
    }
}