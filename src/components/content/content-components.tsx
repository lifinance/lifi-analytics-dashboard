import { screenSize, title1, white } from '@lifi/style'
import { Layout as AntdLayout } from 'antd'
import { Content as AntdContent, Header as AntdHeader } from 'antd/lib/layout/layout'
import styled from 'styled-components'

export const Layout = styled(AntdLayout)`
  min-height: auto;
`

export const Header = styled(AntdHeader)`
  display: flex;
  align-items: center;
  @media (${screenSize.maxTablet}) {
    padding: 0 20px;
  }
  @media (${screenSize.maxMobile}) {
    padding: 0 15px;
  }
`

export const Main = styled(AntdContent)`
  padding: 20px 50px;
  @media (${screenSize.maxTablet}) {
    padding: 15px 30px;
  }
  @media (${screenSize.maxMobile}) {
    padding: 10px 15px;
  }
`

export const Title = styled.h1`
  margin-left: 15px;
  color: ${white};
  ${title1};
`

export const LogoBox = styled.div`
  width: 40px;
`

export const Logo = styled.img`
  width: 100%;
  height: auto;
`
