import handleResponseFromAPI from "../2-then";

const promise = Promise.resolve();
// const promise = Promise.reject();
const resp = handleResponseFromAPI(promise);
setTimeout(() => console.log(resp), 200)
