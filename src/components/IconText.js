import Icon from "./Icon";

export default function IconText(props) {

    return <div class='d-flex'>
        <Icon asset={props.asset}></Icon> 
        <span>{props.children}</span>
    </div>
}