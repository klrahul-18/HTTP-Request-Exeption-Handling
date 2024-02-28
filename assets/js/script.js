window.onload = async function () {
  //Exeption Handling
  try {
    var product = document.getElementById('product');
    var spinner = document.getElementById('spinner');
    let res = await fetch(`https://fakestoreapi.com/products`, { method: 'GET' });
    //console.log(res.json());
    let data = await res.json();
    //console.log(data);
    // for (let i = 0; i < data.length; i++){
    //console.log(data[i])
    // }
    // for (let data of data) {
    //   console.log(data.title);
    // }
    data.map((item, index) => {
      //console.log(item, key = index);
      let pcard = `<div class="col-md-3 mt-3">
        <div class="card animate_animated animate_fadeIn">
        <img src="${item.image}" class="card-img-top img-fluid">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text">${item.price}</p>
            <p class="card-text">${item.category}
            </p>
             <a href="#" class="btn btn-primary">BUY NOW</a>           
            <a href="#" class="btn btn-secondary">ADD TO CART</a>
          </div>
         </div>
        </div>`
      product.innerHTML += pcard;
      spinner.style.display = "none";
    })
  }
  catch (err) {
    console.log(err.msg);
  }
  finally {

  }
}