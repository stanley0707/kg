<template>
  <div class="sub_page">
    
    <div class="sub_page_menu"> 

    </div>

    <div class="sub_page_content">
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>

    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    },
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sub_page_menu {
  width: 100%;
  height: 50px;
  background: #fff;
  position: sticky;
  top: 60px;
  -webkit-box-shadow: 0px 20px 37px -12px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 20px 37px -12px rgba(0,0,0,0.35);
  box-shadow: 0px 5px 15px -8px rgb(193, 193, 193);

}

.sub_page_content {
    width: 100%;
    height: 100%;
    margin-top: 14px;
}
.sub_page_content_item{
    max-width: 700px;
    width: 100%;
    height: 200px;
    background: #fff;
    margin: 13px 0px 0px 0px;
}
</style>