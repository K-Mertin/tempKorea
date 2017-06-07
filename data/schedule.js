var scheduleModel = JSON.parse('{ "schedule" : [' +
'{   "Type": "Day1",      "STime": " 6/17",      "ETime": "(六)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "15:15",      "ETime": "18:45",      "Location": "桃園機場 -> 仁川機場", "Price": ""},' +
'{   "Type": "購物",      "STime": "18:45",      "ETime": "19:42",      "Location": "入境、換錢(USD 200)", "Price": ""},' +
'{   "Type": "交通",      "STime": "19:42",      "ETime": "20:45",      "Location": "仁川機場 (機場巴士)> 飯店(明洞天空花園III)", "Price": "15000*2"},' +
'{   "Type": "交通",      "STime": "21:30",      "ETime": "21:50",      "Location": "飯店 (步行)> 明洞站 (L4)> 東大門歷史文化公園站 (步行)> DPP 東大門設計廣場", "Price": "1250*2"},' +
'{   "Type": "景點",      "STime": "21:50",      "ETime": "23:45",      "Location": "DDP東大門設計廣場 (LED玫瑰花海)", "Price": ""},' +
'{   "Type": "飲食",      "STime": "21:50",      "ETime": "23:45",      "Location": "青春伸展台市場", "Price": ""},' +
'{   "Type": "交通",      "STime": "23:45",      "ETime": "00:10",      "Location": "DDP東大門設計廣場 (步行)> 東大門歷史文化公園站 (L4)> 明洞站 (步行)> 飯店", "Price": "1250*2"},' +
'{   "Type": "Day2",      "STime": "6/18",      "ETime": "(日)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "09:00",      "Location": "起床 (步行)> 明洞站4號出口麥當勞門口", "Price": ""},' +
'{   "Type": "套裝",      "STime": "09:00",      "ETime": "18:00",      "Location": "小王子村+南怡島一日遊(含早午餐)", "Price": ""},' +
'{   "Type": "景點",      "STime": "10:30",      "ETime": "",      "Location": "小王子村", "Price": ""},' +
'{   "Type": "飲食",      "STime": "12:00",      "ETime": "",      "Location": "春川辣炒雞", "Price": ""},' +
'{   "Type": "景點",      "STime": "13:30",      "ETime": "16:30",      "Location": "南怡島", "Price": ""},' +
'{   "Type": "交通",      "STime": "16:30",      "ETime": "18:00",      "Location": "返回首爾市區", "Price": ""},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "換錢 (option)", "Price": ""},' +
'{   "Type": "交通",      "STime": "18:30",      "ETime": "19:00",      "Location": "明洞站 (L4)> 東大門歷史文化公園站 (L4)>(L5)> 光化門站", "Price": "1250*2"},' +
'{   "Type": "景點",      "STime": "19:00",      "ETime": "20:00",      "Location": "清溪川&穿越時光市場", "Price": ""},' +
'{   "Type": "交通",      "STime": "20:00",      "ETime": "20:20",      "Location": "廣橋 (步行)> 鐘閣站 (L1)> 鐘路五街站 (步行)> 陳玉華一隻雞", "Price": "1250*2"},' +
'{   "Type": "飲食",      "STime": "20:00",      "ETime": "22:00",      "Location": "陳玉華一隻雞", "Price": "20000↑"},' +
'{   "Type": "交通",      "STime": "22:00",      "ETime": "22:30",      "Location": "陳玉華一隻雞 (步行)> 東大門站 (L4)> 明洞站", "Price": "1250*2"},' +
'{   "Type": "Day3",      "STime": "6/19",      "ETime": "(一)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "08:30",      "Location": "起床 (步行)> Isaac 吐司", "Price": ""},' +
'{   "Type": "飲食",      "STime": "08:30",      "ETime": "09:00",      "Location": "Isaac 吐司", "Price": "3000↑*2"},' +
'{   "Type": "交通",      "STime": "09:00",      "ETime": "09:10",      "Location": "Isaac (步行)> 一品香", "Price": ""},' +
'{   "Type": "換錢",      "STime": "",      "ETime": "",      "Location": "一品香", "Price": ""},' +
'{   "Type": "交通",      "STime": "09:10",      "ETime": "09:30",      "Location": "一品香 (步行)> 南山谷韓屋村", "Price": ""},' +
'{   "Type": "景點",      "STime": "09:30",      "ETime": "11:00",      "Location": "南山谷韓屋村", "Price": ""},' +
'{   "Type": "交通",      "STime": "11:00",      "ETime": "11:15",      "Location": "南山谷韓屋村 (步行)> 香港飯店 2號店", "Price": "5500↑*2"},' +
'{   "Type": "飲食",      "STime": "11:15",      "ETime": "12:15",      "Location": "香港飯店-炸醬麵", "Price": ""},' +
'{   "Type": "交通",      "STime": "12:15",      "ETime": "12:30",      "Location": "明洞集合點(新世界百貨外面噴水台)", "Price": ""},' +
'{   "Type": "套裝",      "STime": "12:30",      "ETime": "23:00",      "Location": "千年茶屋、瑞士村、五光十色香草島樂園燈節一日遊", "Price": ""},' +
'{   "Type": "",      "STime": "14:00",      "ETime": "",      "Location": "瑞士村", "Price": ""},' +
'{   "Type": "",      "STime": "16:15",      "ETime": "",      "Location": "千年茶屋", "Price": ""},' +
'{   "Type": "飲食",      "STime": "17:00",      "ETime": "",      "Location": "鴨肉．五花腩肉頂級燒烤", "Price": ""},' +
'{   "Type": "",      "STime": "19:00",      "ETime": "20:15",      "Location": "香草島樂園", "Price": ""},' +
'{   "Type": "",      "STime": "20:15",      "ETime": "22:30",      "Location": "返回明洞", "Price": ""},' +
'{   "Type": "Day4",      "STime": "6/20",      "ETime": "(二)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "08:30",      "Location": "起床 (步行)> 金家飯捲", "Price": ""},' +
'{   "Type": "飲食",      "STime": "08:30",      "ETime": "09:30",      "Location": "金家紫菜飯捲", "Price": "5000↑*2"},' +
'{   "Type": "交通",      "STime": "09:30",      "ETime": "10:00",      "Location": "金家紫菜飯捲 (步行)> 乙支路入口站 (L2)> 合井站", "Price": "1250*2"},' +
'{   "Type": "交通",      "STime": "10:00",      "ETime": "11:00",      "Location": "合井站 (2200)> 坡州英語村站", "Price": "2700*2"},' +
'{   "Type": "景點",      "STime": "11:00",      "ETime": "12:00",      "Location": "坡州英語村(영어마)", "Price": "3000*2"},' +
'{   "Type": "景點",      "STime": "12:00",      "ETime": "13:00",      "Location": "Heyri藝術村 (헤이리 예술마을)", "Price": ""},' +
'{   "Type": "交通",      "STime": "13:00",      "ETime": "13:20",      "Location": "Heyri藝術村 (步行)> 普羅旺斯村", "Price": ""},' +
'{   "Type": "飲食",      "STime": "13:20",      "ETime": "14:20",      "Location": "普羅旺斯村", "Price": ""},' +
'{   "Type": "景點",      "STime": "14:20",      "ETime": "15:20",      "Location": "普羅旺斯村", "Price": ""},' +
'{   "Type": "交通",      "STime": "15:20",      "ETime": "17:00",      "Location": "普羅旺斯村 (步行)> 城東十字路口站 (2200)> 合井站", "Price": "2700*2"},' +
'{   "Type": "交通",      "STime": "17:00",      "ETime": "17:10",      "Location": "合井站 (L2)> 弘大入口站", "Price": ""},' +
'{   "Type": "飲食",      "STime": "17:10",      "ETime": "18:10",      "Location": "豚壽百豬肉湯飯", "Price": "6500↑*2"},' +
'{   "Type": "景點",      "STime": "18:10",      "ETime": "21:00",      "Location": "弘大商圈(可採買)", "Price": ""},' +
'{   "Type": "交通",      "STime": "",      "ETime": "30 min ",      "Location": "弘大入口站 (L2)> 東大門歷史文化公園站 (L4)> 明洞站", "Price": "1250*2"},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "弘大入口站 (L2)> 乙支路入口站 (步行)> 明洞站", "Price": ""},' +
'{   "Type": "Day5",      "STime": "6/21",      "ETime": "(三)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "08:30",      "Location": "起床 (步行)> 味加本", "Price": ""},' +
'{   "Type": "飲食",      "STime": "08:30",      "ETime": "09:30",      "Location": "味加本", "Price": "8000↑*2"},' +
'{   "Type": "交通",      "STime": "09:30",      "ETime": "09:50",      "Location": "味加本 (步行)> 明洞站 (L4) > 忠武路站 (L3)> 安國站", "Price": "1250*2"},' +
'{   "Type": "景點",      "STime": "09:50",      "ETime": "12:00",      "Location": "北村八景", "Price": ""},' +
'{   "Type": "交通",      "STime": "12:00",      "ETime": "12:30",      "Location": "北村八景 (步行)> 安國站 (L3)> 景福宮站 (步行)> 土俗村", "Price": "1250*2"},' +
'{   "Type": "飲食",      "STime": "12:30",      "ETime": "14:00",      "Location": "土俗村參雞湯", "Price": "20000↑"},' +
'{   "Type": "交通",      "STime": "14:00",      "ETime": "14:10",      "Location": "土俗村 (步行)> 景福宮", "Price": ""},' +
'{   "Type": "景點",      "STime": "14:10",      "ETime": "17:30",      "Location": "景福宮、光化門、光化門廣場", "Price": ""},' +
'{   "Type": "交通",      "STime": "17:30",      "ETime": "18:00",      "Location": "光化門廣場 (步行)> 朴家部隊鍋", "Price": ""},' +
'{   "Type": "飲食",      "STime": "18:00",      "ETime": "19:30",      "Location": "朴家部隊鍋", "Price": "8000↑*2"},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "(可採買)", "Price": ""},' +
'{   "Type": "交通",      "STime": "19:30",      "ETime": "20:00",      "Location": "朴家部隊鍋 (步行)> 鐘閣站 (L1)> 東大門站 (L4)> 明洞站", "Price": ""},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "朴家部隊鍋 (步行)> 明洞站", "Price": ""},' +
'{   "Type": "Day6",      "STime": "6/22",      "ETime": "(四)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "08:30",      "Location": "起床 (步行)> 神仙雪濃湯", "Price": ""},' +
'{   "Type": "飲食",      "STime": "08:30",      "ETime": "09:30",      "Location": "神仙雪濃湯", "Price": "7000↑*2"},' +
'{   "Type": "交通",      "STime": "09:30",      "ETime": "10:00",      "Location": "神仙雪濃湯 (步行)> 明洞站 (L4)> 惠化站 (步行)> 壁畫村", "Price": "1250*2"},' +
'{   "Type": "景點",      "STime": "10:00",      "ETime": "12:00",      "Location": "梨花洞壁畫村", "Price": ""},' +
'{   "Type": "交通",      "STime": "12:00",      "ETime": "12:15",      "Location": "梨花洞壁畫村 (步行)> 橋村炸雞", "Price": ""},' +
'{   "Type": "飲食",      "STime": "12:15",      "ETime": "13:00",      "Location": "橋村炸雞", "Price": "15000↑"},' +
'{   "Type": "交通",      "STime": "13:00",      "ETime": "13:15",      "Location": "橋村炸雞 (步行)> 昌慶宮", "Price": ""},' +
'{   "Type": "景點",      "STime": "13:15",      "ETime": "15:30",      "Location": "昌慶宮、昌德宮", "Price": ""},' +
'{   "Type": "交通",      "STime": "15:30",      "ETime": "16:00",      "Location": "昌德宮 (步行)> 鐘閣站 (L3)> 忠武路站 (L4)> 明洞站", "Price": "1250*2"},' +
'{   "Type": "交通",      "STime": "16:00",      "ETime": "16:15",      "Location": "明洞站 (步行)> 姜虎東白丁", "Price": ""},' +
'{   "Type": "飲食",      "STime": "16:15",      "ETime": "18:00",      "Location": "姜虎東白丁", "Price": "15000↑*2"},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "(可採買)", "Price": ""},' +
'{   "Type": "交通",      "STime": "18:00",      "ETime": "18:45",      "Location": "姜虎東(步行)> 南山電梯搭乘處 (電梯) (纜車)> 南山首爾塔", "Price": ""},' +
'{   "Type": "景點",      "STime": "18:30",      "ETime": "21:00",      "Location": "南山首爾塔", "Price": ""},' +
'{   "Type": "交通",      "STime": "21:00",      "ETime": "21:30",      "Location": "南山首爾塔 (纜車)> (電梯)> (步行)> 明洞", "Price": ""},' +
'{   "Type": "",      "STime": "",      "ETime": "",      "Location": "明洞聖堂", "Price": ""},' +
'{   "Type": "Day7",      "STime": "6/22",      "ETime": "(五)",      "Location": "", "Price": ""},' +
'{   "Type": "類型",      "STime": "起始時間",      "ETime": "結束時間",      "Location": "地點", "Price": "費用"},' +
'{   "Type": "交通",      "STime": "08:00",      "ETime": "08:30",      "Location": "起床 (步行)> 乙支路入口站 (L2)> 梨大站 (步行)> 飯捲天", "Price": ""},' +
'{   "Type": "飲食",      "STime": "08:30",      "ETime": "09:15",      "Location": "飯捲天國", "Price": "3000*2"},' +
'{   "Type": "景點",      "STime": "09:15",      "ETime": "11:30",      "Location": "梨花女子大學", "Price": ""},' +
'{   "Type": "飲食",      "STime": "11:30",      "ETime": "13:00",      "Location": "孔陵一隻雞", "Price": ""},' +
'{   "Type": "交通",      "STime": "13:00",      "ETime": "13:30",      "Location": "孔陵一隻雞 (步行)> 梨大站 (L4)> 明洞站", "Price": ""},' +
'{   "Type": "景點",      "STime": "13:30",      "ETime": "15:45",      "Location": "明洞(可採買)", "Price": ""},' +
'{   "Type": "交通",      "STime": "15:45",      "ETime": "16:00",      "Location": "明洞 (步行)> 拿行李", "Price": ""},' +
'{   "Type": "交通",      "STime": "16:15",      "ETime": "17:45",      "Location": "明洞 (機場巴士)> 仁川機場", "Price": ""},' +
'{   "Type": "交通",      "STime": "19:45",      "ETime": "21:20",      "Location": "仁川機場 > 桃園機場", "Price": ""}' +
']}');
