let vm = new Vue({
    el:'#app',
    components:{
        tab:{
            template:'#tab',
            data(){
                return{
                    absolute:'',
                    city:'',
                    cityC:'',
                    place:'',
                    options:[
                        ['首钢滑雪大跳台','五棵松体育中心','首都体育馆','国家游泳中心','国家体育馆','国家速滑馆'],
                        ['国家高山滑雪中心','国家雪车雪橇中心'],
                        ['云顶滑雪公园','国家冬季两项中心','国家跳台滑雪中心','国家越野滑雪中心']
                    ]
                }
            },
            methods:{
                handleCommand(command) {
                    window.location.href = `${this.absolute}region=${this.cityC}&place=${command}`;
                }
            },
            mounted(){
                let href = window.location.href;
                let url = href.split('display.html?')[1];
                this.absolute = href.split('display.html?')[0];
                this.absolute = this.absolute+'display.html?';
                let region = url.split('&')[0];
                this.city = region.split('=')[1];
                let placeT = url.split('&')[1];
                this.place = decodeURIComponent(placeT.split('=')[1]);
                this.cityC = this.city;
                switch(this.city){
                    case 'ZhangJiaKou':
                        this.city = '张家口';
                        break;
                    case 'BeiJing':
                        this.city = '北京';
                        break;
                    case 'YanQing':
                        this.city = '延庆';
                        break;
                }
            },
            computed:{
                'jpath'(){
                    return 'select.html?'+this.cityC;
                }
            }
        }
    }
})