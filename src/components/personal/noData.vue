<template>
    <div class="no-case-item" v-else>
      <div class="no-data">
        <p>找不到数据，刷新一下</p>
      </div>
    </div>
</template>

<script>
export default{

}
</script >

<style scoped>
.no-case-item {
  margin-top: 30px;
  background: #fff;
  padding: 10px;
  padding-bottom: 50px;
  min-height: 600px;
}
.no-case-item .no-data {
  height: 300px;
  width: 350px;
  margin: 50px auto;
  background-image: url("../../assets/img/暂无数据.png");
  background-size: 200px;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.no-case-item .no-data p {
  line-height: 200px;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

</style>
