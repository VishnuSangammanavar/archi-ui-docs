import React from 'react'
import { Avatar, Card, CardContent, CardHeader, IconButton, Skeleton, Typography } from 'archi-ui';
import { MoreVertical } from 'lucide-react';

function Media(props) {
  const { loading = false } = props;

  return (
    <div className='flex items-center justify-center flex-nowrap'>
      <Card style={{ width: '345px' }} className='m-2'>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circular" style={{ width: "40px", height: "40px" }} />
            ) : (
              <Avatar
                alt="Ted talk"
                src="/ted-talks.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <IconButton>
                <MoreVertical />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                style={{ width: "80%", height: "10px" }}
                className='mb-2'
              />
            ) : (
              'Ted'
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" style={{ width: "40%", height: "10px" }} />
            ) : (
              '5 hours ago'
            )
          }
        />
        {loading ? (
          <Skeleton style={{ height: '190px' }} animation="wave" variant="rectangular" />
        ) : (
          <img
            height="140px"
            src="/nicola-sturgeon.jpg"
            alt="Nicola Sturgeon on a TED talk stage"
          />
        )}
        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" style={{ height: '10px', marginBottom: '6px' }} />
              <Skeleton animation="wave" style={{ width: "80%", height: "10px" }} />
            </React.Fragment>
          ) : (
            <Typography>
              Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

const WaveExample = () => {
  return (
    <div>
      <Media loading={true} />
      <Media />
    </div>
  )
}

export default WaveExample