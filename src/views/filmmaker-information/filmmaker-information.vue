



<template>
    <div class="box">
        <h3 class="finfor-titel">
            <span>{{filmMan.name}}</span>
            <span>{{filmMan.name_en}}</span>
        </h3>
        <div class="main">
            <div class="img">
                <img v-if="filmMan.avatars" :src="filmMan.avatars.small" alt="">
            </div>
            <div class="text">
                <p>
                    性别:
                    <span>{{filmMan.gender}}</span>
                </p>
                <p>
                    星座:
                </p>
                <p>
                    出生日期:
                </p>
                <p>
                    出生地:
                    <span>{{filmMan.born_place}}</span>
                </p>
                <p>
                    职业:
                    <!-- <span v-for="item in filmMan.works" :key="item">  </span> -->
                </p>
                <p>
                    更多外文名:
                    <span v-for="item in filmMan.aka_en" :key="item">{{item}} / </span>
                </p>
                <p>
                    更多中文名:
                    <span v-for="item in filmMan.aka" :key="item">{{item}} /</span>
                </p>
                <p>
                    家庭成员:
                </p>
             
            </div>
        </div>

        <div class="praise-film">
            <h3>
                最受好评的5部作品 
                <ul class="praise-film-list">
                    <router-link 
                        v-for="item in filmMan.works"
                        :key="item.id"
                        :to="{ name: 'Detailed', query:{id: item.subject.id} }"
                        tag="li"
                    >
                       
                        <img :src="item.subject.images.large" alt="">
                        <span>{{item.subject.title}}</span>
                        
                    </router-link>
                </ul>
            </h3>
        </div>
    </div>
    
</template>
 

<script>
     export default {
       
        data (){
            return {
                data: [],
                filmMan: []
            }
        },
        async created (){
            let id = this.$route.query.performerId;
            console.log(id)
            // 影人条目信息
            let FInfor = await this.http.getFilmmakerInformation({id});
            this.filmMan = FInfor.data;
            console.log(this.filmMan)
        }
    }
</script>

<style>

.box {
    width: 600px;
    margin: 0 auto;
}
.img {
    float: left;
    margin-right: 10px;
    
}
.img img{
    width: 135px;
    height: 190px;
}
.text {
    float: left;
}
.finfor-titel {
    margin: 30px 0;
}
.text p {
    line-height: 24px;
    font-size: 14px;
    color: #ccc;
}
.text p span{
    color: #000;
}
.main {
    overflow: hidden;
}
.praise-film {
    margin-top: 30px;
}
.praise-film-list {
    overflow: hidden;
}
.praise-film h3{
    font-size: 14px;
    color:#333d48;
    line-height: 40px;
}
.praise-film-list li {
    float: left;
    width: 115px;
    margin-right: 5px;
    text-align: center;
    cursor: pointer;
}
.praise-film-list li img{
    width: 115px;
    height: 172px;
}
.praise-film-list li span {
    font-size: 14px;
    color: red;
}
</style>


