<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary"  @click="saveUser">Save</button>
        <button class="btn btn-success"  @click="getUsers">Get Users</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList "> {{ user.userName }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!-- post methodu bize promise geri döner. servisten dönen bir cevabı promise yardımıyla alırız-->
<!-- objenin içindeki keyleri teker teker kullanmak icin for-->
<script>
export default {
  data : function() {
    return {
      userName : null,
      userList : []
    }
  },
  methods : {
    saveUser() {
      this.$http.post("" , { userName : this.userName})
      .then((response) => {
        console.log(response);
      })
    },
    getUsers() {
      this.$http.post()
      .then((response) => {
        //console.log(response.body);
        let data = response.data;
        for(let key in data){
          this.userList.push( {
            key : key,
            data : data.userList[key]
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
