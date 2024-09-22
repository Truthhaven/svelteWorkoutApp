/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    return {userid:params.userid};
};