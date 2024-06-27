import { createApp } from 'vue';
import { app } from './app';

createApp(app).mount('#app');


    
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
