import styled from "styled-components";


const backgroundStyle = {
    backgroundColor: "#F8F7FF"
  }


const StyledCard = styled.div`
  display:flex;
  min-height: 230px;
  border:none;
  border-radius: 8px;
  background-color: white;
  width: 100%;
`

function Card(props) {

  let imageStyle = props.imageBackground ? backgroundStyle : {};
  let contentStyle = props.contentBackground ? backgroundStyle : {};

    return (
      <StyledCard>
        
        <div style={imageStyle} className="card-image"> 
          Imagen
        </div>

        <div style={contentStyle} className="card-content">
          {props.children}
        </div>
      </StyledCard>
    );
  }


export default Card;