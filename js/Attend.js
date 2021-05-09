let href = window.location.href.split("display.html?")[1];
let gym = decodeURIComponent(href.split("&")[1]);
gym = decodeURIComponent(gym.split("=")[1]);
var AttendData = {
  国家速滑馆: {
    attend: 305,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家体育馆: {
    attend: 315,
    unattend: 70,
    "15岁以下": 35,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家体育场: {
    attend: 305,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家游泳中心: {
    attend: 365,
    unattend: 60,
    "15岁以下": 35,
    "15-25岁": 100,
    "25-45岁": 180,
    "45岁以上": 50,
  },
  首都体育馆: {
    attend: 325,
    unattend: 60,
    "15岁以下": 45,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  五棵松体育中心: {
    attend: 305,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  首钢滑雪大跳台: {
    attend: 305,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 80,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家雪车雪橇中心: {
    attend: 365,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 140,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家高山滑雪中心: {
    attend: 365,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 80,
    "25-45岁": 210,
    "45岁以上": 50,
  },
  云顶滑雪公园: {
    attend: 465,
    unattend: 80,
    "15岁以下": 25,
    "15-25岁": 180,
    "25-45岁": 210,
    "45岁以上": 50,
  },
  国家冬季两项中心: {
    attend: 565,
    unattend: 80,
    "15岁以下": 45,
    "15-25岁": 180,
    "25-45岁": 250,
    "45岁以上": 90,
  },
  国家跳台滑雪中心: {
    attend: 365,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 140,
    "25-45岁": 150,
    "45岁以上": 50,
  },
  国家越野滑雪中心: {
    attend: 365,
    unattend: 60,
    "15岁以下": 25,
    "15-25岁": 140,
    "25-45岁": 150,
    "45岁以上": 50,
  },
};
var AttendChart = echarts.init(document.getElementById("AttendPie"));
var Attendoption;

var gymData = AttendData[gym];
Attendoption = {
  title: {
    text: gym + "的上座率",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}:{c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left -5px",
    top: "100px",
  },
  series: [
    {
      name: "上座率",
      type: "pie",
      selectedMode: "single",
      selectedOffset: 30,
      radius: "50%",
      label: {
        normal: {
          position: "outside",
          formatter: "{b}:{c} \n({d}%)",
          textStyle: {
            fontWeight: "normal",
            fontSize: 15,
          },
        },
      },
      data: [
        {
          value: gymData.attend,
          name: "已座",
          label: {
            position: "inside",
            //color: '' 改颜色
          },
        },
        {
          value: gymData.unattend,
          name: "未座",
          selected: true,
          label: {
            //color: '' 改颜色
          },
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

AttendChart.setOption(Attendoption);

var AttendAgePie = echarts.init(document.getElementById("AttendAgePie"));
var AttendAgeoption;
AttendAgeoption = {
  title: {
    text: "今日" + gym + "观众的年龄分布",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}:{c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    top: "100px",
  },
  series: [
    {
      name: "上座率",
      type: "pie",
      selectedMode: "single",
      selectedOffset: 30,
      radius: "50%",
      label: {
        normal: {
          position: "outside",
          formatter: "{b}:{c} \n({d}%)",
          textStyle: {
            fontWeight: "normal",
            fontSize: 15,
          },
        },
      },
      data: [
        {
          value: gymData["15岁以下"],
          name: "15岁以下",
        },
        {
          value: gymData["15-25岁"],
          name: "15-25岁",
        },
        {
          value: gymData["25-45岁"],
          name: "25-45岁",
        },
        {
          value: gymData["45岁以上"],
          name: "45岁以上",
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

AttendAgePie.setOption(AttendAgeoption);

var DayAttendBar = echarts.init(document.getElementById("DayAttendBar"));
var DayAttendoption;

var DayAttend = {
  国家速滑馆: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家体育馆: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家体育场: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家游泳中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  首都体育馆: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  五棵松体育中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  首钢滑雪大跳台: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家雪车雪橇中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家高山滑雪中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  云顶滑雪公园: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家冬季两项中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家跳台滑雪中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
  国家越野滑雪中心: {
    attendrate: [89, 78, 85, 60, 90, 77, 84],
    day: ["2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9"],
  },
};
var DayData = DayAttend[gym];

DayAttendoption = {
  title: {
    text: gym + "最近" + DayData.day.length + "天的上座率",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    formatter: "{b}<br/>{a}: {c}%",
  },
  xAxis: {
    type: "category",
    data: DayData.day,
  },
  yAxis: {
    type: "value",
    max: 100,
  },
  grid: { containLabel: true },
  visualMap: {
    orient: "vertical",
    left: "left",
    min: 0,
    max: 10,
    text: ["High", "Low"],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ["#65B581", "#FFCE34", "#FD665F"],
    },
    top: "100px",
  },
  series: {
    name: "上座率",
    data: DayData.attendrate,
    type: "bar",
    label: {
      position: "top",
      show: true,
      formatter: "{c}%",
    },
    encode: {
      // Map the "amount" column to X axis.
      x: "category",
      // Map the "product" column to Y axis
      y: "value",
    },
  },
};

DayAttendBar.setOption(DayAttendoption);



var AttendAgeChart = echarts.init(document.getElementById("AttendAgeRader"));
var option;

AttendAgeoption = {
  title: {
    text: gym + "观众年龄分布变化",
  },
  tooltip: {},
  legend: {
    data: ["2/3", "2/4", "2/5", "2/6", "2/7"],
    orient: "vertical",
    left: "left",
    top: "100px",
  },
  radar: {
    indicator: [
      {
        name: "15岁以下",
        max: 60,
      },
      {
        name: "15-25岁",
        max: 60,
      },
      {
        name: "25-45岁",
        max: 60,
      },
      {
        name: "45岁以上",
        max: 60,
      },
    ],
  },
  series: [
    {
      name: gym + "观众年龄分布变化",
      type: "radar",
      data: [
        {
          value: [10, 30, 40, 20],
          name: "2/3",
        },
        {
          value: [12, 28, 45, 15],
          name: "2/4",
        },
        {
          value: [9, 31, 50, 10],
          name: "2/5",
        },
        {
          value: [15, 25, 55, 5],
          name: "2/6",
        },
        {
          value: [2, 38, 56, 4],
          name: "2/7",
        },
      ],
    },
  ],
};

AttendAgeChart.setOption(AttendAgeoption);
