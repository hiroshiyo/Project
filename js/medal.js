var MedalColor = {
  金牌: "#FFD700",
  银牌: "#C0C0C0",
  铜牌: "#BFAD6F",
};
var MedalChart = echarts.init(document.getElementById("Medalsunburst"));
var MedalData = [
  {
    name: "中国",
    children: [
      {
        name: "中国-金牌",
        value: 11,
        itemStyle: {
          color: "#FFD700",
        },
        children: [
          {
            name: "11",
            value: 11,
            itemStyle: {
              color: "#FFD700",
            },
          },
        ],
      },
      {
        name: "中国-银牌",
        value: 9,
        itemStyle: {
          color: "#C0C0C0",
        },
        children: [
          {
            name: "9",
            value: 9,
            itemStyle: {
              color: "#C0C0C0",
            },
          },
        ],
      },
      {
        name: "中国-铜牌",
        value: 7,
        itemStyle: {
          color: "#BFAD6F",
        },
        children: [
          {
            name: "7",
            value: 7,
            itemStyle: {
              color: "#BFAD6F",
            },
          },
        ],
      },
    ],
  },
  {
    name: "俄罗斯",
    children: [
      {
        name: "俄罗斯-金牌",
        value: 10,
        itemStyle: {
          color: "#FFD700",
        },
        children: [
          {
            name: "10",
            value: 10,
            itemStyle: {
              color: "#FFD700",
            },
          },
        ],
      },
      {
        name: "俄罗斯-银牌",
        value: 10,
        itemStyle: {
          color: "#C0C0C0",
        },
        children: [
          {
            name: "10",
            value: 10,
            itemStyle: {
              color: "#C0C0C0",
            },
          },
        ],
      },
      {
        name: "俄罗斯-铜牌",
        value: 5,
        itemStyle: {
          color: "#BFAD6F",
        },
        children: [
          {
            name: "5",
            value: 5,
            itemStyle: {
              color: "#BFAD6F",
            },
          },
        ],
      },
    ],
  },
  {
    name: "美国",
    children: [
      {
        name: "美国-金牌",
        value: 8,
        itemStyle: {
          color: "#FFD700",
        },
        children: [
          {
            name: "8",
            value: 8,
            itemStyle: {
              color: "#FFD700",
            },
          },
        ],
      },
      {
        name: "美国-银牌",
        value: 15,
        itemStyle: {
          color: "#C0C0C0",
        },
        children: [
          {
            name: "15",
            value: 15,
            itemStyle: {
              color: "#C0C0C0",
            },
          },
        ],
      },
      {
        name: "美国-铜牌",
        value: 5,
        itemStyle: {
          color: "#BFAD6F",
        },
        children: [
          {
            name: "5",
            value: 5,
            itemStyle: {
              color: "#BFAD6F",
            },
          },
        ],
      },
    ],
  },
];

var MedalDetails = {
  中国: {
    金牌: {
      num: [1, 1, 2, 1, 1, 2],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶", "跳台滑雪"],
    },
    银牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
    铜牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
  },
  俄罗斯: {
    金牌: {
      num: [1, 1, 2, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
    银牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
    铜牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
  },
  美国: {
    金牌: {
      num: [1, 1, 2, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
    银牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
    铜牌: {
      num: [1, 1, 1, 1, 1],
      sport: ["短道速滑", "速度滑冰", "花样滑冰", "冰球", "冰壶"],
    },
  },
};

var Medaloption = {
  series: {
    type: "sunburst",
    data: MedalData,
    radius: [0, "90%"],
    label: {
      rotate: "radial",
    },
    levels: [
      {},
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "tangential",
        },
      },
      {
        r0: "35%",
        r: "70%",
      },
      {
        r0: "70%",
        r: "75%",
        label: {
          position: "outside",
          padding: 3,
          silent: false,
          color: "#ff0000",
        },
        itemStyle: {
          borderWidth: 3,
        },
      },
    ],
  },
};
MedalChart.setOption(Medaloption);

MedalChart.on("click", sunburstConsole);
function sunburstConsole(param) {
  //alert(param.value)
  //alert(param.name)
  var Name = param.name;
  var Country, Medal;
  if (Name.includes("-")) {
    Country = Name.split("-")[0];
    Medal = Name.split("-")[1];
    DrawMedalBarPart(MedalDetails[Country][Medal], Country, Medal);
  } else {
    Country = Name;
    DrawMedalBarAll(MedalDetails[Country], Country); //don't care
  }
}

function DrawMedalBarPart(Data, Country, Medal) {  
  var PartDetailChart = echarts.init(document.getElementById("Detail"));
  var PartDetailoption = {
    title: {
      text: Country + "队在各个项目获得的" + Medal,
    },
    xAxis: {
      type: "category",
      data: Data.sport,
    },
    yAxis: {
      type: "value",
      minInterval: 1,
    },
    series: [
      {
        label: {
          show: true,
          formatter: "{c}枚",
        },
        data: Data.num,
        type: "bar",
        itemStyle: { color: MedalColor[Medal] },
      },
    ],
  };
  PartDetailChart.setOption(PartDetailoption, true);
}

//don't care next function
function DrawMedalBarAll(Data, Country) {
  var labelOptions = {
    show: true,
    formatter: "{c}枚 {a}",
    rotate: 90
  };
  var AllDetailChart = echarts.init(document.getElementById("Detail"));
  var AllDetailoption = {
    title: {
      text: Country + "队在各个项目获得的奖牌",
    },
    legend: {
      data: ["金牌", "银牌", "铜牌"],
      top: 25,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: Data['金牌'].sport,
    },
    yAxis: [
      {
        type: "value",
        minInterval: 1,
      },
    ],
    series: [
      {
        name: "金牌",
        label: labelOptions,
        emphasis: {
          focus: "series",
        },
        data: Data["金牌"].num,
        type: "bar",
        itemStyle: { color: MedalColor["金牌"] },
      },
      {
        name: "银牌",
        label: labelOptions,
        emphasis: {
          focus: "series",
        },
        data: Data["银牌"].num,
        type: "bar",
        itemStyle: { color: MedalColor["银牌"] },
      },
      {
        name: "铜牌",
        label: labelOptions,
        emphasis: {
          focus: "series",
        },
        data: Data["铜牌"].num,
        type: "bar",
        itemStyle: { color: MedalColor["铜牌"] },
      },
    ],
  };
  AllDetailChart.setOption(AllDetailoption, true);
}
