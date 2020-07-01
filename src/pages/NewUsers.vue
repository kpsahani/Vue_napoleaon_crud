<template>
  <div class="UserList">
    <div class="container h-100">
      <!------Start page---->
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>User List</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
            </p>
          </div>
          <div class="col-md-5">
            <img src="/img/svg/profile.svg" width="300" alt="" class="img-fluid">
          </div>
        </div>
      </div><!------End page---->
       
      </hr>

      <!-------Start table----->
      <div class="UserFormModel-test">
        <h3 class="d-inline-block">user list</h3>
          <!-- <button @click="addNew" class="btn btn-primary float-right">Add Users</button> -->

          <table class="table table-bordered" ref='table'>
            <thead>
              <tr>
              <th>Id</th>
              <th>Email</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>image</th>
              <th>Action</th>
              </tr>
            </thead>

            <tbody> 
              <tr v-for="post of users" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.v_email}}</td>
                <td>{{post.v_firstname}}</td>
                <td>{{post.v_lastname}}</td>
                <td> <img v-bind:src="'http://localhost/napoleon/admincp/../uploads/user/main/'+post.user_image" alt="image" style="width:100px;height:100px;"/>   </td>
                <td><button class="btn btn-success btn-sm" value="" @click="dlt(post.id)">Delete</button>&nbsp|
                <button class="btn btn-success btn-sm" value="" @click="editModal(post)">Edit</button></td>
              </tr>
            </tbody>
          </table>
      </div><!-------End table----->

      <!-------Start table----->
      <div class="UserFormModel-test">
        <h3 class="d-inline-block">user list</h3>
          <button @click="addNew" class="btn btn-primary float-right">Add Users</button>

          <table class="table table-bordered" ref='table'>
            <thead>
              <tr>
              <th>Id</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Full Name</th>
              <th>image</th>
              <th>Action</th>
              </tr>
            </thead>

            <tbody> 
              <tr v-for="post of users_creme" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.email}}</td>
                <td>{{post.username}}</td>
                <td>{{post.full_name}}</td>
                <td> <img v-bind:src="'http://tapsglobalsolutions.com/creme/cicool/uploads/user/'+post.avatar" alt="image" style="width:100px;height:100px;"/>   </td>
                <td><button class="btn btn-success btn-sm" value="" @click="dlt(post.id)">Delete</button>&nbsp|
                <button class="btn btn-success btn-sm" value="" @click="editModal(post)">Edit</button></td>
              </tr>
            </tbody>
          </table>
      </div><!-------End table----->

          <!--------Start User Add Modal -------->
      <div class="modal fade" id="UserFormModel" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header ">
                  <h5 class="modal-title" v-show="models" id="editLabel">Add New</h5>
                  <h5 class="modal-title" v-show="!models" id="editLabel">Update User's Info</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>    
            </div>
            <!------model body------>
            <div class="modal-body">
              <div class="row">
                <!-- main User Form -->
                <div class="container register-form">       
                  <div class="form">
                    <div class="note">
                        <p>Register Form</p>
                    </div>
                    
                    <form id="form_id" @submit.prevent=" models ? createUser() : updateUser() ">
                      <div class="form-content">
                        <input type="text" v-show="!models" value="" v-model="this.userData.id" />
                        <div class="row">
                        
                          <div class="col-md-12">
                              <div class="form-group" id="input-group-1">
                                  <input type="text" class="form-control" placeholder="User Name*" value=""  v-model="userData.username"  />
                              </div>

                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="Email Address*" value=""  v-model="userData.email"  />
                              </div>
                              
                            
                              <div class="form-group" id="input-group-1" >
                                  <input type="password" class="form-control" placeholder="Password*" value="" v-model="userData.password"  />
                              </div>
                         
                              <div class="form-group" id="input-group-1">
                                  <input type="text" class="form-control" placeholder="Full Name *" value=""  v-model="userData.full_name"  />
                              </div>

                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="type*" value=""  v-model="userData.type"  />
                              </div>


                              <div class="imgBorder" > 
                                <div v-if="models" style=" margin: 5px;">
                                <b-form-file
                                  v-model="file"
                                  :state="Boolean(file)"
                                  placeholder="Choose a file..."
                                  drop-placeholder="Drop file here..."
                                  v-on:change="FileAdd($event)"
                                  
                                ></b-form-file>
                                <div class="mt-3">{{ file ? file.name : '' }}</div>
                                <img id="FileAdd"  alt="add image" style="width:100px;height:100px; "/>
                                </div>

                                <div v-if="!models" style=" margin: 5px;">
                                <b-form-file
                                  v-model="file"
                                  :state="Boolean(file)"
                                  placeholder="Choose a file..."
                                  drop-placeholder="Drop file here..."
                                  v-on:change="FileUpld($event)"
                                  
                                ></b-form-file>
                                  <div class="mt-3">update file: {{ file ? file.name : '' }}</div>
                                <img v-show="imgshow" v-bind:src="'http://localhost/napoleon/admincp/../uploads/user/main/'+this.file" alt="Fetch image" style="width:100px;height:100px; "/>
                                <img  id="Filechange" v-show="!imgshow"  alt="change image" style="width:100px;height:100px;"/> 
                                </div>
                                
                                
                                <!-- <input v-if="models" type="file" class="custom-file-input" id="validatedCustomFile" 
                                  ref="file"   v-on:change="handleFileUpload($event)">
                                <label class="custom-file-label" for="validatedCustomFile" >choose</label> -->
                              </div>

                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="device type*" value=""  v-model="userData.devicetype" style="" />
                              </div>
                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="device id*" value=""  v-model="userData.deviceid" style="" />
                              </div>
                          </div>

                        </div>
                        <!------button--->
                          <!-- <input type="submit" value="Save" v-on:submit.prevent="addData"  v-if="modal == 'new'" class="btnSubmit">
                          <input type="submit" value="Apply" v-if="modal == 'edit'" class="btnSubmit"> -->

                            <button v-show="!models" type="submit" class="btnSubmit">Update</button>
                            <button v-show="models" type="submit" class="btnSubmit">Create</button>
                          
                          
                      </div>
                    </form>    
                  </div>        
                </div>          
              </div>
            </div>

            <div class="modal-footer">
              <button class="btnSubmit" v-on:click="reset()" >Reset</button>
              <button type="button" v-on:click="reset()" class="btn btn-secondary" data-dismiss="modal">Close</button> 
            </div>
          </div>
        </div>
      </div><!--------End User Modal -------->    


    </div>
  </div>
