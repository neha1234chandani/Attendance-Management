import styled from "styled-components"

const Wrapper = styled.div`
    margin-block: 130px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 90%;
    
    h1{
        margin-right: auto;
    }

    .year-filter{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        div{
            text-align: center;
            flex: 1;
            //border: 1px solid black;
            background-color: white;
            padding-block: 4px;
            cursor: pointer;
            border-radius:5px;

            &:hover{
                background-color: #ce3156;
                color: white;
                border:none;
            }

            &:active{
                opacity: 0.5;
            }
        }
    }

    .search{
        width: 100%;
        display: flex;
        gap: 4px;
        justify-content: space-between;
        input{
            height: 40px;
            flex: 4;
            border-radius:5px;
            border:none;
            color:black !important;
        }
        placeholder{
            color:black !important;
        }
        button{
            flex: 1;
           border: 1px solid white;
            background-color: white;
            padding-inline: 20px;
            cursor: pointer;
        }
    }
    
    .batch-options{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        .batch-container{
            width: calc(33% - 10px);
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            //border: 2px solid black;
            border-radius:5px;
            cursor: pointer;
            transition: all 0.15s;

            &:hover{
                background-color: #ce3156;
                color: white;
            }

            &:active{
                opacity: 0.5;
            }
        }
    }
`

export default Wrapper;