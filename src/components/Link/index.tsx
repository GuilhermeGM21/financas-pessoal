import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: ReactNode
}

export const Link = ({children, href, ...props}) => {
    return (
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
    )
}