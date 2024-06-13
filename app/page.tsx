// no error
'use client';
import { createTheme, MantineProvider } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { useForm } from '@mantine/form';
import '@mantine/core/styles.css';
import Link from 'next/link';

const theme = createTheme({
  /** Put your mantine theme override here */
});


export default function Home() {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <MantineProvider theme={theme}>
      {/*<Component {...pageProps} />*/}
    </MantineProvider>
  )
}
