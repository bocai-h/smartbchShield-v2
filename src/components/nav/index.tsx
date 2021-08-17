import { Tooltip, Menu, Dropdown } from 'antd';
import Logo from '../../static/suterShield.png';
import mLogo from '../../static/logo.png';

const DropMenu = (intl, currentNav) => {
  return (
    <Menu>
      <Menu.ItemGroup title={intl.get('Product')}>
        <Menu.Item key="v1">
          <a target="_blank" rel="suter shield v1" href={SuterShieldV1}>
            {intl.get('suterShieldV1')}
          </a>
        </Menu.Item>

        <Menu.Item key="v2">
          <a target="_blank" rel="suter shield v2" href={SuterShieldV2}>
            {intl.get('suterShieldV2')}
          </a>
        </Menu.Item>

        {/* <Menu.Item key="pool">
          <a target="_blank" rel="create pool" href="/create_pool">
            {intl.get('CreatePool')}
          </a>
        </Menu.Item> */}
      </Menu.ItemGroup>

      {currentNav !== 'stats' ? (
        <Menu.Item key="stats">
          <a target="_blank" rel="noopener noreferrer" href="/stats">
            {intl.get('Stats')}
          </a>
        </Menu.Item>
      ) : (
        ''
      )}

      {/* {currentNav !== 'mining' ? (
        <Menu.Item key="mining">
          <Tooltip title={intl.get('ComingSoon')}>
            <a
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {intl.get('Mining')}
            </a>
          </Tooltip>
        </Menu.Item>
      ) : (
        ''
      )} */}

      {currentNav !== 'tutorial' ? (
        <Menu.Item key="tutorial">
          <a target="_blank" rel="noopener noreferrer" href="/tutorial">
            {intl.get('Tutorial')}
          </a>
        </Menu.Item>
      ) : (
        ''
      )}

      <Menu.Item key="q&a">
        <a target="_blank" rel="noopener noreferrer" href={QA_URL}>
          {intl.get('Q&A')}
        </a>
      </Menu.Item>

      <Menu.ItemGroup title={intl.get('Info')}>
        <Menu.Item key="compliance">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={intl.get('ComplianceUrl')}
          >
            {intl.get('Compliance')}
          </a>
        </Menu.Item>
        <Menu.Item key="privacyTips">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={intl.get('PrivacyTipsUrl')}
          >
            {intl.get('PrivacyTips')}
          </a>
        </Menu.Item>
        <Menu.Item key="about">
          <Tooltip title={intl.get('ComingSoon')}>
            <a
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {intl.get('About')}
            </a>
          </Tooltip>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

const Nav = props => {
  let { intl, indexURL, currentNav } = props;

  const infoMenu = (
    <Menu>
      <Menu.Item key="compliance">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={intl.get('ComplianceUrl')}
        >
          {intl.get('Compliance')}
        </a>
      </Menu.Item>
      <Menu.Item key="privacyTips">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={intl.get('PrivacyTipsUrl')}
        >
          {intl.get('PrivacyTips')}
        </a>
      </Menu.Item>
      <Menu.Item key="about">
        <Tooltip title={intl.get('ComingSoon')}>
          <a
            rel="noopener noreferrer"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {intl.get('About')}
          </a>
        </Tooltip>
      </Menu.Item>
    </Menu>
  );

  const productMenu = (
    <Menu>
      <Menu.Item key="v1">
        <a target="_blank" rel="suter shield v1" href={SuterShieldV1}>
          {intl.get('suterShieldV1')}
        </a>
      </Menu.Item>

      <Menu.Item key="v2">
        <a target="_blank" rel="suter shield v2" href={SuterShieldV2}>
          {intl.get('suterShieldV2')}
        </a>
      </Menu.Item>

      {/* <Menu.Item key="pool">
        <a target="_blank" rel="create pool" href="/create_pool">
          {intl.get('CreatePool')}
        </a>
      </Menu.Item> */}
    </Menu>
  );

  return (
    <div className="left">
      <a href={indexURL} className="left-logo">
        <img src={Logo} className="logo pc" width="220px" />
        <img src={mLogo} className="logo mobbile" width="70px" />
      </a>

      <ul className="item-ul">
        <li>
          <Dropdown
            arrow
            overlay={productMenu}
            placement="bottomCenter"
            onClick={e => e.preventDefault()}
          >
            <a>{intl.get('Product')}</a>
          </Dropdown>
        </li>

        {currentNav !== 'stats' ? (
          <li>
            <a href="/stats" target="_blank">
              {intl.get('Stats')}
            </a>
          </li>
        ) : (
          ''
        )}

        {/* {currentNav !== 'mining' ? (
          <li>
            <Tooltip title={intl.get('ComingSoon')}>
              <a
                rel="noopener noreferrer"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {intl.get('Mining')}
              </a>
            </Tooltip>
          </li>
        ) : (
          ''
        )} */}

        {currentNav !== 'tutorial' ? (
          <li>
            <a href="/tutorial" rel="noopener noreferrer" target="_blank">
              {intl.get('Tutorial')}
            </a>
          </li>
        ) : (
          ''
        )}

        <li>
          <a href={QA_URL} rel="noopener noreferrer" target="_blank">
            {intl.get('Q&A')}
          </a>
        </li>

        <li>
          <Dropdown
            arrow
            overlay={infoMenu}
            placement="bottomCenter"
            onClick={e => e.preventDefault()}
          >
            <a>{intl.get('Info')}</a>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export { Nav, DropMenu };
