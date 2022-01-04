

const backgroundStyle = {
    backgroundColor: "#F8F7FF"
  }
function Card(props) {

  let imageStyle = props.imageBackground ? backgroundStyle : {};
  let contentStyle = props.contentBackground ? backgroundStyle : {};

    return (
      <section className="card">
        
        <div style={imageStyle} className="card-image"> 
          Imagen
        </div>

        <div style={contentStyle} className="card-content">
          {props.children}
        </div>
      </section>
    );
  }


export default Card;