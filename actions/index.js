
export const INCREMENT_COUNTER='INCREMENT_COUNTER';
export const increment =()=>{
console.log('Increment actions');
return{
    type:INCREMENT_COUNTER
}
}