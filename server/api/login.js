export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('received request with body:', body);
  
});
