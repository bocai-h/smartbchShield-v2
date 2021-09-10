import React from 'react';
import { Spin, Popover, Row, Col, notification } from 'antd';
import axios from 'axios';
import './index.less';
import { InfoCircleOutlined } from '@ant-design/icons';

// 按需引入所需模块
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { Sentry } from 'umi';

// 注册
echarts.use([
  BarChart,
  LineChart,
  GridComponent,
  CanvasRenderer,
  TooltipComponent,
]);

const openNotificationWithIcon = (
  title: string,
  desc: any,
  type: string,
  duration: number = 0,
  onClickFunc = () => {},
) => {
  notification[type]({
    className: type,
    message: title,
    description: desc,
    duration: duration,
    onClick: onClickFunc,
  });
};

class Dashboard extends React.Component {
  state = {
    currentETHDeposited: 0,
    currentStableCoinsDeposited: 0,
    totalFeesUSD: 0,
    totalETHDeposited: 0,
    totalDeposits: 0,
    TotalStableCoinsDeposited: 0,
    totalValueLocked: 0,

    total_value_locked_24hours_ratio: 0,
    total_value_locked_7days_ratio: 0,
    total_deposits_24hours_ratio: 0,
    total_deposits_7days_ratio: 0,
    total_platform_deposits_24hours_ratio: 0,
    total_platform_deposits_7days_ratio: 0,
    total_platform_locked_24hours_ratio: 0,
    total_platform_locked_7days_ratio: 0,
    total_stable_coin_deposits_24hours_ratio: 0,
    total_stable_coin_deposits_7days_ratio: 0,
    total_fees_24hours_ratio: 0,
    total_fees_7days_ratio: 0,
    total_stable_coin_locked_24hours_ratio: 0,
    total_stable_coin_locked_7days_ratio: 0,
    total_value_deposits_24hours_ratio: 0,
    total_value_deposits_7days_ratio: 0,
    total_users_24hours_ratio: 0,
    total_users_7days_ratio: 0,

    TotalUSDDepositedAmount: 0,
    TotalUSDDepositedDate: '--',
    TotalUsersAmount: 0,
    TotalUsersDate: '--',

    date: [],
    users: [],
    volumes: [],

    TotalUSDDepositedLoading: true,
    TotalUsersLoading: true,

    loading: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.requestCharts();
    this.requestShieldStats();
  }

  async requestShieldStats() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/shield_stats.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        const {
          total_value_locked,
          total_deposits,
          total_platform_deposits,
          total_stable_coin_locked,
          total_stable_coin_deposits,
          total_platform_locked,
          total_fees,

          total_value_locked_24hours_ratio,
          total_value_locked_7days_ratio,
          total_deposits_24hours_ratio,
          total_deposits_7days_ratio,
          total_platform_deposits_24hours_ratio,
          total_platform_deposits_7days_ratio,
          total_platform_locked_24hours_ratio,
          total_platform_locked_7days_ratio,
          total_stable_coin_deposits_24hours_ratio,
          total_stable_coin_deposits_7days_ratio,
          total_fees_24hours_ratio,
          total_fees_7days_ratio,
          total_stable_coin_locked_24hours_ratio,
          total_stable_coin_locked_7days_ratio,
          total_value_deposits_24hours_ratio,
          total_value_deposits_7days_ratio,
          total_users_24hours_ratio,
          total_users_7days_ratio,
        } = response.data.data;

