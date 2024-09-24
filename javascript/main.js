
document.getElementById('donate-now-btn')
    .addEventListener("click", function(){     
        document.getElementById('donation-section').classList.remove("hidden");
        document.getElementById('history-section').classList.add("hidden");
        
        document.getElementById('donate-now-btn').classList.add("bg-[#B4F461]");
        document.getElementById('donate-now-btn').classList.remove("boarder");

        document.getElementById('history-btn').classList.add("border-solid");
        document.getElementById('history-btn').classList.add("border");
        document.getElementById('history-btn').classList.remove("bg-[#B4F461]");
    });

document.getElementById('history-btn')
    .addEventListener("click", function(){  
        document.getElementById('history-section').classList.remove("hidden");
        document.getElementById('donation-section').classList.add("hidden");

        document.getElementById('history-btn').classList.add("bg-[#B4F461]");
        document.getElementById('history-btn').classList.remove("boarder");

        document.getElementById('donate-now-btn').classList.add("border-solid");
        document.getElementById('donate-now-btn').classList.add("border");
        document.getElementById('donate-now-btn').classList.remove("bg-[#B4F461]");

    });

document.getElementById("donatenow-noa")
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log("Donate for Nowakhali button clicked");

        const noaDonate = document.getElementById('input-amount-noakhali').value;
        const totalBalance = document.getElementById("totalbalance").innerHTML;
        const currentBalance = parseFloat(totalBalance);
        
        if(noaDonate >= 0 && currentBalance > noaDonate){
            const noaDonation = parseFloat(noaDonate);
            const newBalance = currentBalance - noaDonate;

            const totalDonation = document.getElementById("total-donation-for-noa").innerText;
            const ttlDonation = parseFloat(totalDonation);
            const totalDonated = ttlDonation + noaDonation;

            onclick = my_modal_1.showModal();

            document.getElementById("totalbalance").innerText =  newBalance;
            document.getElementById("total-donation-for-noa").innerText =  totalDonated;

        }
        else{
            alert("Unable to Donate");
        }
    });

document.getElementById("donatenow-feni")
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log("Donate for Feni button clicked");

        const feniDonate = document.getElementById('input-amount-feni').value;
        const totalBalance = document.getElementById("totalbalance").innerHTML;
        const currentBalance = parseFloat(totalBalance);
        
        if(feniDonate >= 0 && currentBalance > feniDonate){
            const feniDonation = parseFloat(feniDonate);
            const newBalance = currentBalance - feniDonate;

            const totalDonation = document.getElementById("total-donation-for-feni").innerText;
            const ttlDonation = parseFloat(totalDonation);
            const totalDonated = ttlDonation + feniDonation;

            onclick = my_modal_1.showModal();

            document.getElementById("totalbalance").innerText =  newBalance;
            document.getElementById("total-donation-for-feni").innerText =  totalDonated;

        }
        else{
            alert("Unable to Donate");
        }
    });

document.getElementById("donatenow-q")
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log("Donate for q button clicked");

        const qDonate = document.getElementById('input-amount-q').value;
        const totalBalance = document.getElementById("totalbalance").innerHTML;
        const currentBalance = parseFloat(totalBalance);
        
        if(qDonate >= 0 && currentBalance > qDonate){
            const qDonation = parseFloat(qDonate);
            const newBalance = currentBalance - qDonate;

            const totalDonation = document.getElementById("total-donation-for-q").innerText;
            const ttlDonation = parseFloat(totalDonation);
            const totalDonated = ttlDonation + qDonation;
            
            onclick = my_modal_1.showModal();

            document.getElementById("totalbalance").innerText =  newBalance;
            document.getElementById("total-donation-for-q").innerText =  totalDonated;

        }
        else{
            alert("Unable to Donate");
        }
    });
