// 主架構 - 跑馬燈
let marquee = [
    '會員成長無憂，尊享嘉賞禮遇，集樂豆兌好禮，樂動邀您相約商城精彩無限。',
    '輕鬆簽到一秒啟航，挑戰趣味指定任務，每日每週步步高升，更有樂豆商城好禮兌換，獎金好禮應有盡有，總有美好與您不期而遇！',
    '熱烈慶祝樂動體育與意甲聯賽達成合作夥伴關係，一躍成為“2021/2022賽季意甲聯賽亞洲官方贊助商”。',
    'USDT安全支付貼心回饋加碼送，使用樂動【數字貨幣充值】享受2.1%存款比例，每日最高彩金888元，日日送彩金，週周有回饋！',
    '在熱門賽事較多的情況下，我們建議您錯開充提高峰期，避免期間業務量劇增處理緩慢，影響您的遊戲投注和提款時間。'
]

// 主架構 - menuList
let menuList = [{
        switch: true,
        main: '體育',
        type: 'SPORTS',
        title: '返水最高可達',
        num: '1.18',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/sport_01.webp', title: '新樂動體育' },
            { maintain: false, avatar: 'images/menuLIst/sport_02.webp', title: '新樂金體育' },
            { maintain: true, avatar: 'images/menuLIst/sport_03.webp', title: '樂享體育' },
            { maintain: true, avatar: 'images/menuLIst/sport_04.webp', title: '樂博體育' },
        ]
    },
    {
        switch: true,
        main: '真人',
        type: 'LIVE CASINO',
        title: '返水最高可達',
        num: '1.15',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/person_01.webp', title: '性感真人' },
            { maintain: true, avatar: 'images/menuLIst/person_02.webp', title: 'AG真人' },
            { maintain: false, avatar: 'images/menuLIst/person_03.webp', title: 'Ebet真人' },
            { maintain: false, avatar: 'images/menuLIst/person_04.webp', title: 'CQ9真人' },
            { maintain: false, avatar: 'images/menuLIst/person_05.webp', title: 'WM真人' },
            { maintain: false, avatar: 'images/menuLIst/person_06.webp', title: 'OT真人' },
            { maintain: false, avatar: 'images/menuLIst/person_07.webp', title: 'BG真人' },
        ]
    },
    {
        switch: true,
        main: '電競',
        type: 'ESPORTS',
        title: '返水最高可達',
        num: '1.1',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/esports_01.webp', title: '樂動電競' },
            { maintain: false, avatar: 'images/menuLIst/esports_02.webp', title: '平博電競' },
        ]
    },
    {
        switch: true,
        main: '彩票',
        type: 'LOTTERIES',
        title: '推薦遊戲',
        suggest: '六合彩、時時彩、競速PK10',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/lottery_01.webp', title: '樂動彩票' },
            { maintain: false, avatar: 'images/menuLIst/lottery_02.webp', title: 'VR彩票' },
        ]
    },
    {
        switch: true,
        main: '棋牌',
        type: 'CARD GAMES',
        title: '返水最高可達',
        num: '1.2',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/card_01.webp', title: '樂動棋牌' },
            { maintain: false, avatar: 'images/menuLIst/card_02.webp', title: '幸運棋牌' },
            { maintain: false, avatar: 'images/menuLIst/card_03.webp', title: '開元棋牌' },
        ]
    },
    {
        switch: true,
        main: '電子',
        type: 'SLOT MACHINES',
        title: '返水最高可達',
        num: '1.2',
        page: 0,
        list: [
            { maintain: false, avatar: 'images/menuLIst/slot_01.webp', title: 'AG捕魚' },
            { maintain: false, avatar: 'images/menuLIst/slot_02.webp', title: '樂動電子' },
            { maintain: false, avatar: 'images/menuLIst/slot_03.webp', title: 'MW大滿貫' },
            { maintain: false, avatar: 'images/menuLIst/slot_04.webp', title: '發財電子' },
            { maintain: true, avatar: 'images/menuLIst/slot_05.webp', title: 'CQ9電子' },
            { maintain: false, avatar: 'images/menuLIst/slot_06.webp', title: 'ICG電子' },
        ]
    }
]

