var subwayModel = JSON.parse('{ "subways" : [' +
'{   "Id":"Line1","Line": "路線",      "ChtName": "中文",      "Number": "號碼",      "EngName": "英文", "KoreaName": "韓文"},' +
'{   "Line": "端點1",      "ChtName": "仁川",      "Number": "161",      "EngName": "Incheon", "KoreaName": "인천"},' +
'{   "Line": "1",      "ChtName": "市廳",      "Number": "132",      "EngName": "City Hall", "KoreaName": "시청"},' +
'{   "Line": "1",      "ChtName": "鐘閣站",      "Number": "131",      "EngName": "Jonggak", "KoreaName": "종각"},' +
'{   "Line": "1",      "ChtName": "鍾路三街",      "Number": "130",      "EngName": "Jongno 3(sam)-ga", "KoreaName": "종로3가"},' +
'{   "Line": "端點1",      "ChtName": "東豆川",      "Number": "101",      "EngName": "Dongducheon", "KoreaName": "동두천"},' +
'{   "Id":"Line2","Line": "路線",      "ChtName": "中文",      "Number": "號碼",      "EngName": "英文", "KoreaName": "韓文"},' +
'{   "Line": "2",      "ChtName": "乙支路3街",      "Number": "203",      "EngName": "Euljiro 3(sam)-ga", "KoreaName": "을지로3가 "},' +
'{   "Line": "2",      "ChtName": "乙支路入口",      "Number": "202",      "EngName": "Euljiro 1(il)-ga", "KoreaName": "을지로입구"},' +
'{   "Line": "2",      "ChtName": "阿峴",      "Number": "242",      "EngName": "Ahyeon", "KoreaName": "아현 "},' +
'{   "Line": "2",      "ChtName": "梨大",      "Number": "241",      "EngName": "Ewha Womans Univ.", "KoreaName": "이대"},' +
'{   "Line": "2",      "ChtName": "新村",      "Number": "240",      "EngName": "Sinchon", "KoreaName": "신촌"},' +
'{   "Line": "2",      "ChtName": "弘大入口",      "Number": "239",      "EngName": "Hongik Univ.", "KoreaName": "홍대입구 "},' +
'{   "Line": "2",      "ChtName": "合井",      "Number": "238",      "EngName": "Hapjeong", "KoreaName": "합정"},' +
'{   "Line": "2",      "ChtName": "堂山",      "Number": "237",      "EngName": "Dangsan", "KoreaName": "당산 "},' +
'{   "Id":"Line3","Line": "路線",      "ChtName": "中文",      "Number": "號碼",      "EngName": "英文", "KoreaName": "韓文"},' +
'{   "Line": "端點3",      "ChtName": "梧琴 ",      "Number": "352",      "EngName": "Ogeum", "KoreaName": "오금 "},' +
'{   "Line": "3",      "ChtName": "東大入口",      "Number": "332",      "EngName": "Dongguk Univ.", "KoreaName": "동대입구 "},' +
'{   "Line": "3",      "ChtName": "忠武路站",      "Number": "331",      "EngName": "Chungmuro", "KoreaName": "충무로"},' +
'{   "Line": "3",      "ChtName": "乙支路3街",      "Number": "330",      "EngName": "Euljiro 3(sam)-ga", "KoreaName": "을지로3가 "},' +
'{   "Line": "3",      "ChtName": "鍾路三街",      "Number": "329",      "EngName": "Jongno 3(sam)-ga", "KoreaName": "종로3가"},' +
'{   "Line": "3",      "ChtName": "安國",      "Number": "328",      "EngName": "Anguk", "KoreaName": "안국 "},' +
'{   "Line": "3",      "ChtName": "景福宮",      "Number": "327",      "EngName": "Gyeongbokgung", "KoreaName": "경복궁 "},' +
'{   "Line": "端點3",      "ChtName": "大化 ",      "Number": "310",      "EngName": "Daehwa", "KoreaName": "대화"},' +
'{   "Id":"Line4","Line": "路線",      "ChtName": "中文",      "Number": "號碼",      "EngName": "英文", "KoreaName": "韓文"},' +
'{   "Line": "端點4",      "ChtName": "烏耳島",      "Number": "456",      "EngName": "Oido", "KoreaName": "오이도"},' +
'{   "Line": "4",      "ChtName": "會賢站",      "Number": "425",      "EngName": "Hoehyeon", "KoreaName": "회현"},' +
'{   "Line": "4",      "ChtName": "明洞站",      "Number": "424",      "EngName": "Myeong-dong", "KoreaName": "명동"},' +
'{   "Line": "4",      "ChtName": "忠武路站",      "Number": "423",      "EngName": "Chungmuro", "KoreaName": "충무로"},' +
'{   "Line": "4",      "ChtName": "東大門歷史文化公園站",      "Number": "422",      "EngName": "Dongdaemun History & Culture Park", "KoreaName": "동대문역사문화공원"},' +
'{   "Line": "4",      "ChtName": "東大門站",      "Number": "421",      "EngName": "Dongdaemun", "KoreaName": "동대문"},' +
'{   "Line": "4",      "ChtName": "惠化",      "Number": "420",      "EngName": "Hyehwa", "KoreaName": "혜화"},' +
'{   "Line": "端點4",      "ChtName": "堂嶺站",      "Number": "409",      "EngName": "Danggogae", "KoreaName": "당고개"},' +
'{  "Id":"Line5", "Line": "路線",      "ChtName": "中文",      "Number": "號碼",      "EngName": "英文", "KoreaName": "韓文"},' +
'{   "Line": "端點5",      "ChtName": "上一洞",      "Number": "553",      "EngName": "Sangil-dong", "KoreaName": "상일동"},' +
'{   "Line": "5",      "ChtName": "靑丘",      "Number": "537",      "EngName": "Cheonggu", "KoreaName": "청구"},' +
'{   "Line": "5",      "ChtName": "東大門歷史文化公園站",      "Number": "536",      "EngName": "Dongdaemun History & Culture Park", "KoreaName": "동대문역사문화공원"},' +
'{   "Line": "5",      "ChtName": "乙支路四街",      "Number": "535",      "EngName": "Euljiro 4(sa)-ga", "KoreaName": "을지로4가"},' +
'{   "Line": "5",      "ChtName": "鍾路三街",      "Number": "534",      "EngName": "Jongno 3(sam)-ga", "KoreaName": "종로3가"},' +
'{   "Line": "5",      "ChtName": "光化門",      "Number": "533",      "EngName": "Gwanghwamun", "KoreaName": "광화문"},' +
'{   "Line": "端點5",      "ChtName": "傍花",      "Number": "510",      "EngName": "Banghwa", "KoreaName": "방화"}' +
']}');
