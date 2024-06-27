const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const message = ref([]);

    onMounted(() => {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(risposta =>{
                const result = risposta.data.response
                message.value.push(result) ;
                console.log(message.value)
            })
            .catch(error =>{
                console.log(error)
            }) 
});

    return {
      message
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
