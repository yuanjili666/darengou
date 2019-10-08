import styled from "styled-components"


export const Pltyle=styled.div`

.topbox{

    position:fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 26;

}
.nav_two{
    background: #fff;
}
.nav_two>ul{
    border-bottom: 1px solid rgba(220, 220,220,0.3)
}
/* 标题 */
.nav_products{
    height:.44rem;
    padding: .08rem .1rem ;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    padding: 8px 10px;
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 120;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.classcolor{
    color:#fff;
    font-size: .20rem !important;
    padding: 10px;
    padding-right:5px;
}
.class_name{
    font-size: .17rem;
}
/* 导航 */
.nav_two{
    height: .5rem;
}
.nav_two>ul{
    display: flex;
    justify-content: space-between;
    align-items: center;  
    flex: 1;
}
.nav_two li{
    display: block;
    /* width:25%;  */
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    flex: 1;
}
.navi{
    font-size: .20rem !important;
}
.moren{
    border-bottom: 1px solid #fe4a65;
}

/* 产品列表 */

.products_list{
    margin-top: 1.2rem;
   height: 100%;
   width: 100%;
}
.product_content{
    margin:.1rem 0 0.1rem .1rem;
    border-bottom: 1px solid #F5F5F5;
    height: 1.46rem;
}
.content_img{
    float: left;
}
.content_img>img{
    width: 1.26rem;
    height: 1.26rem;
    height: 100%;
}

.content_rg{
    width: 2.1rem;
    /* padding-right: .04rem; */
   display: inline-block;
    margin-left: .1rem;
  
}

.content_rg>h3{
    word-wrap: break-word;
    white-space: normal;
    word-break: break-all;
    font-size: .14rem;
    /* font-style: normal; */
    font-weight: normal;
    text-indent:.15rem;
    margin-bottom: .3rem;

}
.content_rg2{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #aaa;
    font-size: .11rem;
    margin-top: .15rem;
}
.content_rg3{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: .24rem;
    margin-top: .06rem;
}

.content_rg3 i{
    color: #FC4D52;
    font-size: .11rem; 
}

.content_rg3 strong{
    font-size: .18rem;
    color: #FC4D52;
}

.youhui{
    padding: 3px 10px;
    background: #fff;
    z-index:20;
    zoom:1;
    font-style: normal;
    display: block;
    font-size: .14rem;
    min-width: .7rem;
    text-align: center;
    color: #FC3F78;
    border: 1px solid #FC3F78;
    /* overflow: hidden; */
    position: relative;
}

.youhui:after,.youhui:before{
    position: absolute;
    z-index:80;
    zoom: 1;
    top: 50%;
    margin-top: -3px;
    border: 1px solid #FC3F78;
    background: #fff;
   
    display: block;
    width: 6px;
    height: 5px;
    content: "";
    border-radius: 10px;
   
}

.youhui:before{
    left: auto;
    right: -2px;
    border-right: none;
}
.youhui:after{
    left:-1px;
    border-left: none;
   
}

.d{

    display: inline-block;
    padding: .036rem .12rem;
    border-radius: 50%;
    color: #F5F5F5;
    font-size: .12rem;

}




`

