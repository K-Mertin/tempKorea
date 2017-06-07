var sceneModel = JSON.parse('{ "scenes" : [' +
'{   "Id": "scene1",      "Name": "景福宮",      "EngName": "",      "KoreaName": "경복궁",' +
     '"Address": "首爾特別市鐘路區社稷路161 景福宮",      "EngAddress": "",      "KoreaAddress": "서울특별시종로구사직로161 경복궁",' +
     '"time": "09:00～18:30",      "trafficInfo": "地鐵3號線景福宮(Gyeongbokgung)站5號出口",' +
     '"otherInformation":["門票:3000","中文免費導遊陪同(10:30、13:00、15:00)導遊中心"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=265"],' +
     '"images":""},' +

'{   "Id": "scene2",      "Name": "東大門設計廣場(DPP)夜市",      "EngName": "",      "KoreaName": "서울밤도깨비야시장 ＠DDP 청춘런웨이마켓",' +
     '"Address": "首爾特別市中區乙支路281 東大門設計廣場(DDP)一帶",      "EngAddress": "",      "KoreaAddress": "서울특별시중구을지로281 동대문디자인플라자DDP 일대",' +
     '"time": "(五)(六)18:00~23:00",      "trafficInfo": "2、4、5號線東大門歷史文化公園站1號出口",' +
     '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/shop_detail.html?id=10664,","http://www.bamdokkaebi.org/ddp-sketch"],' +
     '"images":""},' +

'{   "Id": "scene3",      "Name": "清溪川時光夜市",      "EngName": "",      "KoreaName": "",' +
     '"Address": "首爾市鐘路區瑞林洞14",      "EngAddress": "",      "KoreaAddress": "서울 종로구 서린동 광통교 일대",' +
     '"time": "(六)16:30~21:30 (日)16:00~21:00",      "trafficInfo": "5號線光化門站5號出口; 1號線鐘閣站5號出口",' +
     '"otherInformation":"",' +
     '"link":["http://www.bamdokkaebi.org/cgc-introduce"],' +
     '"images":""},' +

'{   "Id": "scene4",      "Name": "小王子村",      "EngName": "",      "KoreaName": "쁘띠프랑스",' +
    '"Address": "京畿道加平郡清平面湖畔路1063",      "EngAddress": "",      "KoreaAddress": "경기도 가평군 청평면 호반로 1063",' +
    '"time": "09:00~18:00(入场截至闭园前一个小时)",      "trafficInfo": "在加平站乘坐循环巴士，约30分钟; 在清平站乘坐循环巴士，约25分钟",' +
    '"otherInformation":["韩币、信用卡(银联卡、JCB、visa、master、amex)"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=7655"],' +
     '"images":""},' +

'{   "Id": "scene5",      "Name": "南怡島",      "EngName": "",      "KoreaName": "남 이 섬",' +
    '"Address": "江原道春川市南山面南怡島街1",      "EngAddress": "",      "KoreaAddress": "강원도춘천시남산면남이섬길 1",' +
    '"time": "(咖啡廳、禮品店) 09:00~19:00 ※因店鋪而異",      "trafficInfo": "加平長途汽車客運站下車後，乘坐出租車到遊船碼頭約10分鐘; 京春線加平(Gapyeong)站下車後，乘坐出租車到遊船碼頭約10分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=2184"],' +
     '"images":""},' +

'{   "Id": "scene6",      "Name": "南山谷韓屋村",      "EngName": "",      "KoreaName": "남 산 골 한 옥 마 을",' +
    '"Address": "首爾特別市中區退溪路34街28",      "EngAddress": "",      "KoreaAddress": "서울특별시중구퇴계로34길28",' +
    '"time": "(4~10月)09:00~21:00、(11~3月)09:00~20:00 ※庭園一直開放",      "trafficInfo": "地鐵4號線忠武路(Chungmuro)站４號出口， 步行５分鐘",' +
    '"otherInformation":["免費解說周一休息"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=259"],' +
     '"images":""},' +

'{   "Id": "scene7",      "Name": "小瑞士村",      "EngName": "",      "KoreaName": "에델바이스스위스테마파크",' +
    '"Address": "京畿道加平郡雪岳面多乐岭路226-57",      "EngAddress": "",      "KoreaAddress": "경기도 가평군 설악면 다락재로 226-57",' +
    '"time": "周一~周五 10:00~18:00，周末 09:00~18:00 (入场截至17:00)",      "trafficInfo": "京春线清平(Cheongpyeong)站在清平站下车，换乘公交车到雪岳长途汽车站下车，再乘坐出租车，约6,000韩元。在清平站直接乘坐出租车，约20,000韩元",' +
    '"otherInformation":["韩币、信用卡(银联卡、JCB、visa、master、amex)"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=10315"],' +
     '"images":""},' +

'{   "Id": "scene8",      "Name": "香草島樂園",      "EngName": "",      "KoreaName": "허 브 아 일 랜 드",' +
    '"Address": "京畿道抱川市青新路947號街35",      "EngAddress": "",      "KoreaAddress": "경기도포천시청신로947번길35",' +
    '"time": "週一～週五)09:00～22:00、(週六、週日)09:00～23:00",      "trafficInfo": "地鐵1號線逍遙山(Soyosan)站1號出口乘坐出租車，約25分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=17490"],' +
     '"images":""},' +

'{   "Id": "scene9",      "Name": "京畿英語村坡州校區",      "EngName": "",      "KoreaName": "경 기 영 어 마 을 파 주 캠 프",' +
    '"Address": "京畿道坡州市炭縣面冰室路40",      "EngAddress": "",      "KoreaAddress": "경기도파주시탄현면얼음실로40",' +
    '"time": "09:30~18:00(18點以後可免費入場)",      "trafficInfo": "地鐵2號線合井(Hapjeong)站2號出口乘坐2200號巴士(約需1小時20分種)，在“坡州英語村站下車，步行3分鐘即是",' +
    '"otherInformation":["週一所有體驗活動和店鋪暫停運營","週二僅限店舖等服務設施正常運營"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=5007"],' +
     '"images":""},' +

'{   "Id": "scene10",      "Name": "Heyri藝術村",      "EngName": "",      "KoreaName": "헤 이 리 예 술 마 을",' +
    '"Address": "炭縣面Heyri村街59-118",      "EngAddress": "",      "KoreaAddress": "경기도 파주시 탄현면 헤이리마을길 59-118",' +
    '"time": "",      "trafficInfo": "地鐵2號線合井(Hapjeong)站2號出口乘坐2200號巴士(約需1小時20分種)heyri村４G下车，步行3分钟",' +
    '"otherInformation":"",' +
     '"link":[""],' +
     '"images":""},' +

'{   "Id": "scene11",      "Name": "普羅旺斯村",      "EngName": "",      "KoreaName": "프 로 방 스 마 을",' +
    '"Address": "京畿道坡州市炭縣面新梧里路77",      "EngAddress": "",      "KoreaAddress": "경기도파주시탄현면새오리로77",' +
    '"time": "11:00~22:00(餐廳截至24:00)",      "trafficInfo": "地鐵2號線合井(Hapjeong)站2號出口，乘坐2200路巴士約40分鐘後，在城東十字路口下車，步行10分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=4358"],' +
     '"images":""},' +

'{   "Id": "scene12",      "Name": "弘大商圈",      "EngName": "",      "KoreaName": "",' +
    '"Address": "",      "EngAddress": "",      "KoreaAddress": "",' +
    '"time": "",      "trafficInfo": "弘大入口站",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/area_detail.html?id=10","https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwip4dWHqqvUAhWFerwKHYfzAJ4QFggqMAE&url=http%3A%2F%2Frainieis.tw%2Fblog%2Fpost%2F31096484-%255B%25E9%259F%2593%25E5%259C%258B%255D-%25E9%25A6%2596%25E7%2588%25BE-seoul-%257C-%25E5%25BC%2598%25E5%25A4%25A7-%25E5%2595%2586%25E5%259C%2588%25E6%2595%25A3%25E6%25AD%25A5%25E5%259C%25B0%25E5%259C%2596%2526%25E5%25AF%25A6%25E7%2594%25A8%25E8%25B3%2587&usg=AFQjCNEo2uxMfSzLMFYmKQjzUTHLV258Rw"],' +
     '"images":""},' +

'{   "Id": "scene13",      "Name": "北村韓屋村",      "EngName": "",      "KoreaName": "북촌한옥마을",' +
    '"Address": "",      "EngAddress": "",      "KoreaAddress": "",' +
    '"time": "",      "trafficInfo": "地鐵3號線安國(Anguk)站3號出口，步行3分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://joyce8.com/2016kr-travel14/"],' +
     '"images":""},' +

'{   "Id": "scene14",      "Name": "光化門廣場",      "EngName": "",      "KoreaName": "광 화 문 광 장",' +
    '"Address": "首爾特別市鐘路區世宗大路光化門~世宗十字路口",      "EngAddress": "",      "KoreaAddress": "서울특별시종로구세종대로광화문～세종로사거리",' +
    '"time": "24小時",      "trafficInfo": "",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=263"],' +
     '"images":""},' +

'{   "Id": "scene15",      "Name": "明洞",      "EngName": "",      "KoreaName": "명동",' +
    '"Address": "",      "EngAddress": "",      "KoreaAddress": "",' +
    '"time": "",      "trafficInfo": "",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/area_detail.html?id=1","https://joyce8.com/kr-fx/","http://big5chinese.visitkorea.or.kr/cht/SH/whereToShop/whereToShop.jsp?action=about&cid=1005725","https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwi55aXMravUAhVOv5QKHRbpCgoQFggwMAI&url=http%3A%2F%2Fa9548338.pixnet.net%2Fblog%2Fpost%2F457260149-%25E2%2597%258E%25E3%2580%2590%25E9%259F%2593%25E5%259C%258B%25E9%25A6%2596%25E7%2588%25BE-%25E8%25B6%2585%25E5%25B8%2582%25E6%2594%25BB%25E7%2595%25A5-%25282017%25E6%259C%2580%25E6%2596%25B0%2529%25E6%2598%258E%25E6%25B4%259E%25E8%25B6%2585%25E5%25B8%2582%2526%25E5%2593%2588&usg=AFQjCNFJOmftRnSCRiSEXDKjd3OvC4_xWw"],' +
     '"images":""},' +

'{   "Id": "scene16",      "Name": "梨花洞壁畫村",      "EngName": "",      "KoreaName": "이화동 낙산프로젝트",' +
    '"Address": "首尔特别市钟路区栗谷路19街 一带",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 율곡로19길 일대",' +
    '"time": "",      "trafficInfo": "地鐵4號線惠化(Hyehwa)站2號出口，步行10分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=2137"],' +
     '"images":""},' +

'{   "Id": "scene17",      "Name": "昌德宮",      "EngName": "",      "KoreaName": "창덕궁",' +
    '"Address": "首爾特別市鐘路區栗谷路99",      "EngAddress": "",      "KoreaAddress": "서울특별시종로구율곡로99",' +
    '"time": "2月~5月和9~10月09:00~18:00 、6月~8月09:00~18:30、11月~1月09:00~17:30",      "trafficInfo": "地鐵3號線安國(Anguk)站3號出口， 步行5分鐘",' +
    '"otherInformation":["門票","普通遊覽(不限時間)3,000韓元","秘苑(限制參觀時間)8,000韓元"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=547"],' +
     '"images":""},' +

'{   "Id": "scene18",      "Name": "昌慶宮",      "EngName": "",      "KoreaName": "창경궁",' +
    '"Address": "首爾特別市鐘路區昌慶宮路185",      "EngAddress": "",      "KoreaAddress": "서울특별시종로구창경궁로185",' +
    '"time": "2月~5月、9月~10月09:00~18:00；6月~8月09:00~18:30 ；11月~1月09:00~17:30 ※入場截至閉館1小時前",      "trafficInfo": "地鐵3號線安國(Anguk)站3號出口，步行20分鐘",' +
    '"otherInformation":["門票:1000"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=483"],' +
     '"images":""},' +

'{   "Id": "scene19",      "Name": "梨花女子大學",      "EngName": "",      "KoreaName": "이 화 여 자 대 학 교",' +
    '"Address": "首爾特別市西大門區梨花女大街52",      "EngAddress": "",      "KoreaAddress": "서울특별시서대문구이화여대길52",' +
    '"time": "",      "trafficInfo": "地鐵2號線梨大(Ewha Womans Univ.)站2號出口，步行4分鐘",' +
    '"otherInformation":"",' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=10474"],' +
     '"images":""},' +

 '{   "Id": "scene20",      "Name": "N首爾塔",      "EngName": "",      "KoreaName": "N 서 울 타 워",' +
    '"Address": "首爾特別市龍山區南山公園街126",      "EngAddress": "",      "KoreaAddress": "서울특별시용산구남산공원길126",' +
    '"time": "展望台週一~週五、週日10:00~23:00(入場截至22:30)、週六10:00~24:00(入場截至23:30)※天氣惡劣或有突發狀況時會有變化。※餐廳、咖啡廳等設施的營業時間各異。",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站，從3號出口步行至纜車站約需15分鐘; 地鐵4號線明洞(Myeong-dong)站，從4號出口步行至南山乘電梯處約需10分鐘",' +
    '"otherInformation":["門票","展望台:10000","Hello Kitty:8000","Hello Kitty+展望台:12500","SSENTOY:10000","SSENTOY+展望台:14000","三合一:19500"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=546","https://www.hanchao.com/contents/spot_detail.html?id=16696","https://www.hanchao.com/contents/spot_detail.html?id=16697"],' +
     '"images":""},' +

'{   "Id": "scene21",      "Name": "南山纜車",      "EngName": "",      "KoreaName": "남 산 케 이 블 카",' +
    '"Address": "首爾特別市中區小波路83",      "EngAddress": "",      "KoreaAddress": "서울특별시중구소파로83",' +
    '"time": "10:00~23:00 (運行間隔為10分鐘) ※週五～週日、節假日有可能延長營業時間",      "trafficInfo": "地鐵4號線明洞(Myeong-dong)站從3號出口步行至纜車站約需15分鐘; 地鐵4號線明洞(Myeong-dong)站從3號出口步行至南山乘電梯處約需10分鐘",' +
    '"otherInformation":["門票","來回:8500","單程:6000"],' +
     '"link":["https://www.hanchao.com/contents/spot_detail.html?id=893"],' +
     '"images":""}' +
/*
'{   "Id": "scene",      "Name": "",      "EngName": "",      "KoreaName": "",' +
    '"Address": "",      "EngAddress": "",      "KoreaAddress": "",' +
    '"time": "",      "trafficInfo": "",' +
    '"otherInformation":"",' +
     '"link":[""],' +
     '"images":""}' +*/

']}');
