import React, { Component } from "react"
import { Sc } from "./styled"
export default class Collect extends Component {
    render() {
        return (
            <Sc>


                <div className="collect_top">
                    <a className="iconfont" href="#/home">&#xe667;</a>
                    <span>我的收藏</span>
                    <a className="iconfont">编辑</a>
                </div>

                <div className="neirong">
                    <div className="divimg">
                        <img src="https://gd1.alicdn.com/imgextra/i2/2468013189/O1CN01Ti5aEm1ZQbao5xLn3_!!2468013189.jpg_310x310.jpg_.webp" />
                    </div>

                    <div class="content_rg">
                        <h3>2019秋季新款粗跟秋季新款粗跟方头女鞋</h3>
                  
                        <div class="content_rg3">
                            <span>
                                <em>券后价￥</em><strong>68</strong>
                            </span>
                            <a>找相识</a>
                        </div>
                    </div>

                </div>


                <div className="neirong">
                <div className="divimg">
                    <img src="https://img.alicdn.com/i2/3101937126/O1CN01ywu7E322VkuoJRq1t_!!3101937126.jpg_480x480.jpg" />
                </div>

                <div class="content_rg">
                    <h3>【LIMS】马来西亚蓝山速溶咖啡40袋装</h3>
              
                    <div class="content_rg3">
                        <span>
                            <em>券后价￥</em><strong>19.9</strong>
                        </span>
                        <a>找相识</a>
                    </div>
                </div>

            </div>

                <div className="user_coll_ge">
                    <span>
                        <em></em>
                        <strong className="shoucang_after"></strong>
                        <a className="iconfont shoucang"> &#xe66f; </a>

                        为您精选
                       <i></i>

                    </span>
                </div>


            </Sc>
        )
    }
}


