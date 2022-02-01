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
  margin-bottom: 50px;
`




const Left = styled.div`
  width:20%;
  border-radius: 8px 0px 0px 8px;
`


const Right = styled.div`
  width:80%;
  border-radius: 0px 8px 8px 0px;
  padding: 30px;
`

function Card(props) {



  return (
    <StyledCard>

      <Left>
        {props.left}
      </Left>

      <Right>
        {props.children}
      </Right>
    </StyledCard>
  );
}


export default Card;