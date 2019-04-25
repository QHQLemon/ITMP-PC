<template>
<div class="tab-container">
    <ul class="clearfix">
      <router-link class="active" tag="li" :to='{name:"courseOutline"}'>课程详情</router-link>
      <router-link tag="li" :to='{name:"courseContent"}'>内容</router-link>
      <router-link tag="li" :to='{name:"courseHomework"}'>作业与测试</router-link>
      <!-- <router-link tag="li" :to='{name:"courseTest"}'>测试</router-link> -->
    </ul>
</div>
</template>

<script>
export default{

}
</script >

<style scoped>
.tab-container{
  background:#fafafa;
  border: 1px solid #ddd;
  border-top: none;
  padding: 0px 10px ;
}

.tab-container ul li{
  float: left;
  padding: 5px 10px;
  margin-right: 20px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 10px;
}
.tab-container ul li.router-link-active{
  background: #091827;
  color: #fff;
}
.tab-container ul li.router-link-active:hover{
  color: #fff;
}
.tab-container ul li:hover{
  color: #db6f6a;
}
</style>
