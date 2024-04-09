import { styled } from "styled-components";

export const Wrapper = styled.div`
margin:100px auto;
border-radius : 3px;
box-sizing : border-box;
max-width:400px;
form {

    padding :30px 40px;
    margin :100px auto ;
    width: 70%;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    font-size: 20px;
    min-height: 40vh;
}
 h2{
    text-align : center;
    font-size : 1.6rem;
    margin:5px 0;
    font-weight :light
}


form input[type="password"],
form input[type="tel"]{
    border: 1px solid #6a6a6a;
    border-radius : 5px;
    cursor : pointer;
    width : 100%;
    height : 45px;
    box-sizing : border-box;
     margin: 8px 0px;
    padding :5px;
     color: black;
     

    &:focus{
        color: black;
    }
}

form #submit{
    display:flex;
    align-item:center;
    justify-content:center
}


 input[type= "button"]  {
     margin:auto;
     padding : 0 50px;
     font-size:1.5rem;
     background :  #FE4066 ;
     color : white;
     border : solid #FE4066 2px;
     margin-top : 15px ;
     border-radius : 5px;
     width : 200px;
     height : 40px;
     border-bottom : solid 2px rgba(300, 100, 100, 200)
    
 }


`