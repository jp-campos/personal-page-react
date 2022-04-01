import styled from "styled-components"
import { ColumnCenter } from '../styled_foundations/layout'
import { pixelSizes, WhiteSpaceMd } from "../styled_foundations/spacing"
import { device } from "../utility/display"
import Icon from './Icon'



const StyledCard = styled.div`
  display:flex;

  @media ${device.tablet}{
    flex-direction: column; 
    align-items: center;
  }
  border:none;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  margin-bottom: 50px;
`




const Left = styled.div`
  width:${props=> props.width};
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    column-gap: 10px; 
    justify-content: center;
    margin-bottom: ${pixelSizes.s};
  }
  border-radius: 8px 0px 0px 8px;
`


const Right = styled.div`
  width:${props=> props.width};
  border-radius: 0px 8px 8px 0px;
  padding: 30px;
  @media ${device.tablet}{
    width: 100%; 
    padding: 5px;
  }
`

export default function Card(props) {

  const rightWidth = props.left == null ? '100%': '80%'
  const leftWidth = props.left == null  ? '0%' : '20%'
  
  return (
    <StyledCard>

      <Left width={leftWidth}>
        {props.left}
      </Left>

      <Right width={rightWidth}>
        {props.children}
      </Right>
    </StyledCard>
  );
}

const IconsContainer = styled(ColumnCenter)`
  padding: 30px 0px;

  @media ${device.tablet}{
    padding: 15px 0px;
    flex-direction: row;
    width: 100%; 
  }

`

export function IconsCard(props) {


  const left = <IconsContainer>

    {props.assets
      .map((asset) => <Icon key={asset} height={100} width={100} asset={asset} />)
      .flatMap((icon, i) => [icon, <WhiteSpaceMd key={i} />])
    }
  </IconsContainer>

  return <Card left={left}>
    {props.children}
  </Card>
}


