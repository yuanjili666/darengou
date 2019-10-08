import styled from "styled-components"


export const HeaderFenlei=styled.div`
@font-face {
    font-family: 'iconfont';
    src: url('iconfont.eot');
    src: url('iconfont.eot?#iefix') format('embedded-opentype'),
        url('iconfont.woff2') format('woff2'),
        url('iconfont.woff') format('woff'),
        url('iconfont.ttf') format('truetype'),
        url('iconfont.svg#iconfont') format('svg');
  }


  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  height: .44rem;
  background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
  border-bottom-color: transparent;
  padding: 8px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .nana{
    padding-right: .1rem;
}

.input_2{
    display: flex;
    justify-content: space-between;
}
.input_3>button{
    width: .3rem;
    height: 100%;
    border: none;
    background: none;
    padding:0 .16rem ;
    text-align: center;
}
.input_3{
    width: 3.25rem;
    height: .28rem;
    background: #F4F4F4;
    line-height: .28rem;
    border-radius: .7rem;
    margin-right:0.25rem;
    color: #ccc;
    font-size: .14rem
}






`