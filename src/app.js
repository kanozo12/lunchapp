import {ipcRenderer} from 'electron';

window.addEventListener("load", ()=>{
    let btn = document.querySelector("#load");
    let target = document.querySelector("#list");
    
    btn.addEventListener("click", ()=>{
        console.log(btn);
        let list = ipcRenderer.sendSync("loadData");
        console.log(list);
        list.forEach( x => {
            let li = document.createElement("li");
            li.innerHTML = x;
            target.appendChild(li);
        });
    });
});

//일렉트론을 사용한 데스크탑 어플리케이션 개발
//실제 사용가능한 수준의 어플리케이션