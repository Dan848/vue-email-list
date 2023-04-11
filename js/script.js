const { createApp } = Vue;

createApp({
    data(){
        return{
            titolo: "Esperimenti API",
            listMail: [],
        }
    },
    methods: {
        getData(){
            this.listMail = [];
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                    this.listMail.push(res.data.response);

                })
            }
            console.log(this.listMail)
        }
    },
    mounted(){
        console.log(this.listMail)
    }
}).mount("#app")