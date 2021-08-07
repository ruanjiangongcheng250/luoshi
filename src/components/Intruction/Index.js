import React, {useState, useEffect} from 'react'
import './Index.css';

function Index(props) {
    const data = props.data;
    
    return <div className='intr_This'>
        {
            data && Object.keys(data).map((key) => {
                const datas = data[key];
                const { content, image } = datas;
                return (
                    <div className='intr_Box' key={key}>
                        <div className='intr_Label'>{key}</div>
                        <div className='intr_Content'>
                            <div className='intr_Left'>
                            {
                                content.map((value, index) => {
                                    const { subTitle, content } = value;
                                    return (
                                        <div className='intr_leftContent' key={index}>
                                            {
                                                subTitle ? <div className='intr_subTitle'>{subTitle}</div> : ''
                                            }
                                            {
                                                content && Object.keys(content).map((subLabel, i) => {
                                                    const subValue = content[subLabel];
                                                    return <>
                                                        <div className='intr_subLabel' key={subValue}>{subLabel}</div>
                                                        {
                                                            subValue.map((item, n) => {
                                                            return <div className='intr_info' key={n}>{item}</div>
                                                            }) 
                                                        }
                                                    </>
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className={image}></div>
                         </div>
                   </div>
                )
            })
        }

    </div>
}

export default Index;