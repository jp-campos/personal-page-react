import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const RowSpaceBetween = styled(Row)`
    justify-content: space-between;
`
export const RowSpaceAround = styled(Row)`
    justify-content: space-around;
`
export const RowCenter = styled(Row)`
    justify-content: center;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const ColumnCenter = styled(Column)`
      justify-content: center;
    align-items: center;
`