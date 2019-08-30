<template>
    <div class="main-wrap">
       <span><img src="../assets/pix1.png" alt="Dribbleblog"></span>
        <span class="rightnav">
            <ul>
                <li><router-link class="link" to="/"><strong>HOME</strong></router-link></li>
                <li><router-link class="link" to="/trending">TRENDING</router-link></li>
                <li><router-link class="link" to="/browse">BROWSE</router-link></li>
                <li><router-link class="link" to="/author">AUTHOR</router-link></li>
                <li><router-link class="link" to="/books">BOOKS</router-link></li>
                <li><router-link class="link" to="/store">STORE</router-link></li>
            </ul>
            <hr/>
        </span>
        <img src="../assets/articlepix.png" width="600" height="300" class="image1">
    </div>
</template>

<script>
export default {
   name: 'Article'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 12px;
  font-weight: 100;
}
.link {
    color: rgb(82, 80, 80);
    padding: 20px;
    text-decoration: none;
}
.rightnav {
    float: right;
    margin-right: 180px;
    margin-top: 5px;
}
span img {
  margin-left: 150px;
}
hr {
    width: 35px;
    height: 2px; 
    background-color: #fa0b96;
    margin-top: 20px;
    margin-left: 20px;
}
.image1{
    padding-top: 120px; 
    position: absolute;
}
</style>