import { styled } from "styled-components";

const Wrapper = styled.div`
    margin: 70px auto;

    >h1{
        width: 80%;
        text-align: center;
        margin: auto;
    }

    >div{
        width: 80%;
        margin: auto;
        box-shadow: 5px 5px 10px #0000004c;
        border-radius: 10px;
        overflow: hidden;
        max-width: 500px;

        #image-container{
            background-color: var(--red-accent);
            padding-block: 20px;

            >div{
                margin: auto;
                width: 100px;
                img{
                    width: 100%;
                    display: block;
                    border-radius: 50px;
                }
            }
        }

        .row{
            padding: 10px;
            border-bottom: 1px solid black;
            display: flex;
            background-color: white;
            .icon{
                flex: 1;
            }
            .title{
                flex: 4;
            }
            .details{
                flex: 6;
            }
        }
    }
`
export default Wrapper;