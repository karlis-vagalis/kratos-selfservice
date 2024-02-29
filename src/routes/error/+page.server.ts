import type { PageServerLoad } from './$types';
import { PUBLIC_KRATOS } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, fetch, url }) => {

	const errorId = url.searchParams.get('id');

    if (errorId == null) {
        redirect(301, "/")
    }

	const u = `${PUBLIC_KRATOS}/self-service/errors?id=${errorId}`;
	const r = await fetch(u);
	const m = await r.json();
	
    return m;
}