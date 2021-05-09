let vm = new Vue({
    el: '#app',
    methods: {
        jumpPath(path) {
            let src = window.location.href.split('index.html')[0];
            window.location.href = `${src}select.html?${path}`
        },
        toggle(){
            let src = window.location.href.split('index.html')[0];
            window.location.href = `${src}manage.html`
        }
    }
})