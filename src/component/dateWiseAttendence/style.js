import { styled } from "styled-components";



const Wrapper = styled.section`

margin-top: 100px;
margin-inline: 20px;
display: flex;
flex-direction: column;
border-block: none;
padding:0px 20px;
gap: 2px;
border-radius: 10px;
overflow: hidden;

#body{
    width: 80%;
}

.filter{
    height:40px;
    display:flex;
    justify-content:right;
}

.date{
    height:40px;
    border-radius: 15px;
    border : solid white 1px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
    align-items: center;

}

.outerBox{
    margin-top:50px !important;
    width: 80%;
    padding:30px;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    display: flex;
    flex-direction: column;
    align-items: center;

    >*{
        width: 90%;
    }
}   

.boxHeader{
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        flex: 1;
        /* text-align: center; */
    }
}



.sub{
    width: 100%;
    display: flex;
    justify-content: space-between;

    p{
        flex: 1;
        /* text-align: center; */
    }
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

