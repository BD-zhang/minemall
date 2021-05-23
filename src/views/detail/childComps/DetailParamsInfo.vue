<template>
  <div id="detail-params-info">
    <!-- <h4 class="hd">规格参数</h4> -->
    <table class="table">
      <thead class="thead">
        <tr class="tr">
          <td>规格参数</td>
          <td></td>
        </tr>
      </thead>
      <tbody v-for="(item, index) in paramsInfo.info" :key="index">
        <tr class="sectionsName">
          <th>{{item.sectionsName}}</th>
          <th></th>
        </tr>
        <tr v-for="(item, ind) in paramsInfo.info[index].setDetail" :key="ind">
          <th class="info_key">{{item.key}}</th>
          <td class="info_value">&nbsp;{{item.value}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    created() {

    },
    mounted() {
      // console.log(this.paramsInfo)
    },
  }

</script>
<style scoped>
  .table {
    width: 100%;
    margin-bottom: 10px;
  }

  .thead {
    background-color: red;
    width: 100%;
    height: 5px;
  }

  .tr {
    /* display: flex; */
    width: 100%;
    background-color: #eee;
    border-bottom: 1px solid #e4e4e4;
    font-weight: 700;
    font-size: 14px;
    color: #999;
  }

  .tr td{
    padding: 5px 5px 5px 20px;
  }


  .tbody-tr th {
    border-right: 1px solid #f7f7f7;
    padding: 5px 5px 5px 20px;
    color: #999;
    font-weight: 400;
    text-align: right;
    width: 22%;
  }

  .info_key {
    border-top: 1px solid #f7f7f7;
    border-right: 1px solid #f7f7f7;
    padding: 5px 5px 5px 20px;
    color: #999;
    font-weight: 400;
    text-align: right;
    width: 30%;
    font-size: 14px;
  }

  .info_value {
    border-top: 1px solid #f7f7f7;
    padding: 5px 5px 5px 5px;
    font-size: 14px;
  }

  .sectionsName {
    text-align: left;
    color: #404040;
    background-color: #f7f7f7;
    font-weight: 700;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }
  .sectionsName th{
    padding: 5px 5px 5px 20px;
    font-size: 14px;
  }

</style>
