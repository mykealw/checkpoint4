import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./SandboxApi.js";

class ImageService {
   async getImage() {
const res = await sandboxApi.get('images/')
console.log( res.data, "here is res.data");
ProxyState.image = res.data.largeImgUrl
// console.log(ProxyState.image);
ProxyState.image = ProxyState.image
    }



}



export const imageService = new ImageService();