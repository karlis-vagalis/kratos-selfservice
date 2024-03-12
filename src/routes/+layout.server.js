
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ locals }) => {
	const session = locals.session;

    return {
        session
    }
}