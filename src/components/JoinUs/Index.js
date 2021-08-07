import React, {useState, useEffect} from 'react'
import Intruction from '../Intruction/Index';

const data = {
    '如何加入珞石': {
        content: [{
            subTitle: '',
            content: {
                '内容创作者': ['内容创作者计划，如加入请准备个人简历、相关作品等资料发送至luoshiwenhua@qq.com员工求职请将个人简历发送至hr@luoshiwenhua@qq.com'],
                '联系我们': ['珞石文化持续召集具备创意能力想红的你，无论你是自认优秀的作者，还是段子手，漫画师，短视频创作者，只要你有想法和作品，都可以联系我们，加入我们很有可能，我们会举珞石之力让你红哦。详细邮件luoshiwenhua@qq.com，或私信微博@珞石文化'],
            }
            }],
        image: 'guanyu_logo3'},
    '招聘信息': {
        content: [
        {
            subTitle: '业务助理1名',
            content: {
                '工作职责：': ['1、负责业务相关文件的分类、建档、归档工作；','2、收集、整理业务合同、统计资料及出具相关报表；','3、业务销售费用的统计、核算、管理、服务等；','4、为财务部门进行核算提供准确无误的数据支持；', '5、协助业务进行日常的财务报销。 '],
                '任职要求：': [' 1、大专以上学历，应届毕业生均可；', '2、具备亲和力和良好的沟通、组织协调能力；','3、具有良好的团队合作精神，有学习意识。' ],
            },
        },
        {
            subTitle: '策划副总监（1名）',
            content: {
                '工作职责：': [
                    '1、商务拓展，同时维护已有客户关系；',
                    '2、商务管理，制定商务合作计划；',
                    '3、团队管理，对客户服务团队进行管理；',
                    '4、帮助领导层共同制定公司战略发展规划；', 
                    '5、完成、提高公司销售业绩。 '
                ],
                '任职要求：': [
                    '1、深入了解新媒体，至少2年团队管理经验；', 
                    '2、有业务拓展、市场拓展丰富经验和相关资源'
                ],
            } 
        } 
        ],
        image: 'guanyu_logo4'
    }
};

function Index() {
    return <div className='about_this'>
        <div className='about_top'>
            <Intruction data={data}/>
        </div>
    </div>
}

export default Index;