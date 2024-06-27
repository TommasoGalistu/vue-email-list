const {createApp} = Vue;


    
createApp({
    data(){
        return {
            emailUtente: '',
        }
    },
    methods: {
        
    },
    mounted(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(risposta =>{
            const result = risposta.data.response;
            
        })
        .catch(error =>{
            console.log(error)
        })
    }   
    
}).mount('#app');
