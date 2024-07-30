
        function checknum(){
            let pan_number=document.getElementById("pan-number").value;
        
            let pan_pattern=/[A-Z]{5}[0-9]{4}[A-Z]{1}$/
            if(!pan_pattern.test(pan_number) || pan_number.length!=10){
                alert("Invalid PAN Number")
            }else{
                alert("Valid PAN Number")
        }
    }

