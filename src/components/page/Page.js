import React, {useState, useEffect} from 'react'
import { Carousel } from 'antd';
import './Page.css';
import 'antd/dist/antd.css';
import logo from './../../image/logo.jpg'


const menuData = [
  {
    id: 0,
    name: '首页'
  },
  {
    id: 1,
    name: '关于珞石'
  },
  {
    id: 2,
    name: '资源矩阵'
  },
  {
    id: 3,
    name: '成功案例'
  },
  {
    id: 4,
    name: '加入我们'
  },
  {
    id: 5,
    name: '联系我们'
  },
]


function App() {
  const [active, setActive] = useState(0)
  useEffect(()=>{
    console.log('active', active)
  })
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const renderContent = ()=> {
    switch(active) {
      case 0:
        return <p>首页内容组件</p>
        break;
      case 1:
        return <p>关于珞石组件</p>
        break;
        case 2:
          return <p>资源矩阵组件</p>
        break;
      case 3:
        return <p>成功案例组件</p>
        break;
        case 4:
          return <p>加入我们组件</p>
        break;
      case 5:
        return <p>联系我们组件</p>
        break;
      default:
        return <p>首页内容组件</p>

    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className="menu">
          <img className="logo" src={logo} />
          {menuData.map((item)=>{
            return <span key={item.id} onClick={()=> setActive(item.id)} className={active === item.id ? "item active" : "item"}>{item.name}</span>
          })}
        </div>
        <div className="swiper">
        <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
        </div>

      </div>
      <div className="content">
        {renderContent()}
      </div>
      <div className="footer">
        <div className="footer_left">
          <div className="logo">
            <img src="" />
            <div>传播美好事物</div>
          </div>
          <div className="desc">
          珞石文化是一家以独家网红资源优势起家，擅长社会化营销策划的文化传播公司。
          以“独家资源优势”“强客户服务能力”“强商业开发力”“强舆论影响力”
          “最懂网民的营销团队”等核心优势，专注于泛网红市场的深度商业开发，同时为
          合作伙伴提供专业的新媒体整合营销
          </div>
        </div>
        <div className="footer_center">
            {menuData.slice(1).map((item)=>{
              return <div onClick={()=>{setActive(item.id)}} key={item.id} className="item">{item.name}</div>
            })}
        </div>
        <div className="footer_right">
          <div className="label" style={{"marginBottom": "30px"}}>珞石联系电话</div>
          <div className="label phone" style={{"marginBottom": "68px"}}>010-90980866</div>
          <div className="label">合作营销QQ: 990090009</div>
          <div className="label">Email: luoshiwenhua@qq.com</div>
          <div className="label">微博: @珞石文化</div>
          <div className="label">地址: 北京市朝阳区文化路向上大厦中心10层A68室</div>
        </div>
      </div>
    </div>
  );
}

export default App;
