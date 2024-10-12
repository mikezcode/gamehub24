import apiClient from "./api-client";

class HttpService<T> {
  private readonly endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
 getAll(){
  const controller = new AbortController();
  const req=  apiClient .get<{results:T[]}>(this.endpoint,{signal:controller.signal});
  return {req, cancel:()=> controller.abort()}            
 }

}
const createService = <T>(endpoint:string) => new HttpService<T>(endpoint);
export default createService
