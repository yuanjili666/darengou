import React, { Component } from 'react'
import { WeekListWrapper } from './styled'
import connect from './connect';
import Bscroll from '@common/bscroll'
@connect
class WeekList extends Component {
    render() {
        let { week_choice } = this.props;
        return (
            <WeekListWrapper>
                <Bscroll ref="bscroll">
                    <div>
                        {
                            week_choice.map((item, index) => (
                                <div className="weekList" key={index}>
                                    <h2>{item.group_section.title}</h2>
                                    <p>{item.group_section.desc}</p>
                                    {
                                        item.tabs.map((child, idx) => (
                                            <div className="weekList_child" key={idx}>
                                                <img src={child.url} alt="" />
                                                <div className="title">{child.title}</div>
                                                <div className="des">{child.desc}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                            ))
                        }
                    </div>
                </Bscroll>
            </WeekListWrapper>
        )
    }
    componentDidMount() {
        this.props.handleAsyncWeek(this.props.cityId,this.props.page);
        
        this.refs.bscroll.handlepullingUp(async ()=>{
            let data =await this.props.handleAsyncWeek(this.props.cityId,this.props.page);
            if(data){
                this.refs.bscroll.handlefinishPullUp();
            }
        })
    }
}



export default WeekList