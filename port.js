
/* port.js */
document.getElementById('drop1').addEventListener('click', function() {
  var line = document.createElement('div');
  line.classList.add('verticalLine');
  document.body.appendChild(line);

  var drop1 = document.getElementById('drop1');
  var drop3 = document.getElementById('drop3');

  // Function to set the position and length of the line
  function updateLinePosition() {
      var drop1Rect = drop1.getBoundingClientRect();
      var drop3Rect = drop3.getBoundingClientRect();

      // Calculate the center position of `drop1` and set the position of the line
      line.style.left = drop1Rect.left + (drop1Rect.width / 2) + 'px';

      // Set the starting point (top) of the line
      line.style.top = '72%';

      // Set the length (height) of the line to a very large fixed value
      line.style.height = '10000px';
  }

  // Set the initial position and length of the line
  updateLinePosition();

  // Update the position of the line whenever the screen size changes
  window.addEventListener('resize', updateLinePosition);

  line.style.animation = 'drawVerticalLine 1.5s forwards';

  // Other animation stop and apply code
  document.querySelector('.text-wraper').style.animationDuration = "0s";
  document.querySelector('.text-wraper2').style.animationDuration = "0s";
  
  document.querySelector('.background').style.animation = 'expandWidthLeft 1s forwards'; 
  document.querySelector('.background2').style.animation = 'expandWidthRight 1s forwards';

  // Pause move-rtl animation
  var elements = document.querySelectorAll('.scrollttx');
  elements.forEach(function(element) {
      element.style.animationPlayState = 'paused';
  });

  var elements = document.querySelectorAll('.scrollttx2');
  elements.forEach(function(element) {
      element.style.animationPlayState = 'paused';
  });
});



