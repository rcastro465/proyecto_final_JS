'use strict'; //modo estricto

const addToCarBtn = document.querySelectorAll('.btn-compra');


addToCarBtn.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClick);
});

const shoppCartItemContainer = document.querySelector('.carr');

function addToCartClick(event) {

    const button = event.target;
    const item = button.closest('.productos-seccion');

    const itemTitle = item.querySelector('.product-title').textContent;
    const itemPrice = item.querySelector('.price').textContent;
    const itemImage = item.querySelector('.img-menus').src;



    addItemtoCart(itemTitle, itemPrice, itemImage);



}
let QuantityItemadditional = 0;

let unityP = 0;
let unityP2 = 0;
let unityP3 = 0;
let unityP4 = 0;
let unityP5 = 0;
let unityP6 = 0;

function addItemtoCart(itemTitle, itemPrice, itemImage) {
    //cargarLocalStorage();
    let stock1 = document.getElementById("stock1").innerText;
    let stock2 = document.getElementById("stock2").innerText;
    let stock3 = document.getElementById("stock3").innerText;
    let stock4 = document.getElementById("stock4").innerText;
    let stock5 = document.getElementById("stock5").innerText;
    let stock6 = document.getElementById("stock6").innerText;
    let unidades1 = document.getElementById("unityp1").innerText;
    let unidades2 = document.getElementById("unityp2").innerText;
    let unidades3 = document.getElementById("unityp3").innerText;
    let unidades4 = document.getElementById("unityp4").innerText;
    let unidades5 = document.getElementById("unityp5").innerText;
    let unidades6 = document.getElementById("unityp6").innerText;
    let title1=document.getElementById("product1").innerText;
    let title2=document.getElementById("product2").innerText;
    let title3=document.getElementById("product3").innerText;
    let title4=document.getElementById("product4").innerText;
    let title5=document.getElementById("product5").innerText;
    let title6=document.getElementById("product6").innerText;
   

    if (stock1 == 0) {

    }



    if (itemTitle == title1 && unidades1 < 1) {

        if (stock1 == 0) {

            alertSwal();

            return;
        }
        const units = document.getElementById('unityp1');
        unityP = 1;
        units.innerText = unityP;
    }

    if (itemTitle == title2 && unidades2 < 1) {
        if (stock2 == 0) {

            alertSwal();


            return;
        }


        const units2 = document.getElementById('unityp2');
        unityP2 = 1;
        units2.innerText = unityP2;
    }

    if (itemTitle == title3 && unidades3 < 1) {

        if (stock3 == 0) {

            alertSwal();



            return;
        }

        const units3 = document.getElementById('unityp3');
        unityP3 = 1;
        units3.innerText = unityP3;
    }

    if (itemTitle == title4 && unidades4 < 1) {
        if (stock4 == 0) {

            alertSwal();



            return;
        }


        const units4 = document.getElementById('unityp4');
        unityP4 = 1;
        units4.innerText = unityP4;
    }
    if (itemTitle == title5 && unidades5 < 1) {
        if (stock5 == 0) {

            alertSwal();


            return;
        }


        const units5 = document.getElementById('unityp5');
        unityP5 = 1;
        units5.innerText = unityP5;
    }

    if (itemTitle == title6 && unidades6 < 1) {

        if (stock6 == 0) {

            alertSwal();



            return;
        }

        const units6 = document.getElementById('unityp6');
        unityP6 = 1;
        units6.innerText = unityP6;
    }


    QuantityItemadditional++;


    const elementTitle = shoppCartItemContainer.getElementsByClassName('itemTitle');
    const itemQuantity = shoppCartItemContainer.getElementsByClassName('itemQuantity');




    //recorre y  si es el mismo producto lo sumo
    for (let i = 0; i < elementTitle.length; i++) {
        if (elementTitle[i].innerText === itemTitle) {
            let elementQuantity = elementTitle[i].parentElement.parentElement.querySelector('.itemQuantity');
            elementQuantity.value++;

            let stock = 5;
            //-------------------------------
            if (elementTitle[i].innerText == title1) {



                if (unityP >= stock1) {

                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;


                    return true;


                } else {
                    const units = document.getElementById('unityp1');
                    unityP++;
                    units.innerText = unityP;


                }
                const units = document.getElementById('unityp1');
                units.innerText = unityP;


            }


            if (elementTitle[i].innerText == title2) {
                if (unityP2 >= stock2) {

                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;

                    unityP2 = 5;
                    return true;
                } else {
                    unityP2++;

                }
                const units2 = document.getElementById('unityp2');
                units2.innerText = unityP2;

            }

            if (elementTitle[i].innerText == title3) {
                if (unityP3 >= stock3) {
                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;

                    unityP3 = 5;
                    return true;

                } else {
                    unityP3++;

                }
                const units3 = document.getElementById('unityp3');
                units3.innerText = unityP3;

            }

            if (elementTitle[i].innerText == title4) {
                if (unityP4 >= stock4) {
                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;

                    unityP4 = 5;
                    return true;

                } else {
                    unityP4++;

                }
                const units4 = document.getElementById('unityp4');
                units4.innerText = unityP4;

            }

            if (elementTitle[i].innerText == title5) {
                if (unityP5 >= stock5) {
                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;

                    unityP5 = 5;
                    return true;

                } else {
                    unityP5++;

                }
                const units5 = document.getElementById('unityp5');
                units5.innerText = unityP5;

            }

            if (elementTitle[i].innerText == title6) {
                if (unityP6 >= stock6) {
                    alertSwal();

                    elementQuantity.value--;
                    QuantityItemadditional--;

                    unityP6 = 5;
                    return true;

                } else {
                    unityP6++;

                }
                const units6 = document.getElementById('unityp6');
                units6.innerText = unityP6;

            }



            if (elementQuantity.value > stock) {
                unityP++;
                unityP2++;
                elementQuantity.value--;
                QuantityItemadditional--;

       

                alertSwal();


                unityP--;
                unityP2--;
                return;

            } else {




            }




            updateShopCartTotal(); //actualizo el total
            swal({
                title: "Producto adicional agregado",
                text: "Se añadio el mismo producto al carro de compras",
                icon: "success",
                timer: 1000,
                buttons: false
            });


            return;




        }
    }


    const shopCartRow = document.createElement('div');
    shopCartRow.className = "aClassName";
    shopCartRow.id = "aClassName";
    const shopCartContent = `
<div class="shoppingCartItem" id="shoppingCartItem">
<div class="imgItem">
         <img  src=${itemImage} class="carr-image">

         

         </div>
         <div class="info-title">
         <p class="itemTitle">${itemTitle}</p>
         <p class="itemPrice">${itemPrice}</p>
         <input class="itemQuantity" type=number value=1 readonly max="5">
       <button type="button" class="btnDeleteItem">X</button>
         </div>

         </div>
         

`;

    localStorage.setItem("carrito", shopCartContent);
    


    shopCartRow.innerHTML = shopCartContent
    shoppCartItemContainer.append(shopCartRow);


    //actualiza el total
    updateShopCartTotal();
    visibleButton();
}

