skrollr.init({
          smoothScrolling: false,
          mobileDeceleration: 0.004
        });

        $('.btn-group button').click(function() {
            $(this).parent().children().removeClass('active');
            $(this).addClass('active');
        });

        $(window).stellar();

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
                  value: 14,
                  color:"#428BCA",
                  label: "Brigham Young University"
              },
              {
                  value: 7,
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
                  value: 7,
                  color:"#eee",
                  label: "Others"
              }
          ];

        var pieOptions = {
          tooltipTemplate: "<%=label%>: <%= Math.round((value/34)*100) + '%' %>",
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

        var firsttimer = document.getElementById("firsts").getContext("2d");
        new Chart(firsttimer).Doughnut(firsttimerData, pieOptions);


      