import { env } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, fetch, url }) => {

	const errorId = url.searchParams.get('id');

    if (errorId == null) {
        redirect(301, "/")
    }

	const u = `${env.PUBLIC_KRATOS}/self-service/errors?id=${errorId}`;
	const r = await fetch(u);
	const m = await r.json();
	
    return m;
}