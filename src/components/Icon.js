export default function Icon(props) {

    const basePath = '../../assets/icons/'
    const defaultWidth = 20;
    const defaultHeight = 20;
    return <img alt={props.asset} width={props.width ?? defaultWidth} height={props.height ?? defaultHeight} src={basePath +  props.asset + '.png' }></img>

}

