  //THIS PAGE IS NOT USED
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    return {userid:params.userid, workoutid:params.workoutid};
};