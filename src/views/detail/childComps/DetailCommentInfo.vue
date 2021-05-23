<template lang="">
  <div>
    <div class="box">
      <div class="head">
        <span>用户评价</span>
        <span>更多>></span>
      </div>
      <div class="userInfo">
        <img :src="commentInfo.profilePhoto">
        <span>{{commentInfo.nickName}}</span>
      </div>
      <div class="stars">
        <span>{{commentInfo.stars}}星星</span>
      </div>
      <div class="comment">{{commentInfo.comment}}</div>
      <div class="date_size_color">
        <span>{{commentInfo.date | showDate}}</span>
        <div>
          <span>尺码：</span>
          <span>{{commentInfo.goodsSize}}</span>
        </div>
        <div>
          <span>颜色：</span>
          <span>{{commentInfo.goodsColor}}</span>
        </div>
      </div>
      <div class="photos">
        <img v-for="(item, index) in commentInfo.photos" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../../../common/utils.js'

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        const date = new Date(value * 1000);
        return formatDate(date,'yy-MM-dd hh:mm:ss')
      }
    }
  }

</script>
<style scoped>
  .box {
    border-top: 5px solid #ededed;
    padding: 5px 15px;
    margin-bottom: 20px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 2px solid #ededed;
    font-size: 14px;
  }

  .userInfo {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .userInfo>span {
    width: 100px;
    margin-top: 5px;
    margin-left: 5px;
    /* text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; */
    font-size: 12px;
    font-weight: 700;
  }

  .userInfo>img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .stars {
    padding: 8px 0;
  }

  .comment {
    max-height: 80px;
    font-size: 14px;
    padding: 10px 0;
    line-height: 180%;
    color: #333;
    padding: 5px 0;
    margin-bottom: 5px;
  }

  .photos {
    margin-bottom: 10px;
  }

  .photos>img {
    width: 50px;
    height: 50px;
    margin: 5px 12px 0 0;
  }

  .date_size_color {
    margin-bottom: 5px;
    display: flex;
  }

  .date_size_color>span:first-child {
    margin-right: 15px;
    font-size: 14px;
    color: #999;
  }
  .date_size_color>div {
    margin-right: 15px;
    font-size: 14px;
    color: #999;
  }

</style>
