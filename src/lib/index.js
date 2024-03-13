// place files you want to import through the `$lib` alias in this folder.

import { env } from "$env/dynamic/public";
import { json } from "@sveltejs/kit";

export const checkEnabledFlows = async () => {

    /**
     * @param {string} f
     */
    async function checkFlow(f) {
        return fetch(`${env.PUBLIC_KRATOS}/self-service/${f}/browser`,
            { redirect: "manual" } // Not to follow redirect, otherwise infinite request loop
        )
    }
    
    let response = await Promise.all([
        checkFlow('registration'),
        checkFlow('verification'),
        checkFlow('recovery')
    ]);

    let resultFlows = response.map(r => {
        let flow = r.url.slice(`${env.PUBLIC_KRATOS}/self-service/`.length, -'/browser'.length)
        let enabled = r.headers.get('location')?.includes('error') ? false : true
        return {
            flow,
            enabled
        }
    })

    let result = Object.fromEntries(resultFlows.map(e => [e.flow, e.enabled]))

    return result;
}