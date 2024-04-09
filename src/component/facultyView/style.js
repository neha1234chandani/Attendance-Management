import styled from "styled-components"

const Wrapper = styled.section`
    margin: 50px auto;
    display:flex;
    justify-content: center;


.outerContainer {
    max-width : 80%; 
    min-width : 60% 

}

.container {
    padding :30px 20px;
    margin :10px auto ;
    width: 100%;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    font-size: 20px;
    box-sizing: border-box;

     
}

.heading{
    display:flex;
    justify-content:center;
}

.name{
    display : flex;
    justify-content : center;
    padding:5px;
    flex:1;


}

.rollNo{
    display : flex;
    justify-content : center;
    padding:5px;
    flex:1;

}

.attendance{
    display : flex;
    justify-content : center;
    padding:5px;
    flex:1;

}

.boxHeadings {
    display : flex;
    justify-content: space-between;
    border:solid thin #888;
    order:3;
    // justify-content : center;
    align-items : center;
    box-sizing: border-box;

    
}

h1 {
    font-size : 1.6rem;
    margin :5px 0 20px 0;
}

h2 {
    font-size : 1.0rem;
}

p{
    font-size : .90rem;

}

.inner{
    display:flex;
    justify-content:space-between;
}
// // .info {
// //     display : flex;
// //     justify-content:space-evenly;
// //     align-items : center;
// //     border : 1px solid black;
// // }
// .name{
//         display : flex;
//         flex-direction : column;
//         justify-content:space-evenly;
//         align-items : center;
        
//     }



`

export default Wrapper;