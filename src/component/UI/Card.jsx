import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Card = (props) => {
    return(
        <Container>{props.children}</Container>
    )
}

export default Card;