import styled from "styled-components"
const Wrappers = styled.div`

margin: 80px auto;
max-width:400px;
form {
    padding :30px 20px;
    margin :10px auto ;
    width: 85%;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    font-size: 20px;
    //min-height: 40vh;
   
  
}
form h2{
    text-align: center;
    font-size: var(--h2-size);
    padding-block: 10px;
}
form input,select{
    border : solid #6c6c6c 1px;
    border-radius : 5px;
    cursor : pointer;
    width : 100%;
    height : 45px;
    box-sizing : border-box;
     margin: 8px 0px;
    padding :5px;
    background-color:white;
    font-size: 14px;
    color:black;
}

#login{
    display : flex;
    margin-top:2px;
    align-items:center;
    justify-content:center;
    font-size:16px;
}

#login-btn {
    text-decoration : none;
    color :  #FE4066  ;
    padding : 5px ;
    
}
#login-btn:hover{
    cursor: pointer;
}

#submit  {
    display:flex;
    justify-content:center;
    align-items:center;
}
 #submit input[type=submit]  {
     padding : 0 50px !important;
     font-size:1.5rem !important;
     background :  #FE4066 !important;
     color : white !important;
     border : solid #FE4066 2px !important;
     margin-top : 15px !important ;
     border-radius : 5px !important;
     width : 200px !important;
     height : 40px !important;
     border-bottom : solid 2px rgba(300, 100, 100, 200) !important;
     box-shadow: none !important;
 }
`
export default Wrappers;