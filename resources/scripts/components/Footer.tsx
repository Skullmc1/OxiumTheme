import React from 'react';
import tw, { styled } from 'twin.macro';

const FooterContainer = styled.div`
    ${tw`w-full text-center py-4 text-xs font-bold uppercase tracking-wider text-yellow-500`};
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                oxium &copy; {new Date().getFullYear()}
            </p>
        </FooterContainer>
    );
};

export default Footer;