let extra = 350;

function updateShopCartTotal() {

    let total = 0;
    let envio = 1500;

    const shopCartTotal = document.querySelector('.shopCartTotal');
    const shopCartItems = document.querySelectorAll('.shoppingCartItem');
    const shipping = document.querySelector('.shippingCart');
    const shippingTotals = document.querySelector('.shippingTotals');
    const quantity = document.querySelector('.quantityCart');



    shopCartItems.forEach(shoppingCartItem => {
        const shopCartItemPriceElement = shoppingCartItem.querySelector('.itemPrice');

        const shopCartItemPrice = Number(shopCartItemPriceElement.textContent.replace('$', ''));

        const shopCartItemQuantity = shoppingCartItem.querySelector('.itemQuantity');

        const itemQuantity2 = Number(shopCartItemQuantity.value);


        if (QuantityItemadditional > 0) {
            let additionalItem = (QuantityItemadditional) * extra;

            total = total + (shopCartItemPrice) * itemQuantity2;
        } else {
            QuantityItemadditional = 0;
            total = total + shopCartItemPrice * itemQuantity2;

        }


    });




    if (total == 0) {
        envio = 0;
        let totalShipping = 0;
        let additionalItem = 0;
       
        QuantityItemadditional = 0;
    }


    let additionalItem = (QuantityItemadditional) * extra;
    let totalShipping = additionalItem + envio;

    let finalTotals = total + totalShipping;

    shopCartTotal.innerHTML = `$${total}`;
    localStorage.setItem("total", total);
    shipping.innerHTML = `$${totalShipping}`;
    localStorage.setItem("envio", totalShipping);
    quantity.innerHTML = `${QuantityItemadditional}`;
    localStorage.setItem("cantidad", QuantityItemadditional);
    shippingTotals.innerHTML = `$${finalTotals}`;
    localStorage.setItem("final total", finalTotals);

    localStorage.setItem("unidad1", unityp1.innerText);
    localStorage.setItem("unidad2", unityp2.innerText);
    localStorage.setItem("unidad3", unityp3.innerText);
    localStorage.setItem("unidad4", unityp4.innerText);
    localStorage.setItem("unidad5", unityp5.innerText);
    localStorage.setItem("unidad6", unityp6.innerText);

    localStorage.setItem("stock1", stock1.innerText);
    localStorage.setItem("stock2", stock2.innerText);
    localStorage.setItem("stock3", stock3.innerText);
    localStorage.setItem("stock4", stock4.innerText);
    localStorage.setItem("stock5", stock5.innerText);
    localStorage.setItem("stock6", stock6.innerText);



}


