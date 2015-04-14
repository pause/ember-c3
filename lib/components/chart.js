'use strict';
/**
C3 Chart component
*/
Ember.C3.ChartComponent = Ember.Component.extend({
    /**
    Element tag name
    */
    tagName: 'div',

    /**
    Element classes
    */
    classNames: ['c3-chart-component'],

    /**
    The data to display
    */
    data: {},

    /**
    Axis specifications
    */
    axis: {},

    /**
    Region specifications
    */
    regions: {},

    /*
    Type of chart
    */
    bar: {},
    pie: {},
    donut: {},
    gauge: {},

    /**
    Grid lines
    */
    grid: {},

    /**
    Legend
    */
    legend: {},

    /**
    Tooltip
    */
    tooltip: {},

    /**
    Subchart
    */
    subchart: {},

    /**
    Zoom
    */
    zoom: {},

    point: {},

    /**
    Size
    */
    size: {},

    /**
    Padding
    */
    padding: {},

    /**
    Color
    */
    color: {},


    /**
    Transition
    */
    transition: {},

    /**

    */
    _chart: undefined,

    /**
    The Chart
    */
    chart: function() {
        var self = this;
        if (Ember.isEqual(self.get('_chart'), undefined)) {
            // Empty, create it.
            var container = self.element;
            if (Ember.isEqual(container, undefined)) {
                return undefined;
            } else {
                var config = self.get('_config');
                var chart = c3.generate(config);
                self.set('_chart', chart);
                return chart;
            }
        } else {
            // Editor is already created and cached.
            return self.get('_chart');
        }
    }.property('_config'),

    /**

    */
    _config: function() {
        var self = this;
        var c = self.getProperties([
            'data',
            'axis',
            'regions',
            'bar',
            'pie',
            'donut',
            'gauge',
            'grid',
            'legend',
            'tooltip',
            'subchart',
            'zoom',
            'point',
            'size',
            'padding',
            'color',
            'transition'
        ]);
        c.bindto = self.element;
        return c;
    }.property(
        'data',
        'axis',
        'regions',
        'bar',
        'pie',
        'donut',
        'gauge',
        'grid',
        'legend',
        'tooltip',
        'subchart',
        'zoom',
        'point',
        'size',
        'padding',
        'color',
        'transition'),

    /**
    Data Observer
    */
    dataDidChange: function() {
      var self = this;
      var chart = self.get('chart');
      chart.load(self.get('data'));
    }.observes('data').on('didInsertElement')

});

Ember.Handlebars.helper('c3-chart', Ember.C3.ChartComponent);