        this.setState({
          totalValueLocked: total_value_locked,
          totalDeposits: total_deposits,
          totalETHDeposited: total_platform_deposits,
          currentETHDeposited: total_platform_locked,
          currentStableCoinsDeposited: total_stable_coin_locked,
          TotalStableCoinsDeposited: total_stable_coin_deposits,
          totalFeesUSD: total_fees,

          total_value_locked_24hours_ratio,
          total_value_locked_7days_ratio,
          total_deposits_24hours_ratio,
          total_deposits_7days_ratio,
          total_platform_deposits_24hours_ratio,
          total_platform_deposits_7days_ratio,
          total_platform_locked_24hours_ratio,
          total_platform_locked_7days_ratio,
          total_stable_coin_deposits_24hours_ratio,
          total_stable_coin_deposits_7days_ratio,
          total_fees_24hours_ratio,
          total_fees_7days_ratio,
          total_stable_coin_locked_24hours_ratio,
          total_stable_coin_locked_7days_ratio,
          total_value_deposits_24hours_ratio,
          total_value_deposits_7days_ratio,
          total_users_24hours_ratio,
          total_users_7days_ratio,
        });
      } else {
        openNotificationWithIcon(
          'shield_stats Api Error',
          'Fetch shield_stats error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch shield_stats error',
        'warning',
        4.5,
      );
      Sentry.captureException(error);
    }

    this.setState({
      loading: false,
    });
  }

  async requestCharts() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/charts.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        const charts = response.data.data;

        const date = charts.map(res => res.date);

        const users = charts.map(res => res.total_users);

        const volumes = charts.map(res => res.total_transaction_volumes);

        this.setState({
          date,
          users,
          volumes,
        });

        this.volumesChart();
        this.usersChart();
      } else {
        openNotificationWithIcon(
          'charts Api Error',
          'Fetch charts error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch charts error',
        'warning',
        4.5,
      );
      Sentry.captureException(error);
    }
  }

  volumesChart() {
    let { date, volumes } = this.state;

    let min = volumes.reduce((min, num) => (min > num ? num : min));

    let option = {
      xAxis: {
        axisLabel: {
          formatter: value => {
            return `${value.slice(8)}`;
          },
        },

        axisLine: {
          show: false,
        },

        axisTick: {
          show: false,
        },

        type: 'category',

        boundaryGap: false,

        data: date,
      },

      yAxis: {
        min,
        show: false,
        type: 'value',
      },

      grid: [
        {
          top: 0,
          left: 7,
          right: 7,
          bottom: 20,
        },
      ],

      tooltip: {
        trigger: 'axis',
        showContent: false,

        axisPointer: {
          type: 'line',
          lineStyle: {
            type: 'solid',
            width: 1,
            color: 'rgba(255,255,255,.1)',
          },
        },
      },

      series: [
        {
          smooth: true,
          data: volumes,
          type: 'line',
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 8,
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: '#b9aaff',
              borderColor: '#fff',
              lineStyle: {
                width: 2,
                color: '#b9aaff',
              },
            },
          },

          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(185, 170, 255,0.25)',
                },

                {
                  offset: 0.3,
                  color: 'rgba(185, 170, 255,0.15)',
                },

                {
                  offset: 1,
                  color: 'rgba(185, 170, 255,0)',
                },
              ]),
            },
          },
        },
      ],

      backgroundColor: '#1D1C1E',
    };

    this.setState({ TotalUSDDepositedLoading: false });

    let myChart = echarts.init(document.getElementById('volumes'));

    myChart.setOption(option);

    let lastVolume = volumes[volumes.length - 1];

    let lastDate = date[date.length - 1];

    this.setState({
      TotalUSDDepositedAmount: lastVolume,
      TotalUSDDepositedDate: lastDate,
    });

    myChart.getZr().on('mousemove', params => {
      let pointInPixel = [params.offsetX, params.offsetY];

      let pointInGrid = myChart.convertFromPixel(
        { seriesIndex: 0 },
        pointInPixel,
      );

      let TotalUSDDepositedAmount = volumes[pointInGrid[0]] || lastVolume;

      let TotalUSDDepositedDate = date[pointInGrid[0]] || lastDate;

      this.setState({
        TotalUSDDepositedAmount,
        TotalUSDDepositedDate,
      });
    });

    myChart.on('globalout', () => {
      this.setState({
        TotalUSDDepositedAmount: lastVolume,
        TotalUSDDepositedDate: lastDate,
      });
    });
  }

  usersChart() {
    let { date, users } = this.state;

    let option = {
      xAxis: {
        axisLabel: {
          formatter: value => {
            return `${value.slice(8)}`;
          },
        },

        axisLine: {
          show: false,
        },

        axisTick: {
          show: false,
        },

        type: 'category',

        boundaryGap: false,

        data: date,
      },

      yAxis: {
        show: false,
        type: 'value',
        min: users[0] - 10,
      },

      grid: [
        {
          top: 0,
          left: 17,
          right: 17,
          bottom: 20,
        },
      ],

      tooltip: {
        trigger: 'axis',
        showContent: false,

        axisPointer: {
          type: 'shadow',
        },
      },

      series: [
        {
          data: users,
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: [2, 2, 0, 0],

              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#B7B5AF',
                },
                {
                  offset: 1,
                  color: 'rgba(29, 28, 30, 0)',
                },
              ]),
            },
          },
        },
      ],

      backgroundColor: '#1D1C1E',
    };

    this.setState({ TotalUsersLoading: false });

    let myChart = echarts.init(document.getElementById('users'));

    myChart.setOption(option);

    let lastUser = users[users.length - 1];

    let lastDate = date[date.length - 1];

    this.setState({
      TotalUsersAmount: lastUser,
      TotalUsersDate: lastDate,
    });

    myChart.getZr().on('mousemove', params => {
      let pointInPixel = [params.offsetX, params.offsetY];

      let pointInGrid = myChart.convertFromPixel(
        { seriesIndex: 0 },
        pointInPixel,
      );

      let TotalUsersAmount = users[pointInGrid[0]] || lastUser;

      let TotalUsersDate = date[pointInGrid[0]] || lastDate;

      this.setState({
        TotalUsersAmount,
        TotalUsersDate,
      });
    });

    myChart.on('globalout', () => {
      this.setState({
        TotalUsersAmount: lastUser,
        TotalUsersDate: lastDate,
      });
    });
  }

  feePoolTipsContent() {
    let { intl } = this.props;

    return (
      <div>
        <a href={XSUTER_URL} target="_blank">
          {intl.get('FeePoolTips')}
        </a>
      </div>
    );
  }

  numberFormat(amount) {
    let { intl } = this.props;
    let formatted = amount.toLocaleString(intl.options.currentLocale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatted;
  }

  ratioFormat(amount) {
    let num = Number(amount || 0);

    if (num >= 0) return `+${(num * 100).toFixed(2)}%`;

    return `${(num * 100).toFixed(2)}%`;
  }

  ratioStatus(amount) {
    let num = Number(amount || 0);

    if (num >= 0) return 'up';

    return 'down';
  }

  render() {
    let { intl } = this.props;

    let {
      currentETHDeposited,
      currentStableCoinsDeposited,
      totalFeesUSD,
      totalETHDeposited,
      totalValueLocked,
      totalDeposits,
      TotalStableCoinsDeposited,

      total_value_locked_7days_ratio,
      total_value_locked_24hours_ratio,
      total_deposits_24hours_ratio,
      total_deposits_7days_ratio,
      total_platform_deposits_24hours_ratio,
      total_platform_deposits_7days_ratio,
      total_platform_locked_24hours_ratio,
      total_platform_locked_7days_ratio,
      total_stable_coin_deposits_24hours_ratio,
      total_stable_coin_deposits_7days_ratio,
      total_fees_24hours_ratio,
      total_fees_7days_ratio,
      total_stable_coin_locked_24hours_ratio,
      total_stable_coin_locked_7days_ratio,
      total_value_deposits_24hours_ratio,
      total_value_deposits_7days_ratio,
      total_users_24hours_ratio,
      total_users_7days_ratio,

      TotalUSDDepositedAmount,
      TotalUSDDepositedDate,
      TotalUsersAmount,
      TotalUsersDate,

      loading,
      TotalUSDDepositedLoading,
      TotalUsersLoading,
    } = this.state;

    return (
      <>
        <Row justify="space-between" className="dashboardContainer">
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <div className="chart">
              <div className="chart_head">
                <span className="chart_name">
                  {intl.get('TotalUSDDeposited')}
                </span>

                <div className="ratio">
                  <div className="h">
                    <span
                      className={this.ratioStatus(
                        total_value_deposits_24hours_ratio,
                      )}
                    >
                      {this.ratioFormat(total_value_deposits_24hours_ratio)}
                    </span>

                    <span className="h_label">(24{intl.get('h')})</span>
                  </div>

                  <div className="days">
                    <span
                      className={this.ratioStatus(
                        total_value_deposits_7days_ratio,
                      )}
                    >
                      {this.ratioFormat(total_value_deposits_7days_ratio)}
                    </span>

                    <span className="days_label">(7{intl.get('days')})</span>
                  </div>
                </div>
              </div>

              {TotalUSDDepositedLoading ? (
                <div className="chartSpin">
                  <Spin size="large" />
                </div>
              ) : (
                <>
                  <span className="chart_amount">
                    $
                    {this.numberFormat(
                      Number(Number(TotalUSDDepositedAmount).toFixed(2)),
                    )}
                  </span>

                  <span className="chart_date">{TotalUSDDepositedDate}</span>

                  <div id="volumes" />
                </>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <div className="chart">
              <div className="chart_head">
                <span className="chart_name">{intl.get('TotalUsers')}</span>

                <div className="ratio">
                  <div className="h">
                    <span
                      className={this.ratioStatus(total_users_24hours_ratio)}
                    >
                      {this.ratioFormat(total_users_24hours_ratio)}
                    </span>

                    <span className="h_label">(24{intl.get('h')})</span>
                  </div>

                  <div className="days">
                    <span className={this.ratioStatus(total_users_7days_ratio)}>
                      {this.ratioFormat(total_users_7days_ratio)}
                    </span>

                    <span className="days_label">(7{intl.get('days')})</span>
                  </div>
                </div>
              </div>

              {TotalUsersLoading ? (
                <div className="chartSpin">
                  <Spin size="large" />
                </div>
              ) : (
                <>
                  <span className="chart_amount">
                    {this.numberFormat(Number(TotalUsersAmount))}
                  </span>

                  <span className="chart_date">{TotalUsersDate}</span>

                  <div id="users" />
                </>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('TotalValueLockedInUSD')}</h2>

              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>${this.numberFormat(Number(totalValueLocked))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(
                      total_value_locked_24hours_ratio,
                    )}
                  >
                    {this.ratioFormat(total_value_locked_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(total_value_locked_7days_ratio)}
                  >
                    {this.ratioFormat(total_value_locked_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('TotalDeposits')}</h2>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>{this.numberFormat(Number(totalDeposits))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(total_deposits_24hours_ratio)}
                  >
                    {this.ratioFormat(total_deposits_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(total_deposits_7days_ratio)}
                  >
                    {this.ratioFormat(total_deposits_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('TotalETHDeposited')}</h2>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>{this.numberFormat(Number(totalETHDeposited))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(
                      total_platform_deposits_24hours_ratio,
                    )}
                  >
                    {this.ratioFormat(total_platform_deposits_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(
                      total_platform_deposits_7days_ratio,
                    )}
                  >
                    {this.ratioFormat(total_platform_deposits_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('CurrentETHDeposited')}</h2>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>{this.numberFormat(Number(currentETHDeposited))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(
                      total_platform_locked_24hours_ratio,
                    )}
                  >
                    {this.ratioFormat(total_platform_locked_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(
                      total_platform_locked_7days_ratio,
                    )}
                  >
                    {this.ratioFormat(total_platform_locked_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('CurrentStableCoinsDeposited')}</h2>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>
                  ${this.numberFormat(Number(currentStableCoinsDeposited))}
                </h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(
                      total_stable_coin_locked_24hours_ratio,
                    )}
                  >
                    {this.ratioFormat(total_stable_coin_locked_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(
                      total_stable_coin_locked_7days_ratio,
                    )}
                  >
                    {this.ratioFormat(total_stable_coin_locked_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <h2>{intl.get('TotalStableCoinsDeposited')}</h2>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>${this.numberFormat(Number(TotalStableCoinsDeposited))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span
                    className={this.ratioStatus(
                      total_stable_coin_deposits_24hours_ratio,
                    )}
                  >
                    {this.ratioFormat(total_stable_coin_deposits_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span
                    className={this.ratioStatus(
                      total_stable_coin_deposits_7days_ratio,
                    )}
                  >
                    {this.ratioFormat(total_stable_coin_deposits_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="card">
              <div className="titleContainer">
                <h2>{intl.get('TotalFeesUSD')}</h2>
                <Popover
                  content={this.feePoolTipsContent()}
                  trigger={['hover', 'click']}
                >
                  <InfoCircleOutlined />
                </Popover>
              </div>
              {loading ? (
                <div className="spin">
                  <Spin size="large" />
                </div>
              ) : (
                <h1>${this.numberFormat(Number(totalFeesUSD))}</h1>
              )}

              <div className="ratio">
                <div className="h">
                  <span className={this.ratioStatus(total_fees_24hours_ratio)}>
                    {this.ratioFormat(total_fees_24hours_ratio)}
                  </span>

                  <span className="h_label">(24{intl.get('h')})</span>
                </div>

                <div className="days">
                  <span className={this.ratioStatus(total_fees_7days_ratio)}>
                    {this.ratioFormat(total_fees_7days_ratio)}
                  </span>

                  <span className="days_label">(7{intl.get('days')})</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Dashboard;