/* port.js */
document.addEventListener('DOMContentLoaded', function() {
    const articalHovers = document.querySelectorAll('.artical_hover');
    
    articalHovers.forEach(function(articalHover) {
        // 각 .artical_hover 요소 안에서 .view_text를 찾습니다.
        const viewText = articalHover.querySelector('.view_text');

        articalHover.addEventListener('mousemove', function(e) {
            // 마우스 커서 위치에 따라 '.view_text' 텍스트 위치 업데이트
            const x = e.clientX - articalHover.getBoundingClientRect().left;
            const y = e.clientY - articalHover.getBoundingClientRect().top;
            viewText.style.left = x + 'px';
            viewText.style.top = y + 'px';
            viewText.style.visibility = 'visible'; // 텍스트 보이게 함
        });

        articalHover.addEventListener('mouseenter', function() {
            viewText.style.visibility = 'visible'; // 마우스가 요소 위에 있을 때 텍스트 보이게 함
        });

        articalHover.addEventListener('mouseleave', function() {
            viewText.style.visibility = 'hidden'; // 마우스가 요소를 벗어났을 때 텍스트 숨김
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // 모든 '.artical_hover' 요소를 찾습니다.
    const articleHovers = document.querySelectorAll('.artical_hover');

    // 각 요소에 대해 클릭 이벤트 리스너를 추가합니다.
    articleHovers.forEach(function(article) {
        article.addEventListener('click', function() {
            // 클릭된 요소의 'data-link' 속성 값을 읽어옵니다.
            const link = article.getAttribute('data-link');
            // 해당 링크로 페이지를 이동시킵니다.
            window.location.href = link;
        });
    });
});


/* nav.js */
document.addEventListener('DOMContentLoaded', function() {
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    openMenu.addEventListener('click', function() {
        menuOverlay.style.right = '0';
    });

    closeMenu.addEventListener('click', function() {
        menuOverlay.style.right = '-100%';
    });
});

/* click.js 슬라이드 에니메이션 ui */

// 이미지 요소를 선택합니다.
const image = document.querySelector('.image-container img');

// 이미지에 클릭 이벤트 리스너를 추가합니다.
image.addEventListener('click', function() {
    // 새로운 슬라이드 컨테이너를 만듭니다.
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slide-container');
    document.body.appendChild(slideContainer);

    // 슬라이드 인 애니메이션을 시작합니다.
    setTimeout(() => {
        slideContainer.classList.add('slide-in');
    }, 10); // 약간의 지연을 주어 애니메이션을 트리거합니다.

    // 슬라이드 인 애니메이션 종료 후 페이지 이동
    slideContainer.addEventListener('transitionend', () => {
        // 페이드 아웃 애니메이션 추가
        document.body.classList.add('fade-out');

        // 페이드 아웃 애니메이션 종료 후 페이지 이동
        document.body.addEventListener('animationend', () => {
            // 화면의 너비를 확인하여 이동할 페이지 결정
            if (window.innerWidth <= 430) {
                window.location.href = 'moblie.html';
            } else {
                window.location.href = 'ui1.html';
            }
        });
    });
});

/* 비디오 부분 */
document.addEventListener('DOMContentLoaded', function() {
  // 이미지 요소를 선택합니다.
  const image = document.querySelector('.Image1');

  // 이미지에 클릭 이벤트 리스너를 추가합니다.
  image.addEventListener('click', function() {
      // 새로운 슬라이드 컨테이너를 만듭니다.
      const slideContainer = document.createElement('div');
      slideContainer.classList.add('slide-container');
      document.body.appendChild(slideContainer);

      // 슬라이드 인 애니메이션을 시작합니다.
      setTimeout(() => {
          slideContainer.classList.add('slide-in');
      }, 10); // 약간의 지연을 주어 애니메이션을 트리거합니다.

      // 슬라이드 인 애니메이션 종료 후 페이지 이동
      slideContainer.addEventListener('transitionend', () => {
          // 페이드 아웃 애니메이션 추가
          document.body.classList.add('fade-out');

          // 페이드 아웃 애니메이션 종료 후 페이지 이동
          document.body.addEventListener('animationend', () => {
              // 화면의 너비를 확인하여 이동할 페이지 결정
              if (window.innerWidth <= 430) {
                  window.location.href = 'vd1.html';
              } else {
                  window.location.href = 'vd1.html';
              }
          });
      });
  });
});


/* web 부분 */
document.addEventListener('DOMContentLoaded', function() {
  // 모든 이미지 요소를 선택합니다.
  const images = document.querySelectorAll('.artical_hover img');

  // 각 이미지에 클릭 이벤트 리스너를 추가합니다.
  images.forEach(image => {
      image.addEventListener('click', function() {
          // 새로운 슬라이드 컨테이너를 만듭니다.
          const slideContainer = document.createElement('div');
          slideContainer.classList.add('slide-container');
          document.body.appendChild(slideContainer);

          // 슬라이드 인 애니메이션을 시작합니다.
          setTimeout(() => {
              slideContainer.classList.add('slide-in');
          }, 10); // 약간의 지연을 주어 애니메이션을 트리거합니다.

          // 슬라이드 인 애니메이션 종료 후 페이지 이동
          slideContainer.addEventListener('transitionend', () => {
              // 페이드 아웃 애니메이션 추가
              document.body.classList.add('fade-out');

              // 현재 클릭된 이미지의 데이터 링크 속성을 가져와 페이지 이동합니다.
              const link = image.closest('.artical_hover').getAttribute('data-link');
              window.location.href = link;
          });
      });
  });
});




/* click2.js */
/* document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.Image1');

    image.addEventListener('click', function() {
        window.location.href = 'vd1.html';
    });
});
 */
/* include.js */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };


  /* siwper.js */
  var mySwiper;

  function checkSwiper() {
    if (window.innerWidth <= 412) {
      if (mySwiper) { // Swiper가 이미 초기화된 경우
        mySwiper.destroy(true, true); // Swiper 인스턴스를 해제합니다.
        mySwiper = undefined; // Swiper 참조를 제거합니다.
      }
    } else {
      if (!mySwiper) { // Swiper가 초기화되지 않은 경우
        mySwiper = new Swiper('.mySwiper', {
          // Swiper 옵션 설정
          slidesPerView: 2,
          spaceBetween: 30,
          freeMode: true,
        });
      }
    }
  }
  
  // 창 크기가 변경될 때마다 checkSwiper 함수를 실행합니다.
  window.addEventListener('resize', checkSwiper);
  
  // 페이지 로드 시 checkSwiper 함수를 실행하여 초기 상태를 설정합니다.
  document.addEventListener('DOMContentLoaded', checkSwiper);


/* 모바일 내비게이션 자바 */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
  burger.classList.toggle('toggle');
});




if (window.innerWidth > 412) {
  AOS.init();
}




/* start animation */
window.addEventListener('load', () => {
  const waterDrop = document.getElementById('water-drop');
  const ripple = document.getElementById('ripple');
  const content = document.getElementById('content');

  waterDrop.addEventListener('animationend', () => {
      // Hide water drop image
      waterDrop.style.display = 'none';
      
      // Show and start ripple animation when water drop animation ends
      ripple.style.display = 'block';
      document.querySelector('.outer').style.animationPlayState = 'running';
      document.querySelector('.inner').style.animationPlayState = 'running';

      // Show content after ripple animation
      setTimeout(() => {
          content.style.opacity = '1';
      }, 1000); // Adjust the delay to match the end of the ripple animation
  });
});


/* waterflow animation */



/* watertext */