function visibleButton() {
    const element = document.getElementById("btnComprarId");
    element.classList.add("btnComprarVisible");


}




function ValidateLogin() {

    if (document.form.login.value == "12345" && document.form.password.value == "12345") {


        swal({
            title: "Acceso correcto",
            text: "Bienvenido: Eduardo Bacon",
            icon: "success",
            timer: 2500,
            buttons: false
        });

        document.getElementById("UserLogin").classList.remove("UserLogin");
        document.getElementById("UserLogin").classList.add("UserLoginVisible");
        document.getElementById("loginModals").classList.add("LoginModalHidden");



        LogIn = true;

    



    } else {
        swal({
            title: "Acceso Denegado",
            text: "Usuario o contraseña incorrecto",
            icon: "warning",
            timer: 1500,
            buttons: false
        });
        LogIn = false;
    }
}

let LogIn = false;

function toBuy() {



    if (LogIn == true) {

        const quantityitems = document.getElementById("quantityCart").innerText;
        if (quantityitems == 0) {
            swal({
                title: "No hay productos en el carrito de compras",
                text: "Debe agregar productos antes de comprar",
                icon: "warning",
                timer: 2200,
                buttons: false
            });
            return;
        }

        document.getElementById("loading-overlay").classList.remove("loading-overlay-hide");
        document.getElementById("loading-message").classList.remove("loading-message-hide");
        document.getElementById("loading-overlay").classList.add("loading-overlay");
        document.getElementById("loading-message").classList.add("loading-message");

        setTimeout(CalculateStock, 3000);




    } else {
        swal({
            title: "Ingrese usuario y password",
            text: "Inicia sesión para poder gestionar el pedido",
            icon: "info",
            timer: 2500,
            buttons: false
        });
    }

}


function CalculateStock() {

    document.getElementById("loading-overlay").classList.remove("loading-overlay");
    document.getElementById("loading-message").classList.remove("loading-message");
    document.getElementById("loading-overlay").classList.add("loading-overlay-hide");
    document.getElementById("loading-message").classList.add("loading-message-hide");

    let stock1 = document.getElementById("stock1");
    let stock2 = document.getElementById("stock2");
    let stock3 = document.getElementById("stock3");
    let stock4 = document.getElementById("stock4");
    let stock5 = document.getElementById("stock5");
    let stock6 = document.getElementById("stock6");

    let stockF1 = (stock1.innerText - unityp1.innerText);
   
    let stockF2 = (stock2.innerText - unityp2.innerText);
    let stockF3 = (stock3.innerText - unityp3.innerText);
    let stockF4 = (stock4.innerText - unityp4.innerText);
    let stockF5 = (stock5.innerText - unityp5.innerText);
    let stockF6 = (stock6.innerText - unityp6.innerText);
 
    stock1.innerText = stockF1;
    stock2.innerText = stockF2;
    stock3.innerText = stockF3;
    stock4.innerText = stockF4;
    stock5.innerText = stockF5;
    stock6.innerText = stockF6;



    //elimino el carro de compra
    try {
        let i = 0;
        for (i = 0; i < 7; i++) {
            let nodo = document.getElementById("aClassName");

            nodo.parentNode.removeChild(nodo);
        }
    } catch (error) {

    }



    updateShopCartTotal();
    resetunity();

    swal("Gracias por su compra!", "Estamos preparando su pedido...", "success");

}

