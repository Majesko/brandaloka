$('#skill1').roundSlider({
    radius: 75,
    width: 6,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 85,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal1'
});
function skillVal1(args) {
    return args.value;
}
$('#skill2').roundSlider({
    radius: 75,
    width: 6,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 65,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal2'
});
function skillVal2(args) {
    return args.value;
}
$('#skill3').roundSlider({
    radius: 75,
    width: 6,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 80,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal3'
});
function skillVal3(args) {
    return args.value;
}
$('#skill4').roundSlider({
    radius: 75,
    width: 6,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 65,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal4'
});
function skillVal4(args) {
    return args.value;
}
$('#skill5').roundSlider({
    radius: 75,
    width: 6,
    handleSize: '+16',
    handleShape: 'dot',
    sliderType: 'min-range',
    value: 85,
    readOnly: true,
    startAngle: 0,
    tooltipFormat: 'skillVal5'
});
function skillVal5(args) {
    return args.value;
}
$('.rs-tooltip-text').counterUp();
