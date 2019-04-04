<template>
  <div id="listPage">
    <div class="listwrapper">
      <div class="map-view-wrapper">
        <map-view v-if="addressList" v-bind:showList="true" v-bind:addressList="addressList"></map-view>
      </div>
    </div>
    <p class="title">Address Page</p>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
