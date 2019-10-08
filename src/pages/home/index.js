import React, { Component, Fragment } from "react"
import "./styled.css"
import http from "../../utils/http"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            li: '',
            list: []

        }

    }


    async componentWillMount() {


        let data2 = await http.get("/hjn/api/category/index/lingquan-live-new", {
            pageId: '1',
            pageSize: "10",
            entityId: "4",
            type: "1",
            version: "v1",
            tuserId: "404641"


        })

        console.log(data2.data.list, 666);
        this.setState({
            list: data2.data.list
        })


    }





















    render() {
        let { list } = this.state
        return (
            <Fragment>
                <div className="banner-bg banner-color">
                    <div className="index_header banner-color">
                        <a href="" className="search">
                            <i className="iconfont">&#xe610;</i>
                            <span>输入商品名或粘贴宝贝标题搜索</span>
                        </a>
                    </div>



                    <div className="layout">
                        <div className="ui_icon_tab banner-color">
                            <div className="cent swiper-container-horizontal">
                                <div className="ant banner-color">
                                    <a href="" className="banner-color active">精选</a>
                                </div>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">美食</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">居家日用</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">女装</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">美妆</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">男装</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">数码家电</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">鞋品</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">文娱车品</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">家装家纺</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">配饰</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">箱包</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">母婴</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">内衣</a>
                                    </div>
                                    <div className="swiper-slide banner-color swiper-slide-active">
                                        <a href="" className="banner-color">户外运动</a>
                                    </div>
                                </div>
                                <a href="" className="whole iconfont banner-color">&#xe643;</a>

                            </div>
                        </div>
                    </div>

                </div>

                {/*55555555555555555 */}




                <div className="main">
                    <div>

                        <div className="main-banner-bg banner-color"></div>

                        <div className="content">

                            <div className="banner_swiper show_module">
                                <div className="swiper-container home_swiper-container swiper-container-horizontal">
                                    <div className="swiper-wrapper">
                                        <div>
                                            <a href="">
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01YA7lsb2JJhyaUTJRE_!!2053469401.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="nav">
                                <ul className="nav_ul show_module">
                                    <li>
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" />
                                            <span className="text-center">疯抢排行</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN018sPcWK2JJhy38xfum_!!2053469401.png" />
                                            <span className="text-center">9.9包邮</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01ptnbDO2JJhybcK39o_!!2053469401.gif" />
                                            <span className="text-center">品牌特卖</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01C0wivK2JJhxxaqA66_!!2053469401.png" />
                                            <span className="text-center">每日半价</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" />
                                            <span className="text-center">折上折</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className="top-line-group show_module">
                                <div className="top-line">
                                    <div className="top-line-logo">
                                        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" />
                                    </div>
                                    <div
                                        className="swiper-container swiper-container-top-line swiper-no-swiping swiper-container-vertical">
                                    </div>
                                </div>
                            </div>



                            <div className="activity_list show_module">
                                <div className="ddq">
                                    <div>
                                        <h3 className="title">咚咚抢</h3>
                                        <p className="time">
                                            <span className="text-center">17点场</span>
                                            <i className="down_time">02:54:01</i>
                                        </p>
                                    </div>
                                    <div className="ddq_list"></div>
                                    <div>

                                    </div>
                                </div>
                                <div className="import">
                                    <div className="import-product imports">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01pFF9sF2JJhyf2clBC_!!2053469401.png" />

                                        </a>
                                    </div>
                                    <div className="import-global imports">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN016i54WD2JJhy5xyUIw_!!2053469401.jpg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="brand_product show_module">
                                <div className="title_group">
                                    <div className="title">
                                        <h3>品牌特卖</h3>
                                    </div>
                                    <div className="more">
                                        <a href="?r=index/brand">更多品牌
                                    <i className="iconfont">&#xe639;</i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="brand_product_lists">
                                    <li className="brand_product_list">
                                        <a href="">

                                            <img src=" https://img.alicdn.com/imgextra/i2/2053469401/O1CN01J2FhcQ2JJhyYr13nQ_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01eJIwf22JJhygw79ZQ_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01NiKKJg2JJhyR5GoLJ_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01SeI7452JJhyGMgSKN_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01XcwsgM2JJhycLvZ6S_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01MBBouh2JJhyVgsArj_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01fEWRIZ2JJhyjMGIHk_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                    <li className="brand_product_list">
                                        <a href="">
                                            <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01ANd0ML2JJhyeCVPJC_!!2053469401.jpg_310x310.jpg_.webp" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="get_coupon show_module">
                                <div className="title_group">
                                    <div className="title">
                                        <h3>大家都在领</h3>
                                    </div>
                                    <div className="today">
                                        <span>3,937,452</span>今日实时领券
                            </div>
                                </div>
                                <div className="real_coupon"></div>
                                <div className="get_coupon_swiper"></div>
                                <div className="swiper-container-get-coupon-pagination bullet4 swiper-pagination-bullets"></div>
                            </div>

                            <div className="find_product">
                                <p className="find_product_info text-center">发现好货</p>
                                <div id="find_product_group">
                                    <ul>

                                        {list.map((itemlist, indes1) => (

                                            <li className="find_product_list" key={itemlist.indes1}>
                                                <a href="">
                                                    <img
                                                        className="find_product_list_img"
                                                        src={itemlist.pic} />
                                                    <p className="find_product_list_title">{itemlist.dtitle}</p>
                                                    <div className="find-product-label-group"><span id="find-product-label-0"
                                                        className="find_product_label" ui-delete-overflow="" data-len="1"><span
                                                            className="label1">{itemlist.quanJine}元券</span><span className="label2">{itemlist.fashionTag}</span></span></div>
                                                    <p className="find_product_price">券后&nbsp;&nbsp;¥&nbsp;<span>{(itemlist.yuanjia*1000-itemlist.quanJine*1000)/1000}</span></p>
                                                    <div className="find_product_more">
                                                        <p>天猫 ¥<span>{itemlist.yuanjia}</span></p><span>已售<span>{itemlist.xiaoliang}</span></span>
                                                    </div>
                                                </a>
                                            </li>



                                        ))}





                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </Fragment>
        )
    }





}