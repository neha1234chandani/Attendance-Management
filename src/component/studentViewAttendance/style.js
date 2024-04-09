import { styled } from "styled-components";

const Wrapper = styled.section`

margin-top: 100px;
margin-inline: 20px;
display: flex;
flex-direction: column;
padding:0px 20px;
gap: 2px;
border-radius: 10px;
overflow: hidden;

.outerBox{
    margin-right:50px;
    width: 80%;
    padding:30px;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;

}

.boxHeader{
    display: flex;
    justify-content: space-between;
}

.sub1{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;

}

.sub2{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;    
}

.sub3{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;
}

.sub4{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;
}

.sub5{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;
}

.sub6{
    display: flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:40px;
}

p{
    margin-top :10px;
}

input[type=button]{
     padding : 0 35px;
     font-size:1.5rem;
     background :  #FE4066 ;
     color : white;
     border : solid #FE4066 2px;
     margin-top : 30px ;
     border-radius : 5px;
     width : 100%;
     height : 40px;
     align-items: center;
}

`
export default Wrapper;
