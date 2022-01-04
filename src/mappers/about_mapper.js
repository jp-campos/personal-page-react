import UiAboutModelModel from "../ui_models/ui_about_model"

export default (json) => {
    let language
    return new UiAboutModelModel(json['title'],json['location'],json['timezone'],json['languages'],)
}


function _parseAbout(contentText){
    return contentText
}