let navbarElements = document.querySelector("#navbarElemnts");
let putMEHEre = document.querySelector("#putMEHEre");
let loader = "<div class='flex flex-row items-center justify-center'><img class='w-[270px] h-[auto]' src='./assets/images/Rolling@1x-1.0s-200px-200px.svg'></div>"; 

const getAPI = () => {
    let URL = `https://all-api.bitcode.az/api/news/category`;
    putMEHEre.innerHTML = loader;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                putMEHEre.innerHTML = UiNavbar(data);
            } else {
                console.error('No data received from the API');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
};
getAPI();

const UiNavbar = (data) => {
    return `
        <div class="w-[260px] h-[900px] gap-[10px] flex flex-col" style="border: 2px solid red;" id="navbarElements">
            <a href="./Main.html"><button class="cursor-pointer"><div class="flex flex-row items-center p-[16px]"><img src="./assets/images/Group 2 1.svg" class="ml-[12px]" alt="logo"><span class="ml-[15px]">Aster 
            News</span></div></button></a>
            
            <button class="cursor-pointer"><div class="flex flex-row items-center bg-[#2F9FF81A] rounded-r-[37px] w-[243px] h-[50px] p-[16px]"><div class="w-[6px] h-[6px] rounded-[50%] bg-[#2F9FF8] mr-[12px]"></div><img src="./assets/images/Vector (3).svg" alt="home"><span class="text-[15px] font-bold leading-[17.58px] text-left text-[#2F9FF8] ml-[15px]">${data[0].name}</span></div></button>


            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/globe.svg" class="ml-[16px]" alt="globe"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[1].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/briefcase.svg" class="ml-[16px]" alt="case"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[2].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/activity.svg" class="ml-[16px]" alt="activity"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[3].name}</span></div></button>
            <div class="w-[243px] h-[0px] opacity-[20%]" style="border: 0.2px solid #072D4B"></div>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]" ><img src="./assets/images/shield.svg" class="ml-[16px]" alt="shield"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[4].name}</span></div></button>
            <div class="w-[243px] h-[0px] opacity-[20%]" style="border: 0.2px solid #072D4B"></div>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/play-circle.svg" class="ml-[16px]" alt="play"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[5].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/award.svg" class="ml-[16px]" alt="award"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[6].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/message-circle.svg" class="ml-[16px]" alt="message"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[7].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/bell.svg" class="ml-[16px]" alt="bell"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[8].name}</span></div></button>
            <button class="cursor-pointer"><div class="flex flex-row items-center w-[243px] h-[50px] p-[16px]"><img src="./assets/images/settings.svg" class="ml-[16px]" alt="settings"><span class="text-[15px] font-normal leading-[17.58px] text-left text-[#072D4B] ml-[15px]">${data[9].name}</span></div></button>
            <div class="flex flex-col bg-[#2F9FF8] text-[#FFFFFF] w-[227px] h-[113px] items-center justify-center gap-[15px] ml-[16px]" style="border-radius: 4px 4px 4px 4px; margin-top: calc(900px - 810px);">
                <div class="flex flex-row items-center gap-[15px]"><img src="./assets/images/gift.svg" alt="gift"><span class="text-[15px] font-normal leading-[17.58px] text-left">Subscribe to Premium</span></div>
                <div class="flex flex-row items-center gap-[15px]"><h3 class="text-[30px] font-bold leading-[35.16px] text-left">$8/m</h3><button class="bg-[#0768B5] w-[110px] h-[38px]" style="border-radius: 4px 4px 4px 4px;">Upgrade</button></div>
            </div>
        </div>
    `;
};

let newsCardHere = document.querySelector("#newsCardHere");


const getAPINews = () => {
    let URL = `https://all-api.bitcode.az/api/news`;
    newsCardHere.innerHTML = loader;
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // alert(data.data.length);
            if (data.data && data.data.length > 0) {
                newsCardHere.innerHTML = data.data.map(news => cardIU(news)).join('');
            } else {
                newsCardHere.innerHTML = 'No news available at the moment.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
};
getAPINews();

const cardIU = (news) => {
    return `
            <div class="w-[376px] h-[191px] bg-[#FFFFFF] flex justify-center flex-col" style="border-style: solid; border-color: #000000; border-radius: 4px; box-shadow: 0px 2px 20px 0px #0000000A;">
                <div class="flex flex-row items-center justify-center relative">
                    <a class="absolute w-[100%] h-[100%]" href="./index.html"></a>
                    <div class="flex flex-col justify-center items-center">
                        <h3 class="text-[17px] font-medium leading-6 text-left text-[#072D4B]">${news.title}</h3>
                        <p class="text-[14px] font-normal leading-[22px] text-left text-[#072D4B] mt-[10px]" style="opacity: 80%;">${news.description}</p>
                    </div>
                    <div class="w-[400px] h-[auto] flex items-center justify-center">
                        <img class="w-[400px] h-[auto] object-cover" src="${news.photo}" style="border-radius: 4px 4px 4px 4px;" alt="${news.category.slug}">
                    </div>
                </div>
                <div class="flex flex-row justify-around items-center mt-[15px]">
                    <span class="text-[12px] font-normal leading-[22px] text-left text-[#072D4B]" style="opacity: 80%;">${news.category.name}</span>
                    <div class="w-[2.03px] h-[2px] bg-[#2F9FF8]" style="border-radius: 50%;"></div>
                    <span class="text-[12px] font-normal leading-[22px] text-left text-[#072D4B]" style="opacity: 80%;">42 mins ago</span>
                    <button class="flex flex-row gap-[10px] items-center text-[12px] font-normal leading-[22px] text-left text-[#0768B5]"><img src="./assets/images/share.svg" alt="share">Share</button>
                    <button class="flex flex-row gap-[10px] items-center text-[12px] font-normal leading-[22px] text-left text-[#0768B5]"><img src="./assets/images/pocket.svg" alt="read">Read Later</button>
                </div>
            </div>

            
        
    `;
}


let clickComment = document.querySelector("#clickComment");
let hideComment = document.querySelector("#hideComment");
let roundBlueArrow = document.querySelector("#roundBlueArrow");

$(document).ready(function() {
    let isRotated = false;
    hideComment.style.display = "none";
    $("#clickComment").on("click", function() {
        if (isRotated) {
            document.getElementById("roundBlueArrow").style.transform = "rotate(0deg)";
        } else {
            document.getElementById("roundBlueArrow").style.transform = "rotate(180deg)";
        }
        isRotated = !isRotated;
        $("#hideComment").toggle("slow");
    });
});



// let addCOmment = document.querySelector("#addCOmment");
// let textArea = document.querySelector("#textArea");


// addCOmment.addEventListener("click", () => {
//     const textValue = textArea.value;
//     hideComment.innerHTML = UIcomment(textValue);
// });

// const UIcomment = (text) => {
//     return `
//         <div>
//             <p>${text}</p>
//         </div>
//     `;
// };
