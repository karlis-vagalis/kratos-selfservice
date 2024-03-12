import { env } from '$env/dynamic/public';
import { redirect} from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {

	const res = await event.fetch(`${env.PUBLIC_KRATOS}/sessions/whoami`);
	const session = await res.json();

	if (session.hasOwnProperty('error')) {
		if (event.url.pathname == '/') {
			redirect(301, '/login');
		}
	}

	event.locals = { session };

	const response = await resolve(event);
	return response;

};
