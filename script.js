const reels = [
  {
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    channelName: "tech_guru",
    isFollowing: false,
    caption: "Latest gadget drops this week! 🔥",
    video: "https://www.pexels.com/download/video/34742807/",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    shareCount: 10
  },
  {
    userProfile: "https://randomuser.me/api/portraits/women/22.jpg",
    channelName: "fit_with_riya",
    isFollowing: true,
    caption: "5-minute full body workout 💪",
    video: "https://www.pexels.com/download/video/34737091/",
    likeCount: 3400,
    isLiked: true,
    commentCount: 112,
    shareCount: 37
  },
  {
    userProfile: "https://randomuser.me/api/portraits/men/33.jpg",
    channelName: "travel_addict",
    isFollowing: false,
    caption: "Sunset vibes at Bali 🌅",
    video: "https://www.pexels.com/download/video/9558748/",
    likeCount: 5400,
    isLiked: false,
    commentCount: 230,
    shareCount: 89
  },
  {
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    channelName: "cook_with_love",
    isFollowing: true,
    caption: "Quick pasta recipe 🍝",
    video: "https://www.pexels.com/download/video/34696325/",
    likeCount: 2200,
    isLiked: true,
    commentCount: 67,
    shareCount: 15
  },
  {
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    channelName: "code_master",
    isFollowing: false,
    caption: "JavaScript trick you should know! ⚡",
    video: "https://www.pexels.com/download/video/34547006/",
    likeCount: 1800,
    isLiked: false,
    commentCount: 58,
    shareCount: 22
  },
  {
    userProfile: "https://randomuser.me/api/portraits/women/66.jpg",
    channelName: "dance_vibes",
    isFollowing: true,
    caption: "New choreography! 💃🔥",
    video: "https://www.pexels.com/download/video/30618925/",
    likeCount: 7600,
    isLiked: true,
    commentCount: 403,
    shareCount: 120
  },
  {
    userProfile: "https://randomuser.me/api/portraits/men/77.jpg",
    channelName: "football_world",
    isFollowing: false,
    caption: "What a goal! 😱⚽",
    video: "https://www.pexels.com/download/video/6077718/",
    likeCount: 9200,
    isLiked: true,
    commentCount: 512,
    shareCount: 200
  },
  {
    userProfile: "https://randomuser.me/api/portraits/women/88.jpg",
    channelName: "art_by_sana",
    isFollowing: false,
    caption: "Layering colours in digital art 🎨",
    video: "https://www.pexels.com/download/video/6866463/",
    likeCount: 3000,
    isLiked: false,
    commentCount: 98,
    shareCount: 40
  },
  {
    userProfile: "https://randomuser.me/api/portraits/men/99.jpg",
    channelName: "music_jamz",
    isFollowing: true,
    caption: "Acoustic vibes only 🎶",
    video: "https://www.pexels.com/download/video/6666361/",
    likeCount: 4100,
    isLiked: true,
    commentCount: 187,
    shareCount: 77
  },
  {
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    channelName: "pet_lovers_club",
    isFollowing: false,
    caption: "Cutest puppy ever 🐶✨",
    video: "https://www.pexels.com/download/video/5877829/",
    likeCount: 8600,
    isLiked: true,
    commentCount: 523,
    shareCount: 150
  }
];

const allReels = document.querySelector(".all-reels")

function addReels(){
    let clutter = ""
    reels.forEach(function (elem, idx){
        clutter += `<div id="${idx}" class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user-info">
                            <img src="${elem.userProfile}" alt="profile">
                            <h4>${elem.channelName}</h4>
                            <button class="flwbtn" type="button">${elem.isFollowing?"Following":"Follow"}</button>
                        </div>
                        <div class="reel-info">
                            <p>${elem.caption}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="like btns">
                            ${(!elem.isLiked)?'<i class="ri-heart-line"></i>':'<i class="ri-heart-fill"></i>'}
                            <h4>${elem.likeCount}</h4>
                        </div>
                        <div class="comment btns">
                            <i class="ri-chat-1-line"></i>
                            <h4>${elem.commentCount}</h4>
                        </div>
                        <div class="share btns">
                            <i class="ri-share-forward-line"></i>
                            <h4>${elem.shareCount}</h4>
                        </div>
                        <div class="more btns">
                            <i class="ri-more-2-fill"></i>
                        </div>
                    </div>
                </div>`
    })

    allReels.innerHTML = clutter

    const reel = document.querySelectorAll(".reel");

    reel.forEach(function(elem){
        elem.addEventListener("click", function(dets){
            let index = dets.currentTarget.id;
            let btn = dets.target.classList[0];
            switch (btn) {
                case "like":
                    reels[index].isLiked ? reels[index].likeCount-- : reels[index].likeCount++;
                    reels[index].isLiked = !reels[index].isLiked;
                    addReels()
                    break;
                case "comment":
                    reels[index].commentCount++;
                    addReels()
                    break;
                case "share":
                    reels[index].shareCount++;
                    addReels()
                    break;
                case "flwbtn":
                    reels[index].isFollowing = !reels[index].isFollowing;
                    addReels()
                    break;
                default:
                    break;
            }
        })
    })
}

addReels();