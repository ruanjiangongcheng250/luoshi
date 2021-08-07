import React, {useState, useEffect} from 'react'
import './Index.css';
import Intruction from '../Intruction/Index';
import zixun from '../../image/zixun_icon.png';
import huizhan from '../../image/huizhan_icon.png';
import xuanchuan from '../../image/xuanchuan_icon.png';
import tuiguang from '../../image/guanggao_icon.png';

const data = {
    '关于珞石文化': {
        content: [{
            subTitle: '',
            content: {
                '关于珞石文化': ['北京珞石文化有限公司，成立于2021年，总部设于北京，是国内较早的MCN形态公司'],
                '国内专业的数字化营销机构': ['以独家网红资源起家，快速聚拢了网络上具有原创能力的段子手及博主，依靠社交网络传播与策划能力，进行运营、孵化及变现摸索，快速成长为国内专业的数字化营销机构之一，也是较大的MCN机构之一。'],
                '签约博主500+，全网粉丝覆盖6亿+': ['珞石文化主张，传播美好事物。公司长期在社交网络渠道下，以网感运营为驱动，解决大众焦虑为诉求，签约及自运营原创作者、内容博主、视频博主及视频内容，目前签约博主500+，全网覆盖6亿+粉丝。'],
                '多元化业务线的集团公司': ['珞石文化现已发展成为拥有网红运营及IP孵化，广告策划及公关传播，图书出版及发行等多业务线的集团公司。']    
            }
            }],
        image: 'guanyu_logo1'
    },
    '我们的荣誉': {
        content: [{
            subTitle: '',
            content: {
                '2019年': ['· 新榜年度MCN奖','· 微博克劳瑞最具商业价值MCN奖','· 最具商业价值MCN','· 微博2018十大影响力幽默机构'],
                '2020年': ['· 微博2019十大影响力幽默机构', '· 微博2019十大影响力电影机构','· 微博2019十大娱评团影响力机构' ],
                '2021年': ['· 微博2020娱评团十大影响力机构']
            }
        }],
        image: 'guanyu_logo2',
    }
}

const data2 = [
    {
        key: '企业咨询',
        value: '重新定义产业数据，为企业提供一个独立拥有全网资源高效协同的平台​​​',
        image: zixun
    },{
        key: '文化会展',
        value: '为企业提供一个独立自助的供应链平台促进上下游协同，提升供应链效率​​​​',
        image: huizhan
    },{
        key: '品牌宣传',
        value: '不断迭代 持续优化 反应迅速更符合企业的要求​​​',
        image: xuanchuan
    },{
        key: '广告推广',
        value: '免费搭建 免费维护 免费提供产业数据解决方案​​​',
        image: tuiguang
    }]
function Index() {
    return <div className='about_this'>
        <div className='about_top'>
            <Intruction data={data}/>
        </div>
        <div className='about_bottom'>
            <div className='about_bottomTitle'>我们的主营业务</div>
            <div className='about_bottomBox'>
                {
                    data2.map((item,index)=>{
                        return <div className='about_bottomInfo' key={index}>
                            <img src={item.image}/>
                            <div className='about_bottomKey'>{item.key}</div>
                            <div className='about_bottomValue'>{item.value}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default Index;