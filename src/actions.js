// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }

// Либо так 

export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * 10)});