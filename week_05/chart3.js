d3.csv('manner_df.csv').then((data) => {
    const height = 600,
      width = 600,
      innerRadius = 135,
      outerRadius = 235,
      labelRadius = 270;
  
    const arcs = d3.pie().value(d => d.amount)(data);
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
    const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);
  
    const svg = d3.select("#chart3")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", (d, i) => d3.schemeCategory10[i])
      .attr("d", arc);
  
    svg.append("g")
      .attr("font-size", 6)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .selectAll("tspan")
      .data(d => {
        return [d.data.category, d.data.amount];
      })
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i) => `${i * .9}em`)
      .attr("font-weight", (d, i) => i ? null : "bold")
      .text(d => d);
  
    svg.append("text")
      .attr("font-size", 30)
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text("Police Killings by Flee Status, 2015")
      .style("font-size", 16);


  });