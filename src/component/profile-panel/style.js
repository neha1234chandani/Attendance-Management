import styled from "styled-components"

const Wrapper = styled.div`
    width: 40px;
    
    .blur-background{
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        opacity: 0.5;
    }

    >img{
        width: 100%;
        border-radius: 50px;
        cursor: pointer;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    .profile-panel{
        position: fixed;
        z-index: 100;
        right: 0;
        top: 0;
        bottom: 0;
        padding-inline: 10px;
        background-color: var(--gray-accent);
        color: black;
        border: 2px solid black;
        transition: all 1s;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;

        .close{
            position: absolute;
            right: 10%;
            font-size: var(--h1-size);
            color: red;
            cursor: pointer;
        }

        .details{
            margin-top: 40px;
            border: 2px solid black;

            .profile{
                width: 140px;
                margin: auto;

                img{
                    margin-top: 15px;
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 1/1;
                    border-radius: 130px;
                }
            }
        }

        .button{
        }

        @keyframes slidePanelIn {
            from{
                right: -100px;
            }
            to{
                right: 0;
            }
        }

        @keyframes slidePanelOut {
            from{
                right: 0;
            }
            to{
                right: -400px;
            }
        }
    }
`

export default Wrapper;