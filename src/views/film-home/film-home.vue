
<template>
<div id="box">
    <header>
        <h1 class="h1Title">电影</h1>
        <div class="search">
            <input 
                type="text" 
                ref="search" 
                v-model="val"
            />
            <router-link 
                class="search-ico"
                :to="{ name: 'Search', query:{title: val} }"
            >
                搜索
            </router-link> 
            
        </div>
        <!-- <ul class="search-list">
            <li></li>
        </ul> -->
    </header>
    

    <div id="main">
        <!-- 热映 -->
        <div class="well-received">
            <header class="well-received-head">
                <h3>正在热映</h3>
                <span>全部热映</span>
                
            </header>
            <ul>
                <li 
                    v-for="item in wellReceivedList"
                    :key="item.id"
                >
                    <router-link :to="{ name: 'Detailed', query:{id: item.id} }">
                        <img :src="item.images.large" alt="">
                     
                    </router-link>
                    
                    <h5>{{item.title}}</h5>
                </li>
            </ul>
        </div>
        
    </div>
</div>
    
</template>


<script>
  
    import detailed from '../detailed/detailed'
    import search from '../search/search'
    
     export default {
        components: {
            detailed,
            search
        },
        data (){
            return {
                wellReceivedList: [],
                page: 1, // 当前页数
                pageSize: 3, // 翻页每页显示数据
                pageList: [], // 每页展示的数据
                pageCount: '', // 总共的页数
                val: ''
            }
        },
        methods: {
       
            
        },
        computed: {
            
        },
        created (){
            // 热映数据
            this.http.getData()
            .then( res => {
                this.wellReceivedList = res.data.subjects;
            })
            
        }
    }
</script>


<style scoped>



#box{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
}
.h1Title{
    font-size: 28px;
    color: blue;
    float: left;
    margin-right: 10px;
}
.search input{
    width: 300px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-left: 5px;
}
.well-received-head {
    line-height: 30px;
}
.well-received-head h3 {
    float: left;
    margin-right: 10px;
    font-size: 18px;
    
    color: #000;
}
.well-received li{
    float: left;
    margin-right: 10px;
}
.well-received img{
    width: 115px;
    height: 161px;
}
.paging{
    float: right;
}
#main {
    width: 680px;
    margin: 0 auto;
}
header{
    width: 680px;
    margin: 0 auto;
}

.search {
    width: 446px;
    margin: 0 auto;
}
</style>
