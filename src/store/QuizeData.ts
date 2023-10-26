import axios from "axios";
import { defineStore } from "pinia";
import { type Ref, ref } from "vue";


export type Quize =  {
    que: string
    ans: string 
}

export const useQuizeDataStore = defineStore("QuizeData", () => {
    const QuizeData = ref<Quize>({que: '', ans: ''}) as Ref<Quize>
    const mode = ref<string>("");

    async function QuizeFetch() {
        try {
            const reqURL = "http://localhost:8080/QuizeFetch"
            const response = await axios.get(reqURL, {
                params: {
                    mode: mode.value
                }
            })
            console.log(response.data)

            QuizeData.value.ans = response.data.ans
            QuizeData.value.que = response.data.que

            console.log("QuizeData.value:" + QuizeData.value.ans)
        }
        catch (error) {
            throw error
        }
    }

    async function ModeReset() {
        try {
            await axios.get(`http://localhost:8080/ClearQuizeProgress?mode=${mode.value}`)
          }catch(error) {
            console.log(error)
          }
    }

    function Init() {
        QuizeData.value = {que: '', ans: ''}
    }

    return {Init,QuizeData, QuizeFetch, ModeReset, mode}
    
})