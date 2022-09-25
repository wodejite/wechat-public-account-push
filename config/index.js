export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx70c13e5f036afcdd",
    // 公众号appSecret
    appSecret: "ccc114d87ebc08483b421a469a463b20",
    // 模板消息id
    templateId: "UOc1Js-jF93O1hf-Zc4WLICXgxhH6SQHDQyXqf1VTkY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["g18831968036","yyy_yjyq"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "山西",
    // 所在城市
    city: "阳泉",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝宝", "year": "2003", "date": "10-26", "type": 'new'},
      {"name": "哥哥", "year": "1996", "date": "01-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-4-22",
    

//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{157.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  Nothing in this world that's worth having comes easy.
// {{note_ch.DATA}}这世界上凡是值得拥有的东西，都不易获得。
