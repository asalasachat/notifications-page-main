//event listener on mark as read button
const marButton=document.querySelector("#mar-button");
marButton.addEventListener('click', function(){
    const listunread=document.querySelectorAll(".unread");
    if(listunread.length>0){
        let nbrNotif=document.querySelector(".notifications-number");
        console.log(nbrNotif);
        nbrNotif.innerText="0";
        for (let i=0;i<=listunread.length;i++){
            listunread[i].classList.remove("unread");
        }
    }
});