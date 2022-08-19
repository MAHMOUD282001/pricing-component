let slider = document.querySelector(".slider");

let pageViews = document.querySelector(".page-views");

let pageViewsValue = document.querySelector(".page-views-value");

let yearMonthCheckbox = document.querySelector(".year-month-active")




yearMonthCheckbox.addEventListener("click", ()=>{
    
    yearMonthCheckbox.classList.toggle("active")
    
})
    
    
    setTimeout(()=>{
        slider.onchange = function (){
    
            if(!yearMonthCheckbox.classList.contains("active")){
                if(slider.value == 2){
                    pageViews.innerHTML = "10K Pageviews";
                    
                    pageViewsValue.innerHTML = "$8"
                }
                
                else if(slider.value == 4){
                    pageViews.innerHTML = "50K Pageviews"
                    
                    pageViewsValue.innerHTML = "$12"
                    
                }
                
                else if(slider.value == 6){
                    pageViews.innerHTML = "100K Pageviews"
                    
                    pageViewsValue.innerHTML = "$16"
                    
                }
                
                else if(slider.value == 8){
                    pageViews.innerHTML = "500K Pageviews"
                    
                    pageViewsValue.innerHTML = "$24"
                    
                }
                
                else if(slider.value == 10){
                    pageViews.innerHTML = "1M Pageviews"
                    
                    pageViewsValue.innerHTML = "$36"
                    
                }
            }
        
            else if(yearMonthCheckbox.classList.contains("active")){
                    if(slider.value == 2){
                        pageViews.innerHTML = "10K Pageviews";
                        
                        pageViewsValue.innerHTML = `$ ${(8 * 75)/100}`
                    }
                    
                    else if(slider.value == 4){
                        pageViews.innerHTML = "50K Pageviews"
                        
                        pageViewsValue.innerHTML = `$ ${(12 * 75)/100}`
                        
                    }
                    
                    else if(slider.value == 6){
                        pageViews.innerHTML = "100K Pageviews"
                        
                        pageViewsValue.innerHTML = `$ ${(16 * 75)/100}`
                        
                    }
                    
                    else if(slider.value == 8){
                        pageViews.innerHTML = "500K Pageviews"
                        
                        pageViewsValue.innerHTML = `$ ${(24 * 75)/100}`
                        
                    }
                    
                    else if(slider.value == 10){
                        pageViews.innerHTML = "1M Pageviews"
                        
                        pageViewsValue.innerHTML = `$ ${(36 * 75)/100}`
                        
                    }
                }
            }
    },100)

    



