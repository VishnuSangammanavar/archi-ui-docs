import React from 'react'
import { Skeleton, Typography } from 'archi-ui';

const data = [
  {
    src: '/tomorrowland.webp',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: '/promises.webp',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: '/promises.webp',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <div className='flex justify-center flex-nowrap'>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <div key={index} style={{ width: '210px' }} className='mr-0.5 my-5'>
          {item ? (
            <img
              style={{ width: '210px', height:'118px' }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant='rectangular' style={{ width: '210px', height:'118px' }} />
          )}
          {item ? (
            <div className='pr-2'>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className='block text-secondary'
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" className='text-secondary'>
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </div>
          ) : (
            <div className='flex flex-col pt-5 gap-2'>
              <Skeleton />
              <Skeleton className='w-1/2' />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const PulsateExample = () => {
  return (
    <div className='overflow-hidden'>
      <Media loading={true} />
      <Media />
    </div>
  )
}

export default PulsateExample