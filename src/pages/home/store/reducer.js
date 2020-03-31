import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://avatar.csdnimg.cn/8/C/E/3_blogdevteam.jpg'
        },{
            id: 2,
            title: '经济',
            imgUrl: 'https://avatar.csdnimg.cn/8/C/E/3_blogdevteam.jpg'
        },{
            id: 3,
            title: '爱情',
            imgUrl: 'https://avatar.csdnimg.cn/8/C/E/3_blogdevteam.jpg'
        },{
            id: 4,
            title: '生活',
            imgUrl: 'https://avatar.csdnimg.cn/8/C/E/3_blogdevteam.jpg'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/11864358-2c5f48f03dffb247.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp',
            desc: '父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长'
        }, {
            id: 2,
            title: '疫情结束了，我想去离婚',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/8357505-951bf44017330232.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp',
            desc: `晚上闺蜜发来消息，说过了疫情，要去办离婚手续，这回彻底心凉了。
            闺蜜两口子都是事业单位职工，两人有个儿子今年上高一，日子一直过得安宁舒适，至少外人看起来是很美满的。`
        }, {
            id: 3,
            title: '《让岁月变成诗》名人语录',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp',
            desc: '梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。'
        }, {
            id: 4,
            title: '敬畏自然1',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/10666569-dc8b62578468db31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            desc: `武汉新型冠状病毒产生的疫情牵动着全国每一个家庭，让整个国家陷入一场危~难之中。 新型病毒到底来源于何方，目前尚不能盖~棺定论，不过野生动物携带这种病毒的可能性极大已            经得到多方验证。
            而蝙蝠似乎被大家推到了风~口浪尖上。
            有一个视频被网~民翻了出来，一个南方人拿着刀叉兴高采烈地在那里吃蝙蝠，盘子里放着的就
            是黑乎乎的煮熟的蝙蝠，老鼠的身子，外加一副翅膀，他扒掉了蝙蝠黑色的毛皮，切掉了翅膀，
            一边解说，一边饶有兴致地吃起了蝙蝠肉。
            `
        }
    ]
    
})
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}