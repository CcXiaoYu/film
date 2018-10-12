
<template>
    <div class="box">
        <h3 class="detailed-title">
            {{data.title}}
        </h3>
        <div class="introduce">
            <div class="img">
                <img v-if="data.images" :src="data.images.large" alt="">  
            </div> 
            <div class="text">
                <p>
                    <router-link  
                        v-for="item in data.directors" 
                        :key="item.id"
                        :to="{name:'FilmmakerInformation', query:{performerId:item.id}}" 
                    >
                        导演: {{item.name}}
                    </router-link>
                </p>
                <p>
                    编组:
                    <span 
                        v-for="item in data.writers"
                        :key="item"
                    >
                        {{item}}
                    </span>
                </p>
                <p>
                    主演: 
                    <span 
                        v-for="item in data.casts" 
                        :key="item.id"
                    >
                        {{item.name}}
                    </span>
                </p>
                <p>
                    类型:
                    <span 
                        v-for="item in data.genres"
                        :key="item"
                    >
                        {{item}}
                    </span>
                </p>
                <p 
                    v-for="item in data.countries"
                    :key="item"
                >
                    制片国家/地区: {{item}}
                </p>
                <p>
                    语言:
                    <span v-for="item in data.languages" :key="item">{{item}}</span>
                </p>
                <p>上映日期</p>
                <p>片长</p>
                <p>又名</p>
            </div>
        </div>

        <div class="plot-introduction">
            <h3>{{data.title}}的剧情简介</h3>
            <p>{{data.summary}}</p>
        </div>
       
    </div>
        
</template>


<script>
  
    import FilmmakerInformation from '@/views/filmmaker-information/filmmaker-information'

    export default {
        components: {
            FilmmakerInformation,
            
        },
        data (){
            return {
                data: [],
                shortCommentary: []
            }
        },
        async created (){
            let id = this.$route.query.id;
            console.log(id)
            let data = await this.http.getDetailed({id});
            this.data = data.data;
            console.log(this.data)
        }
    }
</script>


<style scoped>

.box {
    width: 1000px;
    margin: 0 auto;
}
.detailed-title {
    margin: 25px 0;
}
.introduce {
    overflow: hidden;
}
.plot-introduction {
    margin-top: 20px;
    font-size: 14px;
    
}
.plot-introduction h3 {
    color: #072;
    font-size: 18px;
    line-height: 46px;
}
.plot-introduction p{
    text-indent: 2em;
}
.film-man {
    margin-top: 20px;
}
.film-man h3{
    color: #072;
    font-size: 18px;
    line-height: 46px;
}

.img {
    float: left;
    margin-right: 15px;
}
.img img {
    width: 135px;
    height: 189px;
}
.text {
    float: left;
}
.text p {
    line-height: 24px;
    font-size: 14px;
}

.short-commentaryn h3{
    color: #072;
    font-size: 18px;
    line-height: 46px;
}
.text a{
    margin-right: 5px;
}
</style>
