import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: var(--red-accent);
    color: white;
    text-align: center;
    padding-block: 14px;
    // position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
    align-items: center;

    h1{
        font-size: var(--para-size);
    }
`

export default StyledHeader;