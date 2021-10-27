
Chart.defaults.global.responsive = false;


document.addEventListener("DOMContentLoaded", ()=>{

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: 'Sinx',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
                fill: false
            },{
                label: 'Cosx',
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgb(0, 200, 0)',
                data: [],
                fill: false
            }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },

            legend: {
                display: false
        },
            plugins: {
                zoom: {
                    // Container for zoom options
                    zoom: {
                        // Boolean to enable zooming
                        enabled: true,

                        // Enable drag-to-zoom behavior
                        drag: true,

                        // Zooming directions
                        mode: 'xy',

                        rangeMin: {
                            // Format of min zoom range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max zoom range depends on scale type
                            x: null,
                            y: null
                        },

                        // Speed of zoom via mouse wheel
                        // (percentage of zoom on a wheel event)
                        speed: 0.1,

                        // Minimal zoom distance required before actually applying zoom
                        threshold: 2,

                        // On category scale, minimal zoom level before actually applying zoom
                        sensitivity: 3,

                        // Function called while the user is zooming
                        onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
                        // Function called once zooming is completed
                        onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`); }
                    }
                }
            }
    },});

    if(typeof(EventSource) !== "undefined") {
        var source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php");

        source.addEventListener("message", event, false);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
    }




    function event(e){
        var data = JSON.parse(e.data);
        var Amp = document.getElementById("sliderInput").value;

        chart.data.labels.push(data.x);
        chart.data.datasets[0].data.push(data.y1 * Amp);
        chart.data.datasets[1].data.push(data.y2 * Amp);
        chart.update();
    }

    //StopChartUpdate
    function changeValue(){
        source.removeEventListener("message", event, false);
    }

    document.getElementById("btn").addEventListener("click", changeValue);

    //ShowSin
    var sinCheck = document.getElementById("sinCheckBox");
    sinCheck.addEventListener("change", function (){
        var checkedVar = sinCheck.checked;
        if (checkedVar === true){
            chart.data.datasets[0].hidden = true;
        }else{
            chart.data.datasets[0].hidden = false;
        }
    });

    //ShowCos
    var cosCheck = document.getElementById("cosCheckBox");
    cosCheck.addEventListener("change", function (){
        var checkedVar = cosCheck.checked;
        if (checkedVar === true){
            chart.data.datasets[1].hidden = true;
        }else{
            chart.data.datasets[1].hidden = false;
        }
    });

    //SameValueShown
    var sliderInput = document.getElementById("sliderInput");
    var numberInput = document.getElementById("numberInput");

    sliderInput.addEventListener("change", function (){
        numberInput.value = sliderInput.value;
    });

    numberInput.addEventListener("change", function (){
        sliderInput.value = numberInput.value;
    });

})

function hideSlider(){
    var checkedVar = document.getElementById("slider").checked;
    if (checkedVar === true){
        document.getElementById("sliderr").style.display = "block";
    }else{
        document.getElementById("sliderr").style.display = "none";
    }
}

function hideNumber(){
    var checkedVar2 = document.getElementById("number").checked;
    if (checkedVar2 === true){
        document.getElementById("input").style.display = "block";
    }else{
        document.getElementById("input").style.display = "none";
    }
}

$(document).ready(function () {
    document.getElementById("sliderr").style.display = "none";
    document.getElementById("input").style.display = "none";
})
