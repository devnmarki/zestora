import { useMediaQuery } from 'react-responsive';

const useScreenSize = () => {
    const base = true;
    const sm = useMediaQuery({ query: '(min-width: 40rem)' });
    const md = useMediaQuery({ query: '(min-width: 48rem)' });
    const lg = useMediaQuery({ query: '(min-width: 64rem)' });
    const xl = useMediaQuery({ query: '(min-width: 80rem)' });
    const xxl = useMediaQuery({ query: '(min-width: 96rem)' });

    return { base, sm, md, lg, xl, xxl };
}

export default useScreenSize;