import styled from "styled-components";

export const TabBarWrapper = styled.div`
    width:100%;
    height:1rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    border-top:1px solid #ccc;
    ul,li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
       display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center; 
       font-size:.3rem;
    }
    i{
        font-size:.4rem;
    }
    .active{
        color:#c33;
    }
`