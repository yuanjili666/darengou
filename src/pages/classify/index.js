import React, { Component, Fragment } from "react"
import Headerfl from "../../components/hdfl"
import { PageContainer } from "../../globalStyled"
import { Flnavlf } from "./styled"
import { Link } from 'react-router-dom'
export default class Classify extends Component {
    constructor() {
        super()
        this.state = {
            num: 0,
            list: [],
            floorslist: []
        }

        fetch("/api/index.php?r=class/category&type=1").then(res => res.json()).then(data => {
            console.log(data,"分类")
            this.setState({
                list: data.data.data,
                floorslist: data.data.data[0].floors
            })
        })

    }


    // 在这里写方法
    clickFn(index) {
        this.setState({
            num: index,
            floorslist: this.state.list[index].floors
        })
      
    }

    render() {
        return (
            <PageContainer>
                <Flnavlf>
                    <Headerfl></Headerfl>
                    <div className="nav_rg">
                        <div className="nav_gekai2"></div>

                        {this.state.floorslist.map((ith3, indexh3) => {
                            return <Fragment>
                                <h3 key={ith3.indexh3}>{ith3.name}</h3>
                                <ul key={indexh3}>
                                    {this.state.floorslist[indexh3].list.map((itli, indeli) => {
                                        return ( 
                                           
                                            <Link 
                                            to={"/productlist?id="+itli.api_cid+"&urlgo="+itli.jump_url+"&name="+itli.name}
                                            api_cid={itli.api_cid}
                                            api_id={itli.api_id}>
                                                <li key={itli.indeli}>
                                                <img src={itli.img}></img>
                                                {itli.name} 
                                                </li>
                                        </Link>)
                                    })}
                                </ul>

                            </Fragment>

                        })}








                    </div>

                    {/*下面是左边的导航数据，获取数据渲染页面*/}

                    <div className="nav_lf">
                        <div className="nav_gekai"></div>
                        <ul>
                            {this.state.list.map((item, index) => {
                                return <li key={item.index}
                                    className={this.state.num === index ? 'acre' : ''}
                                    onClick={this.clickFn.bind(this, index)}>
                                    {item.name}</li>
                            })}

                        </ul>
                        <div className="nav_gekai"></div>

                    </div>
                </Flnavlf>
            </PageContainer>
        )
    }
}