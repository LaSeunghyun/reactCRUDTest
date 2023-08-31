import { atom } from "recoil";

export const boardList = atom({
    key : 'boardList',
    default : [
        {
            'idx' : 0,
            'id' : '라각운',
            'title' : '타이틀',
            'content' : '구랭',
            'regdate' : '2023-08-27'
        },{
            'idx' : 1,
            'id' : '가군',
            'title' : '2번',
            'content' : '헷갈려',
            'regdate' : '2023-08-28'
        },
    ]
})