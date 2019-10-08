import React, { Component } from 'react'
import { Detailsstyle } from "./styled"
import url from "url"
import http from "../../utils/http"
export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsid: '',
            id: '',
            zhutu: '',
            category_id: '',
            d_title: '',
            jiage: '',
            yuanjia: '',
            xiaoliang: '',
            quan_link: '',
            quan_jine: '',
            r: "class%2Fcyajaxsub",
            page: '1',
            cid: '19',
            px: 't',
            cac_id: '',
            imglist: [],
            daylist: [],
            xstjlist: [],
            dianpu:''

        }

        console.log(this.props, 1205)
        console.log(url.parse(this.props.location.search, true).query, 1207)
        let { goodsid,
            id,
            zhutu,
            category_id,
            d_title,
            jiage,
            yuanjia,
            xiaoliang,
            quan_link,
            quan_jine
        } = url.parse(this.props.location.search, true).query;
        this.state.goodsid = goodsid;
        this.state.id = id;
        this.state.zhutu = zhutu;
        this.state.category_id = category_id;
        this.state.d_title = d_title;
        this.state.jiage = jiage;
        this.state.xiaoliang = xiaoliang;
        this.state.yuanjia = yuanjia;
        this.state.quan_link = quan_link;
        this.state.quan_jine = quan_jine;
        // 组件初始化时
    }

    async componentDidMount() {
        let data2 = await http.get("/hjn/api/goods/get-goods-detail-img", {
            goodsId: this.state.goodsid,
        })
        let arr = JSON.parse(data2.data)
        console.log(arr, 666);


        let data3 = await http.get("/hjn/api/goods/get-recommend-goods", {
            id: this.state.id,
        })
        console.log(data3.data, 85)


        let dianpudata = await http.get("/hjn/api/goods/get-goods-shop-info", {
            goodsId:this.state.goodsid
        })
        console.log(dianpudata.data,695555)

        // https://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=22566250&categoryId=50010159

        let xstj = await http.get("/hjn/api/goods/get-similar-goods", {
            id:this.state.id,
            categoryId:this.state.category_id
          
        })
        console.log(xstj.data,8)

        this.setState({
            imglist: arr,
            daylist: data3.data,
            dianpu:dianpudata.data,
            xstjlist:xstj.data
            
        })





    }





    render() {
        let {xstjlist,quan_link } =this.state
        console.log(xstjlist,960)
        return (
            <Detailsstyle>
                <div className="imgbox">
                    <div className="imgbox">
                        <img src={this.state.zhutu}></img>
                    </div>

                    <div className="goods">

                        <h2>{this.state.d_title}</h2>
                        <div className="goods_rou">
                            <div className="goods_rou_lf">
                                <p>券后价￥<span>{this.state.jiage}</span></p>
                                <p>天猫价￥<span>{this.state.yuanjia}</span></p>
                            </div>
                            <div className="goods_rou_rg">
                                <p>已售<span>{this.state.xiaoliang}</span>件</p>
                                <p><i>包邮</i><i>运费险</i></p>
                            </div>
                        </div>

                            <div className="goods_quan">
                                <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201909300947" />

                                <div className="goods_quan_box">
                                    <div className="goods_quan_box_lf">
                                        <p className="goodsp1"><span>10</span>元优券</p>
                                        <p className="goodsp">使用期限<span>2019.10.01-2019.10.09</span></p>
                                    </div>
                                    <div className="goods_quan_box_rg">
                                        <a href={quan_link}>立即领券</a>
                                    </div>
                                </div>

                            </div>


                        <div className="goods_shuoming">
                            <p>
                                简约而不简单，立体剪裁，质感好，精致立领利索干练，版型非常时尚，凸显型男魅力就穿ta哇，比聚划算更便宜，还在等什么，快抢！ </p>
                        </div>
                    </div>


                    <div className="dianpu">
                        <div className="dianpu_shang">
                            <div className="dianpu_logo">
                                <img src={this.state.dianpu.shopLogo} />
                            </div>
                            <div className="dianpu_title">
                                <h2>{this.state.dianpu.shopName}</h2>
                            </div>
                            <div className="dianpu_jinru">
                                <p>店铺所有优惠<i className="iconfont">&#xe601;</i></p>
                            </div>
                        </div>
                        <ul className="dianpu_xia">
                            <li>
                                <p> 宝贝描述:<span>{this.state.dianpu.dsrScore}</span><i>平</i></p>
                            </li>
                            <li>
                                <p> 卖家服务:<span>{this.state.dianpu.serviceScore}</span><i>高</i></p>
                            </li>
                            <li>
                                <p className="pppp">物流服务:<span>{this.state.dianpu.shipScore}</span><i>高</i></p>
                            </li>
                        </ul>
                    </div>




                    <div className="xiangshitj">
                        <h2>相似推荐</h2>
                        <ul className="xscpul">
                       {xstjlist.map((itemxstjlist,indexxstj)=>(

                        <li key={itemxstjlist.indexxstj}>
                                <img src={itemxstjlist.pic} />
                                <p>{itemxstjlist.dtitle}</p>
                                <span>{itemxstjlist.quanJine}</span><br />
                                <span>券后价￥{itemxstjlist.yuanjia-itemxstjlist.quanJine}</span>
                        </li>

                       ))}
                       
                       
                       


                        </ul>
                    </div>


                    <div className="chanpinxq">

                        <h2>宝贝详情</h2>
                        {
                            this.state.imglist.map((itemimg, indeximg) => (


                                <img src={itemimg.img} ></img>

                            ))
                        }

                        <div className="jinrirexiao">
                            <h2>今日热销</h2>
                            <ul className="jinrilist">







                                {this.state.daylist.map((iitemdaylist, indexdaylist) => (

                                   
                                    < li  key={iitemdaylist.indexdaylist}>
                                                <img
                                                    src={iitemdaylist.pic} />
                                                <h3>{iitemdaylist. dtitle}</h3>
                                                <div className="jiagele1">
                                                    <span>天猫价￥55</span>
                                                    <span>已售{iitemdaylist.xiaoliang}件</span>
                                                </div>
                                                <div className="jiagele2">
                                                    <span>卷后价￥55</span>
                                                    <span>{iitemdaylist.quanJine}优惠券</span>
                                                </div>
                                     </li>



                            ))}
                            
                                          
                            
                            
                                             
                            
                        </ul>


                    </div>


                </div>









                </div>
            </Detailsstyle >
        )
    }
}
