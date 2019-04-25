<template>
  <div class="course-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 课程</p>
      <course-rec></course-rec>
      <course-tab></course-tab>
      <div class="course-content">
        <div class="course-tab col-md-8">
          <router-view></router-view>
        </div>
        <div class="course-teacher col-md-3">
          <course-teacher></course-teacher>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseRec from '../components/course/CourseRec'
import CourseTab from '../components/course/CourseTab'
import CourseTeacher from '../components/course/CourseTeacher'

export default{
  components: {
    CourseRec,
    CourseTab,
    CourseTeacher
  }

}
</script >

<style scoped>
  .course-container{
    width: 100%;
    background: #f6f8fa;
    margin-top: -20px;
    padding-top: 20px;
    min-height: 600px;
  }
  .course-content{
    margin-top: 30px;
  }
  .course-tab{
    min-height: 600px;
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 80px;
    min-width: 825px;
    margin-right: 30px;
    padding: 0;
  }
  .course-teacher{
    padding: 0;
    background: #fff;
    border: 1px solid #ccc;
  }


</style>
