import React, { Component, Fragment } from "react"
import "./index.css"
import http from "../../utils/http"
export default class Nine extends Component {
    constructor() {
        super()

        this.state = {
            listenine: [],
            list10: [],
            lise2: []
        }




    }



    async componentWillMount() {

        fetch("/api/index.php?r=nine/listajax&n_id=58&page=1&cac_id=").then(res => res.json()).then(data => {
            console.log(data.data.data, "1008")

            this.setState({
                listenine: data.data.data
            })

        })



        let data3 = await http.get("/hjn/api/goods/rushing-ranking/goods-list/v1", {
            cId: '0',
            type: "1",
            entityId: "4",

        })

        console.log(data3.data, 87);
        this.setState({
            kkd: 5
        })

        let list101 = []
        for (let i = 0; i < 10; i++) {
            list101.push(data3.data[i])
        }

        let list102 = []
        for (let i = 10; i < 25; i++) {
            list102.push(data3.data[i])
        }

        this.setState({
            lise2: list102,
            list10: list101
        })


    }



    render() {
        let { listenine, list10, lise2 } = this.state
        console.log(list10, lise2, 69)
        return (
            <Fragment>
                <div class="main-title clearfix theme-bg-color-1">
                    <a href="" class="main-back"></a>
                    <div class="menu-cat">
                        <img src="https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201909271126" />
                    </div>
                    <a href="" class="mui-action-menu main-more"></a>
                </div>

                <div class="nav"></div>

                <div class="layout">

                    <ul class="row-s nine_tab">
                        <li class="col-6 list1">

                            <h3>9块9每日精选</h3>
                            <p>十元封顶</p>
                            <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01gWYbBE2JJhyUJ0W7v_!!2053469401.png" />

                        </li>
                        <li class='col-3 list2'>

                            <h3>3.9元区</h3>
                            <p>数码小件</p>
                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01hAQros2JJhu9VPoWr-2053469401.jpg" />

                        </li>
                        <li class='col-3 list3'>

                            <h3>5.9元区</h3>
                            <p>简约配饰</p>
                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhsfBIxv9oi11-2053469401.jpg" />

                        </li>
                        <li class="col-6 list4">

                            <h3>19.9元专区</h3>
                            <p>半价抢不停</p>
                            <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01qD2xMe2JJhyUJEXzv_!!2053469401.png" />

                        </li>
                        <li class="col-3 list5">

                            <h3>7.9元区</h3>
                            <p>美妆必备</p>
                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01pf5LYr2JJhusTUeII-2053469401.png" />

                        </li>
                        <li class="col-3 list6">

                            <h3>新品专区</h3>
                            <p>贴身内衣</p>
                            <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01zj6SCv2JJhtcDq3yM-2053469401.jpg" />


                        </li>
                    </ul>

                    <div class="goods_sticky">

                        <div class="icon_nav_tab nine_nav_tab fixed">
                            <div class="swiper-container  swiper-container-horizontal">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide active swiper-slide-active">
                                        <a href="">精选</a>
                                    </div>
                                    <div class="swiper-slide swiper-slide-next">
                                        <a href="">居家百货</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">美食</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">服装</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">配饰</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">美妆</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">内衣</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">母婴</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">箱包</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">数码配件</a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="">文娱车品</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="nine_comlist">
                            <h3 class="nine_h3bt">
                                <span>近一小时疯抢</span>
                            </h3>
                            <div class="nine_swiper_new">
                                <div class="swiper-container  swiper-container-horizontal">
                                    <div class="swiper-wrapper">


                                        {list10.map((item1, indexs1) => (

                                            <div class="swiper-slide swiper-slide-active">
                                                <div class="swiper-cent">
                                                    <a href="" class="img">
                                                        <img
                                                            src={item1.pic} />
                                                        <p class="text">疯抢 <i>{item1.xiaoliang}</i>件</p>
                                                    </a>
                                                    <p class="name">{item1.dtitle}</p>
                                                    <p class="money">¥{item1.jiage} <span>券后</span></p>
                                                </div>
                                            </div>

                                        ))}







                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="nine_comlist">
                            <h3 class="nine_h3bt">
                                <span class="">魅唇撩人</span>
                            </h3>
                            <div class="nine_swiper_new">
                                <div class="swiper-container  swiper-container-horizontal">
                                    <div class="swiper-wrapper">
                                     


                                        {lise2.map((iem1, indexss1) => (
                                            <div class="swiper-slide swiper-slide-active">
                                                <div class="swiper-cent">
                                                    <a href="" class="img">
                                                        <img
                                                            src={iem1.pic} />
                                                        <p class="text">疯抢 7469 件</p>
                                                    </a>
                                                    <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                    <p class="money">¥39 <span>券后</span></p>
                                                </div>
                                            </div>
                                        ))}



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="nine_comlist">
                            <h3 class="nine_h3bt">
                                <span>长短棉袜</span>
                            </h3>
                            <div class="nine_swiper_new">
                                <div class="swiper-container  swiper-container-horizontal">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="nine_comlist">
                            <h3 class="nine_h3bt">
                                <span>秋冬保湿</span>
                            </h3>
                            <div class="nine_swiper_new">
                                <div class="swiper-container  swiper-container-horizontal">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active">
                                            <div class="swiper-cent">
                                                <a href="" class="img">
                                                    <img
                                                        src="https://img.alicdn.com/imgextra/i1/3012913363/O1CN01iwd5gh1aiIVoXB2IY_!!3012913363.jpg_310x310.jpg" />
                                                    <p class="text">疯抢 7469 件</p>
                                                </a>
                                                <p class="name">【新券！拍三件】葆玛之谜明星面膜30片</p>
                                                <p class="money">¥39 <span>券后</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <h3 class="nine_h3bt h3bt_bg">
                            <span class="colout">精品推荐</span>
                        </h3>
                        <ul class="goods-new row-s">

                            {listenine.map((itemliste, indexlistd) => (


                                <li class="col-6 loadPage1">
                                    <div class="cent">
                                        <a href="" class="img">
                                            <img
                                                src={itemliste.pic} />
                                        </a>
                                        <div class="mar">
                                            <h3 class="bt">{itemliste.d_title}</h3>
                                            <div class="row-s num">
                                                <div class="col-6"> 天猫价 ¥{itemliste.yuanjia}</div>
                                                <div class="col-6 text-right">已售
                    <span class="col-red">{itemliste.xiaoliang}</span>件
                </div>
                                            </div>
                                            <div class="row-s aaa">
                                                <div class="col-6 money"> <span>券后价&nbsp;¥</span><i>{itemliste.yuanjia - itemliste.quan_jine}</i></div>
                                                <div class="col-6"> <span class="quan">
                                                    <i>{itemliste.quan_jine}元券</i>
                                                </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>


                            ))}





                        </ul>
                    </div>
                </div>

            </Fragment>
        )
    }
}