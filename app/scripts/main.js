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

//Chartjs School Donut
var firsttimerData = [
      {
          value: 300,
          color:"#F7464A",
          label: "Red"
      },
      {
          value: 50,
          color: "#46BFBD",
          label: "Green"
      },
      {
          value: 100,
          color: "#FDB45C",
          label: "Yellow"
      }
  ];

  var schoolData = [
      {
          value: 16,
          color:"#428BCA",
          label: "Brigham Young University"
      },
      {
          value: 8,
          color: "#555",
          label: "The University of Illinois, Urbana-Champaign"
      },
      {
          value: 4,
          color:"#53AFFF",
          label: "Boise State University"
      },
      {
          value: 2,
          color:"#909090",
          highlight: "#FF5A5E",
          label: "The University of Texas, Austin"
      },
      {
          value: 8,
          color:"#eee",
          label: "Others"
      }
  ];

var pieOptions = {
  tooltipTemplate: "<%=label%>: <%= Math.round((value/38)*100) + '%' %>",
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