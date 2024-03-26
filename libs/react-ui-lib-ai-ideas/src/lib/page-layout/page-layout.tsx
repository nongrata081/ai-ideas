import { Component, ReactNode } from 'react';
import styles from './page-layout.module.scss';
import { RulaiAppBar } from '@ai-ideas/react-ui-lib-ai-ideas';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  children: ReactNode;
}

export class PageLayout extends Component<PageLayoutProps> {
  override render() {
    const { children } = this.props;
    return (
      <>
        <RulaiAppBar />
        {children}
      </>
    );
  }
}

export default PageLayout;
