

    
   
    
    //*****************************************************
    //Shopping Cart functions
    
    var shoppingCart_object = {};
    shoppingCart_object.cart = [];
    shoppingCart_object.Item = function(name,price){
        this.name = name
        this.price = price
        
    };
    shoppingCart_object.addItemToCart = function(name,price){
        for(var i in shoppingCart_object.cart){
            if(shoppingCart_object.cart[i].name === name) { 
                
                shoppingCart_object.saveCart();
                return;
            } else if((shoppingCart_object.cart[i].name).indexOf("Dom") >-1 && name.indexOf("Dom")>-1){//if there is                                                                           already smth in car with Dom it not gonna add..
                shoppingCart_object.saveCart();
                return;
            } else if((shoppingCart_object.cart[i].name).indexOf("Disp") >-1 && name.indexOf("Disp")>-1){//if there is                                                                           already smth in car with Disp it not gonna add..
                shoppingCart_object.saveCart();
                return;
            }else if((shoppingCart_object.cart[i].name).indexOf("Inter") >-1 && name.indexOf("Inter")>-1){//if there is                                                                           already smth in car with Inter it not gonna add..
                shoppingCart_object.saveCart();
                return;
            }
        }
        var item = new shoppingCart_object.Item(name,price);
        
        
        shoppingCart_object.cart.push(item);
        shoppingCart_object.saveCart();
    };
    
    shoppingCart_object.removeItemFromCartAll = function(name){
        for(var i in shoppingCart_object.cart){
            if(shoppingCart_object.cart[i].name===name){
                shoppingCart_object.cart.splice(i,1);
                break;
            }
        }
        shoppingCart_object.saveCart();
    };
    shoppingCart_object.clearCart = function(){
        shoppingCart_object.cart =[];
        shoppingCart_object.saveCart();
    };
    
    shoppingCart_object.totalCart = function(){
        var totalCost = 0;
        for(var i in shoppingCart_object.cart){
            totalCost += shoppingCart_object.cart[i].price;
        }
        return totalCost.toFixed(2);
    };
    shoppingCart_object.listCart = function(){
        var cartCopy = [];
        for(var i in shoppingCart_object.cart){
            var item = shoppingCart_object.cart[i];
            var itemCopy = {};
            for(var p in item){
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };
    shoppingCart_object.saveCart = function(){
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart_object.cart));
    };
    shoppingCart_object.loadCart = function(){
        shoppingCart_object.cart = JSON.parse(localStorage.getItem("shoppingCart"));
    };
    
    
    //*****************************************************************
    
   
    
    
    
    
    
    
    
    
    
    
    
     

