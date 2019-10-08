import React, { Component } from 'react'
import { Pltyle } from "./styled"
import { Link } from "react-router-dom"
import url from "url"
import http from "../../utils/http"
import Tanchu from "../../components/tanchu"
export default class Productlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navtanchu:false,
            flat:true,
            px:'t',
            id: '',
            url: '',
            name: '',
            num: 0,
            list: [],
            nav: [
                { key: "t1", name: "人气" },
                { key: "t2", name: "最新" },
                { key: "t3", name: "销售" },
                { key: "t4", name: "价格" },
            ]
        }

        // console.log(this.props, 96)
        // console.log(url.parse(this.props.location.search, true).query, 7)
        let { id, urlgo, name } = url.parse(this.props.location.search, true).query;
        this.state.id = id;
        this.state.url = urlgo;
        this.state.name = name;

        let qingqiudizhi = "/api/index.php?r=class%2Fcyajaxsub&page=" + 1 + "&cid=" + this.state.id + "&px=" + this.state.px + "&cac_id="
        fetch(qingqiudizhi).then(res => res.json()).then(data => {
            // console.log(data.data.content, "产品列表");
            this.setState({
                list: data.data.content
            })

        })

    }
    clicktancchu(){

       if(this.state.navtanchu){
        this.setState({
            navtanchu:false
        })
       }else{
        this.setState({
            navtanchu:true
        })
       }


    }
    
    clickFn(indexnav) {
        switch (indexnav) {
            case 0:
                let newurl = "/api/index.php?r=class%2Fcyajaxsub&page=" + 1 + "&cid=" + this.state.id + "&px=t&cac_id="
                // console.log(newurl);
                  fetch(newurl).then(res => res.json()).then(data => {
                    // console.log(data.data.content, "000");
                            this.setState({
                                list: data.data.content
                            })
                    })
                    
                 
                    this.setState({
                        px: "t",
                        num: indexnav,
                      
                    })

                    break;
                case 1:
                        let newurl1= "/api/index.php?r=class%2Fcyajaxsub&page="+1+"&cid="+this.state.id+"&px=latest&cac_id="
                          fetch(newurl1).then(res => res.json()).then(data => {
                            console.log(data.data.content, "000");
                                    this.setState({
                                        list: data.data.content
                                    })
                            })

                console.log(1);
                this.setState({
                    px: "latest",
                    num: indexnav
                })
                break;
            case 2:

                    let newurl2= "/api/index.php?r=class%2Fcyajaxsub&page="+1+"&cid="+this.state.id+"&px=sell&cac_id="
                    fetch(newurl2).then(res => res.json()).then(data => {
                              this.setState({
                                  list: data.data.content
                              })
                      })

                console.log(2);
                this.setState({
                    px: "sell",
                    num: indexnav
                })
                break;
            case 3:
     
                    

            if( this.state.flat){
                let newurl3= "/api/index.php?r=class%2Fcyajaxsub&page="+1+"&cid="+this.state.id+"&px=price_h&cac_id="
                fetch(newurl3).then(res => res.json()).then(data => {
                          this.setState({
                              list: data.data.content,
                              flat:false
                          })
                        
                  })
               
                  
               
            }else{
                let newurl4= "/api/index.php?r=class%2Fcyajaxsub&page="+1+"&cid="+this.state.id+"&px=price&cac_id="
                fetch(newurl4).then(res => res.json()).then(data => {
                          this.setState({
                              list: data.data.content,
                              flat:true
                          })

                        
                  })
                
            }

               
                console.log(3);
                this.setState({
                    px: "price_h",
                    num: indexnav
                })

                break;

        }

    }   
   

    render() {
        
let {navtanchu}=this.state
        return (
            <Pltyle>
           
                {/* 头部*/}
                <div  class="topbox">
              
               
                {navtanchu? <Tanchu ></Tanchu> :''}
          
              
                <div className="nav_products classcolor">
                    <a className="iconfont classcolor" href="#/classify" >&#xe667;</a>
                    <span className="class_name">{this.state.name}</span>
                    <i className="iconfont classcolor" 
                    onClick={this.clicktancchu.bind(this)}
                    >&#xe634;</i>
                </div>
                {/* 导航*/}
                <div className="nav_two">
                    <ul>
                        {this.state.nav.map((itemnav, indexnav) => {
                            return <li key={itemnav.key}
                                onClick={this.clickFn.bind(this, indexnav)}
                                className={this.state.num === indexnav ? "moren" : ''}>{itemnav.name} 
                                {indexnav===3?<i class="iconfont navi"> &#xe699;</i>:''}
                                
                                </li>
                        }
                        )
                        }
                    </ul>
                </div>

                </div>
                {/* 产品列表*/}
                <div className="products_list">
                    {/* 单个产品信息*/}
                    {this.state.list.map((itemlist, indexlist) => {
                        return (<Link 
                            to={"/details?goodsid="+itemlist.goodsid+
                                "&id="+itemlist.id+
                                "&zhutu="+itemlist.pic+
                                "&category_id="+itemlist.category_id+
                                "&d_title="+itemlist.d_title+
                                "&jiage="+itemlist.jiage+
                                "&yuanjia="+itemlist.yuanjia+
                                "&xiaoliang="+itemlist.xiaoliang+
                                "&quan_jine="+itemlist.quan_jine+
                                "&quan_link="+itemlist.quan_link
                                
                            }>
                            <div className="product_content">
                                <div className="content_img">
                                    <img src={itemlist.pic} /></div>
                                <div className="content_rg">
                                    <h3>{itemlist.d_title}</h3>
                                    <div className="content_rg2">
                                        <span><i>淘宝价￥</i><i>{itemlist.yuanjia}</i></span>
                                        <span> <i>已售</i><em>{itemlist.xiaoliang}</em><i>件</i></span>
                                    </div>


                                    <div className="content_rg3">
                                        <span>
                                            <i>券后价￥</i><strong>{itemlist.jiage}</strong>
                                        </span>
                                        <a className="youhui"
                                        href={itemlist.quan_link}>{itemlist.quan_jine}元券</a>
                                    </div>

                                </div>
                            </div>
                            </Link>
                        )
                    })}

                </div>

            </Pltyle>
        )
    }
}
