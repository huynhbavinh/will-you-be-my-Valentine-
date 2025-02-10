// (async function checkForUpdates() {
//     const currentVersion = "1.0";
//     const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

//     try {
//         const response = await fetch(versionUrl);
//         if (!response.ok) {
//             console.warn("Could not fetch version information.");
//             return;
//         }
//         const data = await response.json();
//         const latestVersion = data.version;
//         const updateMessage = data.updateMessage;

//         if (currentVersion !== latestVersion) {
//             alert(updateMessage);
//         } else {
//             console.log("You are using the latest version.");
//         }
//     } catch (error) {
//         console.error("Error checking for updates:", error);
//     }
// })();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Bạn có chắc không?",
    "Thật sự chắc chứ??",
    "Bạn nghĩ kỹ chưa?",
    "Nghĩ lại lần nữa đi mà...",
    "Làm ơn đi màaa...",
    "Nếu bạn từ chối, mình sẽ buồn lắm đó...",
    "Mình sẽ rất buồn đó...",
    "Mình sẽ buồn lắm lắm luôn đó...",
    "Thề luôn, mình sắp khóc rồi nè 😢",
    "Bạn nỡ lòng nào từ chối mình sao?",
    "Bạn có nghĩ đến cảm xúc của mình không? 😭",
    "Nếu bạn nói không, trái tim mình sẽ tan vỡ...",
    "Bạn muốn thấy mình đau khổ sao???",
    "Ok được rồi, mình sẽ không hỏi nữa...",
    "Đùa thôi, đồng ý đi màaaa! ❤️",
    "Một lần cuối thôi, làm ơn điiii! 🥺",
    "Bạn có biết mình đã chờ câu trả lời này lâu lắm rồi không?",
    "Bạn làm vậy là không được đâu nha 😤",
    "Nếu bạn đồng ý, mình sẽ vui lắm luôn á! 🎉",
    "Đồng ý đi rồi mình tặng bạn trà sữa! 🧋",
    "Mình biết bạn muốn nói có mà, đừng giấu nữa! 😉",
    "Bạn mà không đồng ý là mình giận luôn á 😡",
    "Thôi kệ... mà không, nghĩ lại đi! 😆"
];
(async function start() {
    document.addEventListener("DOMContentLoaded", () => {
        // Tạo iframe nhúng SoundCloud
        const iframe = document.createElement("iframe");
        iframe.style.display = "none"; // Ẩn iframe
        iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1988571611&auto_play=true";
        iframe.width = "100%";
        iframe.height = "300";
        iframe.scrolling = "no";
        iframe.frameBorder = "no";
        iframe.allow = "autoplay";

        document.body.appendChild(iframe);

        // Khi iframe load xong, chỉnh âm lượng
        const widget = SC.Widget(iframe); // Khởi tạo API SoundCloud
        widget.bind(SC.Widget.Events.READY, function () {
            widget.setVolume(10); // 🔊 Giảm âm lượng (0 - 100)
            widget.seekTo(16000)
        });
        const noButton = document.querySelector('.no-button');
        const yesButton = document.querySelector('.yes-button');
        addEventPlayMusic(noButton, widget);
        addEventPlayMusic(yesButton, widget);
    });
})();

function addEventPlayMusic(btn,widget) {
    btn.addEventListener("click", () => {
        widget.isPaused((paused) => {
            if (!paused) return;
            widget.play(); // Bắt đầu phát nhạc
        });
    });
}

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
