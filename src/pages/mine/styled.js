import styled from "styled-components";

export const Dlh = styled.div`

height: 4rem;
position: relative;
overflow: hidden;
}
  
.yuan_bg {
    background: linear-gradient(to left, #EE3B3B 0, #FFB90F 100%);
    position: absolute;
    z-index: -1;
    top: -300px;
    left: -111px;
    width: 6rem;
    height: 5rem;
    border-radius: 50%;
}

.min_logo {
    margin-top: .25rem;
    padding-left: .16rem;
    height: .66rem;
    /* background: seagreen; */
    position: relative;
}

.imglogo{
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    overflow: hidden;
    border: 1px solid #ccc;
}

.min_logo>img {
    width: .66rem;
    height: .66rem;
}

.min_logo>span {
    display: inline-block;
    height: .66rem;
    line-height: .66rem;
    font-size: .18rem;
    color: aliceblue;
}

.shezhi {
    font-size: .26rem;
    color: aliceblue;
    position: absolute;
    top: -6px;
    right: .2rem;
}

.sc_zj {
    margin: .3rem .2rem 0;
    height: .93rem;
    /* padding: 0 .2rem; */
    background: #fff;
    border-radius: 10px;
}

.cs_ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.cs_ul span {
    color: #666;
}

.cs_ul>li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.shouc {
    color: #666;
    font-size: .3rem;
}

/* 3 */

.shoucang_yj {
    margin: .2rem .2rem 0;
    height: 1.28rem;
    background: #fff;
    border-radius: 10px;
}

.shoucang_yj p {
    padding-left: .16rem;
    line-height: .31rem;
    font-size: .14rem;
    color: #000;
    border-bottom: 1px solid #ccc;
    color: #aaa;
}

.shoucang_yj ul {
    display: flex;
    justify-content: flex-start;
}

.shoucang_yj li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: .89rem;
    height: .67rem;
    text-align: center;
    color: #666;
}


.shoucang_yj i{
    font-size: .3rem;
    color: darkorange;
}





`