import { PUBLIC_KRATOS } from '$env/static/public';
import type { Session } from '@ory/client';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

	const res = await event.fetch(`${PUBLIC_KRATOS}/sessions/whoami`);
	const session: Session = await res.json();

	if (session.hasOwnProperty('error')) {
		if (event.url.pathname == '/') {
			redirect(301, '/login');
		}
	}

	event.locals = { session };

	const response = await resolve(event);
	return response;

};
