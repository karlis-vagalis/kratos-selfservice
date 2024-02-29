import type { Actions, LayoutServerLoad, PageServerLoad } from './$types';
import { PUBLIC_KRATOS } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, fetch, url }) => {

	const flowId = url.searchParams.get('flow');

	const parts = url.pathname.split('/');
	const action = parts[1];

	if (action == 'logout') {
		const u = `${PUBLIC_KRATOS}/self-service/logout/browser`;
		const r = await fetch(u);
		const m = await r.json();
		redirect(301, m.logout_url);
	}

	if (flowId == null) {
		redirect(301, `${PUBLIC_KRATOS}/self-service/${action}/browser`);
	}

	const modelUrl = `${PUBLIC_KRATOS}/self-service/${action}/flows?id=${flowId}`;
	const res = await fetch(modelUrl);
	const model = await res.json();

	if (model?.error) {
		if (model.error.id == 'security_csrf_violation' || model.error.id == 'self_service_flow_expired') {
			redirect(301, `/${action}`);
		}
	}

	let message = '';
	if (action == 'login') {
		message = 'Sign in to your account';
	}
	if (action == 'registration') {
		message = 'Create an account';
	}
	if (action == 'verification') {
		message = 'Verify your account';
	}
	if (action == 'recovery') {
		message = 'Recover your account';
	}
	if (action == 'settings') {
		message = 'Account settings';
	}

	return {
		message,
		action,
		kratos: model
	};
};
