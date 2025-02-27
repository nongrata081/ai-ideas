import {
  DocumentHeadTags,
  documentGetInitialProps,
  DocumentHeadTagsProps,
} from '@mui/material-nextjs/v14-pagesRouter';
import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default function MyDocument(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
