import { useState, useRef, useEffect } from 'react';

export const useHeader = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        const handleClick = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousedown', handleClick);

        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    }, [isVisible]);

    return { isVisible, elementRef, handleClick };
};
