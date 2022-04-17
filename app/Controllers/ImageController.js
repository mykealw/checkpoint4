import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { imageService } from "../Services/ImageService.js"

function _drawImage(){
    let template = ProxyState.image.toString()
    // debugger
    // document.body.style.backgroundImage = temp2.toString()
    document.getElementById('body').setAttribute("style", "background-image: url(" +template + ")");

    // console.log(template, "template boss");
}
export class ImageController {
constructor(){
    this.getImage()
ProxyState.on("image", _drawImage);
_drawImage()
// console.log("hello from image");

    
}

async getImage(){
try {
    imageService.getImage()
} catch (error) {
    Pop.toast(error.message, "error")
    console.log(error);
}

}

}