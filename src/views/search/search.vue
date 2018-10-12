
<template>
    <div class="search-box">
        <h3 class="search-title">{{searchList.title}}</h3>
        <ul>
            <li 
                v-for="item in searchList.subjects"
                :key="item.alt"
            >
                <div class="img">
                    <router-link 
                        :to="{ name: 'Detailed', query:{id: item.id} }"
                    >
                        <img :src="item.images.large" alt="">
                    </router-link>
                    
                </div>
                
               
                <div class="text">
                    <a href=""></a>
                    <div class="introduce">
                         <span
                            v-for="item in item.genres"
                            :key="item"
                        >
                            / {{item}}
                        </span>
                    </div>
                    <div class="performer">
                        <span
                            v-for="item in item.directors"
                            :key="item.id"
                        >
                            /{{item.name}}
                        </span>
                        <span
                            v-for="item in item.casts"
                            :key="item.id"
                        >
                            /{{item.name}}
                        </span>
                    </div>
                    
                </div>
            </li>
        </ul>
       
    </div>
    
</template>


<script>
    export default {
        data (){
            return {
                searchList: [], // 搜索数据
            }
            
        },
        created (){
            // 热映数据
            let val = this.$route.query.title;
            let id = this.$route.query.id;
            this.http.getSearch({
                val,
                id
            })
            .then( res => {
                this.searchList = res.data;
                console.log(this.searchList)
            })
            
        }
    }
</script>
<style>

img {
    width: 65px;
    height: 91px;
}
li {
    height: 100px;
    margin-bottom: 15px;
}
.search-box {
    width: 1200px;
    margin: 0 auto; 
}
.search-title {
    margin: 30px 0;
}
.img {
    float: left;
    margin-right: 10px;
    overflow: hidden;
}
.text {
    float: left;
    font-size: 14px;
    line-height: 38px;
    color: #ccc;
}
.search-paging {
    width: 600px;
    margin: 0 auto;
}
.search-paging span{
    float: left;
    padding: 5px;
    cursor: pointer;
    margin-right: 10px;
}
</style>
