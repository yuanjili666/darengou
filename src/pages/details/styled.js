import styled from "styled-components";

export const Detailsstyle = styled.div`

height:100%;
.imgbox{
    width: 100%;
    height: 3.75rem;
    background: darkblue;
}



.imgbox {
    width: 100%;
    height: 3.75rem;
    background: darkblue;
}
.imgbox>img{
    height:100%;
}

.goods {
    height: 3rem;
    /* background: sandybrown; */

}

.goods h2 {
    font-size: .16rem;
    color: #333;
    padding: .14rem 0 8.4px 14px;
}

.goods_rou {
    height: .56rem;
    margin: 0 .14rem;
    background: skyblue;
    display: flex;
    justify-content: space-between;

}

.goods_quan {
    height: .89rem;
    position: relative;
}

/* .goods_rou_lf .goods_rou_rg{
    widows: 150px;
    height: .89rem;

} */

.goods_quan img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.goods_quan_box {
    position: absolute;
    top: 0;
    left: 0;
    height: .89rem;
}

.goods_quan_box_lf {
    /* display: inline-block; */
    height: .89rem;
    width: 2.30rem;
    /* background: firebrick; */
    float: left;
}

.goods_quan_box_lf p {
    font-size: 0.14rem;
    color: #fff;
    font-weight: 700;
    text-align: center;

}

.goods_quan_box_lf .goodsp {
    font-size: .1rem;
    color: #fff;
    font-weight: normal;
}

.goods_quan_box_rg {
    width: 1.25rem;
    height: .6rem;
    margin-top: 0.12rem;
    /* background: hotpink; */
    display: inline-block;
    text-align: center;
    /* border-style: dashed; */
    border-left: 2px dashed #ccc;
}

.goods_quan_box_rg a {
    font-size: .16rem;
    color: #fff;
    font-weight: bold;
    line-height: .6rem;
    display: inline-block;
    width: 1.25rem;
    height: .6rem;

}

.goodsp1 {
    margin-top: 0.22rem;
}

.goods_shuoming {
    height: .84rem;
    margin: .07rem .14rem .195rem .14rem;
    /* background: slateblue; */
}

.goods_shuoming>p {
    color: #888;
    font-size: .14rem;
}

/* 店铺 */

.dianpu {
    height: 1.37rem;
    /* background: salmon; */
    margin: .1rem 0;
    padding: 0 .14rem;
}

.dianpu_shang {
    padding: .1rem 0;
    height: .8rem;
    border-top: 5px solid rgba(220,220,220,0.3);
}

.dianpu_logo {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
    /* background: seagreen; */
    float: left;
}

.dianpu_logo>img {
    width: 100%;
}

.dianpu_title {
    float: left;
    width: 1.25rem;
    height: .6rem;
    /* background: fuchsia; */

}

.dianpu_title>h2 {
    font-size: .16rem;
    padding: .1rem 0 0.2rem;
}

.dianpu_jinru {
    width: 1.25rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    float: right;
    /* background: yellow; */
}

.dianpu_xia {
    display: flex;
    justify-content: center;
    width: 100%;
    height: .5rem;
    border-top: 1px solid rgba(220,220,220,0.3);
}

.dianpu_xia li {
    flex: 1;
    line-height: .5rem;
}

.dianpu_xia p {
    border-right: 1px solid #333;
    line-height: 16px;
    text-align: center;
    margin-top: 17px;
    font-size: .14rem;
}

.dianpu_xia .pppp {
    border: none;
}

.xiangshitj {

    height: 2.47rem;
    width: 100%;
    /* background: khaki; */
    text-align: center;
}

.xiangshitj>h2 {
    font-size: .16rem;
    line-height: .5rem;

}

.xscpul {
    height: 1.91rem;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: auto;

}

.xscpul li {
    width: 1.1rem;
    height: 1.91rem;
    /* background: fuchsia; */
    margin-right: .1rem;

}

.xscpul li>img {
    width: 1rem;
    height: 1rem;
}
.xscpul p{
    font-size: .14rem;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.chanpinxq {
    height: 100%;
    text-align: center;
    background: #ccc;
}

.chanpinxq>h2{
    line-height: .5rem;
    font-size: .16rem;
    font-weight: normal;
}
.chanpinxq img{
    width:100%;
}

/* rexiao */

.jinrirexiao {
    width: 100%;
    margin-top: .1rem;
    height: 100%;
    text-align: center;
}
.jinrirexiao h2{
    line-height: .5rem;
    font-size: .16rem
    border-top: 5px solid RGBA(220,220,220,0.3);
}

.jinrilist {
    padding: 0 .05rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background:RGBA(220,220,220,0.3);

}

.jinrilist li {
    background: #fff;
    margin-bottom: 5px;
    height: 297.5px;
    border-radius: 5px;
    width: 49%;
    overflow: hidden;
}

.jinrilist img {
    /* width: 1.8rem;
    height: 1.8rem; */
    width: 100%;
}

.jinrilist h3 {
    font-size: .14rem;
    margin-bottom: 5px;
    margin-top:5px;
}

.jiagele1,
.jiagele2 {
    display: flex;
    justify-content: space-between;
    height: .26rem;
    margin: 5px 0;
    padding: 0 .06rem;
}

.jiagele1 span{
    font-size: .12rem;
    color: #888;
  
}

.jiagele2 span{     
    font-size: .12rem;
    color: red;
    
}


`