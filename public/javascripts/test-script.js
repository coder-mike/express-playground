

function draw(model) {
  const body = d3.select(document.body);
  const svg = body.selectAll('svg').data([model]);
  svg
    .enter().append('svg')
    .attr('width', d => d.svgWidth)
    .attr('height', d => d.svgHeight)
    .call(initSvg)

  const blocks = svg.selectAll('.block').data(d => d.blocks);

  // Update selection
  blocks
    .transition()
    .duration(2000)
    .call(blockParams);

  // Enter selection
  blocks.enter().append('rect')
    .classed('block', true)
    .call(blockParams);

  blocks.exit()
    .transition()
    .duration(2000)
    .style('opacity', 0)
    .transition()
    .remove();

  function initSvg(svg) {
    // SVG border
    svg.append('rect')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(0,0,0,0.3')
      .attr('stroke-width', '2')
      .attr('width', d => d.svgWidth)
      .attr('height', d => d.svgHeight)
  }

  function blockParams(block) {
    block
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.size/2)
      .attr('height', d => d.size/2)
  }
}

model = {
  svgWidth: 500,
  svgHeight: 500,
  blocks: [
    { x: 10, y: 10, size: 20 },
    { x: 50, y: 50, size: 20 },
    { x: 90, y: 90, size: 20 }
  ]
};

draw(model);