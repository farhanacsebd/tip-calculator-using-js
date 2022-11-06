document.getElementById('btn').addEventListener('click',function(){
    
    let totalAmount = document.getElementById('total-amount').value; 
    let service = document.getElementById('service').value; 
    let totalPeople = document.getElementById('total-people').value; 

    if(totalAmount <= 0){
        alert('Please enter value')
        return;
    }

    else if(totalPeople <= 0){
        alert('Please enter value')
        return;
    }

    else if(totalAmount === "" && service === 0 && totalPeople <= 0){
        alert('Please enter value')
        return;
    }

    let total = (totalAmount * service) / totalPeople;
    total = total.toFixed(2)
    
    document.getElementById('per-tip').innerHTML = total;
})