let href = window.location.href;
let cityFlag;
let absolute = href.split('?')[0];
let pathname = href.split('?')[1];
function getPath(name){
    let path = absolute+'?'+name
    window.location.href=path;
}
let option = [
    [
        {
            name:'首钢滑雪大跳台',
            project:'单板滑雪大跳台 / 自由式滑雪大跳台',
            intro:'首钢滑雪大跳台将在北京冬奥会期间承担单板和自由式滑雪大跳台比赛项目，设计理念源自中国敦煌壁画中传统的飞天造型，从侧面看去又犹如一只灵动的“水晶鞋”。赛道结束区未来还可举办演唱会、发布会等大型户外活动。',
            img:'images/首钢滑雪大跳台.jpg',
        },
        {
            name:'五棵松体育中心',
            project:'篮球 / 女子冰球',
            intro:'五棵松体育中心可在6小时内实现冰球、篮球两种比赛模式的转换，是国内首个在一块比赛场地同时举办篮球、冰球两种职业体育赛事的场馆。按超低能耗建筑标准设计建造的五棵松冰上运动中心在北京冬奥会期间将作为冰球训练馆使用，其特殊设计的多彩外幕墙体系，让场馆得名“冰菱花”。',
            img:'images/五棵松体育中心.jpg',
        },
        {
            name:'首都体育馆',
            project:'短道速滑 / 花样滑冰',
            intro:'1968年建成，国内第一座人工室内冰场，曾举办2008年北京奥运会排球比赛。2022年北京冬奥会期间将承担短道速滑和花样滑冰比赛任务，产生14枚金牌。这是北京冬奥会第一项完工的改扩建竞赛场馆工程：外观“修旧如旧”，延续经典；场馆内着力打造“最美的冰”，营造更好观赛体验。',
            img:'images/首都体育馆.jpg',
        },
        {
            name:'国家游泳中心（水立方）',
            project:'冰壶',
            intro:'“双奥场馆”国家游泳中心在2019年首次通过“水冰转换”制出4条冬奥标准的冰壶赛道。“水冰转换”让国家游泳中心可以在“水上功能”和“冰上功能“之间自由切换，可以同时具备开展水上运动、冰上运动，及各类大型活动的能力。场馆泳池正常向公众开放。',
            img:'images/国家游泳中心.jpg',
        },
        {
            name:'国家体育馆',
            project:'男子冰球 / 冰橇 / 冰球',
            intro:'国家体育馆作为北京2008年奥运会及残奥会的竞赛场馆之一，曾经举办体操、蹦床等项目。改造后将举办北京2022年冬奥会男子冰球和女子冰球部分比赛、冬残奥会残疾人冰球比赛。场馆赛后除开展冰球运动外，还可以开展花样滑冰、短道速滑等项目，还具有开展夏季运动的多功能转换能力。',
            img:'images/国家体育馆.jpg',
        },
        {
            name:'国家体育场（鸟巢）',
            project:'开闭幕式场馆',
            intro:'国家体育场位于北京奥林匹克公园中心区南部，为2008年北京奥运会的主体育场，占地20.4公顷，建筑面积25.8万平方米，可容纳观众9.1万人。根据规划，国家体育场成为北京冬奥会开、闭幕式的场馆。',
            img:'images/国家体育场.jpg',
        },
        {
            name:'国家速滑馆',
            project:'速度滑冰',
            intro:'国家速滑馆又称“冰丝带”，是本届赛事唯一新建冰上竞赛场馆，与“鸟巢”、“水立方”共同组成“双奥”之城的标志性建筑群。“冰丝带”是冬奥历史上第一个使用二氧化碳作为制冷剂的速度场馆，将承担速度滑冰项目的比赛，产生14块金牌，是冬奥会产生金牌数量最多的单个场馆。',
            img:'images/国家速滑馆.jpg',
        },
    ],[
        {
            name:'国家高山滑雪中心',
            project:'高山滑雪 / 雪车雪橇',
            intro:'高山滑雪被誉为“冬奥会皇冠上的明珠”。国家高山滑雪中心设7条雪道，雪道坡度大、落差大，建设难度极高，主要承担高山滑雪和雪车雪橇赛事。同时国家高山滑雪中心还包括山顶出发区、中间平台、竞技结束区、集散广场、索道等配套设施，最多同时容纳8000人观赛。 ',
            img:'images/国家高山滑雪中心.jpg',
        },
        {
            name:'国家雪车雪橇中心',
            project:'雪车 / 雪橇 / 钢架雪车',
            intro:'国家雪车雪橇中心是北京冬奥会雪车、雪橇、钢架雪车项目比赛场地。场馆共有16个角度、坡度不同的弯道，2020年10月赛道制冰完成后，迎来国家队入驻训练，成为北京冬奥会首个国家队入驻训练的竞赛场馆。',
            img:'images/国家雪车雪橇中心.jpg',
        },
    ],[
        {
            name:'云顶滑雪公园',
            project:'滑雪',
            intro:'云顶滑雪公园包括U型场地技巧、坡面障碍技巧、雪上技巧、空中技巧、障碍追逐、平行大回转六条赛道，共计产生20块金牌。张家口山地媒体中心位于场馆群内，由云顶大酒店改建而成。云顶滑雪公园不仅是自由式滑雪及单板滑雪国家队的训练基地，也为大众冰雪运动提供了优质场地。',
            img:'images/云顶滑雪公园.jpg',
        },
        {
            name:'国家冬季两项中心',
            project:'冬季两项',
            intro:'国家冬季两项中心位于张家口市崇礼区太子城区域东北侧山谷，依次布置靶场、赛道与起终点区、场馆技术楼等。国家冬季两项中心将承担北京冬奥会冬季两项以及冬残奥会冬季两项的比赛。',
            img:'images/国家冬季两项中心.jpg',
        },
        {
            name:'国家跳台滑雪中心',
            project:'跳台滑雪 / 北欧两项',
            intro:'国家跳台滑雪中心将承担北京冬奥会跳台滑雪、北欧两项的比赛。国家跳台滑雪中心是我国首座符合国际标准的跳台滑雪场地，也是张家口赛区冬奥会场馆群建设中工程量最大、技术难度最高的竞赛场馆。跳台剖面因与中国传统吉祥饰物“如意”的S形曲线契合，因此被形象地称为“雪如意”。',
            img:'images/国家跳台滑雪中心.jpg',
        },
        {
            name:'国家越野滑雪中心',
            project:'越野滑雪 / 北欧两项',
            intro:'国家越野滑雪中心将承担北京冬奥会越野滑雪和北欧两项的比赛。越野滑雪是冬季项目中的马拉松，赛道路线长、运动员比赛时间长，是典型的耐力项目。',
            img:'images/国家越野滑雪中心.jpg',
        },
    ]
]
let city;
if(pathname.indexOf('BeiJing')!=-1){
    // $('#selectArea').children('li').eq(0).addClass('active').siblings('li').removeClass('active');
    city = option[0];
    cityFlag = 0;
}else if(pathname.indexOf('YanQing')!=-1){
    city = option[1];
    cityFlag = 1;
    // $('#selectArea').children('li').eq(1).addClass('active').siblings('li').removeClass('active');

}else if(pathname.indexOf('ZhangJiaKou')!=-1){
    city = option[2];
        cityFlag = 2;
    // $('#selectArea').children('li').eq(2).addClass('active').siblings('li').removeClass('active');
}
// console.log(city);
for(let i = 0 ; i < city.length ;i++ ){
    let img = $('<img src="'+city[i].img+'" alt="'+city[i].name+'"/>');
    let div = $('<div class="item"></div>');
    let imgIntro = $('<div class="imgIntro"></div>');
    let imgBox = $('<div class="img"></div>');
    imgBox[0].append(imgIntro[0]);
    imgBox[0].append(img[0]);
    div[0].append(imgBox[0]);
    $(".display")[0].append(div[0]);
}
let introh = document.getElementById('introh');
let introdiv = document.getElementById('introdiv');
let introsport = document.getElementById('introsport');
let showBox = document.querySelector(".show");
let item = document.getElementsByClassName("item");
let time;
let index = 0; 

