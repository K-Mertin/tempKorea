//var resturantModel = JSON.parse('{"res":[{"Id": 1,      "Name": "陳玉華",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": ""  }{	"Id": 2,    "Name": "陳玉華2",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}{    "Id": 3,    "Name" "陳玉華3",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}{    "Id": 4,    "Name": "陳玉華4",    "EngName": "",    "KoreaName": "진옥화할매원조닭한마리",    "Address": "首尔特别市钟路区钟路40Ga街18",    "EngAddress": "",    "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",    "time": "10:30~次日01:00(点餐截至23:30)",    "otherInformation": ""}]}');
var resturantModel = JSON.parse('{ "restaurants" : [' +
'{   "Id": "res1",      "Name": "陳玉華老奶奶元祖一隻雞",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",' +
    '"Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",'+      
    '"time": "10:30~次日01:00(点餐截至23:30)",      "trafficInfo": "地鐵4號線東大門(Dongdaemun)站9號出口，步行7分鐘;地鐵1號線鐘路5街(Jongno5(o)-ga)站5號出口，步行10分鐘",'+
    '"otherInformation":["1","2","3"],"images":["res1_menu.JPG","res1_map.JPG"]},' +


'{ "Id": "res2",      "Name": "陳玉華2",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res3",      "Name": "陳玉華3",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res4",      "Name": "陳玉華4",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res5",      "Name": "陳玉華5",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res6",      "Name": "陳玉華6",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res7",      "Name": "陳玉華7",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res8",      "Name": "陳玉華8",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res9",      "Name": "陳玉華9",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res10",      "Name": "陳玉華10",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res11",      "Name": "陳玉華11",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res12",      "Name": "陳玉華12",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" },' +
'{ "Id": "res13",      "Name": "陳玉華13",      "EngName": "",      "KoreaName": "진옥화할매원조닭한마리",      "Address": "首尔特别市钟路区钟路40Ga街18",      "EngAddress": "",      "KoreaAddress": "서울특별시 종로구 종로40가길 18 동대문닭한마리골목 내",      "time": "10:30~次日01:00(点餐截至23:30)",      "otherInformation": "" } ]}');
