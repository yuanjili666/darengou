import styled from "styled-components";

export const Flnavlf=styled.div`



.nav_lf{
    width:0.8rem;
    background:#F4F4F4;
    height:100%;
    overflow: hidden;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    z-index:0;
}

.nav_lf li{
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    font-size: .14rem;
}
.nav_gekai{
    height: .44rem;
    width: 100%;
}


.nav_rg{

  
    padding-left:0.8rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    top: 0;
    right: 0; 
    

}

.nav_rg ul{
    display: flex;
    /* justify-content: space-around; */
    justify-content: flex-start;
    flex-wrap: wrap;
}

.nav_rg li{
    width: .96rem;
    height: 1.03rem;
    /* background: khaki; */
    text-align: center;
    padding-bottom: .2rem;
    font-size: .12rem;
}
.nav_rg img{
    width: .58rem;
    height: .58rem;
    margin:0 .19rem ;
}
.nav_rg h3{
    margin: .15rem 0;
    font-size: .14rem;
    font-style: normal;
    padding-left: .13rem;
    font-weight: normal;
}
.nav_gekai2{
    height: .6rem;
}
.nav_gekai3{
    height:2rem;
    background: darkblue;
}

.acre{
    color: #FC3F78;
    border-left: 2px solid #c33;
    background:floralwhite;
}


`