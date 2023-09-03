import axios from "axios";
import { atom, selector } from "recoil";

const boardList = atom({
    key : 'boardList',
    default : {
            'idx' : '',
            'id' : '',
            'title' : '',
            'content' : '',
            'regdate' : ''
        }
})

const boardListSelector = selector({
    key : boardListSelector,
    get : async({get}) => {
        const params = get(boardList);
        const {data} = await axios.get('/api/v1/board', {
            params : params
        })
        return data
    },
    set : ({set}, newValue) => {
        set(boardList, newValue)
    }
})


export { boardList, boardListSelector }