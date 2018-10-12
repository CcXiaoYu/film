


import axios from 'axios';


// let d = axios.create({
//     baseURL: 'https://api.douban.com'
// })




export function getData() { 
    return axios.get( '/api/movie/in_theaters' )
}

// 电影详情
export function getDetailed(params) { 
    console.log(params)
    return axios.get( '/api/movie/subject/' + params.id )
}


// 搜索
export function getSearch (params){
    return axios.get( '/api/movie/search?q=' + params.val  )
}


// 剧照
export function getFilmMan (params){
    return axios.get( '/api/movie/subject/1054395/photos' )
}


// 短评
export function getshortCommentaryn (params){
    console.log(params)
    return axios.get( '/api/movie/subject/'+ params.id +'/comments' )
}


// 影人条目信息
export function getFilmmakerInformation (params){
    return axios.get( '/api/movie/celebrity/' + params.id)
}






export default {
    install(Vue){
        Vue.prototype.http = {
            getData,
            getDetailed,
            getFilmMan,
            getSearch,
            getshortCommentaryn,
            getFilmmakerInformation
        }
    }
}
