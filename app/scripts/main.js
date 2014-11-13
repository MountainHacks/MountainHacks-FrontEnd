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
        value: 20,
        color:"#428BCA",
        label: "Brigham Young University--Provo"
    },
    {
        value: 8,
        color: "#555",
        label: "University of Illinois--Urbana-Champaign"
    },
    {
        value: 5,
        color:"#53AFFF",
        label: "Boise State University"
    },
    {
        value: 2,
        color:"#909090",
        highlight: "#FF5A5E",
        label: "University of Texas--Austin"
    },
    {
        value: 10,
        color:"#eee",
        label: "Others"
    }
];

var pieOptions = {
  tooltipTemplate: "<%=label%>: <%= Math.round((value/45)*100) + '%' %>",
  onAnimationComplete: function()
  {
      this.showTooltip(this.segments, true);
  },
  tooltipEvents: [],
  segmentStrokeColor : "#FFF",
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