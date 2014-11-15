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
        value: 24,
        color:"#428BCA",
        label: "Brigham Young University"
    },
    {
        value: 9,
        color: "#555",
        label: "The University of Illinois, Urbana-Champaign"
    },
    {
        value: 5,
        color:"#53AFFF",
        label: "Boise State University"
    },
    {
        value: 3,
        color:"#909090",
        highlight: "#FF5A5E",
        label: "The University of Texas, Austin"
    },
    {
        value: 15,
        color:"#eee",
        label: "Others"
    }
];

var pieOptions = {
  tooltipTemplate: "<%=label%>: <%= Math.round((value/55)*100) + '%' %>",
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