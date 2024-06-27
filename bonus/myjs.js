const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const emails = ref([]);

    onMounted(() => {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(risposta =>{
                    const result = risposta.data.response
                    emails.value.push(result);
                    console.log(emails.value)
                })
                .catch(error =>{
                    console.log(error)
                })
            
        }
         
});

    return {
        emails
    };
  }
}).mount('#app');


    
// createApp({
//     data(){
//         return {
            
//         }
//     },
//     methods: {
        
//     },
//     mounted(){

//         for (let i = 0; i < 10; i++) {
//             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//                 .then(risposta =>{
//                     const result = risposta.data.response;
//                     this.arrEmail.push(result);
//                 })
//                 .catch(error =>{
//                     console.log(error)
//                 }) 
//         }
        
//     }   
// }).mount('#app');
