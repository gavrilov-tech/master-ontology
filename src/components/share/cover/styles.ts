const useStyles = (props: any) => ({
  cover: {
    height: '200px',
    backgroundImage: `url(${props.url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

export default useStyles;
