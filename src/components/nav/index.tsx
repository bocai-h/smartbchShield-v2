import { Tooltip, Menu, Dropdown } from 'antd';
import Logo from '../../static/suterShield.svg';
import mLogo from '../../static/logo.svg';

const DropMenu = (intl, currentNav) => {
  return (
    <Menu>
      {currentNav !== 'stats' ? (
        <Menu.Item key="stats">
          <a target="_blank" rel="noopener noreferrer" href="/stats">
            {intl.get('Stats')}
          </a>
        </Menu.Item>
      ) : (
        ''
      )}
      {currentNav !== 'mining' ? (
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
      )}
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
  const menu = (
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

  return (
    <div className="left">
      <a href={indexURL}>
        <img src={Logo} className="logo pc" />
        <img src={mLogo} className="logo mobbile" />
      </a>
      <ul className="item-ul">
        {currentNav !== 'stats' ? (
          <li>
            <a href="/stats" target="_blank">
              {intl.get('Stats')}
            </a>
          </li>
        ) : (
          ''
        )}
        {currentNav !== 'mining' ? (
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
        )}
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
            overlay={menu}
            arrow
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