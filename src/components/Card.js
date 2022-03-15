import styled from "styled-components"
import { ColumnCenter } from '../styled_foundations/layout'
import Icon from './Icon'



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
  width:${props=> props.width};
  border-radius: 8px 0px 0px 8px;
`


const Right = styled.div`
  width:${props=> props.width};
  border-radius: 0px 8px 8px 0px;
  padding: 30px;
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

`

const IconSpacing = styled.div`
  height: 20px;
`

export function IconsCard(props) {


  const left = <IconsContainer>

    {props.assets
      .map((asset) => <Icon height={100} width={100} asset={asset} />)
      .flatMap((icon) => [icon, <IconSpacing />])
    }
  </IconsContainer>

  return <Card left={left}>
    {props.children}
  </Card>
}


