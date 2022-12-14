/* Bar chart for Library Visits */

d3.csv("library_visits_jan22.csv").then(data => {

    for (let d of data) {
        d.num = +d.num; //force num to be a number
    };

    data.sort((a, b) => d3.ascending(a.branch, b.branch)); // sort alphabetically

    const height = 600, 
          width = 800,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#chart") // select the element in the HTML
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // for resizing element in browser
    
    let x = d3.scaleBand() // set up x axis values
        .domain(data.map(d => d.branch)) // data, returns array
        .range([margin.left, width - margin.right]) // pixels on page
        .padding(0.1);
    
    let y = d3.scaleLinear() // set up y axis values
        .domain([0, d3.max(data, d => d.num)]).nice() // nice rounds the top num
        .range([height - margin.bottom, margin.top]); //svgs are built from top down, so this is reversed
    
    svg.append("g") //append x axis to chart
        .attr("transform", `translate(0,${height - margin.bottom + 5})`) // move location of axis
        .call(d3.axisBottom(x));
    
    svg.append("g") // append y axis to chart
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y));

    let bar = svg.selectAll(".bar") // create bar groups
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect") // add rect to bar group
        .attr("fill", "steelblue")
        .attr("x", d => x(d.branch)) // x position attribute
        .attr("width", x.bandwidth()) // this width is the width attr on the element
        .attr("y", d => y(d.num)) // y position attribute
        .attr("height", d => y(0) - y(d.num)); // this height is the height attr on element
    
    bar.append('text') // add labels to each bar
        .text(d => d.num)
        .attr('x', d => x(d.branch) + (x.bandwidth()/2))
        .attr('y', d => y(d.num) + 15)
        .attr('text-anchor', 'middle')
        .style('fill', 'white');
    
    bar.append('text')  // add title to bar chart and center it
        .text(d => d.num)
        .attr('x', (width / 1.9))  
        .attr('y', 0 + (margin.top / 1))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
        .text("Library Visits, January 22")
        .style("font-size", "20px");
    
    bar.append("text") // y-axis title (but no need for x axis, 
                       //as the branches are self-explanatory)
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", "4em") // move to middle of the graph
        .attr("x", "-16em")
        .attr("dy", "-5em")
        .attr("transform", "rotate(-90)")
        .text("Number of Visits")
        .style("font-size", "14px");

});