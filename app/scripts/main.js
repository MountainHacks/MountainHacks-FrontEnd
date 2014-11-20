//Init Skrollr
skrollr.init({
  smoothScrolling: false,
  mobileDeceleration: 0.004
});

//Button Group Fix
$('.btn-group button').click(function() {
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
});

//Init Stellar
$(window).stellar();

//ChartJS
var schoolData = [
  {
    value: 32,
    color:"#002255",
    label: "Brigham Young University--Provo",
      
  },
  {
    value: 9,
    color: "#F47F24",
    label: "University of Illinois--Urbana-Champaign"
  },
  {
    value: 2,
    color: "#3484BF",
    label: "University of California--Los Angeles"
  },
  {
    value: 2,
    color: "#002855",
    label: "University of California--Davis"
  },
  {
    value: 4,
    color: "#C15308",
    label: "University of Texas--Austin"
  },
  {
    value: 5,
    color: "#005BAA",
    label: "Boise State University"
  },
  {
    value: 13,
    color:"#efefef",
    label: "Others"
  },
  {
    value: 2,
    color: "#990000",
    label: "Carnegie Mellon University"
  }
];

var pieOptions = {
  tooltipTemplate: "<%=label%>: <%= Math.round((value/69)*100) + '%' %>",
  onAnimationComplete: function()
  {
      this.showTooltip(this.segments, true);
  },
  tooltipEvents: [],
  percentageInnerCutout : 50,
  showTooltips: true

};

var schools = document.getElementById("schools").getContext("2d");
new Chart(schools).Doughnut(schoolData, pieOptions);   

//Pre-load Images
if (document.images) {
    img1 = new Image();
    img1.src = "http://goo.gl/a29VKh";
    img2 = new Image();
    img2.src = "http://goo.gl/PmoxhV";
    img3 = new Image();
    img3.src = "http://goo.gl/Hw4YyL";
}   

//Submission Transition
var subAnimation = function () {
  $('#reg-title').css({'display':'none'});
  $('#form').addClass('animated zoomOutUp');
  $('#form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function(){
      $('#form').css(
        {
          'display':'none',
          'position':'absolute',
          'z-index':'-100'
        });
      $('#mhack-video').css(
        {
          'display':'block',
          'position':'relative',
          'z-index':'100'
        });
      $('#mhack-video').addClass('animated zoomInDown');
      skrollr.init().refresh();
    });
};

//Choose file button pretty
document.getElementById("resumebecausegregissofrigginlameswaggy").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

$('#resumebecausegregissofrigginlameswaggy').change(function() {
  var fileurl = $('#uploadFile').val();
  fileurl = fileurl.replace(/^C:\\fakepath\\/, "");
  $('#uploadFile').val(fileurl);
});
