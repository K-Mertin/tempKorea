//var resturantModel = JSON.parse('{"res":[{"Id": 1,      "Name": "陳玉華",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": ""  }{	"Id": 2,    "Name": "陳玉華2",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}{    "Id": 3,    "Name" "陳玉華3",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}{    "Id": 4,    "Name": "陳玉華4",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}]}');
var resturantModel = JSON.parse('{ "restaurants" : [' +
'{   "Id": "res1",      "Name": "陳玉華老奶奶元祖一隻雞",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",' +
    '"Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",'+      
    '"time": "10:30~次日01:00(点餐截至23:30)",      "trafficInfo": "地鐵4號線東大門(Dongdaemun)站9號出口，步行7分鐘;地鐵1號線鐘路5街(Jongno5(o)-ga)站5號出口，步行10分鐘",'+
    '"otherInformation":["中文服務","韓幣、信用卡(JCB、visa、master、amex)"],' +
    '"link":["https://www.hanchao.com/contents/food_menu.html?id=2900"],' +
    '"images":""},' +

'{ "Id": "res2",      "Name": "香港飯店0410PLUS",      "EngName": "",      "KoreaName": "홍콩반점0410PLUS+ 명동점",'+
  '"Address": "首爾特別市中區明洞10街14 2～3F",      "EngAddress": "",      "KoreaAddress": "서울특별시 중구 명동10길 14 2～3F",' +
  '"time": "",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站8號出口，步行4分鐘",' +
  '"otherInformation":["中文服務","韓幣、信用卡(銀聯卡、JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_menu.html?id=16759","http://place.map.daum.net/10970067"],' +
  '"images":[""]},' +

'{ "Id": "res3",      "Name": "Isaac吐司首爾明洞店",      "EngName": "",      "KoreaName": "이삭토스트서울명동점",' +
  '"Address": "首爾特別市中區退溪路105",      "EngAddress": "",      "KoreaAddress": "서울특별시중구퇴계로105",' +
  '"time": "24小時",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站5號出口，步行5分鐘",' +
  '"otherInformation":["韓幣、信用卡(JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=5409"],' +
  '"images":[""]},' +

'{ "Id": "res4",      "Name": "金家紫菜飯捲",      "EngName": "",      "KoreaName": "김가네",' +
  '"Address": "首爾特別市中區明洞10街14",      "EngAddress": "",      "KoreaAddress": "서울 중구 명동10길 3-1",' +
  '"time": "24小時",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站6號出口，步行5分鐘",' +
  '"otherInformation":["中文服务(部分职员)","韩币、信用卡(银联卡、JCB、visa、master、amex) ※先付"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=17612","http://place.map.daum.net/1727356272"],' +
  '"images":[""]},' +

  '{ "Id": "res5",      "Name": "豚壽百弘大直營店",      "EngName": "",      "KoreaName": "돈수백홍대직영점 ",' +
  '"Address": "首爾特別市麻浦區弘益路6街56",      "EngAddress": "",      "KoreaAddress": "서울 마포구 홍익로6길 56 1층",' +
  '"time": "24小時",      "trafficInfo": "地鐵4號線弘大站8號出口",' +
  '"otherInformation":["韩币、信用卡(JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=6824","http://place.map.daum.net/8431668"],' +
  '"images":[""]},' +

  '{ "Id": "res6",      "Name": "味加本",      "EngName": "",      "KoreaName": "미가본",' +
  '"Address": "首爾特別市中區明洞街56 2F",      "EngAddress": "",      "KoreaAddress": "서울특별시중구명동길56 2F",' +
  '"time": "08:00~22:00(16：00～17:00為休息時間，點餐截至21:00)",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站6號出口，步行5分鐘; 地鐵2號線乙支路入口(Euljiro1(il)-ga)站6號出口，步行8分鐘",' +
  '"otherInformation":["中文服務","韓幣、信用卡(銀聯卡、JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=5161","http://place.map.daum.net/14736826"],' +
  '"images":[""]},' +

   '{ "Id": "res7",      "Name": "土俗村參雞湯",      "EngName": "",      "KoreaName": "토속촌",' +
  '"Address": "首爾特別市鐘路區紫霞門路5街5",      "EngAddress": "",      "KoreaAddress": "서울 종로구 자하문로5길 5",' +
  '"time": "10:00~22:00(點餐截至22:00)",      "trafficInfo": "地鐵3號線景福宮(Gyeongbokgung)站2號出口，步行7分鐘",' +
  '"otherInformation":["中文服務","韓幣、信用卡(JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=1438","http://place.map.daum.net/1504000213"],' +
  '"images":[""]},' +

  '{ "Id": "res8",      "Name": "朴家部隊鍋",      "EngName": "",      "KoreaName": "박가부대 종로2가점",' +
  '"Address": "首爾特別市鐘路區三一大路19街21",      "EngAddress": "",      "KoreaAddress": "서울 종로구 삼일대로19길 21",' +
  '"time": "12:00 ~ 23:00",      "trafficInfo": "地鐵1號線鐘閣站12號出口(購物中心出口)，步行5分鐘",' +
  '"otherInformation":["韓幣、信用卡(JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=9521","http://place.map.daum.net/13289036"],' +
  '"images":[""]},' +

   '{ "Id": "res9",      "Name": "神仙雪濃湯明洞店",      "EngName": "",      "KoreaName": "신선설농탕 명동점",' +
  '"Address": "首爾特別市中區明洞街56-1",      "EngAddress": "",      "KoreaAddress": "서울 중구 명동길 56-1",' +
  '"time": "24小時",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站6號出口，步行7分鐘; 地鐵2號線乙支路入口(Euljiro1(il)-ga)站5號出口，步行8分鐘",' +
  '"otherInformation":["韓幣、信用卡(銀聯卡、JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=719","http://place.map.daum.net/15718441"],' +
  '"images":[""]},' +

   '{ "Id": "res10",      "Name": "橋村炸雞 大學路店",      "EngName": "",      "KoreaName": "교촌치킨 대학로점",' +
  '"Address": "首爾特別市鐘路區大學路11街23",      "EngAddress": "",      "KoreaAddress": "서울 종로구 대학로11길 23 스타시티빌딩 1층 101호",' +
  '"time": "12:00~次日02:00(點餐截至次日01:00)",      "trafficInfo": "地鐵4號線惠化站4號出口，步行5分鐘",' +
  '"otherInformation":["韓幣、信用卡(銀聯卡、JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=5393","http://place.map.daum.net/8210355"],' +
  '"images":[""]},' +

    '{ "Id": "res11",      "Name": "姜虎東白丁",      "EngName": "",      "KoreaName": "강호동백정 명동점",' +
  '"Address": "首爾特別市中區明洞10街19-3",      "EngAddress": "",      "KoreaAddress": "서울 중구 명동10길 19-3",' +
  '"time": "11:30 ~ 02:00",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站8號出口，步行5分鐘",' +
  '"otherInformation":[""],' +
  '"link":["http://place.map.daum.net/18984291"],' +
  '"images":[""]},' +

  '{ "Id": "res12",      "Name": "飯捲天國cafe",      "EngName": "",      "KoreaName": "김밥천국카페",' +
  '"Address": "",      "EngAddress": "",      "KoreaAddress": "서울 서대문구 신촌로 189",' +
  '"time": "",      "trafficInfo": "",' +
  '"otherInformation":[""],' +
  '"link":["https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjX1c7NjKvUAhVIX5QKHcQCBDsQFggqMAE&url=http%3A%2F%2Fshannysnote.pixnet.net%2Fblog%2Fpost%2F351145331-%25E3%2580%2590%25E9%25A6%2596%25E7%2588%25BE%25E9%2580%25A3%25E9%258E%2596%25E9%25A4%2590%25E5%25BB%25B3%25E3%2580%2591%25E7%25B4%25AB%25E8%258F%259C%25E9%25A3%25AF%25E6%258D%25B2%25E5%25A4%25A9%25E5%259C%258B-%25EA%25B9%2580%25EB%25B0%25A5%25EC%25B2%259C%25EA%25B5%25AD-%25E2%259C%2588-&usg=AFQjCNE_BliN2IPiS7Od3trc-PvcUjLX2w","http://place.map.daum.net/14922504"],' +
  '"images":[""]},' +
  
  '{ "Id": "res",      "Name": "孔陵一隻雞新村店",      "EngName": "",      "KoreaName": "공릉닭한마리",' +
  '"Address": "西大門區延世路2街77",      "EngAddress": "",      "KoreaAddress": "서울 서대문구 연세로2길 77",' +
  '"time": "11:00～24:00",      "trafficInfo": "地鐵2號線新村(Sinchon)站4號出口，步行6分鐘; 地鐵2號線梨大(Ewha Womans Univ.)站1號出口，步行7分鐘",' +
  '"otherInformation":["中文服務","韓幣、信用卡(JCB、visa、master、amex)"],' +
  '"link":["https://www.hanchao.com/contents/food_detail.html?id=7168","http://place.map.daum.net/8660964"],' +
  '"images":[""]},' +

  '{ "Id": "res",      "Name": "",      "EngName": "",      "KoreaName": "",' +
  '"Address": "",      "EngAddress": "",      "KoreaAddress": "",' +
  '"time": "",      "trafficInfo": "",' +
  '"otherInformation":[""],' +
  '"link":"",' +
  '"images":[""]}' +
']}');
