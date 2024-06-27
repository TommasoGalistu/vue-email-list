const {createApp} = Vue;


    
createApp({
    data(){
        return {
            arrEmail: [],
        }
    },
    methods: {
        
    },
    mounted(){

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(risposta =>{
                    const result = risposta.data.response;
                    this.arrEmail.push(result);
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    }   
    
}).mount('#app');