let reset = function(){
    for(let i = 0;i < item.length; i++){
        item[i].className = "item";
    }
}

let select = function(){
    reset();
    item[index].className = "item choose";
}

select();
showBox.style.backgroundImage = "url("+city[index].img+")";
introdiv.innerHTML = option[cityFlag][index].intro;
introsport.innerHTML = '运动项目 : '+option[cityFlag][index].project;
introh.innerHTML = option[cityFlag][index].name;

function carousel(){
    time = setInterval(function(){
        select();
        index++;
        introdiv.innerHTML = option[cityFlag][index-1].intro;
        introsport.innerHTML = '运动项目 : '+option[cityFlag][index-1].project;
        introh.innerHTML = option[cityFlag][index-1].name;
        showBox.style.backgroundImage = "url("+city[index-1].img+")";
        if(index === item.length){
            index=0;
        }
    },1500);
}

for(let i = 0;i < item.length;i++){
    item[i].onmousemove = function(){
        showBox.style.backgroundImage = "url('"+city[i].img
        introdiv.innerHTML = option[cityFlag][i].intro;
        introsport.innerHTML = '运动项目 : '+option[cityFlag][i].project;
        introh.innerHTML = option[cityFlag][i].name;
        reset();
        clearInterval(time);
        if(i<item.length-1)
            index = i + 1;
        else
            index=0;
        item[i].onmouseleave = function(){
            carousel();
        }
    }
}
carousel();
$(".show").eq(0).on('click',function(){
    let src = this.style.backgroundImage;
    let place = src.split('/')[1];
    place = place.split('.')[0];
    let abs = absolute.split('select.html')[0];
    let region = href.split('select.html?')[1];
    let jumpPath = `${abs}display.html?region=${region}&place=${place}`;
    window.location.href=jumpPath;
})
let vm = new Vue({
    el:'#app',
    components:{
        navt:{
            template:'#navt',
            data(){
                return {
                    href:'',
                    absolute:'',
                    pathname:'',
                    city:''
                }
            },
            methods:{
                handleCommand(command) {
                    let path = `${this.absolute}?${command}`;
                    window.location.href = path;
                }
            },
            mounted(){
                this.href = window.location.href;
                this.absolute = href.split('?')[0];
                this.pathname = href.split('?')[1];
                if(pathname==='BeiJing'){
                    this.city = '北京'
                }
                if(pathname==='ZhangJiaKou'){
                    this.city = '张家口'
                }
                if(pathname==='YanQing'){
                    this.city = '延庆'
                }
            }
        }
    }
})