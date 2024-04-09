import styled from "styled-components"

const Wrapper = styled.div `
    display: flex;
    justify-content: start;

    .hamburger-icon{
        font-size: var(--para-size);
        cursor: pointer;
    }

    .black-background{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #0000005c;
    }

    .menu{
        padding: 10px;
        width: 200px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: var(--gray-accent);
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
        
        .close{
            color: red;
            text-align: start;
            padding: 10px;
            font-size: var(--h2-size);
            cursor: pointer;
        }
        // ul li{
        //     height:50px
        // }
        a{
            display: block;
            margin-block: 20px;
            width: 100%;
            text-decoration: none;
            color: black;
           // border: 2px solid black;
            padding-block: 10px;
        }
        .active{
            background-color: #6c6c6c;
            color: white;
        }
    }

    @keyframes menuSlideIn {   
        from {
            left: -100%;
        }
        to{
            left: 0;
        }
    }

    @keyframes menuSlideOut {
        from {
            left: 0px;
        }
        to {
            left: -100%;
        }
     }
`

export default Wrapper;