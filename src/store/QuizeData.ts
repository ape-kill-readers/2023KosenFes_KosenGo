import axios from "axios";
import { defineStore } from "pinia";
import { type Ref, ref } from "vue";


export type Quize =  {
    que: string
    ans: string 
}

export const useQuizeDataStore = defineStore("QuizeData", () => {
    const QuizeData = ref<Quize>({que: '', ans: ''}) as Ref<Quize>

    async function QuizeFetch() {
        try {
            const response = await axios.get("http://localhost:8080/QuizeFetch")
            console.log(response.data)

            QuizeData.value.ans = response.data.ans
            QuizeData.value.que = response.data.que

            console.log("QuizeData.value:" + QuizeData.value.ans)
        }
        catch (error) {
            console.log(error)
        }
    }

    return {QuizeData, QuizeFetch}
    
})