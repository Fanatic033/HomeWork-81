import React, {useState} from 'react';
import {LoadingButton} from '@mui/lab';
import {useAppDispatch, useAppSelector} from '../../../app/hooks.ts';
import {Box, CircularProgress, IconButton, TextField,} from '@mui/material';
import {selectIsLoading, selectShortUrl} from '../urlShrinkSlice.ts';
import {shortenUrl} from '../urlShrinkThunk.ts';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const UrlForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const shortUrl = useAppSelector(selectShortUrl);
  const isLoading = useAppSelector(selectIsLoading);

  const [originalUrl, setOriginalUrlState] = useState<string>('');

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(shortenUrl(originalUrl));
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalUrlState(event.target.value);
  };

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Ошибка:', err);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
      component="form"
      onSubmit={submitFormHandler}
    >
      <TextField
        required
        label="Original URL"
        id="originalUrl"
        name="originalUrl"
        value={originalUrl}
        onChange={inputChangeHandler}
        fullWidth
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        loadingPosition="start"
        startIcon={<LinkIcon/>}
        variant="contained"
        fullWidth
      >
        Shorten URL
      </LoadingButton>
      {isLoading && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <CircularProgress/>
        </Box>
      )}
      {shortUrl && (
        <Box marginTop={2} display="flex" alignItems="center">
          <TextField
            label="Shortened URL"
            id="shortUrl"
            name="shortUrl"
            value={`http://localhost:8000/link/${shortUrl}`}
            fullWidth
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <IconButton onClick={() => copyTextToClipboard(`http://localhost:8000/link/${shortUrl}`)}>
            <ContentCopyIcon/>
          </IconButton>
        </Box>
      )}

    </Box>
  );
};

export default UrlForm;