// 主架構 - media
let ft_media = [{
        offIcon: 'images/icon/tikTok_off.png',
        onIcon: 'images/icon/tikTok_on.png'
    },
    {
        offIcon: 'images/icon/bili_off.png',
        onIcon: 'images/icon/bili_on.png'
    },
    {
        offIcon: 'images/icon/weChat_off.png',
        onIcon: 'images/icon/weChat_on.png'
    },
    {
        offIcon: 'images/icon/QQ_off.png',
        onIcon: 'images/icon/QQ_on.png'
    },
    {
        offIcon: 'images/icon/weibo_off.png',
        onIcon: 'images/icon/weibo_on.png'
    },
    {
        offIcon: 'images/icon/baidu_off.png',
        onIcon: 'images/icon/baidu_on.png'
    },
]

// 主架構 - wrapper
let ft_wrapper = [{
        offIcon: 'images/icon/wrapper01_off.png',
        onIcon: 'images/icon/wrapper01_on.png',
        title: '南安普頓'
    },
    {
        offIcon: 'images/icon/wrapper02_off.png',
        onIcon: 'images/icon/wrapper02_on.png',
        title: '國際米蘭'
    },
    {
        offIcon: 'images/icon/wrapper03_off.png',
        onIcon: 'images/icon/wrapper03_on.png',
        title: '西班牙人'
    },
]

// 主架構 - ft_menu
let ft_menu = ['關於我們', '幫助中心', '博彩責任', '規則與條款', 'APP下載', '合營計畫', '樂動贊助', '官方媒體']

// ============================
// 首頁 - 輪播
let carousel = [
    'images/banner/banner_01.jpg',
    'images/banner/banner_02.jpg',
]

//首頁 - 為您推薦
let recList = [
    { img: 'images/recommend/01.png', title: '沙巴體育' },
    { img: 'images/recommend/02.png', title: 'IM體育' },
    { img: 'images/recommend/03.png', title: '必發體育' },
    { img: 'images/recommend/04.png', title: '熱門直播' },
]

// 首頁 - 中獎消息
let infoList = [
    { player: 'rKD****xEr', sort: '新樂金體育', money: '45099元' },
    { player: 'aya****Gck', sort: 'VR彩票', money: '40384元' },
    { player: 'qRD****aEG', sort: 'CQ9電子', money: '4668元' },
    { player: '9a3****B70', sort: '性感真人', money: '15888元' },
    { player: 'pw6****3Xu', sort: '幸運棋牌', money: '35888元' },
    { player: 'CLE****hT', sort: '新樂金體育', money: '2439元' },
]

// 首頁 - 優惠活動
let prefList = [{
        img: 'images/background/pref_01.png',
        title: 'Owin升級贊助豪門意甲',
        time01: '2021.10.15',
        time02: '2022.01.06',
        platform: '體育平台'
    },

    {
        img: 'images/background/pref_02.png',
        title: 'Owin助力五大聯賽',
        time01: '2021.08.05',
        time02: '2021.12.22',
        platform: '體育平台'
    },
]

// 首頁 - 產品特色
let featureList = [{
        title: '極致用戶體驗',
        img: 'images/icon/icon_Diamond.svg',
        list: [{
                theme: '客制多平台應用',
                ann: 'Web、H5、Android/iOS APP',
                num:'',
                style:'1'
            },
            {
                theme: '最佳操作體驗',
                ann: '沉浸式設計，直覺快速操作',
                num:'',
                style:'1'
            },
            {
                theme: '精準分析',
                ann: '數據分析，了解客戶需求',
                num:'',
                style:'1'
            },
        ]
    },
    {
        title: '高效快捷交易',
        img: 'images/icon/icon_Safety.svg',
        list: [{
                theme: '',
                ann: '極速存款',
                num: '19',
                style:'2'
            },
            {
                theme: '',
                ann: '最快取款',
                num: '57',
                style:'2'
            },
            {
                theme: '',
                ann: '最全付款方式',
                num: '40',
                style:'2'
            },
        ]
    },
    {
        title: '穩固安全保障',
        img: 'images/icon/icon_trade.svg',
        list: [{
                theme: '128位SSL加密',
                ann: '數據/賬戶防衛嚴密',
                num: '',
                style:'1'
            },
            {
                theme: '銀聯特級加密',
                ann: '資金嚴格防衛',
                num: '',
                style:'1'
            },
            {
                theme: 'SSD服務器',
                ann: '技術上提供多種優化運維零事故',
                num: '',
                style:'1'
            },
        ]
    },
]