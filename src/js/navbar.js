export default function getNavBar(activePage){
    //long way
    let activeHome ="";
    
    let linkHome="./";
  

    
    /*if(activePage=="AddAWord")
    {
        activeAddAWord="active";
        linkAddAWord="#";
    }
    else{
        activeHome="active";
        linkHome="#";
    }*/

    let aqiNavBar="";
    aqiNavBar=`<nav class="navbar navbar-expand-sm color3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> 
        <img src="assets/images/async-porcupine_Page_1.jpg" alt="Logo" class="m-3">  
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link custom-nav-text" href="${linkHome}">Home</a>
          </li>
        </ul>
      </div>
      <span class="justify-content-end m-3 custom-title">Air Quality</span>
    </div>
</nav>`;

    document.getElementById("navbar").innerHTML = aqiNavBar;
    }

    