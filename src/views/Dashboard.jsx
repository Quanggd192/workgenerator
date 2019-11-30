/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';

import { Card } from 'components/Card/Card';
import { StatsCard } from 'components/StatsCard/StatsCard';
import { responsiveSales } from 'variables/Variables';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        series: [[32, 10, 60, 80, 20, 13, 15, 14, 66, 78, 66, 0]],
        rounder: 100,
      },
      pie: {
        data: {
          labels: ['40%', '20%', '15%', '35%'],
          series: [40, 20, 15, 35],
        },
        legend: {
          names: ['Codecamp', 'Codegym', 'Sleepycode', 'Glorycode'],
          types: ['info', 'danger', 'warning', 'success'],
        },
      },
    };
  }

  createLegend(json) {
    const legend = [];
    for (let i = 0; i < json.names.length; i++) {
      const type = `mx-1 fa fa-circle text-${json.types[i]}`;
      legend.push(<i className={type} key={i} />);

      legend.push(json.names[i]);
    }
    return legend;
  }

  render() {
    const { chartData, pie } = this.state;
    const chartLength =
      Math.round(Math.max(...chartData.series[0]) / chartData.rounder) * chartData.rounder;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Employers"
                statsValue="105"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Job Seekers"
                statsValue="1,205"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="New Requests"
                statsValue="+23"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="New Jobs"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Jobs posted"
                category="In 2019"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={chartData}
                      type="Line"
                      options={{
                        low: 0,
                        high: chartLength,
                        showArea: false,
                        height: '245px',
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          'screen and (max-width: 640px)',
                          {
                            axisX: {
                              labelInterpolationFnc(value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Training programs"
                category="In 2019"
                stats="Updated now"
                content={
                  <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
                    <ChartistGraph data={pie.data} type="Pie" />
                  </div>
                }
                legend={<div className="legend">{this.createLegend(pie.legend)}</div>}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
