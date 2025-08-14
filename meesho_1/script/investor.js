
  function playVideo(name) {
    let videoUrl = '';

    // Naam ke hisaab se video URL set karo
    if (name === 'Sanju Sharma') {
      iframeUrl = "/investor-web/_next/videos/home_tile_1_video_1.mp4"; 
    } else if (name === 'Yashwanth') {
      iframeUrl = 'src="/investor-web/_next/videos/home_tile_1_video_2.mp4'; 
    }

    // Jis card pe click hua usko dhoondo
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (card.onclick.toString().includes(name)) {
        card.innerHTML = `
          <iframe width="100%" controls autoplay>
            <source src="${iframeUrl}" type="video/mp4">
           
          </iframe>
        `;
      }
    });
  }
// second-video-section
function playVideo(name) {
  let iframeUrl = "";

  
  if (name === "Sanju Sharma") {
    iframeUrl = "/investor-web/_next/videos/home_tile_2_video_1.mp4"; 
  } else if (name === "Yashwanth") {
    iframeUrl = "/investor-web/_next/videos/home_tile_2_video_2.mp4";
  }

  
  const cards = document.querySelectorAll(".card-second");
  cards.forEach((card) => {
    const overlayText =
      card.querySelector(".overlay, .overlay-second")?.textContent || "";
    if (overlayText.includes(name)) {
      card.innerHTML = `
          <iframe width="100%" height="100%" src="${iframeUrl}" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
        `;
    }
  });
}