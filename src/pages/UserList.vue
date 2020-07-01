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
          <button @click="addNew" class="btn btn-primary float-right">Add Users</button>

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

            <tbody  v-if="posts && posts.length"> 
              <tr v-for="post of posts" :key="post.id">
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
                        
                          <div class="col-md-6">
                              <div class="form-group" id="input-group-1">
                                  <input type="text" class="form-control" placeholder="First Name*" value=""  v-model="userData.v_firstname"  />
                              </div>

                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="Email Address*" value=""  v-model="userData.v_email"  />
                              </div>
                              
                              <div class="form-group form-control" >
                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" v-model="userData.e_gender" v-bind:value="male" class="custom-control-input"  >
                                    <label class="custom-control-label" for="customRadioInline1">Male</label>
                                  </div>

                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" v-model="userData.e_gender" v-bind:value="female" class="custom-control-input"  >
                                    <label class="custom-control-label" for="customRadioInline2">Female</label>
                                  </div>
                              </div>

                              
                                    <div v-show="!models" class="chekBoxBorder">
                                    <b-form-group label="HoBBy"  >
                                      <b-form-checkbox-group
                                        id="checkbox-group-1"
                                        v-model="selected"
                                        :options="options"
                                        name="flavour-1"
                                      ></b-form-checkbox-group>
                                      <div>U Selected: <strong>{{ selected }}</strong></div>                                          
                                    </b-form-group>
                                    </div>
                                  <div v-show="models" class="chekBoxBorder">
                                      <b-form-group label="HoBBy" >
                                        <b-form-checkbox-group id="checkbox-group-2" v-model="hobbys" name="flavour-2">
                                          <b-form-checkbox value="orange">Orange</b-form-checkbox>
                                          <b-form-checkbox value="apple">Apple</b-form-checkbox>
                                          <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                                          <b-form-checkbox value="grape">Grape</b-form-checkbox>
                                        </b-form-checkbox-group>
                                      </b-form-group>
                                      <div>C Selected: <strong>{{ hobbys }}</strong></div>
                                    </div>
                            
                              <div class="form-group" id="input-group-1" style="padding:70px 0px 0px 0px;">
                                  <input type="email" class="form-control" placeholder="Admin email*" value="" v-model="userData.adminemail"  />
                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-group" id="input-group-1">
                                  <input type="text" class="form-control" placeholder="Last Name *" value=""  v-model="userData.v_lastname"  />
                              </div>

                              <div class="form-group" id="input-group-1" >
                                  <input type="text" class="form-control" placeholder="Phone Number*" value=""  v-model="userData.i_mobile"  />
                              </div>

                              <div class="form-group" id="input-group-1">
                                  <select id="inputState input-group-1" v-model="userData.v_class" class="form-control"  >
                                    <option disabled value="">Please select one</option>
                                    <option v-for="v_class in v_classes" v-bind:key="v_class">{{ v_class }}</option>
                                  </select>
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
                                <div class="mt-3">Add file: {{ file ? file.name : '' }}</div>
                                <img  id="FileAdd"  alt="add image" style="width:100px;height:100px; "/>
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

                              <div class="form-group" id="input-group-1" style="padding:50px 0px 0px 0px;">
                                  <input type="text" class="form-control" placeholder="Password*" value=""  v-model="userData.adminpassword" style="" />
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
                  </div>        // const locals = localStorage.getItem('token');
                </div>          // const locals = localStorage.getItem('token');
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
export default {
  name : "UserList",

  data : () => {

    return {

      posts:[],
      post:null,
      models:Boolean,
      imgshow:Boolean,
      id:'',
      v_classes:['B.E.','B.Sc','B.com'],
      v_class:'',
      male:'male',
      female:'female',
      hobbys:[],
      Hobby:'',
      file:null,
      
      ArrayHobby:'',
      strHobby:'',
      selected:[], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],

      userData : { 
        id:'',
        v_firstname:'',
        v_lastname: '',
        v_email: '',
        i_mobile: '',
        e_gender: '',
        v_class: '',
        v_hobby:[],
        user_image: '',
        adminemail: '',
        adminpassword: '',     
                    
      },
    }
  },

  methods : {
    
    addNew(){
      this.models = true;
      $("#FileAdd").show();
      $("#FileUpld").hide();
      this.reset();
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
    
    //Data Post in api using Axios Post 
    createUser:function(){ 
                      console.log("USerdata",this.userData);

      this.strHobby = this.hobbys.toString();//Convert Array to string
      const formData = new FormData();
      formData.append('v_firstname', this.userData.v_firstname);
      formData.append('v_lastname', this.userData.v_lastname);
      formData.append('v_email', this.userData.v_email);
      formData.append('i_mobile', this.userData.i_mobile);
      formData.append('e_gender', this.userData.e_gender);
      formData.append('v_class', this.userData.v_class);
      formData.append('v_hobby', this.strHobby);  
      formData.append('user_image', this.userData.user_image);
      formData.append('adminemail', this.userData.adminemail);
      formData.append('adminpassword', this.userData.adminpassword);
      formData.append('user_image', this.file);
                      
      axios.post('http://localhost/napoleon/ws/newapi/user_insert', formData,{
         headers: {
           'accept': 'application/json',
        'Content-Type': 'multipart/form-data'
         }

      })
      .then((response) => {
        console.log("response",response)
        console.log("response.data",response.data);
        console.log('response.data.data',response.data.data);
        console.log('response.status',response.status);
        console.log('response.statusText',response.statusText);
        console.log('response.headers',response.headers);
        console.log('response.config',response.config);
        console.log('response.data.status',response.data.status);
                          
        if(response.data.status == true){
          Toast.fire({
            type: 'success',
            title: 'User data submited successfully'
          }) 
          this.dataDisplay();
        }
        $('#UserFormModel').modal('hide');

      }).catch((error) => {
          alert(error);
        })
    },
          
    //      
    editModal(post) {

      this.models = false;//for Edit model show 
      this.imgshow = true;// img tag show when edit time change image
      this.dataDisplay();
      $('#UserFormModel').modal('show');

      const abc = post.v_hobby;//takin string in abc
      const sparseArray = abc.split(",");//convert in string to aaray
      this.ArrayHobby = sparseArray.filter(function (e) { return e });//remove Blank or undefined array
      console.log('v_hobby',this.ArrayHobby);
        
      const image = post.user_image;//set response image in var
      console.log('userData',this.userData);
      console.log('postData',post);

      this.userData.id = post.id;
      this.userData.v_firstname = post.v_firstname;
      this.userData.v_lastname = post.v_lastname;
      this.userData.v_email = post.v_email;
      this.userData.i_mobile = post.i_mobile;
      this.userData.e_gender = post.e_gender;
      this.userData.v_class = post.v_class;
      this.selected = this.ArrayHobby;
      this.file = image;
      this.userData.adminemail = post.adminemail;
      this.userData.adminpassword = post.adminpassword;
      //alert('edit data form');
    },
    
    //User Detail Updatation
    updateUser(){
      const formData = new FormData();
      formData.append('id',this.userData.id)
      formData.append('v_firstname', this.userData.v_firstname);
      formData.append('v_lastname', this.userData.v_lastname);
      formData.append('v_email', this.userData.v_email);
      formData.append('i_mobile', this.userData.i_mobile);
      formData.append('e_gender', this.userData.e_gender);
      formData.append('v_class', this.userData.v_class);
      formData.append('v_hobby', this.selected);
      formData.append('user_image', this.file);
      formData.append('adminemail', this.userData.adminemail);
      formData.append('adminpassword', this.userData.adminpassword);
      // formData.append('user_image', this.userData.file);
            
      axios.post('http://localhost/napoleon/ws/newapi/user_update', formData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {

            console.log(response.data);
            console.log(response.data.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            
            if(response.data.status == true){
              
              Toast.fire({
                type: 'success',
                title: 'User data updated successfully'
              }) 
              this.dataDisplay();
            }
            $('#UserFormModel').modal('hide');
        }).catch((error) => {
                  alert(error);
            })
    },
      
    //form reset 
    reset(){
      this.userData={
        v_firstname:null,
        v_lastname:null,
        v_email: null,
        i_mobile:null,
        e_gender: null,
        v_class: '',
        v_hobby: null,
        file: '',
        adminemail: null,
        adminpassword: null,
        user_image:'' 
      }
      this.selected=[],
      this.hobbys=[],
      this.file=null,
      this.dataDisplay();
    },

    //Data Display function call
    push(){
      this.dataDisplay();
    }, 

    //file handle now not used but ctrl+F 'handleFileUpload' and find where used this
    handleFileUpload($event){
      this.userData.user_image = this.$refs.file.files[0];
      var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
    },

    //Delet User by id using axios
    dlt : function(id){ 
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

          if (result.value)
          {         
            const formData = new FormData();
            formData.append('id',id);
            axios.post('http://localhost/napoleon/ws/newapi/user_delete',formData, 
            
              { headers: { 'Content-Type': 'application/json'}
            
              }).then((response)=>{
                console.log('data',response.data);
                console.log('status',response.status);
                console.log('statusText',response.statusText);
                console.log('headers',response.headers);
                console.log('config',response.config);
                
                if(response.status == 200){
                  Toast.fire({
                    type: 'success',
                    title: 'User Deleted successfully'
                  }) 
                  this.dataDisplay();
                }
                else{
                  Toast.fire({
                    type: 'error',
                    title: 'Data is Not Deleted'
                  }) 
                }
            })
          }
        })          
      },

    // User Display using Axios Get
    dataDisplay(){

        const url = "http://localhost/napoleon/ws/newapi/user_view";
        var self = this;
        axios.get(url).then(function(response){ 
        self.posts = response.data.data;
          
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        })
      }
    },

    mounted(){
      this.dataDisplay();
      this.reset();
    },
    
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