
import { ref, onMounted } from 'vue'

export const app = {
  setup() {
    const count = ref(0);

    // log count when component is mounted
    onMounted(() => {
      
    });

    // expose to template
    return {
      count
    }
  }
}