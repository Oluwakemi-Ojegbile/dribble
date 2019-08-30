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
        <div class="p1">
            HOW MILLENIALS<br/>CAN MAKE THE WORLD A BETTER PLACE
            <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit,sed do eiusmod tempor.</p>
            <router-link class="link" to="/article"><button>Read More</button></router-link>
            
            
        </div>
        <div class="pic1">
            <img src="../assets/pix2.png" width="310">
        </div>
        <div class="pic2">
             <iframe width="300" height="350" src="https://www.youtube.com/embed/n3iG1gkW9R0" class="video"></iframe>
        </div>
        <!-- <div class="w3-content w3-display-container">
            <img class="mySlides" src="../assets/musicpix.png" style="width:40%">
            <img class="mySlides" src="../assets/musicpix.png" style="width:40%">
            <img class="mySlides" src="../assets/musicpix.png" style="width:40%">
            <img class="mySlides" src="../assets/musicpix.png" style="width:40%">

            <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div> -->
    </div>
</template>

<script>
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n){
//     var i;
//     var x = document.getElementsByClassName("myslides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }
export default {
   name: 'Homepage'
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
.pic1 {
    position: absolute;
    right: 0px;
    top: 185px;
}
.pic2 {
    position: absolute;
    left: 150px;
    top: 470px;
}
.p1 {
    position: absolute;
    width: 480px;
    text-align: center;
    right: 370px;
    top: 300px;
    font-size: 42px;
    color: black;
}
p {
    font-size: 18px;
    color: rgb(40, 48, 51);
}
button {
    border: none;
    background-color: rgb(226, 14, 85);
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 40px;
}
.myslides {
    display: none;
}
.w3-content w3-display-container {
    position: absolute;
    top: 600px;
}
</style>