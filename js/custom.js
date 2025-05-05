


$(document).ready(function(){
  $(".menu-toggle").click(function() {
    $(".site-nav").slideToggle();
    $(".site-header").toggleClass("mobile-toggle");
  });



$(document).ready(function(){
$('.toggle-btn-dasdboard').on('click', function() {
$('.sidebar , .overview').toggleClass('your-class-name');
});
});

$(document).ready(function(){
$('.closed-btnns').on('click', function() {
$('.sidebar').removeClass('your-class-name');
});
});


// text roate
const text = document.getElementById("image-text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span class="char" style="transform: rotate(${
        i * 10.5
      }deg);">${char}</span>`
  )
  .join("");


  


// charts
const ctx = document.getElementById('benchPressChart').getContext('2d');
     
new Chart(ctx, {
type: 'line',
data: {
  labels: ['December 2024', 'January 2025', 'February 2025', 'March 2025'],
  datasets: [{
    label: 'Bench Press (lbs.)',
    data: [80, 180, 230, 290],
    borderColor: '#ef4868',
    backgroundColor: '#ef4868',
    tension: 0.3,
    fill: false,
    pointBackgroundColor: '#ef4868',
    pointBorderColor: '#ef4868',
    pointRadius: 5,
    pointHoverRadius: 7,
  }]
},
options: {
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      color: 'white',
      align: 'start',
      padding: 12, // Left-align the title
      font: {
        size: 16,
        weight: 'bold',
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#ddd',
        stepSize: 50
      },
      grid: {
        color: '#444',
        borderDash: [] // Solid grid lines
      }
    },
    x: {
      ticks: {
        color: '#ddd'
      },
      grid: {
        display: false
      }
    }
  }
}
});



    $('.reels-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '240px',
      autoplay: true,
      autoplaySpeed: 500,
      infinite: true,
      centerMode: true,
        arrows: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerPadding: '120px',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '80px',
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '20px',
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          centerPadding: '10px',
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.lesson-slider').slick({
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerPadding: '280px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '180px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: '120px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '80px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    });


    $('.feature-info-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      arrows:false
    });

    
  AOS.init({
    duration: 1200,
    once: true,    // Animation happens only once when scrolling down
    easing: 'ease-in-out', // Smooth animation
  });
  

  });





$(".trusted-slider").slick({
  slidesToShow: 3,
  infinite: false,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


