<template>
  <div class="Orders">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Orders Page</h3>
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/orders.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>UserName</th>
                    <th>Address</th>
                    <!-- <th>Image</th>
                    <th>Modify</th> -->
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                      <td>
                        {{product.userName}}
                      </td>

                      <td>
                        {{product.address}}
                      </td>

                      <!-- <td>

                        <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                        <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                       
                      </td> -->
                    </tr>
                </tbody>
              </table>
          </div>
      </div>
    
  </div>
</template>

<script>
import { fb, db} from '../Firebase';
export default {
  name: "Orders",
  data(){
      return{
        products:[],
            product: {
              id:null,
            userName:null,
            address:null,
      }    
  }
},
  firestore(){
      return {
        products: db.collection('usersDetails'),
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
