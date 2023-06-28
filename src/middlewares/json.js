export async function json(request, response){
  const buffer = [];
  for await (const chunk of request){
    buffer.push(chunk);
  }
 try{
  request.body = JSON.parse(Buffer.concat(buffer).toString());
 }catch {
  request.body = null;
 }
 response.setHeader('Content-type', 'application/json');
}