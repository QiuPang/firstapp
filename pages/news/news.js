// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTitles:['要闻','国际','国内','娱乐','体育','科技','视频'],
    bannerUrls: [
      '/images/a.png',
      '/images/b.jpg',
      '/images/c.jpg'
    ],
    news:[
      {title:'标题111',imgUrl:'/images/sa.jpeg'},
      { title: '标题222', imgUrl: '/images/sb.png' },
      { title: '标题333', imgUrl: '/images/sc.jpeg' },
      { title: '标题444', imgUrl: '/images/sd.jpeg' },
      { title: '标题555', imgUrl: '/images/se.png' },
      { title: '标题666', imgUrl: '/images/sf.jpeg' }
    ],
    newsList:[
      { title_1: "去哪玩", title_2:"重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼",imgUrl:"/images/sg.jpeg"},
      { title_1: "去哪玩", title_2: "重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼", imgUrl: "/images/sg.jpeg" },
      { title_1: "去哪玩", title_2: "重慶，廈門，鼓浪嶼,重慶，廈門，鼓浪嶼,重慶，廈門，鼓浪嶼", imgUrl: "/images/sg.jpeg" },
      { title_1: "去哪玩", title_2: "重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼", imgUrl: "/images/sg.jpeg" },
      { title_1: "去哪玩", title_2: "重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼", imgUrl: "/images/sg.jpeg" },
      { title_1: "去哪玩", title_2: "重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼重慶，廈門，鼓浪嶼", imgUrl: "/images/sg.jpeg" }
    ]
  },
  EventHandle:function(){

  }
  
})