</div>
</template>

<script>
//For fetching promise based Rest api Data form Database :Axios 
import axios from "../../node_modules/axios";
import { mapState, mapGetters } from 'vuex'
export default {
  name : "NewUsers",
  data : () => {

    return {
       models:Boolean,
      imgshow:Boolean,
      userData : { 
        id : '',
        username:'',
        email: '',
        password: '',
        full_name: '',
        avatar: '',
        type: '',
        devicetype: '',
        deviceid: '',          
      },
    }
  },
  mounted () {
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getUsers_creme')
  },
  computed: mapState([
    'users',
    'users_creme',
    'postUsers_creme_getres'
  ]),
  methods : {
     addNew(){
      this.models = true;
      $("#FileAdd").show();
      $("#FileUpld").hide();
      // this.reset();
      $('#UserFormModel').modal('show'); 
    },

    FileAdd(event) {
      var FileAdd = document.getElementById('FileAdd');
      FileAdd.src = URL.createObjectURL(event.target.files[0]);
    },

    FileUpld(event) {
      this.imgshow=false;         
      var Filechange = document.getElementById('Filechange');
      Filechange.src = URL.createObjectURL(event.target.files[0]);         
    },


      //file handle now not used but ctrl+F 'handleFileUpload' and find where used this
    handleFileUpload($event){
      this.userData.user_image = this.$refs.file.files[0];
      var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
    },

    //Data Post in api using Axios Post 
    createUser:function(){ 

      // this.strHobby = this.hobbys.toString();//Convert Array to string
      const formData = new FormData();
      formData.append('username', this.userData.username);
      formData.append('email', this.userData.email);
      formData.append('password', this.userData.password);
      formData.append('full_name', this.userData.full_name);
      formData.append('avatar', this.userData.avatar);
      formData.append('type', this.userData.type);
      formData.append('devicetype', this.devicetype);  
      formData.append('deviceid', this.userData.deviceid);
      formData.append('avatar', this.file);

      this.$store.dispatch("postUsers_creme",formData).then((resp) => {

        // this.$router.push('/home/overview')
        // mapGetters['postUsers'];
          $('#UserFormModel').modal('hide');
          alert(resp);
          this.dataDisplay();

      })

      
                      
      // axios.post('http://localhost/napoleon/ws/newapi/user_insert', formData,{
      //    headers: {
      //      'accept': 'application/json',
      //   'Content-Type': 'multipart/form-data'
      //    }

      // })
      // .then((response) => {
      //   console.log("response",response)
      //   console.log("response.data",response.data);
      //   console.log('response.data.data',response.data.data);
      //   console.log('response.status',response.status);
      //   console.log('response.statusText',response.statusText);
      //   console.log('response.headers',response.headers);
      //   console.log('response.config',response.config);
      //   console.log('response.data.status',response.data.status);
                          
      //   if(response.data.status == true){
      //     Toast.fire({
      //       type: 'success',
      //       title: 'User data submited successfully'
      //     }) 
      //     this.dataDisplay();
      //   }
      //   $('#UserFormModel').modal('hide');

      // }).catch((error) => {
      //     alert(error);
      //   })
    },
  }
    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.note
{
    text-align: center;
    height: 80px;
    background: -webkit-linear-gradient(left, #0072ff, #8811c5);
    color: #fff;
    font-weight: bold;
    line-height: 80px;
}
.form-content
{
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
}
.form-control{
    border-radius:1.5rem;
}
.chekBoxBorder{
  border-radius: 1.5rem;
  padding: 10px 0px 14px 0px;
  border: 1px solid #ced4da;
  margin-bottom: 2%;

}
.imgBorder {
    border-radius: 1.5rem;
    padding: 10px 0px 14px 0px;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
}
.btnSubmit
{
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
}
</style>