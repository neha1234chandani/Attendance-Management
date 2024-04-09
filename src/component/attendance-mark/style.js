import styled from "styled-components"

const Wrapper = styled.div`
    margin: 120px auto;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .submit{
        width: 100%;
        display: flex;
        justify-content: end;
        margin-bottom: 5px;
        button{
            color: green !important;
            border-color: green !important;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid green;
            color: green;
            background-color: white;
            width: 120px;
            height: 43px;
            font-weight: bold;
        }
    }

    .student-details{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        background-color: white;
        /* box-shadow: 0px 0px 10px #00000076; */
        /* border-radius: 10px; */
        padding-top: 10px;
        border: 4px solid black;
        z-index: -1;
        /* box-shadow: 5px 5px 0px black; */

        .profile-picture{
            img{
                width: 100%;
                border-radius: 100px;
            }
        }

        .name{
            display: inline-block;
            margin-top: 10px;
            font-size: var(--para-size);
            font-weight: bold;
            line-height: 12px;
        }

        .id{
            color: var(--red-accent);
            margin-bottom: 10px;
            font-size: 0.9rem;
            font-weight: bold;
        }

        &.marked{
            opacity: 0.5;
            .id{
                color: gray;
            }
        }

    }
    
    .status{
        display: flex;
        width: 100%;
        color: white;
        text-align: center;
        font-size: 50px;
        gap: 5px;
        align-items: start;
        
        .present{
            font-size: 50px;    
            flex: 1;
            height: 200px;
            border: 4px solid #239323;
            color: #239323;
            box-shadow: 3px 3px 0px #239323;
            cursor: pointer;
            margin-right: 3px;
            background-color: #e5e5f7;
            opacity: 0.8;
            background-image: linear-gradient(-45deg, #e5e5f7, #e5e5f7 50%, #239323 50%, #239323);
            background-size: 4px 4px;

            &:active{
                margin: 3px 0px 0px 3px;
                box-shadow: none;
            }
        }
        .absent{
            z-index: 0;
            font-size: 50px;
            flex: 1;
            height: 200px;
            border: 4px solid #b73737;
            color: #b73737;
            box-shadow: 3px 3px 0px #b73737;
            margin-right: 3px;
            cursor: pointer;
            background-color: #e5e5f7;
            opacity: 0.8;
            background-image: linear-gradient(-45deg, #e5e5f7, #e5e5f7 50%, #b73737 50%, #b73737);
            background-size: 4px 4px;

            &:active{
                margin: 3px 0px 0px 3px;
                box-shadow: none;
            }
        }

        .marked{
            margin: 3px 0px 0px 3px;
            box-shadow: none ;
            color: gray;
            border-color: gray;
            background-image: linear-gradient(-45deg, #eaeaea, #eaeaea 50%, gray 50%, gray);
            cursor:text;
        }
    }

    .navigate-buttons{
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export default Wrapper;