function Logout() {
    LogIn = false;
    document.getElementById("UserLogin").classList.remove("UserLoginVisible");
    document.getElementById("UserLogin").classList.add("UserLogin");
    document.getElementById("loginModals").classList.remove("LoginModalHidden");
    document.form.login.value == "";
    document.form.password.value == ""
    
}


function resetItem() {
    let stock1 = document.getElementById("stock1");
    let stock2 = document.getElementById("stock2");
    let stock3 = document.getElementById("stock3");
    let stock4 = document.getElementById("stock4");
    let stock5 = document.getElementById("stock5");
    let stock6 = document.getElementById("stock6");
    localStorage.clear();
   
    let stockreset = 5;
    let unity = 0;

    stock1.innerText = stockreset;
    stock2.innerText = stockreset;
    stock3.innerText = stockreset;
    stock4.innerText = stockreset;
    stock5.innerText = stockreset;
    stock6.innerText = stockreset;
   
    resetunity();


    try {
        let i = 0;
        for (i = 0; i < 7; i++) {
            let nodo = document.getElementById("aClassName");

            nodo.parentNode.removeChild(nodo);
        }
    } catch (error) {

    }

    updateShopCartTotal();

}

function resetunity() {
    let unityP = 0;
    let unityP1 = 0;
    let unityP2 = 0;
    let unityP3 = 0;
    let unityP4 = 0;
    let unityP5 = 0;
    let unityP6 = 0;
  
    unityp1.innerText = 0;
    unityp2.innerText = 0;
    unityp3.innerText = 0;
    unityp4.innerText = 0;
    unityp5.innerText = 0;
    unityp6.innerText = 0;
}

function alertSwal() {
    swal({
        title: "No puede agregar más productos",
        text: "Stock insuficiente",
        icon: "warning",
        timer: 2000,
        buttons: false
    });
}

function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (localStorage.getItem('final total') !== null) {
        // Carga la información
        //  carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        // alert("hay datitos uwu");
        let total1 = document.getElementById("shopCartTotal");
        let peticion = localStorage.getItem("total");
        total1.innerText = peticion;

        let envio1 = document.getElementById("shippingCart");
        let envio2 = localStorage.getItem("envio");
        envio1.innerText = envio2;


        let cantidad1 = document.getElementById("quantityCart");
        let cantidad2 = localStorage.getItem("cantidad");
        cantidad1.innerText = cantidad2;


        let totalfinal1 = document.getElementById("shippingTotals");
        let totalfinal2 = localStorage.getItem("final total");
        totalfinal1.innerText = totalfinal2;

        let unidad1 = document.getElementById("unityp1");
        let unidad2 = document.getElementById("unityp2");
        let unidad3 = document.getElementById("unityp3");
        let unidad4 = document.getElementById("unityp4");
        let unidad5 = document.getElementById("unityp5");
        let unidad6 = document.getElementById("unityp6");

        let un1 = localStorage.getItem("unidad1");
        let un2 = localStorage.getItem("unidad2");
        let un3 = localStorage.getItem("unidad3");
        let un4 = localStorage.getItem("unidad4");
        let un5 = localStorage.getItem("unidad5");
        let un6 = localStorage.getItem("unidad6");

        unidad1.innerText = un1;
        unidad2.innerText = un2;
        unidad3.innerText = un3;
        unidad4.innerText = un4;
        unidad5.innerText = un5;
        unidad6.innerText = un6;

        let st1 = localStorage.getItem("stock1");
        let st2 = localStorage.getItem("stock2");
        let st3 = localStorage.getItem("stock3");
        let st4 = localStorage.getItem("stock4");
        let st5 = localStorage.getItem("stock5");
        let st6 = localStorage.getItem("stock6");
     
       
        stock1.innerText = st1;
        stock2.innerText = st2;
        stock3.innerText = st3;
        stock4.innerText = st4;
        stock5.innerText = st5;
        stock6.innerText = st6;

        let carrito2 = localStorage.getItem("carrito");
        const shopCartRow = document.createElement('div');
    shopCartRow.className = "aClassName";
    shopCartRow.id = "aClassName";
    const shopCartContent = carrito2;
   // alert(carrito2)
    shopCartRow.innerHTML = shopCartContent
    shoppCartItemContainer.append(shopCartRow);



    } else {
        // alert("No hay datos en el local storage")
    }
}



 //cargarCarritoDeLocalStorage ();