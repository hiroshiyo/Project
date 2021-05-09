let vm = new Vue({
    el: '#app',
    components: {
      manage: {
        template: '#manage',
        data() {
          return {
            tableData: [{
              time: '2020/08/16 21:00',
              project: '篮球',
              nation: '美国 vs 韩国',
              place: '五棵松体育中心',
              status: '正在比赛',
              progress: '八进四',
              score: '6:6'
            }, {
              time: '2020/08/16 20:00',
              project: '篮球',
              nation: '美国 vs 韩国',
              place: '五棵松体育中心',
              status: '比赛结束',
              progress: '八进四',
              score: '6:6'
            }, {
              time: '2020/08/16 19:00',
              project: '篮球',
              nation: '美国 vs 韩国',
              place: '五棵松体育中心',
              status: '比赛结束',
              progress: '八进四',
              score: '6:6'
            }, {
              time: '2020/08/16 19:00',
              project: '篮球',
              nation: '美国 vs 韩国',
              place: '五棵松体育中心',
              status: '比赛结束',
              progress: '八进四',
              score: '6:6'
            }]
          }
        },
        methods:{
          jumpindex(){
            let src = window.location.href.split('manage.html')[0];
            window.location.href = `${src}index.html`
          }
        }
      }
    },
  })