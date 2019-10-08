import styled from "styled-components"

export const Sc=styled.div`

height:100%;

.collect_top {
    height: .45rem;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
    line-height: .45rem;
    color: #fff;
}

.collect_top a {
    display: inline-block;
    width: .45rem;
    height: .45rem;
    color: #fff;
    text-align: center;
    font-size: .14rem;
}


.neirong{
 
    height: 1.358rem;
    width:3.654rem;
    padding: .1rem 0 0 .1rem;
}


.divimg{
    display: inline-block;
    width: 1.26rem;
    height: 1.26rem;
    overflow: hidden;
    border-radius: .05rem;
}
.divimg>img{
    width: 100%;
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
    margin-bottom: .6rem;

}

.content_rg3{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: .24rem;
    margin-top: .06rem;
}

.content_rg3 em{
    color: #888;
    font-size: .11rem; 
}

.content_rg3 strong{
    font-size: .16rem;
    color: #888;
}


.content_rg3 a{
    display: inline-block;
    padding: .036rem .12rem;
    border-radius:0.1rem;
    color: #F5F5F5;
    font-size: .12rem;
    background: linear-gradient(to left,#FBAA58 0,#FA4DBE 100%);
}




/* 分隔 */

.user_coll_ge {
    height: .49rem;
    text-align: center;
    padding: .14rem 0;
    position: relative;
}

.user_coll_ge em,
i {
    display: inline-block;
    position: relative;
    top: -20%;
    width: .6rem;
    padding: .01rem;
    /* background: #FA4DBE; */
    border-bottom: 1px solid #FA4DBE;
}

.user_coll_ge em::after,
i::after {
    content: "";
    width: 3px;
    height: 3px;
    top: 2px;
    background: #FC3F78;
    right: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    display: inline-block;
    zoom: 1;
}

.user_coll_ge i::after {
    right: 57px;
}

.shoucang {
    color: #FF1493;
    font-size: .20rem;
}
.shoucang_after {
    display: inline-block;
    z-index: -1;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    top: 16px;
    left:142px;
    background: rgba(210, 210, 210, 0.8)
}






`