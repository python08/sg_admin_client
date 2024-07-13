'use client';

import useSWR from 'swr';
import { Box, Button, FormHelperText } from '@mui/material';
import { fetcher } from '@/util';
import { useRouter } from 'next/navigation';
import { addNewProduct, route } from '@/common/constants/routes';

const Home = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
  );
  const router = useRouter();

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
      }}
    >
      <Box height={'1rem'}>
        {error && (
          <>
            <FormHelperText sx={{ color: 'red' }}>please login</FormHelperText>

            <Box sx={{ mb: 2, width: '50%' }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => router.push('/login')}
              >
                Login
              </Button>
            </Box>
          </>
        )}
        {data && (
          <FormHelperText sx={{ color: 'blue' }}>
            Welcome {data.name}
          </FormHelperText>
        )}
      </Box>
      {data && (
        <>
          <Box sx={{ mt: 2, mb: 2, width: '50%' }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push(addNewProduct())}
            >
              Add Product
            </Button>
          </Box>
          <Box sx={{ mt: 2, mb: 2, width: '50%' }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push(route.adminProducts.l)}
            >
              View or Update Products
            </Button>
          </Box>
          <Box sx={{ mt: 2, mb: 2, width: '50%' }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push(route.preview.l)}
            >
              LIVE WEB-APP
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
